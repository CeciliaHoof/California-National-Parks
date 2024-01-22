import { Form, Segment } from "semantic-ui-react"
import {useState} from "react";

const intialFormState = {
    username: "",
    title: "",
    content: ""
}
function ParkReviewForm({park}){
    
    const [formData, setFormData] = useState(intialFormState)
    
    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    function handleSubmit(e){
        e.preventDefault()
       fetch (`http://localhost:8001/parks/${park.id}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([...park.reviews, formData])
       })
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