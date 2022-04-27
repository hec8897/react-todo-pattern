import { useContext } from "react";
import { listContext } from '../index'
import Button from "./Button";
import List from "./List";

function TodoList() {
    const { list, removeList } = useContext(listContext);
    return (
        <ul>
            {list.map((ele) =>
                <List key={ele.id}>
                    <b>{ele.desc}</b>
                    <Button id={ele.id} onClick={removeList}>삭제</Button>
                </List>)
            }
        </ul>
    )
}

export default TodoList;