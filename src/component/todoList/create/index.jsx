import { useState } from "react";
import { useContext } from "react";
import { listContext } from '../index'

function CreateList() {
    const { addList } = useContext(listContext);
    const [input, setInput] = useState('');

    const onChange = (e) => {
        const { value } = e.target
        setInput(value)
    }
    
    return (
        <div>
            <input type="text" value={input} onChange={onChange} />
            <button onClick={() => addList(input)}>저장</button>
        </div>
    )
}

export default CreateList;