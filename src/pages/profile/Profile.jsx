import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      {/* <Topbar /> */}
      <div className="profile">
        {/* <Sidebar /> */}
        <Sidebar />
        <div className="profileRight">
          <div className=" profileRightTop">
            <image
              className="profileCoverImage"
              src="/public/assets/cover-image.svg"
              alt=" cover page "
            />

            <img
              className="profileUserImage"
              src="/public/assets/icons8-test-account-80.png  "
              alt="profile page "
            />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName"> profile user </h4>
            <span className="profileInfoDesc">Hello my friends!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <Rightbar profile={true} />
          {/* <Rightbar /> */}
        </div>
      </div>
    </>
  );
}
