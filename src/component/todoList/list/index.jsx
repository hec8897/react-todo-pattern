import { useContext } from "react";
import { listContext } from '../index'
import Button from "./Button";
import List from "./List";
import './index.scss'
import Lable from "./lable";

function TodoList() {
    const { list, removeList, activeList } = useContext(listContext);
    return (
        <ul className="body flex-col">
            {list.map((ele) =>
                <List key={ele.id}>
                    <Lable id={ele.id} active={ele.active}>{ele.desc}</Lable>
                    {/* <span className={!ele.active ? "body__label" : "body__label body__label--active"} onClick={() => activeList(ele.id)}>{ele.desc}</span> */}
                    <Button id={ele.id} onClick={removeList}>삭제</Button>
                </List>)
            }
        </ul>
    )
}

export default TodoList;