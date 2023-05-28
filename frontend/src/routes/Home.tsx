import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1> Project D - Home </h1>
            <Button onClick={() => alert('Button clicked')}> Test Button </Button>
        <div style={{ height: "2000px" }}>
        </div>
        </div>
    )
}

export default Home;