import {useState} from 'react'

const AddTask=({tasks,onAdd})=>{

    const[name,setName]=useState('');
    const onSubmit=(e)=>{

    
    if(name===''||!(name.match(/^[a-zA-Z0-9]+/)!==null)){
        alert("Please write the task to add it!");
        setName('');
        
    }
    else{
    onAdd(name);
    setName('');
    }
   }

    function handleChange(event){
        setName(event.target.value);
    }
    return(
        <>
        <div className='add-task-button-div'>
        <button  className="add-task-button"  onClick={onSubmit} >Add Task</button>
        </div>
        <input  className="add-task" type="text"  value={name} onChange={handleChange} placeholder='Add a task'/>
        
        </>
        
    )
}

export default AddTask