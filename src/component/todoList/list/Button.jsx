function Button({ children, id, onClick }) {

    return (
        <button className="body__btn btn" onClick={() => onClick(id)}>{children}</button>
    )
}

export default Button;