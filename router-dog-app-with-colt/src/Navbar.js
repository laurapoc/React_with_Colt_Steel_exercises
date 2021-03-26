import React, { createRef, Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.wrapper = React.createRef();
  }

  wrapper = createRef();
  render() {
    const dogLinks = this.props.dogs.map((dog) => (
      <LinkContainer exact to={`/dogs/${dog.name.toLowerCase()}`} className="nav-link" key={dog.name}>
        <Nav.Link>{dog.name}</Nav.Link>
      </LinkContainer>
    ));
    return (
      <div ref={this.wrapper}>
        <Navbar bg="dark" expand="lg" variant="dark">
          <LinkContainer to="/dogs">
            <Navbar.Brand>Dog App</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer exact to="/dogs" className="nav-link">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              {dogLinks}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
