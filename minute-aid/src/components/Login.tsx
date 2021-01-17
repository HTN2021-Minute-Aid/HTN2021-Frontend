import './login.css';
import firebase from 'firebase/app'
import "firebase/auth";
import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const clientID = "1049440900127-95nnln2c04rd3h9ipi3p7fakcpipv7nu.apps.googleusercontent.com";

export interface LoginProps {
  // onSuccess: (res: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  // onFailure: (errpr: any) => void;

  onFirebaseSuccess: (uid: String) => void;
}

export const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const firebaseLogin = async () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(userInfo => {
        const uid = userInfo.user.uid;
        props.onFirebaseSuccess(uid);
      });
    });
  }
  
  return (
    <div className="background" style={{}}>
      <div className="login-box">
        <img className="main-logo" src="icon128.png" alt="" />
        <button className="google-container fblogin" onClick={firebaseLogin}>
          {/* <GoogleLogin
            clientId={clientID}
            onSuccess={props.onSuccess}
            onFailure={props.onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          /> */}
          <img className="fblogin-logo" src="google.png" alt="" />
          <p  className="fblogin-text">
          Sign in through Google
          </p>
        </button>
      </div>
    </div>
  )
}