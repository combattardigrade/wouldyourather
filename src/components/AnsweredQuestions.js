import React from 'react'
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AnsweredQuestions(props) {
    const { questions, users, authedUser } = props
    const { answers } = users[authedUser]

    return (
        <div style={{ padding: 10, border: '1px solid #d8d8d8' }}>
            {
                Object.values(questions).filter((q) => Object.keys(answers).includes(q.id)).sort((a, b) => b.timestamp - a.timestamp).map((q) => (
                    <Card key={q.id} className="mt-3">
                        <Card.Header>
                            {users[questions[q.id].author].name} asks:
                    </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={{ span: 4 }} style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
                                    <img src={users[questions[q.id].author].avatarURL} style={{ borderRadius: '200px', width: '85%' }} alt="avatar" />
                                </Col>
                                <Col>
                                    <Card.Title>Would you rather...</Card.Title>

                                    <ListGroup.Item>...{questions[q.id][answers[q.id]].text} ...</ListGroup.Item>

                                    <Link to={'questions/' + q.id} >
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