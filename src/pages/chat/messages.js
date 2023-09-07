
import React, { useState } from "react";
import { Image } from '@themesberg/react-bootstrap';
import profileImg from "../../assets/img/team/avatar-1.png";

const Messages = (props) => {
    let {messages, classes} = props
    return (
        <>
            <div className={`messageBox ${classes}`}>
                {messages}
            </div>
            {/* <div className={`user-avatar`} style={{display:classes=='right-message'?'none':'block'}}>
                <Image src={profileImg} alt="Profile Image" className="user-avatar mx-auto xs-avatar rounded-circle" />            
            </div> */}
            {/* <div className={`file-field ${classes=='right-message'?'text-left':'text-right'}`}>
                <p>09:00</p>
            </div> */}
        </>
    )
}

export default Messages;