import React, { useState } from 'react';
import "../Styles/VideoPlayer.css";

import thumbnail1 from '../Assets/Images/thumnail1.jpg';
import thumbnail2 from '../Assets/Images/thumnail2.jpg';
import thumbnail3 from '../Assets/Images/thumnail3.jpg';

const videos = [
  {
    id: 1,
    title: "What is Dementia ?",
    thumbnail: thumbnail1,
    url: "/videos/vid2.mp4"
  },
  {
    id: 2,
    title: "Emergency response scenerio",
    thumbnail: thumbnail2,
    url: "/videos/vid.mp4"
  },
  {
    id: 3,
    title: "Precautions for Dementia",
    thumbnail: thumbnail3,
    url: "/videos/vid2.mp4"
  },
];

function VideoPlayer() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="video-player-container">
      <div className="video-section">
        <video key={selectedVideo.url} controls className="video-frame">
          <source src={selectedVideo.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2>{selectedVideo.title}</h2>
      </div>
      <div className="video-list-section">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`video-thumbnail ${video.id === selectedVideo.id ? 'active' : ''}`}
            onClick={() => setSelectedVideo(video)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoPlayer;
