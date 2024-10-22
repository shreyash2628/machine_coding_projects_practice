import React, { useState } from "react";
import './css/MultiOptionList.css';


const MultiOptionsList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected,SetIsSelected] = useState([]);

    const list = [
        "React",
        "Java",
        "C++",
        "C",
        "Rust",
        "Django",
        ".net",
        "R",
        "Angular",
        "Python",
        "Vue.js",
        "Node.js",
        "Ruby",
        "Go",
        "Swift",
        "Kotlin",
        "PHP",
        "TypeScript",
        "Scala",
        "Elixir",
        "Perl",
        "Flutter",
        "Svelte",
        "Spring Boot",
        "Laravel",
        "GraphQL",
        "Docker",
        "Kubernetes",
        "HTML",
        "CSS",
        "SQL"
    ];


    const handleOpenDropDownButton = () => {
        setIsOpen(!isOpen);
    }

    const handleButtonSelected = (data)=>{
        if(!selected.includes(data))
        {        SetIsSelected([...selected,data]);
        }
    }

    const handleClosedButton = (data)=>{
        SetIsSelected(selected.filter((value)=>{
            return (
                value !== data
            )
        }))
    }

    return (
        <>
        <div className="selectedOptions">
            {
                selected.map((data)=>{
                    return (
                        <button className="selectedOptionsButton" onClick={()=>handleClosedButton(data)}>{data} X</button>
                    )
                })
            }

        </div>
            <div className="mainContainer">
                <button className="selectOption" onClick={handleOpenDropDownButton}>
                    Open Dropdown
                </button>
                {
                    isOpen ? <div className="optionList">
                        {list.map((data) => <button className="optionsButton" onClick={()=>{handleButtonSelected(data)}}>{data}</button>)}
                    </div> : <div className="emptyDiv"></div>
                }
            </div>
        </>
    );
};

export default MultiOptionsList;
