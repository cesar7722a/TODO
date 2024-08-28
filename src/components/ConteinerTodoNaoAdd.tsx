import { ClipboardList } from "lucide-react";

export function ContainerTodoNaoAdd() {
  return (
    <div>
      <ClipboardList className="w-9 h-11 text-[#DDD2EF] mx-auto" />
      <p className="text-[#6B6572] font-semibold text-center">
        Você ainda não tem tarefas cadastradas
      </p>
      <p className="text-[#6B6572] text-center">
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
