import React, { useState } from "react";
import "../Styles/HelpSection.css";

const HelpSection = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [recognizing, setRecognizing] = useState(false);

  let recognition;

  const handleSend = async () => {
    if (message.trim()) {
      const omkarpayload = { query: message };
      setChatHistory([...chatHistory, { text: message, user: "user" }]);
      setMessage("");
      setLoading(true);

      try {
        // Construct the URL with query parameters
        const url = new URL("https://chatbot-dtfm.onrender.com/summarize");
        url.searchParams.append("text", message);

        const initialresponse = await fetch(url.toString(), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        // Parse the response
        const data = await initialresponse.text(); // Assuming the server returns plain text

        setChatHistory([...chatHistory, { text: data, user: "bot" }]);
        console.log(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleVoiceInput = () => {
    if (recognizing) {
      recognition.stop();
      return;
    }

    recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setRecognizing(true);
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setMessage(speechResult);
    };

    recognition.onend = () => {
      setRecognizing(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setRecognizing(false);
    };

    recognition.start();
  };

  const handleVideoInput = async () => {
    setLoading(true);
    const omkarpayload = { query: message };

    setMessage("");

    try {
      // const initialresponse = await fetch("http://localhost:8000/search/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(omkarpayload),
      // });

      // const omkardata = await initialresponse.json();
      // console.log(omkardata.transcription);
      // const payload = { scriptText: omkardata.transcription };
      const payload = { scriptText: omkarpayload.query };

      try {
        const response = await fetch("https://chatbot-dtfm.onrender.com/generate-video", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setVideoUrl(data.videoUrl);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      } finally {
        setLoading(false);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setVideoUrl("");
  };

  return (
    <div className="help-section">
      <div className="chat-container">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.user}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
        <button className="voice-button" onClick={handleVoiceInput}>
          🎤
        </button>
        <button className="video-button" onClick={handleVideoInput}>
          📹
        </button>
      </div>

      {loading && (
        <div className="modal">
          <div className="modal-content">
            <div className="loader"></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {videoUrl && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              ×
            </button>
            <video width="100%" height="auto" controls autoPlay>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpSection;
