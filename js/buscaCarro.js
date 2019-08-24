var validaCarro = new Boolean(false);

$(document).ready(function(){
  function validar(id) {
        var url = "http://localhost:8090/..." + id+"";
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




    $('#botaoPesquisaCarro').click(function () {

        var carro = $('#carro').val();

        if (carro != "" && carro != 0) {
            if (!isNaN(carro)) {

              //preenche com ... enquanto pesquisa
              var id = $("#carro");
              $("#modelo").val("...");
              $("#placa").val("...");
              $("#ano").val("...");
              $("#cor").val("...");

              validarId(id.val());
              if(validaCarro==true){

                $.getJSON("http://localhost:8090/..."+id.val(),function + id.val(), function(dados){
                  if(!("erro" in dados)){
                    $("#modelo").val(dados.modelo);
                    $("#placa").val(dados.placa);
                    $("#ano").val(dados.ano);
                    $("#cor").val(dados.cor);

                  }else{
                    //mudar isso para colocar todos de volta
                    alert("Carro não encontrado");
                    $("#modelo").val("...");
                    $("#placa").val("...");
                    $("#ano").val("...");
                    $("#cor").val("...");
                  }
                  validaCarro=new Boolean(false);
                });
              }else{
                $("#modelo").val("não encontrado");
                $("#placa").val("não encontrado");
                $("#ano").val("não encontrado");
                $("#cor").val("não encontrado");
                validaCarro = new Boolean(false);
              }
            }else{
              alter("ID inválido.");
            }
            }
            else{
              //popular a tabela de novo... VERIFICAR COM TAY O NOME DA FUNÇÃO
              //$.getJSON....
              busca_todos_carros();
            }
        }

})
