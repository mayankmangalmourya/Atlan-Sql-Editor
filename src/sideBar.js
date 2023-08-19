import React from 'react'
import {Container, Row, Col, CloseButton} from "react-bootstrap";
import FILE_NAMES from "./data/fileNames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretLeft, faTable } from "@fortawesome/free-solid-svg-icons";
import { closeTab, getPropTypes, openNewTab } from "./data/utils";

sideBar.propTypes = getPropTypes(
  "activeKey",
  "tabs",
  "setTabs",
  "setActiveKey",
  "mobile"
);


function sideBar(params) {

  const menulink = FILE_NAMES.map((fileName) =>(
    <Row className="nav-item" key={fileName}>
      <Col>
        <a
          href={`/${fileName}`}
          className={
            fileName === params.activiKey ? "nav-link active" : "nav-link"
          }
          onClick={(e)=>{
            e.preventDefault();
            openNewTab(
              {
                title: fileName,
                entries: [],
              },
              params.tabs,
              params.setTabs,
              params.setActiveKey,
              `// Write Down you Query Here.`
              `select * from \`${fileName}\``
            );
          }}
        >
          <FontAwesomeIcon
            icon={fileName === params.activiKey ? faCaretDown:faCaretLeft}
          />
          {
            fileName
          }
        </a>
      </Col>
    </Row>
  ));

  // write opentab logic here

  const openTabs = params.tabs.map((tab) => (
    <Row className="nav-item align-items-center" key={tab.eventKey}>
      <Col xs={10}>
        <a
          href={`/${tab.title}`}
          className={
            tab.eventKey === params.activeKey ? "nav-link active" : "nav-link"
          }
          onClick={(e) => {
            e.preventDefault();
            params.setActiveKey(tab.eventKey);
          }}
        >
          <FontAwesomeIcon
            icon={tab.eventKey === params.activeKey ? faCaretDown : faCaretLeft}
          />{" "}
          <FontAwesomeIcon icon={faTable} /> {tab.title}{" "}
        </a>
      </Col>
      <Col xs={2}>
        <CloseButton
          style={{
            fontSize: "0.5rem",
          }}
          onClick={(e) => {
            e.stopPropagation();
            const [newTabs, newActiveKey] = closeTab(tab.eventKey, params.tabs);
            params.setTabs(newTabs);
            params.setActiveKey(newActiveKey);
          }}
        />
      </Col>
    </Row>
  ));

    return (
      <Container
        fluid
        style={{
          height: `${params.mobile ? "100%" : "calc(100vh - 8rem)"}`,
        }}
        className="sidebar"
        id={`sidebar${params.mobile ? "mobile" : ""}`}
      >
        <p>
          <div>
            <span>All Table</span>
          </div>
        </p>
        <Container fluid className='tableLinks'>
          {menulink}
        </Container>
        <hr />
        <p>Recent Tabs</p>
        <Container fluid className='tabLinks'>
          {openTabs}
        </Container>
      </Container>
    );
}

export default sideBar;