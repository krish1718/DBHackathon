import { Bar, Line } from "react-chartjs-2";
import patientBehaviourData from "./patientBehaviourData";
import Chart from 'chart.js/auto';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
// import "./style/dialog.css"

function LogQuestionsDialog(
    {
        isDialogOpen,
        setIsDialogOpen,
        currentDate,
        handleAddLog,
    }
) {
    const questions = [
        {
            "question": "Pain or Discomfort observed",
            "option1": "None",
            "option2": "Mild",
            "option3": "Moderate",
            "option4": "Severe",
        },
        {
            "question": "Cognitive Function",
            "option1": "No change",
            "option2": "Mild Decline",
            "option3": "Moderate Decline",
            "option4": "Severe Decline",
        },
        {
            "question": "Signs of Anxiety, Depression or agitation",
            "option1": "None",
            "option2": "Mild",
            "option3": "Moderate",
            "option4": "Severe",
        },
        {
            "question": "Duration of Sleep",
            "option1": "< 5 hours",
            "option2": "5-7 hours",
            "option3": "7-9 hours",
            "option4": "> 9 hours",
        },
        {
            "question": "Engagement in social activities",
            "option1": "very active",
            "option2": "active",
            "option3": "somewhat active",
            "option4": "not active",
        },
    ]

    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const [selectedRadio, setSelectedRadio] = useState("");

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [log, setLog] = useState({"date": currentDate});

    return(
        <Dialog
            open={isDialogOpen}
            PaperProps={{
                sx: {
                    width: "100%",
                    height: "100%",
                    borderRadius: "16px"
                }
            }}
        >
            <DialogContent>
                <DialogContentText> <h2 id="question-text">{questions[currentQuestionIndex]["question"]}</h2> </DialogContentText>
                {/* <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={(e)=>{
                        setSelectedRadio(e.target.value);
                    }}
                > */}
                    {Object.keys(questions[currentQuestionIndex]).map((itemKey, itemValue)=>{
                        if(itemKey!="question"){
                            return(
                                // <FormControlLabel
                                //     value={questions[currentQuestionIndex][itemKey]}
                                //     control={<Radio/>}
                                //     label={questions[currentQuestionIndex][itemKey]}
                                // />
                                <div class="options">
        <label>
          <input type="radio" name="answer" value={questions[currentQuestionIndex][itemKey]} onChange={(e)=>{
              setSelectedRadio(e.target.value);
              console.log(selectedRadio);
                    }}/>
          <span>{questions[currentQuestionIndex][itemKey]}</span>
        </label>
        </div>
                            );
                        }
                    })}
                {/* </RadioGroup> */}
                
            </DialogContent>
            <DialogActions>
                <Button
                    sx={{
                        backgroundColor: "#000040",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "10px",
                    }}
                    onClick={()=>{
                        setIsDialogOpen(false);
                    }}
                >
                    Cancel
                </Button>
                {currentQuestionIndex==questions.length-1?
                    <Button
                        sx={{
                            backgroundColor: "white",
                            color: "#000040",
                            fontWeight: "bold",
                            borderRadius: "10px",
                            border: "#000040 solid 1px"
                        }}
                        onClick={(e)=>{
                            const tempQuestionObj = questions[currentQuestionIndex];
                            tempQuestionObj["selectedOption"]=getOptionNo(selectedRadio, questions[currentQuestionIndex]);
                            answeredQuestions.push(tempQuestionObj);
                            setCurrentQuestionIndex(0);
                            log["questions"] = answeredQuestions;
                            handleAddLog(log);
                        }}
                    >
                        Submit
                    </Button>
                    :
                    <Button
                        sx={{
                            backgroundColor: "white",
                            color: "#000040",
                            fontWeight: "bold",
                            borderRadius: "10px",
                            border: "#000040 solid 1px"
                        }}
                        onClick={(e)=>{
                            const tempQuestionObj = questions[currentQuestionIndex];
                            tempQuestionObj["selectedOption"]=getOptionNo(selectedRadio, questions[currentQuestionIndex]);
                            answeredQuestions.push(tempQuestionObj);
                            setCurrentQuestionIndex(currentQuestionIndex+1);
                        }}
                    >
                        Next
                    </Button>
                    }
            </DialogActions>
        </Dialog>
    );

}

function getOptionNo(optionStr, question){
    var optionNo = 0;
    Object.keys(question).map((itemKey, itemValue)=>{
        if(question[itemKey]==optionStr){
            optionNo = parseInt(itemKey.substring(itemKey.length-1,itemKey.length))-1;
        }
    })
    return optionNo;
}

export default LogQuestionsDialog;