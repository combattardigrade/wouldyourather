import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { setAuthedUser } from '../actions/authedUser'

class MyNav extends Component {   
    
    handleLogout = (e) => {        
        this.props.dispatch(setAuthedUser(null))   
    }

    render() {
        const { authedUser, users, location } = this.props
        return (
            <Navbar bg="primary" variant="dark" expand="lg">
                <LinkContainer to="/" >
                    <Navbar.Brand>WouldYouRather</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={location.pathname} >
                        <LinkContainer to="/" exact>
                            <Nav.Link >Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/new">
                            <Nav.Link >New Question</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/leaderboard">
                            <Nav.Link >Leaderboard</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="ml-auto">                        
                            {
                                !authedUser
                                    ? <LinkContainer to="/login" ><Nav.Link >Login</Nav.Link></LinkContainer>
                                    : <Fragment>
                                        <div style={{display:'block',padding:'0.3rem 0',color:'white'}}>
                                            <img style={{height:20,width:20,display:'inline-block',borderRadius:50,marginRight:10}} src={users[authedUser].avatarURL}></img>
                                        </div>                                    
                                        <div style={{display:'block',padding:'0.5rem 1rem 0.5rem 0',color:'white'}}>                                        
                                            {users[authedUser].name}
                                        </div>
                                        <LinkContainer to="/login"><Nav.Link onClick={ this.handleLogout }>Logout</Nav.Link></LinkContainer>
                                    </Fragment>                                   
                            }                        
                    </Nav>    
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}
export default withRouter(connect(mapStateToProps)(MyNav))