// app.js

// dados.js (continua com seus dados de músicos)

// app.js
function criarListaMusicos() {
    const listaMusicosElement = document.getElementById('lista-musicos');
    const listaNomes = musicos.map(musico => musico.nome);
    const listaNomesOrdenada = listaNomes.sort();
  
    const listaHTML = listaNomesOrdenada.map(nome => `<li><a href="#" onclick="preencherCampoPesquisa('${nome}')">${nome}</a></li>`).join('');
    listaMusicosElement.innerHTML = `<ul>${listaHTML}</ul>`;
  }
  
  function preencherCampoPesquisa(nome) {
    document.getElementById('campo-pesquisa').value = nome;
    pesquisar();
  }
  
  criarListaMusicos();
  

function pesquisar() {
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    const resultados = document.getElementById("resultados-pesquisa");
    resultados.innerHTML = "";
  
    if (!campoPesquisa) {
      resultados.innerHTML = "<p>Por favor, digite o nome de um músico.</p>";
      return;
    }
  
    const resultadosHTML = musicos.filter(musico => {
      const { nome, descricao, estilo } = musico;
      return nome.toLowerCase().includes(campoPesquisa) ||
             descricao.toLowerCase().includes(campoPesquisa) ||
             estilo.toLowerCase().includes(campoPesquisa);
    }).map(musico => `
      <div class="item-resultado">
       
        <h2>
          <a href="${musico.link}" target="_blank">${musico.nome}</a>
        </h2>
        <p>Estilo: ${musico.estilo}</p>
        <p>${musico.descricao}</p>
      </div>
    `).join("");
  
    resultados.innerHTML = resultadosHTML;
  }

  
  