import React,{useState,useEffect} from 'react';
import CreateTask from './CreateTask';
import Card from './Crad';
 
 
const Todolist = () => {
  const [model, setModel] = useState(false);

  const[taskList,setTaskList] = useState([]);
  //fetching Internal Storage
    
    useEffect(() => {
          let arr = localStorage.getItem("TaskList"); 
          if(arr){
            let obj = JSON.parse(arr);
            setTaskList(obj);
          }
    }, [])
  // Adding Task to The Task list And in the Internal Storage

  const savetask = (taskobj) =>{
     let templist = taskList;
     taskList.push(taskobj);
     localStorage.setItem("TaskList", JSON.stringify(templist));
     setTaskList(templist);
     setModel(false);
  }

  //delete task from here ........ 

  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("TaskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}
  const updateListArray = (obj,index) =>{
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("TaskList",JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  }

  const toggle = () => setModel(!model);
  return (
    <>
      <div className='header text-center'>
      <h1>Todo List</h1>
      <button className='btn btn-primary mt-2' onClick={() =>{ setModel(true)
      console.log(`${model}`)}}>Create Task</button>
      </div>
      <div className='task-container'>
         {
           taskList.map( (items,index) =><Card taskobj={items} index={index} deleteTask = {deleteTask} updateListArray={updateListArray}/>)
         }
      </div>
      <CreateTask toggle={toggle} modal={model} save={savetask} />
    </>
  );
};

export default Todolist;