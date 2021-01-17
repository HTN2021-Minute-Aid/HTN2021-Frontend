import './App.css';
import React, {ReactElement, useState, useEffect} from 'react';

import ResponseObj from './interfaces/ResponseObj';
import TranscriptContent from './interfaces/TranscriptContent';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { InfoPanel } from './components/InfoPanel';
import TranscriptID from './interfaces/TranscriptID';
import UserTranscripts from './interfaces/UserTranscripts';
import TranscriptInfo from './interfaces/TranscriptInfo';

const debug = false;

const userTranscriptUrl = "https://minute-aid.herokuapp.com/users/transcripts";
const deleteTranscriptUrl = "https://minute-aid.herokuapp.com/transcripts/delete";
const transcriptContentUrl = "https://minute-aid.herokuapp.com/users/transcripts/content";

interface TranscriptAppProps {
  userID: string;
}

const TranscriptApp: React.FC<TranscriptAppProps> = (props: TranscriptAppProps) => {
  const [data, setData] = useState<UserTranscripts>(null);
  const [selectedTranscript, setSelectedTranscript] = useState<TranscriptContent>(null);
  const [loadingMain, setLoadingMain] = useState<boolean>(true);
  const [loadingTranscript, setLoadingTranscript] = useState<boolean>(true);
  
  const getData = async () => {
    try {
      const res = await fetch(userTranscriptUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },

        body: JSON.stringify({userID: props.userID})
      });

      const returnedObj: ResponseObj = await res.json();
      setData(returnedObj.obj as UserTranscripts);
    } catch(e) {
      console.error(e);
    }
  }

  const getTranscript = async (transcriptId: string) => {
    setLoadingTranscript(true);

    try {
      const res = await fetch(transcriptContentUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },

        body: JSON.stringify({contentID: transcriptId})
      })

      const returnedObj: ResponseObj = await res.json();
      setSelectedTranscript(returnedObj.obj as TranscriptContent);
    } catch (e) {
      console.error(e);
    }
  }

  // run once to get data
  useEffect(() => {
    (!debug) ? getData() : console.log("debug");
  }, []);

  // let us know if we're done loading
  useEffect(() => {
    if (data) {
      setLoadingMain(false);
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    if (selectedTranscript) {
      setLoadingTranscript(false);
      console.log(selectedTranscript);
    }
  }, [selectedTranscript]);

  const convertIdToInfo = (id: TranscriptID): TranscriptInfo => {
    const info: TranscriptInfo = {
      name: id.title,
      contentID: id.contentID
    }

    return info;
  }

  // const coolDebugger = (eee: string): void => {
  //   setLoadingTranscript(true);
  //   setSelectedTranscript({
  //     content: [{name: "a", content: "bbb"}, {name: "a", content: "bbb"}, {name: "a", content: "bbb"}, {name: "a", content: "bbb"}, {name: "a", content: "bbb"}],
  //     keywords: ["yes", "emoji moovie", "despacito"]
  //   });
  // }

  const getSelectedTranscript = (contentID: string): void => {
    getTranscript(contentID);
  }

  const generateDynamicPage = (): ReactElement => {
    return (
      <div className="full-container">
        <Sidebar transcriptNames={data.transcripts.map(convertIdToInfo)} clickHandler={getSelectedTranscript} />
        {/* <Sidebar transcriptNames={[{name: "transcript a", contentID:"no"}, {name: "transcript bbb", contentID:"no"}, {name: "transcript bbb", contentID:"no"}, {name: "transcript bbb", contentID:"no"}, {name: "transcript bbb", contentID:"no"}, {name: "transcript bbb", contentID:"no"}, {name: "transcript bbb", contentID:"no"}, {name: "transcript bbb", contentID:"no"}, {name: "transcript bbb", contentID:"no"}, {name: "transcript bbb", contentID:"no"}]} clickHandler={coolDebugger} /> */}
        {!loadingTranscript ? <InfoPanel transcript={selectedTranscript}/> : <InfoPanel transcript={undefined} /> }
        
      </div>
    );
  }

  return (
    <div id="top" className="App">
      <header className="App-header">
        <Header />
      </header>
      
      {(!loadingMain || debug) ? generateDynamicPage() : undefined}
    </div>
  );
}

export default TranscriptApp;
