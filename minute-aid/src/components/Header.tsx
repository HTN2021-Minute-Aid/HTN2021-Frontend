import React, {ReactElement} from "react";

interface Props {
  username: string;
}

export const Header: React.FC<Props> = ({username}) => {

  const style = {
    
  };
  return (
    <div className="header">
      <div className="header-logo">
        <a href="#top">
          <img className="header-logo-img" src="icon128.png" alt=""/>
        </a>

        <p className="header-title">Minute-Aid</p>
      </div>
      <div className="header-links">
        <p className="header-text">
          {username}
        </p>
      </div>
    </div>
  );
}