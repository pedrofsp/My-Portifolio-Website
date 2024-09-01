import React, { useState, useEffect } from "react";
import { Container, Button, Form, ListGroup, Modal } from "react-bootstrap";
import { fetchData, updateData } from "../../../Utils/RealtimeDatabaseUtils";

export default function Experiences() {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: "",
    experiences: [],
  });
  const [newExperience, setNewExperience] = useState({
    title: { en: "", pt: "" },
    text: { en: "", pt: "" },
    date: "",
    img: "",
    stack: [],
  });
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData("/experiences.json").then((res) => {
      console.log("aqui:", res.companies);
      if (res) setCompanies(res.companies);
    });
  }, []);

  const handleCompanyChange = (e) => {
    setNewCompany((prevCompany) => ({
      ...prevCompany,
      name: e.target.value,
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    const [field, lang] = name.split(".");
    if (lang) {
      setNewExperience((prev) => ({
        ...prev,
        [field]: { ...prev[field], [lang]: value },
      }));
    } else {
      setNewExperience((prev) => ({ ...prev, [field]: value }));
    }
  };

  const addCompany = async () => {
    const updatedCompanies = [...companies, newCompany];
    await updateData("/experiences.json", { companies: updatedCompanies });
    setCompanies(updatedCompanies);
    setNewCompany({ name: "", experiences: [] });
  };

  const deleteCompany = async (companyToDelete) => {
    const updatedCompanies = companies.filter(
      (company) => company.name !== companyToDelete
    );
    await updateData("/experiences.json", { companies: updatedCompanies });
    setCompanies(updatedCompanies);
  };

  const addExperience = async () => {
    const updatedCompanies = companies.map((company) => {
      if (company.name === selectedCompany) {
        return {
          ...company,
          experiences: [...company.experiences, newExperience],
        };
      }
      return company;
    });
    await updateData("/experiences.json", { companies: updatedCompanies });
    setCompanies(updatedCompanies);
    setNewExperience({
      title: { en: "", pt: "" },
      text: { en: "", pt: "" },
      date: "",
      img: "",
      stack: [],
    });
    setShowModal(false);
  };

  const deleteExperience = async (companyName, experienceToDelete) => {
    const updatedCompanies = companies.map((company) => {
      if (company.name === companyName) {
        return {
          ...company,
          experiences: company.experiences.filter(
            (exp) => exp !== experienceToDelete
          ),
        };
      }
      return company;
    });
    await updateData("/experiences.json", { companies: updatedCompanies });
    setCompanies(updatedCompanies);
  };

  return (
    <Container>
      <h2>Companies</h2>
      <Form>
        <Form.Group controlId="formCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company name"
            value={newCompany.name}
            onChange={handleCompanyChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={addCompany}>
          Add Company
        </Button>
      </Form>
      <br />
      <ListGroup>
        {companies.map((company, index) => (
          <ListGroup.Item key={index}>
            <h5>{company.name}</h5>
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteCompany(company.name)}
              style={{ float: "right" }}
            >
              Delete
            </Button>
            <Button
              variant="success"
              size="sm"
              onClick={() => {
                setSelectedCompany(company.name);
                setShowModal(true);
              }}
              style={{ float: "right", marginRight: "10px" }}
            >
              Add Experience
            </Button>
            <ListGroup>
              {company.experiences.map((experience, expIndex) => (
                <ListGroup.Item key={expIndex}>
                  <h6>{experience.title.en}</h6>
                  <p>{experience.text.en}</p>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteExperience(company.name, experience)}
                    style={{ float: "right" }}
                  >
                    Delete
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitleEN">
              <Form.Label>Title (EN)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title in English"
                name="title.en"
                value={newExperience.title.en}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            <Form.Group controlId="formTitlePT">
              <Form.Label>Title (PT)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title in Portuguese"
                name="title.pt"
                value={newExperience.title.pt}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            <Form.Group controlId="formTextEN">
              <Form.Label>Text (EN)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter text in English"
                name="text.en"
                value={newExperience.text.en}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            <Form.Group controlId="formTextPT">
              <Form.Label>Text (PT)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter text in Portuguese"
                name="text.pt"
                value={newExperience.text.pt}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter date"
                name="date"
                value={newExperience.date}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            <Form.Group controlId="formImg">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="img"
                value={newExperience.img}
                onChange={handleExperienceChange}
              />
            </Form.Group>
            <Form.Group controlId="formStack">
              <Form.Label>Stack</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter stack"
                name="stack"
                value={newExperience.stack.join(",")}
                onChange={(e) =>
                  setNewExperience((prev) => ({
                    ...prev,
                    stack: e.target.value.split(","),
                  }))
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={addExperience}>
            Add Experience
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
