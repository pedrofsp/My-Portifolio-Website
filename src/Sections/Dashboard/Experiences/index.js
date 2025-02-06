// Core
import React, { useState, useEffect } from "react";

// Libraries
import {
  Container,
  Button,
  Form,
  ListGroup,
  Modal,
  Image,
} from "react-bootstrap";
import FileBase64 from "react-file-base64";

// Services & Helpers
import { fetchData, updateData } from "../../../utils/RealtimeDatabaseUtils";

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
    image: "",
    stack: [],
  });
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedStack, setSelectedStack] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Set()); // Track selected itemsof the stack
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData("/AboutSection/HardSkills/").then((res) => {
      if (res) setSelectedStack(res);
    });

    fetchData("/experiences/").then((res) => {
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

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedItems((prev) => {
      const updatedItems = new Set(prev);
      if (e.target.checked) {
        updatedItems.add(value);
      } else {
        updatedItems.delete(value);
      }
      return updatedItems;
    });
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
    const updatedExperience = {
      ...newExperience,
      stack: Array.from(selectedItems),
    };
    var updatedCompany = selectedCompany;
    if (!updatedCompany.experiences) updatedCompany.experiences = [];
    updatedCompany.experiences.push(updatedExperience);
    const updatedCompanies = companies.map((company) =>
      company.name === selectedCompany ? updatedCompany : company
    );
    console.log("aqui: ", updatedCompanies);

    await updateData("/experiences.json", { companies: updatedCompanies });
    setCompanies(updatedCompanies);
    setNewExperience({
      title: { en: "", pt: "" },
      text: { en: "", pt: "" },
      date: "",
      image: "",
      stack: [],
    });
    setShowModal(false);
  };

  const deleteExperience = async (companyName, experienceTitle) => {
    let updatedCompany = companies.find(
      (company) => company.name === companyName
    );

    updatedCompany.experiences = updatedCompany.experiences.filter(
      (experience) => experience.title.en !== experienceTitle
    );

    const updatedCompanies = companies.map((company) =>
      company.name === companyName ? updatedCompany : company
    );

    await updateData("/experiences.json", { companies: updatedCompanies });
    setCompanies(updatedCompanies);
  };

  const handleImageChange = (file) => {
    setNewExperience((prevService) => ({ ...prevService, image: file.base64 }));
  };

  return (
    <Container>
      <h2>Companies</h2>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addCompany();
        }}
      >
        <Form.Group controlId="formCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company name"
            value={newCompany.name}
            onChange={handleCompanyChange}
          />
        </Form.Group>
        <br />
        <Button variant="primary" onClick={addCompany}>
          Add Company
        </Button>
      </Form>
      <br />
      <ListGroup>
        {companies.map((company, index) => (
          <ListGroup.Item key={index}>
            <h5>{company.name}</h5>
            <div className="d-flex flex-column">
              {company.experiences && (
                <ListGroup>
                  {company.experiences.map((experience, expIndex) => (
                    <ListGroup.Item key={expIndex}>
                      <div className="d-flex">
                        <Image width={"150px"} src={experience.image} />
                        <div className="mx-4 d-flex flex-column justify-content-center">
                          <h6>{experience.title.en}</h6>
                          <p>{experience.text.en}</p>
                        </div>
                      </div>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() =>
                          deleteExperience(company.name, experience.title.en)
                        }
                        style={{ float: "right" }}
                      >
                        Delete
                      </Button>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
              <div className="my-3 d-flex justify-content-center">
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => {
                    setSelectedCompany(company);
                    setShowModal(true);
                  }}
                  style={{ float: "right", marginRight: "10px" }}
                >
                  Add Experience
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteCompany(company.name)}
                  style={{ float: "right" }}
                >
                  Delete
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Experience on {selectedCompany.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addExperience();
            }}
          >
            <Form.Group controlId="formTitleEN">
              <Form.Label>Title (EN)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title in English"
                name="title.en"
                value={newExperience.title.en}
                onChange={handleExperienceChange}
                autoFocus
              />
            </Form.Group>
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
            <Form.Group className="d-flex flex-column" controlId="formImg">
              <Form.Label>Experience Image</Form.Label>
              <FileBase64 multiple={false} onDone={handleImageChange} />
            </Form.Group>
            <br />
            <Form.Group controlId="formStack">
              <Form.Label>Stack</Form.Label>
              <ListGroup>
                {selectedStack &&
                  selectedStack.map((stack, index) => (
                    <ListGroup.Item
                      key={index}
                      className="d-flex justify-content-between"
                    >
                      <div>{stack}</div>
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        value={stack}
                        checked={selectedItems.has(stack)} // Determine if checked
                        onChange={handleCheckboxChange}
                      />
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Form.Group>
            <Button style={{ display: "none" }} type="submit" />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={addExperience}>
            Add Experience
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
