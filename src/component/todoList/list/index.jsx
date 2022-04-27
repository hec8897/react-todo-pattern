import { useContext } from "react";
import { listContext } from '../index'
import Button from "./Button";
import List from "./List";
import './index.scss'

function TodoList() {
    const { list, removeList, activeList } = useContext(listContext);
    return (
        <ul className="body flex-col">
            {list.map((ele) =>
                <List key={ele.id}>
                    <span className="body__label" onClick={() => activeList(ele.id)} style={{ background: ele.active ? '#dcdcdc' : '' }}>{ele.desc}</span>
                    <Button id={ele.id}  onClick={removeList}>삭제</Button>
                </List>)
            }
        </ul>
    )
}

export default TodoList;