
        const curso ={
            nome: "Programador LifeStyle",
            professores: ["José Araújo", "Jeferson", "Ana"],
            area: "Programação",
            modaliade: "On-line"
        };
        
        curso.professores.push("Julia"); //adicionando Julia aos professores

       console.log(curso); //exibindo a lista de professores com o novo registro adicionado "julia"
       console.log(curso.professores[3]); // mostra o valor da posição 3, lembrando que começamos a contar a partir da posicao 0 e nao 1 como de costumue.
