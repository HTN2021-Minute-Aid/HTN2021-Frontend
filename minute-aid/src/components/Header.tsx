import React, {ReactElement} from "react";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <a href="#top">
          <img className="header-logo-img" src="/1.PNG" alt=""/>
        </a>
      </div>
      <div className="header-links">
        <p className="header-text">
          Minute-Aid
        </p>
      </div>
    </div>
  );
}