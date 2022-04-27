import Button from "./Button";
import List from "./List";

function TodoList({list}) {
    return (
        <ul>
            {list.map((ele)=><List key={ele.id}>
                <b>{ele.desc}</b>
                <Button id={ele.id}>수정1</Button>
                <Button id={ele.id}>삭제</Button>
            </List>)}
        </ul>
    )
}

export default TodoList;