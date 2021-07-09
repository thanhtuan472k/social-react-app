import "./sidebar.css"
import {Tv, Chat, PlayCircleFilled, Group, AccountBox} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Tv className="sidebarIcon"/>
                        <span className="sidebarListItemText">New Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Badges</span>
                    </li>
                    <li className="sidebarListItem">
                        < PlayCircleFilled className="sidebarIcon"/>
                        <span className="sidebarListItemText">Explore Stories</span>
                    </li>
                    <li className="sidebarListItem">
                        < Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Popular Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        < AccountBox className="sidebarIcon"/>
                        <span className="sidebarListItemText">Author Profile</span>
                    </li>
                </ul>
                <hr className="sidebarHr"/>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Tv className="sidebarIcon"/>
                        <span className="sidebarListItemText">New Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Badges</span>
                    </li>
                    <li className="sidebarListItem">
                        < PlayCircleFilled className="sidebarIcon"/>
                        <span className="sidebarListItemText">Explore Stories</span>
                    </li>
                    <li className="sidebarListItem">
                        < Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Popular Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        < AccountBox className="sidebarIcon"/>
                        <span className="sidebarListItemText">Author Profile</span>
                    </li>
                </ul>
                <hr className="sidebarHr"/>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Tv className="sidebarIcon"/>
                        <span className="sidebarListItemText">New Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Badges</span>
                    </li>
                    <li className="sidebarListItem">
                        < PlayCircleFilled className="sidebarIcon"/>
                        <span className="sidebarListItemText">Explore Stories</span>
                    </li>
                    <li className="sidebarListItem">
                        < Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Popular Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        < AccountBox className="sidebarIcon"/>
                        <span className="sidebarListItemText">Author Profile</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}