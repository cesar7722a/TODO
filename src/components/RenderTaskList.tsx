import { IoIosCheckmarkCircle } from "react-icons/io";
import { ButtonDelet } from "./ButtonDelet";
import { Circle } from "lucide-react";

interface RenderTaskListProps {
  done: boolean;
  title: string;
  deletTask: (title: string) => void;
  taskDone: (title: string) => void;
}

export function RenderTaskList({
  deletTask,
  done,
  title,
  taskDone,
}: RenderTaskListProps) {
  return done ? (
    <li
      key={title}
      className="rounded-lg flex gap-3 p-4 items-center border border-[#DDD2EF]
bg-[#F0EDF2] hover:bg-[#E5E2E9] cursor-pointer"
    >
      <div>
        <IoIosCheckmarkCircle className="size-5 text-[#479C6E]" />
      </div>
      <p className="w-[636px] h-full text-[#6B6572] line-through">{title}</p>
      <ButtonDelet deletTask={deletTask} title={title} />
    </li>
  ) : (
    <li
      key={title}
      onClick={() => taskDone(title)}
      className="rounded-lg flex gap-3 p-4 items-center border border-[#DDD2EF]
bg-[#E0DCE4] hover:bg-[#E5E2E9] cursor-pointer"
    >
      <div>
        <Circle className="size-5 text-[#6F3CC3]" />
      </div>
      <p className="w-[636px] h-full text-[#262428]">{title}</p>
      <ButtonDelet deletTask={deletTask} title={title} />
    </li>
  );
}
