import React from "react";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="centrado">
      <div className="main-container">
        <h1 className="title-not-found">Error 404</h1>
        <p className="subtitle-not-found">
          Please check your link and try again.
        </p>
        <div className="email-image-not-found">
          <img src="/img/icons/notFound.svg" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
