import React from 'react'
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AnsweredQuestions(props) {
    const { questions, users, authedUser } = props
    const { answers } = users[authedUser]
    
    return (
        <div style={{ padding: 10, border: '1px solid #d8d8d8' }}>
            {
                Object.keys(answers).sort((a,b) => b.timestamp - a.timestamp).map((a) => (
                    <Card key={questions[a].id} className="mt-3">
                        <Card.Header>
                            {users[questions[a].author].name} asks:
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={{ span: 4 }} style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
                                    <img src={users[questions[a].author].avatarURL} style={{ borderRadius: '200px', width: '85%' }} />
                                </Col>
                                <Col>
                                    <Card.Title>Would you rather...</Card.Title>

                                    <ListGroup.Item>...{questions[a][answers[a]].text} ...</ListGroup.Item>
                                    
                                    <Link to={'questions/' + questions[a].id} >
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

export default AnsweredQuestions