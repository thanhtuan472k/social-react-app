import "./share.css";
import {LiveTv, PhotoLibrary, PhotoCamera} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
      <span>Create Post</span>
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What are you thinking?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <LiveTv htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Live Video</span>
                </div>
                <div className="shareOption">
                    <PhotoLibrary htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Photo/Video</span>
                </div>
                <div className="shareOption">
                    <PhotoCamera htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings/Activity</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
