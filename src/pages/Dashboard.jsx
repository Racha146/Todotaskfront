
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
import Navbardashboard from "../components/Navbardashboard"

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
export default function Dashboard(){
  

    const [taskadd,settaskadd]=useState("");
   const [listtask, setlisttask] = useState([]);
  
    const [delet,setdelet]=useState(false);
  const [edit,setedit]=useState(false);
  const [tasktoedit,settasktoedit]=useState("");
    const [tasktodelet,settasktodelet]=useState("");
    const[fieledit,setfieledit]=useState("")
    
// useEffect(() => {
//     console.log(Dashuser);
//     const TASK_KEY = `tasks_${Dashuser.username}`;
//     const savedTasks = JSON.parse(localStorage.getItem(TASK_KEY));
//     if (savedTasks) {
//         setlisttask(savedTasks);
//     }
//   }, []);
const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) return;;
    fetch("http://localhost:3000/tasks", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setlisttask(Array.isArray(data) ? data : []);
      });
  
  }, []);

  const AddTask = async (task) => {
    if (task.trim() === "") return;

    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" ,"Authorization": `Bearer ${token}`},
      
      body: JSON.stringify({ task })
    });
  
    const data = await res.json();
    setlisttask(Array.isArray(data) ? data : []);
  };
  
  const Delettask = async (Id) => {
    const res = await fetch(`http://localhost:3000/tasks/${Id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  
    const data = await res.json();
    setlisttask(Array.isArray(data) ? data : []);
  };
  
  const Edittask = async (Id, taskedited) => {
    const res = await fetch(
      `http://localhost:3000/tasks/${Id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          task: taskedited
        })
      }
    );
    const data = await res.json();
    setlisttask(data);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setdelet(false);
  };
  const handleCloseedit = () => {
    setedit(false);
  };

  const toggleComplete = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}/complete`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    const data = await res.json();
    setlisttask(data);
  };
return(
  
    <div className="bg-[#F8FAFC] w-screen h-screen flex justify-center items-center text-center ">
<Navbardashboard/>

<div className="flex-1 flex flex-col bg-[#bdd8f3] w-96 h-auto m-2 rounded-lg p-8 shadow-xl md:items-start justify-start md:p-10 md:m-4  ">
    <h1 className="text-2xl font-bold md:text-3xl ">Welcome </h1>
    <div className="flex justify-center w-full m-4">
<input type="text" placeholder="Add Task" className="w-full h-12 py-1 px-2  border-gray-300 rounded-md text-gray-800
  focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" value={taskadd} onChange={(e)=>{settaskadd(e.target.value);}} />

<button
  disabled={taskadd.trim() === ""}
  className={`font-semibold p-1 h-12 ml-1 rounded-md transition
    ${taskadd.trim() === ""
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-[#3B82F6] hover:bg-[#2765c7] hover:scale-105"}
  `}
  onClick={()=>{AddTask(taskadd);settaskadd("");}}
>
  Add
</button>


    </div>

<div className="flex flex-col justify-start mt-6 w-full p-3 shadow-sm bg-[#d8e3ee] rounded-lg">
<h1 className="m-2 text-xl font-bold text-left ">Task Manger</h1>
<div>

    {listtask.map((task)=>{
        return( <div key={task.id} className={` ${task.completed ? "line-through text-gray-500" : ""}flex justify-between w-full  bg-[#ededed] rounded-md shadow-sm text-left hover:bg-[#e0e0e0] mt-2`}>
        <h2 className="m-2">{task.task}</h2>
            <div className='ml-1'>
          <button className="font-semibold p-1 h-12   text-[#22C55E] hover:text-[#2f9655] bg-transparent cursor-pointer" onClick={()=>{setedit(true);settasktoedit(task.id); setfieledit(task.task);}}><EditIcon/></button>
          <button className="font-semibold p-1 h-12 ml-1  text-[#fd5555] hover:text-[#e03f3f] bg-transparent cursor-pointer" onClick={()=>{setdelet(true);settasktodelet(task.id);}}><DeleteIcon/></button>
          <button
  onClick={() => toggleComplete(task.id)}
  className="text-blue-500"
>
  ✔
</button>
          </div> </div>)
    })}
   
</div>
<div>
{listtask.length === 0 && (
  <p className="mt-2 text-gray-700">No more tasks</p>
)}
</div>
</div>


</div>

<div> 
    {delet &&(
         <Dialog
         fullScreen={fullScreen}
         open={delet}
         onClose={handleClose}
         aria-labelledby="responsive-dialog-title"
       >
         <DialogTitle id="responsive-dialog-title">
           {"Are you sure?"}
         </DialogTitle>
         <DialogContent>
           <DialogContentText>
           This action cannot be undone.  
    Are you sure you want to delete this task?
           </DialogContentText>
         </DialogContent>
         <DialogActions>
           <Button autoFocus color='error' onClick={()=>{handleClose();Delettask(tasktodelet);}}>
           Delete
           </Button>
           <Button onClick={handleClose} autoFocus>
             Cancel
           </Button>
         </DialogActions>
       </Dialog>
    )}
</div>
<div>
<Dialog open={edit} onClose={handleCloseedit}>
        <DialogTitle>Edit task</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Update your task name below
          </DialogContentText>
          <form   onSubmit={(e) => {
    e.preventDefault();
    Edittask(tasktoedit, fieledit);
    setedit(false);
    setfieledit("");
  }} id="edit-form">
            <TextField
            value={fieledit}
            onChange={(e)=>{setfieledit(e.target.value)}}
              autoFocus
              required
              margin="dense"
              id="name"
            
                label="Task"
              type="text"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseedit}>Cancel</Button>
          <Button type="submit" form="edit-form">
           Edit
          </Button>
        </DialogActions>
      </Dialog>
</div>

</div>

 
  
)

}