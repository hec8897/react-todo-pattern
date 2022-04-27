import { useState, useRef, createContext } from 'react';
import CreateList from './create';
import TodoList from './list';

const listContext = createContext({
    list: [],
    addList: () => {},
    removeList: () => {}

})

function Todo() {
    const nextId = useRef(2);
    const [list, SetList] = useState(
        [
            { id: 0, desc: 'dawoon' },
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
        <listContext.Provider
            value={{ list, addList,removeList }}>
            <CreateList />
            <TodoList />
        </listContext.Provider>
    );
}

export { Todo, listContext };
