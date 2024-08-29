import { ComponentProps } from "react";
import { AppProps } from "./components/type";
import { ContainerTodoNaoAdd } from "./components/ConteinerTodoNaoAdd";
import { RenderTaskList } from "./components/RenderTaskList";

interface RenderTaskProps extends ComponentProps<`div`> {
  deletTask: (task: string) => void;
  taskDone: (tasktitle: string) => void;
  tasks: AppProps[];
}

export function RenderTask({ deletTask, taskDone, tasks }: RenderTaskProps) {
  return (
    <div>
      {tasks.length !== 0 ? (
        <ul className="flex flex-col gap-4">
          {tasks.map((task) => (
            <RenderTaskList
              key={task.title}
              done={task.done}
              title={task.title}
              deletTask={deletTask}
              taskDone={taskDone}
            />
          ))}
        </ul>
      ) : (
        <ContainerTodoNaoAdd />
      )}
    </div>
  );
}
