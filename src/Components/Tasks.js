

import IndividualTask from './IndividualTask';

const Tasks=({tasks,onDelete,onComplete,onImportant})=>{
    
      
    

    
    return(
        <>
        {tasks.map((task)=>(
            <IndividualTask key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} onImportant={onImportant}/>
        ))}
       
        </>
    )
}

export default Tasks;