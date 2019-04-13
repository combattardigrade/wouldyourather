import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
function Loading(props) {
    return (
        <Container>
            <Row className="mt-4">
                <Col md={{span:8,offset:2}} style={{textAlign:'center'}}>
                    <Spinner style={{marginTop:'30vh'}} animation="grow" role="status" size="lg" variant="primary">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </Col>
            </Row>
        </Container>
    )
}

export default Loading