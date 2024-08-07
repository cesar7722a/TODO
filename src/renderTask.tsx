import { Circle, ClipboardList, Trash2 } from "lucide-react"
import { ComponentProps } from "react"
import { IoIosCheckmarkCircle } from "react-icons/io"

interface AppProps {
  title: string;
  done:boolean;
}


interface RenderTaskProps extends ComponentProps<`div`> {
  deletTask: (task:string)=> void
  taskDone: (tasktitle:string)=> void
  tasks: AppProps[]
}


export function RenderTask({deletTask,taskDone,tasks}:RenderTaskProps){

  return(
  <div> 
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
    )
}