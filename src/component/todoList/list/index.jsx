import { useContext } from "react";
import { listContext } from '../index'
import Button from "./Button";
import List from "./List";

function TodoList() {
    const { list, removeList, activeList } = useContext(listContext);
    return (
        <ul>
            {list.map((ele) =>
                <List key={ele.id}>
                    <b onClick={() => activeList(ele.id)} style={{ background: ele.active ? '#dcdcdc' : '' }}>{ele.desc}</b>
                    <Button id={ele.id} onClick={removeList}>삭제</Button>
                </List>)
            }
        </ul>
    )
}

export default TodoList;