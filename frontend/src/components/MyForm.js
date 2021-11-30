// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import {Container, Row, Col, Stack, Image} from 'react-bootstrap';

import image from "../assets/image/airplane.jpg";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyCdKFSa6r0AM4Xo-781lg0fIeOwX1IQoLo",
  authDomain: "vuelafacil2021.firebaseapp.com",
  projectId: "vuelafacil2021",
  storageBucket: "vuelafacil2021.appspot.com",
  messagingSenderId: "634843765095",
  appId: "1:634843765095:web:a11ea02a0787294eed37c2",
  measurementId: "G-EGQSGW83VH"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],

  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: (authResult) => {

      const obj = {

        "id" : authResult.user.uid,
        "email" : authResult.user.email,
        "facebook" : authResult.user.facebook,

      }

      localStorage.setItem('data', JSON.stringify(obj));

      return true;

    },
  },
};

function MyForm() {
  return (

    <>

<Container>
  <Row>
    <Col>
    <Stack gap={3} className="align-items-center">
        
  <Image src= {image}/>

  <div>
    
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

    </div>

    </Stack>
    </Col>
  </Row>
</Container>

    </>

  );
}

export default MyForm