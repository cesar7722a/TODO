import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { useImmer } from "use-immer";
import { RenderTask } from "./renderTask";
import { AppProps } from "./components/type";

function App() {
  const [tasks, updateTasks] = useImmer<AppProps[]>([]);

  const taskConcluídas = tasks.filter((t) => t.done !== false);
  const [title, setTitle] = useState<string>(``);

  function addTask() {
    if (title.length === 0) return;

    updateTasks((draft) => {
      draft.push({
        title: title,
        done: false,
      });

      draft.sort((a, b) => {
        if (a.done === b.done) {
          return 0;
        }
        return a.done ? 1 : -1;
      });
    });
    setTitle("");
  }

  function deletTask(titleTask: string) {
    updateTasks((draft) => {
      const index = draft.findIndex((t) => t.title === titleTask);
      draft.splice(index, 1);
    });
  }

  function taskDone(titleTask: string) {
    updateTasks((draft) => {
      const todo = draft.find((t) => t.title === titleTask);

      if (todo) todo.done = true;

      draft.sort((a, b) => {
        if (a.done === b.done) {
          return 0;
        }
        return a.done ? 1 : -1;
      });
    });
  }

  return (
    <div className="flex flex-col items-center pb-4">
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
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addTask}
          className="hover:bg-[#9359F3] bg-[#6F3CC3] font-bold px-6 py-2.5 rounded-lg flex gap-2 text-[#F0EDF2]"
        >
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
        <div className="h-px bg-[#E0DCE4]" />
        <RenderTask deletTask={deletTask} taskDone={taskDone} tasks={tasks} />
      </div>
    </div>
  );
}
export default App;
