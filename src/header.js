import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "././logo.svg";
import { openNewTab } from "./data/utils";
function header(props) {
  return (
    <Navbar className="shadow p-3">
      <Container fluid>
        <Navbar.Brand href="#home">
          <div className="header-top">
            <Logo width={100} />
          </div>
        </Navbar.Brand>
        <Navbar.Text>
          <Button
            className="search-btn"
            variant={"outline-primary"}
            onClick={() => {
              openNewTab(
                {
                  title: `Query ${props.queryCount}`,
                  entries: [],
                },
                props.tabs,
                props.setTabs,
                props.setActiveKey
              );
              props.setQueryCount(props.queryCount + 1);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
            New Query
          </Button>
          <Button
            variant={"outline-primary"}
            className="d-lg-none"
            onClick={() => {
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            aria-controls="sidebar"
            aria-expanded={props.sidebarOpen}
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default header;
