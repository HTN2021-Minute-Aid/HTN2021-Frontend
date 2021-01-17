import React, {ReactElement} from "react";

interface Props {
  username: string;
}

export const Header: React.FC<Props> = ({username}) => {

  const style = {
    color: 'white',
    fontSize: 16,
    display: 'inline-block',
    margin: 'auto',
    'white-space': 'nowrap',
  };
  return (
    <div className="header">
      <div className="header-logo">
        <a href="#top">
          <img className="header-logo-img" src="icon128.png" alt=""/>
        </a>
      </div>
      <p style={style}>Minute-Aid</p>
      <div className="header-links">
        <p className="header-text">
          {username}
        </p>
      </div>
    </div>
  );
}