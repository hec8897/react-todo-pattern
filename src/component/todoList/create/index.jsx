import { useState } from "react";
import { useContext } from "react";
import { listContext } from '../index'
import './create.scss'

function CreateList() {
    const { addList } = useContext(listContext);
    const [input, setInput] = useState('');

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
    }

    return (
        <div className="header">
            <input className="header__Input" type="text" value={input} onChange={onChange} />
            <button className="header__btn btn" onClick={() => addList(input)}>저장</button>
        </div>
    )
}

export default CreateList;