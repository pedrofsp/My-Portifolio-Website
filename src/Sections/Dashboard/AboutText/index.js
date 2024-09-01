import React, { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import "../../../Utils/RealtimeDatabaseUtils";
import { fetchData, updateData } from "../../../Utils/RealtimeDatabaseUtils";

export default function AboutText() {
  const [englishText, setEnglishText] = useState("");
  const [portugueseText, setPortugueseText] = useState("");

  useEffect(() => {
    fetchData("/AboutSection/aboutText.json").then((res) => {
      setEnglishText(res.en);
      setPortugueseText(res.pt);
    });
  }, []);

  const handleTextChange = (e, setText) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleUpdateText = () => {
    updateData("/AboutSection/aboutText.json", {
      en: englishText,
      pt: portugueseText,
    });
  };

  return (
    <Container>
      <h2>Edit About Text</h2>
      <Form>
        <Form.Group controlId="formEnglishText">
          <Form.Label>English Text</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter English text"
            value={englishText}
            onChange={(e) => handleTextChange(e, setEnglishText)}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formPortugueseText">
          <Form.Label>Portuguese Text</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Portuguese text"
            value={portugueseText}
            onChange={(e) => handleTextChange(e, setPortugueseText)}
          />
        </Form.Group>
        <br />
        <Button variant="primary" onClick={handleUpdateText}>
          Update Text
        </Button>
      </Form>
    </Container>
  );
}
