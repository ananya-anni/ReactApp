import {FaTrash,FaCircle,FaStar} from 'react-icons/fa'
const IndividualTask=({task,onDelete,onComplete,onImportant})=>{

  
    return(
        <>
            <div className="tasks">
                <FaCircle onClick={()=>onComplete(task.id)} style={{fontSize:'12px',marginRight:'1%'}} className="complete"/>
            {task.text} 
            <FaTrash className="btn" onClick={()=>onDelete(task.id)} style={{cursor:'pointer'}}/>
            <FaStar className={`btn btn-mark ${task.marked?'marked':''}`}style={{marginRight:'2%',textShadow:'0 0 3px #000'}} onClick={()=>onImportant(task.id,task.marked)}/>
            </div>
        </>
    )
}
export default IndividualTask