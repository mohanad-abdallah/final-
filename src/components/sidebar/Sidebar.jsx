import "./sidebar.css";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <i className="fas fa-rss sidebarIcon"></i>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-comment sidebarIcon"></i>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-play-circle sidebarIcon"></i>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-users sidebarIcon"></i>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-bookmark sidebarIcon"></i>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-question-circle sidebarIcon"></i>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-briefcase sidebarIcon"></i>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-calendar sidebarIcon"></i>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <i className="fas fa-graduation-cap sidebarIcon"></i>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
