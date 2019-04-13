import React from 'react'
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function QuestionsList(props) {
    const { questions, users } = props

    return (
        <div style={{padding:10,border:'1px solid #d8d8d8'}}>
            {
                Object.values(questions).sort((a,b) => b.timestamp - a.timestamp).map((q) => (
                    <Card key={q.id} className="mt-3">
                        <Card.Header>
                            {users[q.author].name} asks:
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={{span:4}}  style={{textAlign:'center',marginTop:'auto',marginBottom:'auto'}}>
                                    <img src={users[q.author].avatarURL} style={{borderRadius: '200px',width:'85%'}} alt="avatar" />
                                </Col>
                                <Col>
                                    <Card.Title>Would you rather...</Card.Title>

                                    <ListGroup.Item>A) {q.optionOne.text}</ListGroup.Item>
                                    <ListGroup.Item>B) {q.optionTwo.text}</ListGroup.Item>
                                    <Link to={'questions/' + q.id } > 
                                        <Button className="mt-2" variant="primary">View Poll</Button>
                                    </Link>
                                   
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default QuestionsList
