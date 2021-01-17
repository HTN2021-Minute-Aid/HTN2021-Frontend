import "./App.css";
import React, { useState, useEffect } from 'react';
import firebase from "@firebase/app";

import '@firebase/auth';
import TranscriptApp from './TranscriptApp';
import { Login } from './components/Login';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDQEdAe6M-gLb-hRhFXwN87jvnDiwdxdnw",
      authDomain: "htn2021-eefb8.firebaseapp.com",
      projectId: "htn2021-eefb8",
      storageBucket: "htn2021-eefb8.appspot.com",
      messagingSenderId: "1049440900127",
      appId: "1:1049440900127:web:90ab8916d3f822a90f712a",
      measurementId: "G-0512QVLDNV"
    };
    firebase.initializeApp(firebaseConfig);
  }, [])

  // const onLogin = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
  //   console.log("Success!");
  //   const credential = firebase.auth.GoogleAuthProvider.credential(response.tokenId)
  //   const userInfo = firebase.auth().signInWithCredential(credential)
  //     .then((info) => {
  //       const uid = info.user.uid;

  //       console.log(uid);
  //       // setUserId(uid);
  //       // setLoggedIn(true);
  //     });
  // }

  // const onFailedLogin = (error: any): void => {
  //   console.log("Failed login!");
  // }

  const onFirebaseLogin = (uid: string, name: string) => {
    // console.log(uid);

    setUserId(uid);
    setUsername(name);
    setLoggedIn(true);
  }

  if (!loggedIn) {
    // return <Login onSuccess={onLogin} onFailure={onFailedLogin} onFirebaseSuccess={onFirebaseLogin}/>
    return <Login onFirebaseSuccess={onFirebaseLogin}/>
  }

  // return <TranscriptApp userID="2SS0lCXwZhPvWv1nnRpem7Te8dg1"/>
  return <TranscriptApp userID={userId} username={username}/>
}

export default App;