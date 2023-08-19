import './App.css';
import Header from './header';
import { useState } from "react";
import { Container, Row, Col, Collapse } from 'react-bootstrap';
import SideBar from './sideBar';
import QueryTabs from './tabs';
import "@fontsource/raleway";
import "./index.css";

function App() {
  const [activeKey, setActiveKey] = useState("");
  const [tabs, setTabs] = useState([]);
  const [queryCount, setQueryCount] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Header
        activeKey={activeKey}
        setActiveKey={setActiveKey}
        tabs={tabs}
        setTabs={setTabs}
        queryCount={queryCount}
        setQueryCount={setQueryCount}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Collapse in={sidebarOpen}>
        <div>
          <SideBar
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            tabs={tabs}
            setTabs={setTabs}
            mobile
          />
        </div>
      </Collapse>
      <Container fluid>
        <Row>
          <Col lg={2} md={3} className={"d-none d-lg-block d-xl-block"}>
            <SideBar
              activeKey={activeKey}
              setActiveKey={setActiveKey}
              tabs={tabs}
              setTabs={setTabs}
            />
          </Col>

          <Col
            lg={10}
            md={9}
            style={{
              padding: "1rem",
            }}
          >
            <QueryTabs
              tabs={tabs}
              setTabs={setTabs}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
