import React from "react";
import { Button } from "react-bootstrap";

export default function StackComponent(props) {
  return (
    <Button
      disabled
      variant="outline"
      className="my-2"
      size={props.small ? "sm" : "md"}
      style={{
        borderWidth: "3px",
        color: "black",
        fontWeight: "bold",
        marginRight: "20px",
      }}
    >
      {props.text}
    </Button>
  );
}
