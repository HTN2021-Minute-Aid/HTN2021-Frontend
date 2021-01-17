import './sidebar.css';
import React, {ReactElement, useState} from 'react';
import TranscriptInfo from '../interfaces/TranscriptInfo';

export interface SidebarBoxProps {
  info: TranscriptInfo;
  clickHandler: (contentID: string) => void;
  trashHandler: (contentID: string) => void;
}

export const SidebarBox: React.FC<SidebarBoxProps> = (props: SidebarBoxProps) => {
  const [showTrash, setShowTrash] = useState<boolean>(false);
  
  const handleClick = (): void => {
    props.clickHandler(props.info.contentID);
  }

  const handleTrash = (): void => {
    props.trashHandler(props.info.transcriptID);
  }

  const renderTrash = (): ReactElement => {
    return (
      <div onClick={handleTrash} className="trash-can-div">
        <img src="trash.png" alt="" className="trash-can" />
      </div>
    )
  }

  return (
    <div
        className="sidebar-box"
        
        onMouseEnter={() => setShowTrash(true)}
        onMouseLeave={() => setShowTrash(false)}
    >
      <div style={{width: showTrash ? "80%" : "100%"}} onClick={handleClick}>
        <p>{props.info.name}</p>
      </div>
      {showTrash ? renderTrash() : undefined}
    </div>
  );
}