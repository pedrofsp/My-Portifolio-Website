import React, { useState, useEffect } from "react";
import { Container, Button, Form, ListGroup } from "react-bootstrap";
import "../../../Utils/RealtimeDatabaseUtils";
import { fetchData, updateData } from "../../../Utils/RealtimeDatabaseUtils";

export default function HardSkills() {
  const [hardSkills, setHardSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    fetchData("AboutSection/HardSkills/").then((res) => {
      if (res) setHardSkills(res);
    });
  }, []);

  const addSkill = async () => {
    if (newSkill.trim() === "") {
      return;
    }
    const updatedSkills = [...hardSkills, newSkill];
    updateData("/AboutSection/", { HardSkills: updatedSkills });
    setHardSkills(updatedSkills);
    setNewSkill("");
  };

  const deleteSkill = async (skillToDelete) => {
    const updatedSkills = hardSkills.filter((skill) => skill !== skillToDelete);
    updateData("/AboutSection/", { HardSkills: updatedSkills });
    setHardSkills(updatedSkills);
  };

  return (
    <Container>
      <h2>Hard Skills</h2>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addSkill();
        }}
      >
        <Form.Group controlId="formNewSkill">
          <Form.Label>Add a new hard skill</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a new skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button variant="primary" onClick={addSkill}>
          Add Skill
        </Button>
      </Form>
      <br />
      <ListGroup>
        {hardSkills.map((skill, index) => (
          <ListGroup.Item key={index}>
            {skill}
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteSkill(skill)}
              style={{ float: "right" }}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
