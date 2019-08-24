$(document).ready(function() {
  function limpa_formulario(){
    $('#modelo').val("");
    $('#placa').val("");
    $('#ano').val("");
    $('#cor').val("");

  }
  var botao  = $('#btnClose-sucesso');

  $("#botaoCadastro").click(function() {
    $('#sucesso').hide();
    $('#error').hide();

    var modelo = $("#modelo").val();
    var placa = $("#placa").val();
    var ano = $("#ano").val();
    var cor = $("#cor").val();

    if(modelo != "" && modelo != " " && placa != "" && placa != " " && ano != "" && ano != " " && cor != "" cor != " "){
      var carro = {
        idCarro: 0,
        modelo: modelo;
        placa: placa;
        ano: ano;
        cor: cor;
      };

      $.getJSON("http://localhost:8090/..."+carro.modelo+"/"+carro.placa+"/"+carro.ano+"/"+carro.cor, function(dadosCarro){
        if(!("erro" in dadosCarro)){
          $('#sucesso').text("[" + dadosCarro.placa+ "] cadastrado com sucesso");
          $('#sucesso').append(botao);
          $('#sucesso').show();

          $('#btnClose-sucesso').click(function () {
            $(this).parent().hide();
          });
        }else {
          $('#error').show();
        }
      });
    }else{
      $('#error').show();
    }
  });
});

$(document).ready(function (){
  $('#btnClose').click(function() {
    $(this).parent().hide();
  });
});
