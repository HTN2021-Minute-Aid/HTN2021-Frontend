import './sidebar.css';
import React, {ReactElement, useState} from 'react';
import TranscriptInfo from '../interfaces/TranscriptInfo';

export interface SidebarBoxProps {
  info: TranscriptInfo;
  clickHandler: (contentID: string) => void;
}

export const SidebarBox: React.FC<SidebarBoxProps> = (props: SidebarBoxProps) => {
  const handleClick = (): void => {
    props.clickHandler(props.info.contentID);
  }
  return (
    <div
        className="sidebar-box"
        onClick={handleClick}
    >
      <p>{props.info.name}</p>
    </div>
  );
}