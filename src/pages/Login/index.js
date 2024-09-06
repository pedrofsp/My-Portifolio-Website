import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { app } from "../../firebase";
import React from "react";
import { Container } from "react-bootstrap";

export default function Login() {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(getAuth(app));

    ui.start("#firebaseui-auth-container", {
      signInSuccessUrl: "/dashboard",
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          clientId:
            "45527413556-l6s4beavr8hkmto7hc76gfsmnk35l905.apps.googleusercontent.com",
        },
      ],
      credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    });
  }, []);

  return (
    <Container style={{ height: "100vh", alignContent: "center" }}>
      <p className="text-center">Please sign In</p>
      <div id="firebaseui-auth-container"></div>;
    </Container>
  );
}
