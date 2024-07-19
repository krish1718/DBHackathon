import React, { useContext } from 'react';
import DataContext from '../context/dataContext';
import '../Styles/gauravstyle.css'

const Quiz = () => {
    const { showQuiz, question, quizs, checkAnswer, correctAnswer,
        selectedAnswer, questionIndex, nextQuestion, showTheResult } = useContext(DataContext);

    return (
        <section>
            <div className="container GauravQuizContainer">
                <div className="row vh-100 align-items-center justify-content-center GauravFullHeight">
                    <div className="col-lg-8 GauravQuizCard">
                        <div className="card p-4 GauravCard">
                            <div className="d-flex flex-column justify-content-center align-items-center gap-md-3 h-100 GauravContent">
                                <h4 className='text-center GauravText'>Hi, Can you answer this!!!</h4>
                                <img src={question?.image} alt="" className="img-fluid GauravImage" />
                                <h5 className='mb-2 fs-normal lh-base text-center GauravQuestion'>{question?.question}</h5>
                            </div>
                            <div className="row GauravRow">
                                {question?.options?.map((item, index) => (
                                    <div key={index} className="col-6 p-2 d-flex align-items-stretch GauravOptionContainer">
                                        <button
                                            className={`option GauravQuizOptions py-3 px-2 rounded btn-outline-secondary ${correctAnswer === item && 'bg-success'}`}
                                            onClick={(event) => {
                                                checkAnswer(event, item);
                                                nextQuestion();
                                            }}
                                        >
                                            {item}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;
