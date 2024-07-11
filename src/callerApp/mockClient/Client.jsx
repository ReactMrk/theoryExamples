import React from "react";
import useService from "./useService";

const Client = ({setShowLoading, setData}) => {
    const [callService] = useService(setShowLoading, setData);
    return (
        <div className="clientButton">
            <button data-testid="client-button" onClick={callService}>Click me to call the service</button>
        </div>
    );
};

export default Client;