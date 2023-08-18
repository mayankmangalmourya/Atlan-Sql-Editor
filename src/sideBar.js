import React from 'react'
import {Container} from "react-bootstrap";
import FILE_NAMES from "./data/fileNames";
import { closeTab, getPropTypes, openNewTab } from "./data/utils";

function sideBar(params) {
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