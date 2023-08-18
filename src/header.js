import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "././logo.svg";
function header() {
  return (
    <Navbar className="shadow p-3">
      <Container fluid>
        <Navbar.Brand href="#home">
          <div className="header-top">
            <Logo width={100} />
          </div>
        </Navbar.Brand>
        <Navbar.Text>
          <Button>
            <FontAwesomeIcon icon={faPlus} />
            New Query
          </Button>
          <Button>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default header;
