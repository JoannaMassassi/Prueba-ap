import React, { Component } from "react";

function Buttons (props) {
    return (
    <button className="Items">
    { props.title }
    </button>
 );
}

export default Buttons;