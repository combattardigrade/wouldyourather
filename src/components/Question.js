import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Container, Row, Col, ButtonGroup, ProgressBar, Badge } from 'react-bootstrap'

class Question extends Component {

    state = {
        option: ''
    }

    handleOptionChange = (option) => {
        this.setState({
            option
        })
    }

    render() {
        const questionId = this.props.match.params.id
        const { questions, users, authedUser } = this.props
        const authorId = questions[questionId].author
        const authorName = users[authorId].name
        const optionOneVotes = (questions[questionId].optionOne.votes).length
        const optionTwoVotes = (questions[questionId].optionTwo.votes).length
        const totalVotes = optionOneVotes +  optionTwoVotes
        
        return (
            <Container>
                <Row className="mt-4">
                    <Col md={{span:8,offset:2}}>
                        {
                            users[authedUser].answers[questionId] === undefined
                                ?
                                <Card>
                                    <Card.Header><b>{authorName} asks:</b></Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={{ span: 4 }} style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
                                                <img src={users[authorId].avatarURL} style={{ borderRadius: '200px', width: '85%' }} />
                                            </Col>
                                            <Col>
                                                <Card.Title>Would you rather...</Card.Title>
                                                <Row>
                                                    <Col><ButtonGroup vertical>
                                                        <Button variant='light' onClick={(e) => { this.handleOptionChange('optionA') }} active={this.state.option === 'optionA'} >{questions[questionId].optionOne.text}</Button>
                                                        <Button variant='light' className="mt-2" onClick={(e) => { this.handleOptionChange('optionB') }} active={this.state.option === 'optionB'}>{questions[questionId].optionTwo.text}</Button>
                                                    </ButtonGroup></Col>
                                                </Row>

                                                <Button onClick={this.handleClick} className="mt-2" variant="primary">Vote</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                : 
                                <Card>
                                    <Card.Header><b>Asked by {authorName}</b></Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={{ span: 4 }} style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
                                                <img src={users[authorId].avatarURL} style={{ borderRadius: '200px', width: '85%' }} />
                                            </Col>
                                            <Col>
                                                <Card.Title>Results:</Card.Title>                                                
                                                <div style={{backgroundColor:users[authedUser].answers[questionId] === 'optionOne' ? 'rgba(0, 123, 255, 0.17)':'#f7f7f7',padding:20,border:'1px solid rgb(223, 223, 223)'}}>
                                                    {users[authedUser].answers[questionId] === 'optionOne' ? <Badge variant="warning">Your vote</Badge> : null}
                                                    <div style={{fontWeight:'bold',fontSize:22,padding:'10px 0px 20px 0px'}}>Woud you rather {questions[questionId].optionOne.text}?</div>
                                                    <ProgressBar now={optionOneVotes / totalVotes * 100} label={`${optionOneVotes / totalVotes * 100}%`} />
                                                    <div style={{textAlign:'center',fontWeight:'bold',padding:'10px 0px'}}>{optionOneVotes} out of votes {totalVotes}</div>
                                                </div>
                                                <div style={{backgroundColor:users[authedUser].answers[questionId] === 'optionTwo' ? 'rgba(0, 123, 255, 0.17)':'#f7f7f7',padding:20,border:'1px solid rgb(223, 223, 223)',marginTop:20}}>
                                                    {users[authedUser].answers[questionId] === 'optionTwo' ? <Badge variant="warning">Your vote</Badge> : null}
                                                    <div style={{fontWeight:'bold',fontSize:22,padding:'10px 0px 20px 0px'}}>Woud you rather {questions[questionId].optionTwo.text}?</div>
                                                    <ProgressBar now={optionTwoVotes / totalVotes * 100} label={`${optionTwoVotes / totalVotes * 100}%`} />
                                                    <div style={{textAlign:'center',fontWeight:'bold',padding:'10px 0px'}}>{optionTwoVotes} out of votes {totalVotes}</div>
                                                </div>                                                
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>

                        }
                    </Col>
                </Row>
            </Container>
        )
    }

}


function mapStateToProps({ questions, users, authedUser }) {
    return {
        questions,
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Question)