import React from "react";

export default function VideoDetails({ selectedVideo }) {
  if (!selectedVideo) {
    return "Loading...";
  }

  const videoSrc = `http://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  return (
    <div style={{ margin: "30px" }}>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="segment ui">
        <h4 className="header">{selectedVideo.snippet.title}</h4>
        <span>{selectedVideo.snippet.description}</span>
      </div>
    </div>
  );
}
