import { faArrowCircleDown, faArrowAltCircleDown, faPlay, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

function queryButton(params) {
    const buttons = [
        {
            icon: faPlay,
            title: "Run Query",
        },
        {
            icon: faSave,
            title: "Save Query",
        },
        {
            icon: faArrowAltCircleDown,
            title: "Export data as CSV",
        },
        {
            icon: faArrowCircleDown,
            title: "Export data as JSON",
        },
    ].map(({ icon, title }, index) => (
        <Button
                size={"md"}
                variant={"outline-primary"}
                style={{
                    borderLeft: 1,
                    borderTop: "none",
                    borderBottom: "none",
                    borderRadius: 1,
                    padding: "0.5rem",
                    marginLeft: "0.3rem",
                }}
            className={"mr-2 query-button"}
            key={index}
        >
            <FontAwesomeIcon icon={icon} /> {title}
        </Button>
    ));
    return(
        <ButtonToolbar className = "mb-3 mt-3">
            <ButtonGroup className="me-2">
                {buttons}
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default queryButton;