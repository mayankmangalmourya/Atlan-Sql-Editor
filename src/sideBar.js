import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import FILE_NAMES from "./data/fileNames";
import { closeTab, getPropTypes, openNewTab } from "./data/utils";

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
          
          {
            fileName
          }
        </a>
      </Col>
    </Row>
  ))

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
        <Container fluid>

        </Container>
        <hr />
        <p>Recent Tabs</p>
        <Container fluid>

        </Container>
      </Container>
    );
}

export default sideBar;