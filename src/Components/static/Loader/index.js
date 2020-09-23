import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ message }) => {
    return (
        <div>
            <Spinner size="sm" animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
            {" "}
            {message}
        </div>
    )
}

export default Loader;

