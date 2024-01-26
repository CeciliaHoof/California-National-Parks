import { Form, Dropdown } from "semantic-ui-react";
import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 5px;
`;

const initialState = {
  "activity": "",
  "wildlife": "",
}

function ParkFilter({ onSubmitForm }) {
  const [formData, setFormData] = useState(initialState) 

  const activities = [
    "Snowshoeing",
    "Whale Watching",
    "Paddling",
    "Rock Climbing",
    "Scenic Driving",
    "Biking",
  ];
  const activityOptions = activities.map((activity) => {
    return { key: activity, text: activity, value: activity };
  });

  const wildlife = [
    "Black Bear",
    "California Condor",
    "Sierra Nevada Red Fox",
    "Mountain Lion",
    "California Sea Lion",
  ];
  const wildlifeOptions = wildlife.map((animal) => {
    return { key: animal, text: animal, value: animal };
  });

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitForm(formData);
    setFormData(initialState)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Dropdown
        selection
        name="activity"
        value={formData.activity}
        options={activityOptions}
        placeholder="Select Activity"
        onChange={(e, { value }) => setFormData({...formData, "activity": value})}
      />
      <Dropdown
        selection
        name="Wildlife"
        value={formData.wildlife}
        options={wildlifeOptions}
        placeholder="Select Animal"
        onChange={(e, { value }) => setFormData({...formData, "wildlife": value})}
      />
      <Form.Button type="submit">Submit</Form.Button>
    </StyledForm>
  );
}
export default ParkFilter;
