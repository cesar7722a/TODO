import { CirclePlus, ClipboardList } from "lucide-react"

function App() {

  return <div className="flex flex-col items-center">
   <div className="h-44 w-full bg-[#E0DCE4] text-5xl flex justify-center items-center">
      <h1 className="text-[#9359F3] font-bold">
        <span className="text-[#479C6E]">to</span>
        do
      </h1>
   </div>
   <div className="flex justify-center items-center mt-[-32px] w-[736px] h-14 gap-2">
    <input 
    type="text"
    placeholder="Adicionar uma nova tarefa"
    className="border w-[618px] rounded-lg px-4 py-2
    bg-[#F0EDF2] outline-none focus:border-[#9359F3] border-[#E0DCE4]"
    />
    <button 
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
          344
        </span>
      </span>
      <span className="flex gap-2 items-center text-[#6B6572]">
        Concluídas
        <span className="px-1.5 flex justify-center items-center bg-[#BFE3D0] text-[#2D6C4A] rounded-full font-bold">
          344
        </span>
      </span>
    </div>
    <div className="h-px bg-[#E0DCE4]"/>
    <div>
       <div>
        <ClipboardList className="w-9 h-11 text-[#DDD2EF] mx-auto" />
        <p className="text-[#6B6572] font-semibold text-center">Você ainda não tem tarefas cadastradas</p>
        <p className="text-[#6B6572] text-center">Crie tarefas e organize seus itens a fazer</p>
       </div>
    </div>
   </div>
  </div>
}

export default App
