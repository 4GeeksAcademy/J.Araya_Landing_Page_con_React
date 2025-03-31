import React from "react";
import Card from "../components/Card";

const Cards = () =>{
    return (
        <div className="d-flex p-2 m-1">
            <Card urlImage="https://picsum.photos/200/300?random=1"/>
            <Card urlImage="https://picsum.photos/200/300?random=2"/>
            <Card urlImage="https://picsum.photos/200/300?random=3"/>
            <Card urlImage="https://picsum.photos/200/300?random=4"/>
        </div>
    )
}

export default Cards;