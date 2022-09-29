import React from "react";

export default function Counter(props) {
    return (
        <div className="mainCounter">
        <i class="fa-solid fa-clock"></i>
        <span>{props.second1}</span>
        <span>{props.second2}</span>
        <span>{props.second3}</span>
        <span>{props.second4}</span>
        <span>{props.second5}</span>
        <span>{props.second6}</span>
        </div>
    )
    }
