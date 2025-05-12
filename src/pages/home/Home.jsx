import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css'
export default function Home() {
    return (
        <>
        <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
        </div>
        </>
    );
}

