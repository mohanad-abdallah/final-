import './post.css'
import { MoreHoriz, ThumbUpAlt, Favorite } from "@mui/icons-material";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Post({ post }) {
  const [user, setUser] = useState({});
  const [likedType, setLikedType] = useState(null);
  const [like, setLike] = useState(post.like);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/users?userId=${post.userId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [post.userId]);

  const handleThumbLike = () => {
    if (likedType === "thumb") {
      setLikedType(null);
      setLike(like - 1);
    } else if (likedType === "heart") {
      setLikedType("thumb");
    } else {
      setLikedType("thumb");
      setLike(like + 1);
    }
  };

  const handleHeartLike = () => {
    if (likedType === "heart") {
      setLikedType(null);
      setLike(like - 1);
    } else if (likedType === "thumb") {
      setLikedType("heart");
    } else {
      setLikedType("heart");
      setLike(like + 1);
    }
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.profilePicture || "/assets/person/noAvatar.png"}
              alt=""
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
          </div>
          <div className="postTopRight">
            <MoreHoriz />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpAlt
              className={`likeIcon ${likedType === "thumb" ? "liked" : ""}`}
              onClick={handleThumbLike}
            />
            <Favorite
              className={`likeIcon ${likedType === "heart" ? "liked" : ""}`}
              onClick={handleHeartLike}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment || 0} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
