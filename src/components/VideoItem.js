import React from "react";
import "./VideoItem.css";

export default function VideoItem({ video, onVideoSelect }) {
  const { snippet } = video;
  const { thumbnails } = snippet;
  return (
    <div onClick={() => onVideoSelect(video)} className="item item-container">
      <img className="ui" src={thumbnails.medium.url} alt={video.description} />
      {video.description}
      <div className="content">
        <p className="header">{snippet.title}</p>
      </div>
    </div>
  );
}
