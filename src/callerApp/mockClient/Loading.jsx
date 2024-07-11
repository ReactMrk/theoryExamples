import React from "react";

const Loading = ({showLoading}) => {
    return (
        <>
            {showLoading ? <p>Loading a response from the server...</p> : null}
        </>
    );
};

export default Loading;