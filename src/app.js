//As propriedades dos objetos devem ser mantidas com os nomes indicados abaixo.
// Todas as variáveis e funções deverão estar dentro do escopo do objeto. Não usar variáveis de escopo global.

var app = function () {
  // Resposta do aluno nesta variável
  var respostaAluno = null;

  // Tempo que o aluno resolveu a questão
  // no formato abaixo: horas, minutos e segundos
	var latency = "00:00:00";
	

// 	var dragged;

// /* events fired on the draggable target */
// document.addEventListener("drag", function(event) {

// }, false);

// document.addEventListener("dragstart", function(event) {
//   // store a ref. on the dragged elem
//   dragged = event.target;
//   // make it half transparent
//   event.target.style.opacity = 0.3;
// }, false);

// document.addEventListener("dragend", function(event) {
//   // reset the transparency
// 	event.target.style.opacity = "";
// }, false);

// /* events fired on the drop targets */
// document.addEventListener("dragover", function(event) {
//   // prevent default to allow drop
//   event.preventDefault();
// }, false);

// document.addEventListener("dragenter", function(event) {
//   // highlight potential drop target when the draggable element enters it
//   if (event.target.className == "div-resposta") {
//     event.target.style.background = "purple";
//   }

// }, false);

// document.addEventListener("dragleave", function(event) {
//   // reset background of potential drop target when the draggable element leaves it
//   if (event.target.className == "div-resposta") {
//     event.target.style.background = "";
//   }

// }, false);

// document.addEventListener("drop", function(event) {
//   // prevent default action (open as link for some elements)
//   event.preventDefault();
//   // move dragged elem to the selected drop target
//   if (event.target.className == "div-resposta") {
//     event.target.style.background = "";
//     dragged.parentNode.removeChild( dragged );
//     event.target.appendChild( dragged );
//   }
// }, false);



  /**
   * Variável contendo os pares
   * e a resposta correta
   * Exemplo de implementação
   * [{
   *  "id": "grupo01",
   *  "pares": [
   *      {
   *         "arrastar": {
   *              "src": "figura01.png",
   *              "descricao_title": "..."
   *          },
   *          "soltar": {
   *              "src": "figura02.png",
   *              "descricao_title": "..."
   *           }
   *       }],
   * }]
   */
  var resposta_correta = [];

  // variável parametrizável
  // com o limite de tentativas
  // após o limite, travar todas
  // as ações do aluno
  var limite_tentativas = 2;

//   const alternativas = document.querySelectorAll(".alternativa");
//   const containers = document.querySelectorAll(".container-main");

// 	alternativas.forEach((alternativa) => {
// 		alternativa.addEventListener('dragstart', dragstart)
// 		alternativa.addEventListener('drag', drag)
// 		alternativa.addEventListener('dragend', dragend)
// 	});

// 	console.log('alternativas', alternativas);
	
// 	function dragstart() {
// 		console.log("CARD: Start dragging ");
// 		resposta.forEach((resp) => resp.classList.add("highlight"));

// 		// this = card
// 		this.classList.add("is-dragging");
// 	}

// 	function drag() {
// 		console.log("CARD: Is dragging ");
// 	}

// 	function dragend() {
// 		console.log("CARD: Stop drag! ");
// 		respota.forEach((resp) => resp.classList.remove("highlight"));

// 		// this = card
// 		this.classList.remove("is-dragging");
// 	}
	

// 	containers.forEach( container => {
// 		container.addEventListener('dragover', dragover)
// 		container.addEventListener('dragleave', dragleave)
// 		container.addEventListener('drop', drop)
// })

// function dragover() {
// 		// this = div-resolucao
// 		// this.classList.add('over')

// 		// get dragging card
// 		const cardBeingDragged = document.querySelector('.is-dragging')

// 		// this = div-resolucao
// 		this.appendChild(cardBeingDragged)
// }

// function dragleave() {
// 		// log('div-resolucao: Leave ')
// 		// this = div-resolucao
// 		this.classList.remove('over')

// }

// function drop() {
// 		// log('div-resolucao: dropped ')
// 		this.classList.remove('over')
// }



  // function dragenter() {
  // 	console.log('div-resolucao: Enter in zone ')
  // }

  // function dragover() {
  // 	console.log('dragover')
  // 	// this = div-resolucao
  // 	this.classList.add("over");

  // 	// get dragging card
  // 	const origemDaAlternativa = document.querySelector(".is-dragging");

  // 	// this = div-resolucao
  // 	this.appendChild(origemDaAlternativa);
  // }

  // function dragleave() {
  // 	console.log('div-resolucao: Leave ')
  // 	// this = div-resolucao
  // 	this.classList.remove("over");
  // }

  // function drop() {
  // 	// log('div-resolucao: dropped ')
  // 	this.classList.remove("over");
  // }

  return {
    // Todos os listeners registrados que abrangem um escopo
    // maior do que a div #app,
    // deverão ser implementados aqui
    on: function () {
      console.log("entrou no on");

      const alternativas = document.querySelectorAll('.alternativa');
      const locaisRespostas = document.querySelectorAll('.resposta');

      alternativas.forEach(alternativa => {
        alternativa.addEventListener('dragstart', iniciarArraste);
        alternativa.addEventListener('drag', arrastando);
        alternativa.addEventListener('dragend', finalizarArraste);
      });

      locaisRespostas.forEach( local => {
        local.addEventListener('dragenter', entrouLocalResposta);
        local.addEventListener('dragover', sobreLocalResposta);
        local.addEventListener('dragleave', saiuLocalResposta);
        local.addEventListener('drop', soltouNoLocalResposta);
      });

      function iniciarArraste () {
        console.log('iniciou o arraste');

        this.classList.add('em-arraste');
      }

      function arrastando () {
        console.log('arrastando');
      }

      function finalizarArraste () {
        console.log('finalizou arraste');

        const virouResposta = document
          .querySelectorAll('.resposta')
          .forEach( resp => {
            const resp = resp.querySelectorAll('.alternativa');
            if (resp) return;
          });
        if (virouResposta) {
          this.chil
        }
        this.classList.remove('em-arraste');
      }

      function entrouLocalResposta () {
        console.log('entrou LocalResposta');
      }

      function sobreLocalResposta () {
        console.log('sobre LocalResposta');

        this.classList.add('over');

      }

      function saiuLocalResposta () {
        console.log('saiu LocalResposta');

        this.classList.remove('over');

      }

      function soltouNoLocalResposta () {
        console.log('soltou NoLocalResposta');

      }
                  
    },

    // Eventos registrados pela função "on",
    // deverão ter a possibilidade de remover os listeners
    // sendo chamada pela função "destroy"
    off: function () {
      alternativas.forEach((alternativa) => {
        alternativa.removeEventListener("dragstart", dragstart);
        alternativa.removeEventListener("drag", drag);
        alternativa.removeEventListener("dragend", dragend);
      });

      // resposta.forEach((resp) => {
      //   resp.removeEventListener("dragenter", dragenter);
      //   resp.removeEventListener("dragover", dragover);
      //   resp.removeEventListener("dragleave", dragleave);
      //   resp.removeEventListener("drop", drop);
      // });
    },

    // Toda funcionalidade que necessita ser implementada
    // logo após a exibição
    exibir: function () {
      console.log("entrou no exibir");




    },

    // Se houver respondido anteriormente
    // e o usuário recarregou a tela
    // permitir preencher variável do exercício
    capturarRespostas: function () {
      respostaAluno = localStorage; // etc...

      console.log("capturarRespostas");
    },

    // Função que será chamada quando o aluno
    // finalizar o exercício
    // implementar botões
    // checagem do acerto da questão aqui
    avaliar: function () {},

    // Retornar array contendo as mensagens
    // [
    //  "Resposta do aluno:" + respostaAluno,
    //  "Resposta correta: " + resposta_correta
    // ]
    relatorio: function () {},

    // Função que limpa o armazenamento local
    // e a variável
    limparDados() {
      respostaAluno = null;
    },

    // inicialização de todas as funcionalidades
    init: function () {
      this.capturarRespostas();
      this.exibir();
      this.on();
    },

    // remover todos os listeners
    destroy() {
      this.off();
    },
  };
};

// start
app().init();