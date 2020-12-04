//As propriedades dos objetos devem ser mantidas com os nomes indicados abaixo.
// Todas as variáveis e funções deverão estar dentro do escopo do objeto. Não usar variáveis de escopo global. 

var app = (function () {

	// Resposta do aluno nesta variável
	var respostaAluno = null;

	// Tempo que o aluno resolveu a questão
	// no formato abaixo: horas, minutos e segundos
	var latency = "00:00:00";

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

	return {

			// Todos os listeners registrados que abrangem um escopo
			// maior do que a div #app,
			// deverão ser implementados aqui
			on: function () {

			},

			// Eventos registrados pela função "on",
			// deverão ter a possibilidade de remover os listeners
			// sendo chamada pela função "destroy"
			off: function () {

			},

			// Toda funcionalidade que necessita ser implementada
			// logo após a exibição
			exibir: function () {

			},

			// Se houver respondido anteriormente
			// e o usuário recarregou a tela
			// permitir preencher variável do exercício
			capturarRespostas: function () {
					respostaAluno = localStorage // etc...
			},

			// Função que será chamada quando o aluno
			// finalizar o exercício
			// implementar botões
			// checagem do acerto da questão aqui
			avaliar: function () {

			},

			// Retornar array contendo as mensagens
			// [
			//  "Resposta do aluno:" + respostaAluno,
			//  "Resposta correta: " + resposta_correta
			// ]
			relatorio: function () {

			},

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
			}
	};
});

// start
app().init();
