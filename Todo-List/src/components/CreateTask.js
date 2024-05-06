import React,{useState} from 'react';
import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';
const CreateTask = ({modal,toggle,save}) => {
  const [taskName, setTaskName] = useState('');
  const [discription, setDiscription] = useState('');

  const updatetask = (e) =>{
    setTaskName(e.target.value);
  }
  const updateDiscription = (e) =>{
    setDiscription(e.target.value);
  }

  const handlesave = () =>{
    let taskobj = {};
    taskobj["Name"] = taskName;
    taskobj["Description"] = discription;
    save(taskobj);
  }
  return (
    <div>
  <Modal toggle={toggle} isOpen={modal}>
    <ModalHeader toggle={toggle}>
      Create Task
    </ModalHeader>
    <ModalBody>
       <form>
          <div className='form-group'>
                 <label>Task Name</label>
                 <input type="text" className='form-control' value={taskName} onChange={updatetask}/>
          </div>
          <div className='form-group'>
                <label>Description</label>
                 <textarea rows="5" className='form-control' value={discription} onChange={updateDiscription}>
                  </textarea>
          </div>
       </form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={handlesave} >
        Create
      </Button>
      {' '}
      <Button onClick={toggle} >
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
</div>
  );
};

export default CreateTask;