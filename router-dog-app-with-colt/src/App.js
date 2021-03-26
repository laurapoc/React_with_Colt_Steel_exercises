import NavBar from "./Navbar";
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import hazel from "./images/hazel.jpg";
import "./App.css";

import React, { Component } from "react";
import Routes from "./Routes";

export default class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: ["Hazel has soooo much energy!", "Hazel is highly intelligent.", "Hazel loves people more than dogs."],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: ["Tubby is not the brightest dog", "Tubby does not like walks or exercise.", "Tubby loves eating food."],
      },
    ],
  };
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }

  render() {
    return (
      <div>
        <NavBar ref={this.wrapper} dogs={this.props.dogs} />
        <div className="container">
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

// function App() {

//   return (
//     <div>
//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Form inline>
//             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Navbar>

//       <h1>Dog App</h1>
//     </div>
//   );
// }

// export default App;
