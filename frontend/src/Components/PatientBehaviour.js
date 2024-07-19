import { Bar, Line } from "react-chartjs-2";
import patientBehaviourData from "./patientBehaviourData";
import Chart from 'chart.js/auto';
import { Button } from "@mui/material";
import React, { useState } from "react";
import LogQuestionsDialog from "./LogQuestionsDialog";

function PatientBehaviour() {
    
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = date + "/" + month + "/" + year;

    const [patientBehaviourData, setPatientBehaviourData] = useState([
        {
            "date": "09/07/2024",
            "questions": [
                {
                    "question": "Pain or Discomfort observed",
                    "option1": "None",
                    "option2": "Mild",
                    "option3": "Moderate",
                    "option4": "Severe",
                    "selectedOption": 3,
                },
                {
                    "question": "Cognitive Function",
                    "option1": "No change",
                    "option2": "Mild Decline",
                    "option3": "Moderate Decline",
                    "option4": "Severe Decline",
                    "selectedOption": 2
                },
                {
                    "question": "Signs of Anxiety, Depression or agitation",
                    "option1": "None",
                    "option2": "Mild",
                    "option3": "Moderate",
                    "option4": "Severe",
                    "selectedOption": 1
                },
                {
                    "question": "Duration of Sleep",
                    "option1": "< 5 hours",
                    "option2": "5-7 hours",
                    "option3": "7-9 hours",
                    "option4": "> 9 hours",
                    "selectedOption": 2
                },
                {
                    "question": "Engagement in social activities",
                    "option1": "very active",
                    "option2": "active",
                    "option3": "somewhat active",
                    "option4": "not active",
                    "selectedOption": 2
                },
            ]
        },
        {
            "date": "10/07/2024",
            "questions": [
                {
                    "question": "Pain or Discomfort observed",
                    "option1": "None",
                    "option2": "Mild",
                    "option3": "Moderate",
                    "option4": "Severe",
                    "selectedOption": 2
                },
                {
                    "question": "Cognitive Function",
                    "option1": "No change",
                    "option2": "Mild Decline",
                    "option3": "Moderate Decline",
                    "option4": "Severe Decline",
                    "selectedOption": 0
                },
                {
                    "question": "Signs of Anxiety, Depression or agitation",
                    "option1": "None",
                    "option2": "Mild",
                    "option3": "Moderate",
                    "option4": "Severe",
                    "selectedOption": 1
                },
                {
                    "question": "Duration of Sleep",
                    "option1": "< 5 hours",
                    "option2": "5-7 hours",
                    "option3": "7-9 hours",
                    "option4": "> 9 hours",
                    "selectedOption": 3
                },
                {
                    "question": "Engagement in social activities",
                    "option1": "very active",
                    "option2": "active",
                    "option3": "somewhat active",
                    "option4": "not active",
                    "selectedOption": 4
                },
            ]
        },
        {
            "date": "11/07/2024",
            "questions": [
                {
                    "question": "Pain or Discomfort observed",
                    "option1": "None",
                    "option2": "Mild",
                    "option3": "Moderate",
                    "option4": "Severe",
                    "selectedOption": 0
                },
                {
                    "question": "Cognitive Function",
                    "option1": "No change",
                    "option2": "Mild Decline",
                    "option3": "Moderate Decline",
                    "option4": "Severe Decline",
                    "selectedOption": 3
                },
                {
                    "question": "Signs of Anxiety, Depression or agitation",
                    "option1": "None",
                    "option2": "Mild",
                    "option3": "Moderate",
                    "option4": "Severe",
                    "selectedOption": 2
                },
                {
                    "question": "Duration of Sleep",
                    "option1": "< 5 hours",
                    "option2": "5-7 hours",
                    "option3": "7-9 hours",
                    "option4": "> 9 hours",
                    "selectedOption": 1
                },
                {
                    "question": "Engagement in social activities",
                    "option1": "very active",
                    "option2": "active",
                    "option3": "somewhat active",
                    "option4": "not active",
                    "selectedOption": 3
                },
            ]
        },
        {
            "date": "12/07/2024",
            "questions": [
                {
                    "question": "Pain or Discomfort observed",
                    "option1": "None",
                    "option2": "Mild",
                    "option3": "Moderate",
                    "option4": "Severe",
                    "selectedOption": 1
                },
                {
                    "question": "Cognitive Function",
                    "option1": "No change",
                    "option2": "Mild Decline",
                    "option3": "Moderate Decline",
                    "option4": "Severe Decline",
                    "selectedOption": 0
                },
                {
                    "question": "Signs of Anxiety, Depression or agitation",
                    "option1": "None",
                    "option2": "Mild",
                    "option3": "Moderate",
                    "option4": "Severe",
                    "selectedOption": 2
                },
                {
                    "question": "Duration of Sleep",
                    "option1": "< 5 hours",
                    "option2": "5-7 hours",
                    "option3": "7-9 hours",
                    "option4": "> 9 hours",
                    "selectedOption": 0
                },
                {
                    "question": "Duration of Sleep",
                    "option1": "< 5 hours",
                    "option2": "5-7 hours",
                    "option3": "7-9 hours",
                    "option4": "> 9 hours",
                    "selectedOption": 0
                },
                {
                    "question": "Engagement in social activities",
                    "option1": "very active",
                    "option2": "active",
                    "option3": "somewhat active",
                    "option4": "not active",
                    "selectedOption": 2
                },
            ]
        },
    ])

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleAddLog = (logObj) => {
        patientBehaviourData.push(logObj);
        setPatientBehaviourData([...patientBehaviourData])
        setIsDialogOpen(false);
    }

    const cognitiveLineLabels = {
        0:"Mild Decline",
        1:"No change",
        2:"Moderate Decline",
        3:"Severe Decline",
    };
    const cognitiveLineData = [];

    const painLineLabels = {
        0:"None",
        1:"Mild",
        2:"Moderate",
        3:"Severe",
    };
    const painLineData = [];

    const sleepLineLabels = {
        0:"< 5 hours",
        1:"5-7 hours",
        2:"7-9 hours",
        3:"> 9 hours",
    };
    const sleepLineData = [];

    const socialActivityLabels = {
        0:"very active",
        1:"active",
        2:"somewhat active",
        3:"not active",
    };
    const socialActivityData = [];

    const datesData = [];

    patientBehaviourData.forEach((item)=>{
        datesData.push(item["date"]);;
        painLineData.push(item["questions"][0]["selectedOption"]);
        cognitiveLineData.push(item["questions"][1]["selectedOption"]);
        sleepLineData.push(item["questions"][3]["selectedOption"]);
        socialActivityData.push(item["questions"][4]["selectedOption"]);
    })

    const cognitiveLineOptions = {
        borderColor: "#000040",
        data: cognitiveLineData,
        scales: {
            x: {
                labels: datesData,
                ticks: {
                    font: {
                        size: 10,
                        color: "black"
                    }
                }
            },
            y: {
                labels: [0,1,2,3],
                ticks: {
                    font: {
                        size: 10,
                        color: "black"
                    },
                    callback: function(value, index, ticks) {
                        return cognitiveLineLabels[value];
                    },
                    beginAtZero: true
                }
            }
        }
    }
    const painLineOptions = {
        borderColor: "#000040",
        scales: {
            x: {
                labels: datesData,
                ticks: {
                    font: {
                        size: 10,
                        color: "black"
                    }
                }
            },
            y: {
                labels: [0,1,2,3],
                ticks: {
                    font: {
                        size: 10,
                        color: "black"
                    },
                    callback: function(value, index, ticks) {
                        return painLineLabels[value];
                    },
                    beginAtZero: true
                }
            }
        }
    }
    const sleepLineOptions = {
        borderColor: "#000040",
        scales: {
            x: {
                labels: datesData,
                ticks: {
                    font: {
                        size: 10,
                        color: "black"
                    }
                }
            },
            y: {
                labels: [0,1,2,3],
                ticks: {
                    font: {
                        size: 10,
                        color: "black"
                    },
                    callback: function(value, index, ticks) {
                        return sleepLineLabels[value];
                    },
                    beginAtZero: true
                }
            }
        }
    }

    const socialActivityOptions = {
        borderColor: "#000040",
        scales: {
            x: {
                labels: datesData,
                ticks: {
                    font: {
                        size: 10,
                        color: "black"
                    }
                }
            },
            y: {
                labels: [0,1,2,3],
                ticks: {
                    font: {
                        size: 10,
                        color: "black"
                    },
                    callback: function(value, index, ticks) {
                        return socialActivityLabels[value];
                    },
                    beginAtZero: true
                }
            }
        }
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "1%",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marign: "10%",
                    }}
                >
                    <Button
                        
                        sx={{
                            backgroundColor: "#000040",
                            color: "white",
                            fontWeight: "bold",
                            borderRadius: "10px",
                        }}
                        onClick={(e)=>{
                            console.log("Button Click");
                            setIsDialogOpen(true);
                        }}
                    >
                        Log Today
                    </Button>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marign: "10%",
                        justifyContent: "center"
                    }}
                >
                    <div
                        style={{
                            width: "50%",
                            minWidth: "300px"
                        }}
                    >
                        <Line
                            data = {{
                                labels: cognitiveLineLabels,
                                datasets: [
                                    {
                                        label: "Cognitive Function",
                                        data: cognitiveLineData
                                    }
                                ]
                            }}
                            options = {cognitiveLineOptions}
                        />
                    </div>

                    <div
                        style={{
                            width: "50%",
                            minWidth: "300px"
                        }}
                    >
                        <Line
                            data = {{
                                labels: painLineLabels,
                                datasets: [
                                    {
                                        label: "Pain",
                                        data: painLineData
                                    }
                                ]
                            }}
                            options = {painLineOptions}
                        />
                    </div>

                    <div
                        style={{
                            width: "50%",
                            minWidth: "300px"
                        }}
                    >
                        <Line
                            data = {{
                                labels: sleepLineLabels,
                                datasets: [
                                    {
                                        label: "Sleep Duration",
                                        data: sleepLineData
                                    }
                                ]
                            }}
                            options = {sleepLineOptions}
                        />
                    </div>

                    <div
                        style={{
                            width: "50%",
                            minWidth: "300px"
                        }}
                    >
                        <Line
                            data = {{
                                labels: socialActivityLabels,
                                datasets: [
                                    {
                                        label: "Social Activity",
                                        data: socialActivityData
                                    }
                                ]
                            }}
                            options = {socialActivityOptions}
                        />
                    </div>
                </div>
            </div>
            <LogQuestionsDialog
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                currentDate={currentDate}
                handleAddLog={handleAddLog}
            />
        </>
    );
}

export default PatientBehaviour;