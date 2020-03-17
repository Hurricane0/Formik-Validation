import React from "react";

const Error = ({ touched, error }) => {
    if (!touched) {
        return null;
    }
    if (error) {
        return <div className="invalid-feedback">{error}</div>;
    }
    return <div className="valid-feedback">Correct</div>;
};

export default Error;
