import React from "react";
import Button from "../components/Button";
import "./Home.css"
import ExportButton from "../components/ExportButton";

function Home() {
    return (
        <div>
            <h1> Project D - Home </h1>
            <div style={{ height: "760px" }}>
                <Button onClick={() => alert('Button clicked')}> Test Button </Button>
            </div>
            <div style={{ height: "100vh", background: "#0E1822" }}>
                <div className="circle-container">
                    <button className="upper-half" onClick={() => alert("pressed upper button")}></button>
                    <button className="bottom-half" onClick={() => alert("pressed lower button")}></button>
                </div>
                <ExportButton onClick={() => alert("hello")} disabled={false}/>
            </div>
            <div style={{ height: "100vh" }}>
            </div>
        </div>
    )
}

export default Home;