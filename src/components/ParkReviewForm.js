import { Form, Segment } from "semantic-ui-react"
import {useState } from "react";



function ParkReviewForm({parkId, onReviewSubmit}){

    const intialFormState = {
        username: "",
        title: "",
        content: "",
        parkId: parkId
    }
    
    const [formData, setFormData] = useState(intialFormState)

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    function handleSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:8001/reviews`, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(data =>onReviewSubmit(data))
    }



    return(
        <Segment>
            
            <Form onSubmit={handleSubmit}>
                <Form.Input label="Username"  name = "username" value = {formData.username} onChange={handleChange} />
                <Form.Input label="Review Title"  name = "title" value = {formData.title} onChange={handleChange}/>
                <Form.TextArea label="Review" name = "content" value = {formData.content} onChange={handleChange}/>
                <Form.Button>Submit Review</Form.Button>
            </Form>
        </Segment>
    )
}

export default ParkReviewForm