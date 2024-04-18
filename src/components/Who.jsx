import React from "react";

export default function Who(props) {
    return (
        <div className="card">
            <img src={`../img/${props.item.img}`} alt="nft image" className="who--img" />
            <a href="#" className="name--link">{props.item.link}</a>
            <p className="name--job">{props.item.job}</p>
        </div>

    )
}