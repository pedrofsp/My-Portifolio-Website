import React, { useState, useEffect } from "react";
import { Container, Button, Form, ListGroup, Image } from "react-bootstrap";
import { fetchData, updateData } from "../../../Utils/RealtimeDatabaseUtils";
import FileBase64 from "react-file-base64";

export default function Services() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    textEN: "",
    textPT: "",
    image: "",
  });

  useEffect(() => {
    fetchData("/servicesSection/services.json").then((res) => {
      if (res) setServices(res);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({ ...prevService, [name]: value }));
  };

  const handleImageChange = (file) => {
    setNewService((prevService) => ({ ...prevService, image: file.base64 }));
  };

  const addService = async () => {
    const updatedServices = [...services, newService];
    updateData("/servicesSection.json", { services: updatedServices });
    setServices(updatedServices);
    setNewService({ textEN: "", textPT: "", image: "" });
  };

  const deleteService = async (serviceToDelete) => {
    const updatedServices = services.filter(
      (service) => service !== serviceToDelete
    );
    updateData("/servicesSection.json", { services: updatedServices });
    setServices(updatedServices);
  };

  return (
    <Container>
      <h2>Services</h2>
      <Form>
        <Form.Group controlId="formTextEN" className="mt-2">
          <Form.Label>Service Description (EN)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter service description in English"
            name="textEN"
            value={newService.textEN}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formTextPT" className="mt-2">
          <Form.Label>Service Description (PT)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter service description in Portuguese"
            name="textPT"
            value={newService.textPT}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formImage" className="mt-2 d-flex flex-column">
          <Form.Label>Service Image (should be an white incon)</Form.Label>
          <FileBase64 multiple={false} onDone={handleImageChange} />
        </Form.Group>
        <br />
        <Button variant="primary" onClick={addService}>
          Add Service
        </Button>
      </Form>
      <br />
      <ListGroup className="d-flex flex-row justify-content-between">
        {services.map((service, index) => (
          <ListGroup.Item key={index} className="rounded">
            <h5>Service {index + 1}</h5>
            <p>
              <strong>EN:</strong> {service.textEN}
            </p>
            <p>
              <strong>PT:</strong> {service.textPT}
            </p>
            {service.image && (
              <div
                className="d-flex justify-content-center rounded-circle"
                style={{
                  backgroundColor: "#ff2727",
                  width: "85px",
                  height: "85px",
                  padding: "15px",
                }}
              >
                <Image
                  src={service.image}
                  alt={`Service ${index + 1} Image`}
                  fluid
                />
              </div>
            )}
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteService(service)}
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
