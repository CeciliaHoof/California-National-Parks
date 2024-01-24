import { Form } from "semantic-ui-react";
import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background-color: #879ba8;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

const CenteredButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function ParkReviewForm({ park, onReviewSubmit }) {
  const { id, fullName } = park;

  const initialFormState = {
    username: "",
    title: "",
    content: "",
    parkId: id,
  };

  const [formData, setFormData] = useState(initialFormState);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:8001/reviews`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => onReviewSubmit(data));
    setFormData(initialFormState);
  }

  return (
    <FormContainer>
      <h3>Reviews of {fullName}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <Form.Input
          label="Review Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <Form.TextArea
          label="Review"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
        <CenteredButtonContainer>
          <Form.Button>Submit Review</Form.Button>
        </CenteredButtonContainer>
      </Form>
    </FormContainer>
  );
}

export default ParkReviewForm;
