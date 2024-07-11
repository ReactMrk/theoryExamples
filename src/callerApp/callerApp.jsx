import React, {useState} from "react";
import Client from "./mockClient/Client";
import Loading from "./mockClient/Loading";

const CallerApp = () => {
    const [showLoading, setShowLoading] = useState(false);
    const [data, setData] = useState("");
    return (
        <div className="container">
            <h1>Mock Client Example</h1>
            <Client showLoading={showLoading} setShowLoading={setShowLoading} setData={setData}/>
            <Loading showLoading={showLoading}/>
            {data && <div className="container">
                <h3>Response</h3>
                {data}
                <div className="clientButton">
                    <button onClick={() => setData('')}>Clear Data</button>
                </div>
            </div>}
        </div>
    );
};

export default CallerApp;