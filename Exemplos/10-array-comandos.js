let entrada = require('prompt-sync')(); 

let tarefas = [
    {
        id: 1, 
        tarefa: 'Estudar js', 
        realizada: false
    }, 
    {
        id: 2, 
        tarefa: 'Estudar BD', 
        realizada: false
    }, 
    {
        id: 3, 
        tarefa: 'Dormir', 
        realizada: true
    }
];

let opcao = 0;

do {
    
    console.log('LISTA DE TAREFAS');
    console.log('1 - Listar tarefas pendentes');
    console.log('2 - Listar tarefas realizadas');
    console.log('3 - Adicionar tarefa'); 
    console.log('4 - Editar tarefa');
    console.log('5 - Excluir tarefa');
    console.log('0 - Encerrar');
    opcao = entrada('Selecione uma opção:');0


    if (opcao == 1) {
        
        console.log('Tarefas Pendentes!!!');

        for(const cont in tarefas) {
        
        console.log('ID: ' + tarefas[cont].id + '\n' + 'Tarefa: '+ tarefas[cont].tarefa +
        '\n' + 'Realizada ' + tarefas[cont].realizada);
        console.log('---------------------------------------');
    }

    }

    if (opcao == 2) {
        console.log('Tarefas realizadas:');
        tarefas.forEach(function(tarefa) {
            if (tarefa.realizada) {
                console.log(`${tarefa.id} - ${tarefa.tarefa}`);
            }
        });
    }


    if (opcao == 3) {
        
    }

    if (opcao == 4) {
        
    }

    if (opcao == 5) {
        
    }

} while (opcao != 0); 

console.log('Programa encerrado!');
entrada();