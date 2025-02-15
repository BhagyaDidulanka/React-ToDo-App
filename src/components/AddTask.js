export const AddTask = ({taskList,setTasklist,task,setTask}) => {

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(task.id){
            const date=new Date();
            const updatedTask= taskList.map((todo)=>(
                todo.id===task.id ? { id:todo.id,name:task.name,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
            ))
            setTasklist(updatedTask);
            setTask({});
        }else{
            const date=new Date();
        const newTask ={
            id: date.getTime(),
            name:e.target.task.value,
            time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTasklist([...taskList,newTask]);
        setTask({});
        }
        
    }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task.name||""} autoComplete="off" placeholder="add task" maxLength={30} onChange={e => setTask({...task,name:e.target.value})}/>
            <button type="submit">{task.id ? "Update" : "Add"}</button>
        </form>
    </section>
  )
}
