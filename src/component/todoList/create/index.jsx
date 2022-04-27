import { useState } from "react";


function CreateList({addList}) {
    const [input,setInput] = useState('');

    const onChange = (e) =>{
        const {value} = e.target
        setInput(value)
    }
    return (
        <div>
            <input type="text" value={input} onChange={onChange}/>
            <button onClick={()=>addList(input)}>저장</button>
        </div>
    )
}

export default CreateList;