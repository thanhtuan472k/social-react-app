import "./post.css"
import {MoreHoriz} from "@material-ui/icons"
export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                        <span className="postUsername"> YẾn A</span>
                        <span className="postDate">10 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreHoriz/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni illo sit minus quaerat earum adipisci alias quibusdam eos mollitia? Quis debitis ea rerum accusamus odio porro veniam, atque facere.</span>
                    <img className="postImg" src="/assets/person/2.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">10 people like</span>
                        <span className="postCommentText">9 comments</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">Share</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

