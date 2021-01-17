import React, {ReactElement} from 'react';
import Transcript from '../utils/Transcript';

export interface SidebarProps {
  transcripts: Transcript;
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  return <div></div>;
}