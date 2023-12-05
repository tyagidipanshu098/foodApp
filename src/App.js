import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Bottom from "./Components/Bottom.js";


const App = () => {
    return (
        <>
            <Body />
            <Bottom />
        </>
    );

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);