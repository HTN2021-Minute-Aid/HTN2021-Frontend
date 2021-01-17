import './sidebar.css';
import React, {ReactElement, useState} from 'react';
import TranscriptInfo from '../interfaces/TranscriptInfo';

export interface SidebarBoxProps {
  info: TranscriptInfo;
  defaultColor: string;
  hoverColor: string;
  clickHandler: (string) => void;
}

export const SidebarBox: React.FC<SidebarBoxProps> = (props: SidebarBoxProps) => {
  const [color, setColor] = useState<string>(props.defaultColor);

  const handleClick = (): void => {
    props.clickHandler(props.info.contentID);
  }
  return (
    <div
        className="sidebar-box"
        style={{backgroundColor: color}}
        onMouseEnter={() => setColor(props.hoverColor)}
        onMouseLeave={() => setColor(props.defaultColor)}
        onClick={handleClick}
    >
      <p>{props.info.name}</p>
    </div>
  );
}