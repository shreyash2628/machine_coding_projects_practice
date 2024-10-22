import { useState,useEffect } from "react";

const CharacterCounter = () => {
    const [count, setCount] = useState(0);
    const [value,setValue] = useState("");

    const handleOnChangeInput = (e)=>{
        setValue(e.target.value);
    }

    useEffect(()=>{
        setCount(value.length);
        // console.log(value);
        // console.log(count);
    },[value])
    return (
        <div className="container">
            Enter character <input value={value} onChange={(e)=>handleOnChangeInput(e)}/> 
            {count}

        </div>
    )
}

export default CharacterCounter;