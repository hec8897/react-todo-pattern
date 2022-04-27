import { useState, useRef } from 'react';
import CreateList from './create';
import TodoList from './list';

function Todo() {
    const nextId = useRef(2)
    const [list, SetList] = useState(
        [
            { id: 0, desc: 'dawoon' },
            { id: 1, desc: 'dawoon-2' },
        ]
    );

    const removeList = (id) => {
        SetList(list.filter((ele) => ele.id !== id));
    }

    const addList = (desc) => {
        SetList([...list, { id: nextId.current, desc }])
        nextId.current += 1;
    }

    return (
        <>
            <CreateList addList={addList} />
            <TodoList list={list} removeList={removeList} />
        </>
    );
}

export default Todo;
