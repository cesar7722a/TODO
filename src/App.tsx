import { CirclePlus } from "lucide-react"

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
    className="border w-[618px] rounded-lg px-4 py-2 bg-[#F0EDF2] outline-none focus:border-[#9359F3]"
    />
    <button className="bg-[#6F3CC3] font-bold px-6 py-2.5 rounded-lg flex gap-2 text-[#F0EDF2]">
      <span>Criar</span>
      <CirclePlus />
    </button>
   </div>
  </div>
}

export default App
