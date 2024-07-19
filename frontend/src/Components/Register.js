import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

import registrationImage from '../Assets/Images/dementiacaretaker.jpg'

import '../Styles/register.css'

import {NavLink} from "react-router-dom"


function Register() {
    const navigate = useNavigate()

	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
		age: "",
		address: ""
	})


	const [error, setError] = useState("");

	const handleChange = ({currentTarget: input}) => {
		setData({...data, [input.name]: input.value})
	}

    async function registerUser(event) {
        event.preventDefault()

		try{
			const url = "http://localhost:3000/api/v1/auth/register"
			const {data: res} = await axios.post(url, data)
			navigate("/login")
			console.log(res.message)
		}
		catch(error){
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
    }

	console.log(error)

	return(
		<div className='body'>
            <section className="Form my-3 mx-5">
            <div className="container">
                <div className="row no-gutters">
                    <div className="img-rowregister col-lg-5">
                        <img src={registrationImage} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-7 px-5 pt-5">
                        {/* <h1 className="font-weight-bold py-3">Logo</h1> */}
                        <h2>Care Taker Sign Up</h2>
                        <form onSubmit={registerUser}>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input 
                                        className="form-control my-3 p-2"
                                        type="text"
										placeholder="Name"
										name="name"
										onChange={handleChange}
										value={data.name}
										required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        className="form-control my-3 p-2"
                                        type="text"
										placeholder="Email"
										name="email"
										onChange={handleChange}
										value={data.email}
										required
                                    />
                                </div>
                            </div>
							<div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        className="form-control my-3 p-2"
                                        type="text"
										placeholder="Password"
										name="password"
										onChange={handleChange}
										value={data.password}
										required
                                    />
                                </div>
                            </div>
							<div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        className="form-control my-3 p-2"
                                        type="number"
										placeholder="Age"
										name="age"
										onChange={handleChange}
										value={data.age}
										required
                                    />
                                </div>
                            </div>
							<div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        className="form-control my-3 p-2"
                                        type="text"
										placeholder="Address"
										name="address"
										onChange={handleChange}
										value={data.address}
										required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <button type="submit" value="Register" className="btn1 mt-3 mb-5">Register</button>
                                </div>
                            </div>
                            <p>Already have an account? <NavLink to="/login" className="registernowa">Sign In</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
	)
}

export default Register
