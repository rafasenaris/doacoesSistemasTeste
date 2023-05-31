document.getElementById("formDoacao").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores dos campos
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var tipo = document.getElementById("tipo").value;
    var quantidade = document.getElementById("quantidade").value;

    // Criar objeto de doação
    var doacao = {
      nome: nome,
      cpf: cpf,
      tipo: tipo,
      quantidade: quantidade
    };

    // Obter doações do localStorage (se existirem)
    var doacoes = JSON.parse(localStorage.getItem("doacoes")) || [];

    // Adicionar nova doação ao array
    doacoes.push(doacao);

    // Salvar doações atualizadas no localStorage
    localStorage.setItem("doacoes", JSON.stringify(doacoes));

    // Limpar os campos de entrada
    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("quantidade").value = "";

    // Atualizar lista de doações
    exibirDoacoes();
});

  function exibirDoacoes() {
    // Limpar a lista de doações
    var listaDoacoes = document.getElementById("listaDoacoes");
    listaDoacoes.innerHTML = "";

    // Obter doações do localStorage
    var doacoes = JSON.parse(localStorage.getItem("doacoes")) || [];

    // Exibir cada doação na lista
    for (var i = 0; i < doacoes.length; i++) {
      var doacao = doacoes[i];

      // Criar elemento de lista para exibir a doação
      var itemLista = document.createElement("li");
      itemLista.textContent = "Nome: " + doacao.nome + ", CPF: " + doacao.cpf + ", Tipo: " + doacao.tipo + ", Quantidade: " + doacao.quantidade;

      // Adicionar o elemento à lista
      listaDoacoes.appendChild(itemLista);
    }
  }

  // Exibir as doações cadastradas ao carregar a página
  exibirDoacoes();
