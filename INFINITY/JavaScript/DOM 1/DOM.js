    const input = document.getElementById('tarefa');
    const botaoAdd = document.getElementById('adicionarBtn');
    const lista = document.getElementById('listaTarefas');


    function adicionarTarefa() {
      const valor = input.value;
      if (valor === ""){
        alert("Digite algo!!");
        return;
      }

      const li = document.createElement('li');
      li.textContent = valor;

      const botaoRemove = document.createElement('button');
      botaoRemove.textContent = "Remover";
      botaoRemove.classList.add("remover");

      li.addEventListener('click', () => {
        li.classList.toggle('concluida');
      });

      botaoRemove.addEventListener('click', (event) => {
        event.stopPropagation(); // impede marcar como concluída ao remover
        lista.removeChild(li);
      });

      li.appendChild(botaoRemove);
      lista.appendChild(li);

      input.value = "";
    }


    botaoAdd.addEventListener('click', adicionarTarefa);
