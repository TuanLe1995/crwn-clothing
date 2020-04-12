import React from "react";
import { withRouter } from "react-router-dom";
// withRouter is a high order component, it take a component and return a more "powerfull" component with the same name but has the access to the match, history, and location from Route component
import "./menu-item.styles.scss";
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`menu-item ${size} `}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
