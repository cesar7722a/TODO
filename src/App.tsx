import { Circle, CirclePlus, ClipboardList, Trash2 } from "lucide-react"
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useImmer } from "use-immer";


interface AppProps {
  title: string;
  done:boolean;
}
function App() {

  const [tasks, updateTasks] = useImmer<AppProps[]>([])

  const taskConcluídas = tasks.filter(t=> t.done!==false);
  const [title, setTitle] = useState<string>(``);


  function addTask(){
    updateTasks(draft=> {
       draft.push({
          title:title, done:false
       })

       draft.sort((a, b) => {
        if (a.done === b.done) {
          return 0;
        }
        return a.done? 1 : -1;
      });
      
    })
    setTitle("")
  }

  function deletTask(titleTask:string){
     updateTasks(draft=>{
      const index = draft.findIndex(t=> t.title === titleTask);
      draft.splice(index,1)
     })
  }

  function taskDone(titleTask:string){

     updateTasks(draft=>{

      const todo = draft.find(t=> t.title === titleTask);

      if(todo) todo.done=true;

      draft.sort((a, b) => {
        if (a.done === b.done) {
          return 0;
        }
        return a.done? 1 : -1;
      });

     })
  }

  return <div className="flex flex-col items-center pb-4">
   <div className="h-44 w-full bg-[#E0DCE4] text-5xl flex justify-center items-center">
      <h1 className="text-[#9359F3] font-bold">
        <span className="text-[#479C6E]">to</span>
        do
      </h1>
   </div>
   <div className="flex justify-center items-center mt-[-32px] w-[736px] h-14 gap-2">
    <input
    value={title} 
    type="text"
    placeholder="Adicionar uma nova tarefa"
    className="border w-[618px] rounded-lg px-4 py-2
    bg-[#F0EDF2] outline-none focus:border-[#9359F3] border-[#E0DCE4]"
    onChange={(e)=> setTitle(e.target.value)}
    />
    <button 
    onClick={addTask}
    className="hover:bg-[#9359F3] bg-[#6F3CC3] font-bold px-6 py-2.5 rounded-lg flex gap-2 text-[#F0EDF2]">
      <span>Criar</span>
      <CirclePlus />
    </button>
   </div>
   <div className="w-[736px] mt-8 space-y-8">
    <div className="flex justify-between">
      <span className="flex gap-2 items-center text-[#6B6572] ">
        Tarefas Criadas 
        <span className="px-1.5 flex justify-center items-center bg-[#DDD2EF] text-[#6F3CC3] rounded-full font-bold">
          {tasks.length}
        </span>
      </span>
      <span className="flex gap-2 items-center text-[#6B6572]">
        Concluídas
        <span className="px-1.5 flex justify-center items-center bg-[#BFE3D0] text-[#2D6C4A] rounded-full font-bold">
          {taskConcluídas.length}
        </span>
      </span>
    </div>
    <div className="h-px bg-[#E0DCE4]"/>
      
     {
      tasks.length !== 0? (

        <ul className="flex flex-col gap-4">

        {
          tasks.map(task=> {
           {
           return (
            task.done? (
              <li key={task.title} 
             
              className="rounded-lg flex gap-3 p-4 items-center border border-[#DDD2EF]
              bg-[#F0EDF2] hover:bg-[#E5E2E9] cursor-pointer">
      
              <div>
              <IoIosCheckmarkCircle className="size-5 text-[#479C6E]"/>
              </div>
                <p className="w-[636px] h-full text-[#6B6572] line-through">
                {task.title}
                </p>
                <div>
                  <Trash2
                  onClick={()=>deletTask(task.title)} 
                  className="size-5 text-[#6B6572] hover:text-[#C2464D]"/>
                </div>
              </li> 
            )
            :
            (
              <li key={task.title} 
               onClick={()=> taskDone(task.title)}
              className="rounded-lg flex gap-3 p-4 items-center border border-[#DDD2EF]
              bg-[#E0DCE4] hover:bg-[#E5E2E9] cursor-pointer">
     
             <div><Circle className="size-5 text-[#6F3CC3]"/></div>
               <p className="w-[636px] h-full text-[#262428]">
               {task.title}
               </p>
               <div><Trash2 
               onClick={()=>deletTask(task.title)}
               className="size-5 text-[#6B6572] hover:text-[#C2464D]"/></div>
             </li>
            )
           )
           }
          })
        }
      </ul>
      )
      :
      (
        <div>
        <ClipboardList className="w-9 h-11 text-[#DDD2EF] mx-auto" />
        <p className="text-[#6B6572] font-semibold text-center">Você ainda não tem tarefas cadastradas</p>
        <p className="text-[#6B6572] text-center">Crie tarefas e organize seus itens a fazer</p>
       </div>
      )
     }

    </div>

   </div>
}

export default App
