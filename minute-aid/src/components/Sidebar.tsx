import './sidebar.css';
import React, {ReactElement} from 'react';
import TranscriptInfo from '../interfaces/TranscriptInfo';
import { SidebarBox } from './SidebarBox';

export interface SidebarProps {
  transcriptNames: TranscriptInfo[];
  clickHandler: (string) => void;
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  console.log(props.transcriptNames)
  const generateBoxes = (): ReactElement => {
    return props.transcriptNames.map((info, i) => {
      return <SidebarBox info={info} defaultColor="#282c34" hoverColor="#4a4f59" clickHandler={props.clickHandler} key={i} />
    })
  }

  return (
    <div className="main-sidebar scroll-2">
      {generateBoxes()}
    </div>
  );
}