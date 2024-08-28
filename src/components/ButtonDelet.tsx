import { Trash2 } from "lucide-react";

interface ButtonDeletProps {
  deletTask: (title: string) => void;
  title: string;
}

export function ButtonDelet({ deletTask, title }: ButtonDeletProps) {
  return (
    <div>
      <Trash2
        onClick={() => deletTask(title)}
        className="size-5 text-[#6B6572] hover:text-[#C2464D]"
      />
    </div>
  );
}
