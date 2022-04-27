function Button({ children, id, onClick }) {

    return (
        <button onClick={() => onClick(id)}>{children} {id}</button>
    )
}

export default Button;