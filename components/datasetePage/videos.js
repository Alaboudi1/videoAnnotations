import React from "react";
import VideoInfo from "../shared/videoInfo";
import Link from "next/link";

/**
 * Videos: component for each video for search result page
 */
class Videos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const video = this.props.video;
    const videoId = video.VideoURL.replace("https://youtu.be/", "");
    let uniqueAnnotation = Array.from(
      new Set(video.Annotations.map(annotation => annotation.Tags))
    );
    return (
      <div class="card">
        <img
          src={"https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg"}
          class="card-img-top"
          alt="..."
        />
        <div class="card-img-overlay">
          <Link
            href="/video/[sheetId]/[videoId]"
            as={`/video/${this.props.sheetId}/${videoId}`}
          >
            <button
              type="button"
              class="btn btn-danger"
              style={{ margin: "25% 40%" }}
            >
              Play
            </button>
          </Link>
        </div>
        <div class="card-body bg-light text-dark">
          <h5 class="card-title">{video.VideoTitle}</h5>
          <p class="card-text">
            <VideoInfo vidElem={video} />
          </p>
          <p class="card-text">
            {uniqueAnnotation.map(annotation => (
              <span class="badge badge-pill badge-primary">{annotation}</span>
            ))}
          </p>
        </div>
      </div>
    );
  }
}

export default Videos;