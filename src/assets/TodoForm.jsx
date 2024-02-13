const TodoForm = () => {
    const todo = [
        { name: "task1", priority: "1" },
        { name: "task2", priority: "2" },
    ]
    return (
        <div
            style={{
                display: "flex",
                justifyContent:"center",
                alignItems: "center",
                width:"100%",
                height:"100%",
                border:"3px solid black",
                minHeight:300,
               flexDirection:"column",
              
            }}
        >
            <h1
              style={{
                textShadow:"red",
              }}>My Todo</h1>
            {todo.map((element,index) => (
                <div key={index}>
                    {element.name} {element.priority}
                </div>
            ))}
            <form
            style={{
                display:"block",
                fontSize:"3em",
                color:"blue",
            }}>
                <input type="text" name="n"
                style={{
                    display:"block"
                }}
                >
                </input>
                </form>
        </div>
    );
};

export default TodoForm;

