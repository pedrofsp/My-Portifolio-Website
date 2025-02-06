// Core
import React from "react";

// Libraries
import { Container, Button, Image } from "react-bootstrap";

// Services & Helpers
import { getAuth } from "firebase/auth";
import { app } from "../../../firebase";

export default function User(props) {
  function SignOut() {
    const auth = getAuth(app);
    auth.signOut();
  }
  return (
    <Container className="d-flex justify-content-between">
      <div className="d-flex">
        <Image
          roundedCircle
          className="border border-secondary"
          src={props.user.photoURL}
        />
        <h3 className="align-self-center px-3">
          Logado como: {props.user.email}
        </h3>
      </div>
      <Button onClick={SignOut}>SignOut</Button>
    </Container>
  );
}
