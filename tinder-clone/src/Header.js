import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
        
        <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>

        <img
            className="header_logo"
            src="data:image/png;base64,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"
            alt=""
        />

        <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>



    </div>
  );
}

export default Header;