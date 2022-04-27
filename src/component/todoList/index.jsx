import { useState, useRef, createContext } from 'react';
import CreateList from './create';
import TodoList from './list';

const listContext = createContext({
    list: [],
    addList: () => { },
    removeList: () => { },
    activeList: () => { }
})

function Todo() {
    const nextId = useRef(2);

    const [list, SetList] = useState(
        [
            { id: 0, desc: 'dawoon', active: false },
        ]
    );

    const removeList = (id) => {
        SetList(list.filter((ele) => ele.id !== id));
    }

    const activeList = (id) => {
        SetList(list.map((ele) => {
            return ele.id === id ? { ...ele, active: !ele.active } : ele
        }));
    }

    const addList = (desc) => {
        SetList([...list, { id: nextId.current, active: false, desc }])
        nextId.current += 1;
    }

    return (
        <listContext.Provider
            value={{ list, addList, removeList, activeList }}>
            <CreateList />
            <TodoList />
        </listContext.Provider>
    );
}

export { Todo, listContext };
