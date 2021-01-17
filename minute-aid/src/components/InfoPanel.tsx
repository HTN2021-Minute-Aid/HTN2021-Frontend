import './infopanel.css';
import React, {ReactElement} from 'react';
import TranscriptContent from '../interfaces/TranscriptContent'

export interface InfoPanelProps {
  transcript: TranscriptContent;
}

export const InfoPanel: React.FC<InfoPanelProps> = (props: InfoPanelProps) => {
  const generateTranscript = (): ReactElement[] => {
    return props.transcript.content.map((sentence, i) => {
      return <p key={i}>{sentence.name}: {sentence.content}</p>
    });
  }

  const generateKeywords = (): ReactElement[] => {
    return props.transcript.keywords.map((word, i) => {
      return <p key={i}>{word}</p>
    });
  }

  const generateSections = (): ReactElement => {
    return (
    <React.Fragment>
      <div className="inner-panel scroll-1">
        <h2> Transcript: </h2>
        <div className="left-align">
          {generateTranscript()}
        </div>
      </div>
      <div className="inner-panel scroll-1">
        <h2> Keywords: </h2>
        {generateKeywords()}
      </div>
    </React.Fragment>
    )
  }
  
  return (
    <div className="main-infopanel">
      {props.transcript ? generateSections() : undefined}
    </div>
  )
}