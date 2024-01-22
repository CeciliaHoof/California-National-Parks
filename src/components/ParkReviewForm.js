import { Form, Segment } from "semantic-ui-react"

function ParkReviewForm({ park }){
    
    return(
        <Segment>
            
            <Form>
                <Form.Input label="Username" />
                <Form.Input label="Review Tile" />
                <Form.TextArea label="Review" />
                <Form.Button>Submit Review</Form.Button>
            </Form>
        </Segment>
    )
}

export default ParkReviewForm