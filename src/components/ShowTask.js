export const ShowTask = ({taskList,setTasklist,task,setTask}) => {

    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter((todo) => todo.id !== id);
        setTasklist(updatedTaskList);
      };

    const handleEdit = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask);
    };  
    

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">ToDO_</span>
                <span className="countTask">{taskList.length}</span>
            </div>
            <button className="clearAll" onClick={()=>setTasklist([])}>Clear All</button>
        </div>
        <ul>
            {taskList.map( (todo)=>(
                <li key={todo.id}>
                <p>
                    <span className="name">{todo.name}</span>
                    <span className="time">{todo.time}</span>
                </p>
                <i onClick={()=>handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                <i onClick={()=>handleDelete(todo.id)} className="bi bi-trash"></i>
            </li>
            ) )}
        </ul>
    </section>
  )
}
