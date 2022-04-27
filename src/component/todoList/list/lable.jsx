import { useContext } from "react";
import { listContext } from '../index'

function Label({ children, id, active }) {
    const { activeList } = useContext(listContext);
    return (
        <span
            className={!active ? "body__label" : "body__label body__label--active"} 
            onClick={() => activeList(id)}
        >{children}</span>
    );

}

export default Label;