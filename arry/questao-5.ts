/**5. Organizador de Tarefas Diárias
Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função
chamada gerenciar_tarefas() que não receba argumentos. A função deve:
a) Permitir que o usuário adicione tarefas a um vetor.
b) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por
exemplo).
c) Permitir que o usuário exiba todas as tarefas pendentes.
Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para
manter o programa rodando até o usuário escolher sair. */

function gerenciar_tarefas() {
  let tarefas: string[] = [];
  let op = "";

  while (op !== "4") {
    op = prompt("1-Adicionar  2-Concluir  3-Listar  4-Sair")!;

    if (op === "1") {
      tarefas.push(prompt("Nova tarefa:")!);

    } else if (op === "2") {
      let t = prompt("Tarefa concluída:")!;
      tarefas = tarefas.filter(x => x !== t);

    } else if (op === "3") {
      console.log(tarefas);
    }
  }
}
gerenciar_tarefas()