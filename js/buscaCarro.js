var validaCarro = new Boolean(false);

$(document).ready(function(){
  function validar(placa) {
    //não vale pram 
      var url = "http://localhost:8090/" + placa+"";
      $.ajax({
        type: "GET",
        url: url,
        async: false,
        success: function (result) {
        validaCarro = new Boolean(result);
        return validaCarro;
        }
      });
    }    


    //por hora vai pesquisar apenas a placa
  $('#botaoPesquisaCarro').click(function () {
    var table = document.getElementById(tabelaCarros);
    var infoCarro = $('#buscaCarro').val();
    
    if (infoCarro != "" && infoCarro != 0) {

      if (isNaN(carro)) {

        //preenche com ... enquanto pesquisa
        var id = $("#buscaCarro");

        var validaCarro = validaCarro(infoCarro.val());
        $.getJSON("http://localhost:8090/"+infoCarro.val(), function(dados){
          //VER COM TAY QUAL A MENSAGEM DE ERRO PARA FAZER O TRATAMENTO
          if(!("erro" in dados)){
            $('#tabelaCarros tr').remove();
            var row = table.insertRow(1);
            row.innerHTML = "<td>"+dados.modelo+"</td> <td>"+dados.placa+"</td> <td>"+dados.ano+"</td>" +
              "<td>"+dados.cor+"</td"
          }else{
            //mudar isso para colocar todos de volta
            alert("Carro não encontrado");
            
          }
          validaCarro=new Boolean(false);
        });
      }else{
        alter("Não pode receber número.");
      }
    }else{
      //popular a tabela de novo... VERIFICAR COM TAY O NOME DA FUNÇÃO
      $.getJSON("https://localhost:8090/webservice/oficina/listarCarros", function(carros){
            

      });
          
    }
  });
  function preencherTabela(){
    $.getJSON("http://localhost:8090/webservice/oficina/listarCarros",function(carros){
      var tabela = $('$tabelaCarros')
      tabela.remove();
      $.each(carros, function(key, data){
        var row = tabela.insertRow(1);
        row.innerHTML = "<td>"+dados.modelo+"</td> <td>"+dados.placa+"</td> <td>"+dados.ano+"</td>" +
              "<td>"+dados.cor+"</td"

      });
    });
    
  }
});