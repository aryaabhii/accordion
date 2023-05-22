import React, { useState } from "react";
import { questions } from "./api";
import "./accordian.css";
import MyAccordian from "./MyAccordian";

const Accordian = () => {

    const [data, setData] = useState(questions);

    return (
        <>
            <section className="main-div">
                <h1>React Interview Questions</h1>
                {
                    data.map((curEle) => {
                        const { id, question, answer } = curEle;
                        return <MyAccordian key={id}  {...curEle} />
                    })
                }
            </section>
        </>
    )
}

export default Accordian;