import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SideBarChat.css";

function SideBarChat() {
    return (
        <div className="sidebarchat">
            <Avatar/>
            <div className="sidebarchat_info">
             <h2>Chat</h2>
             <p>The last Message</p>
            </div>
        </div>
    )
}

export default SideBarChat
