    /*------------Agendados------------*/
    function adicionarCampos1() {
      var container = document.querySelector('.chamados-agendados-container1');
      var novoGrupo = document.createElement('div');
      novoGrupo.classList.add('grupo-campos');
      novoGrupo.innerHTML = `
      <div class="row bg-white mb-1 p-2">
          <div class="container row col ml-0 pt-2 pb-2 d-flex justify-content-center">
            <input class="col-3 form-control mr-2" type="text" placeholder="Numero do chamado" name="chamadoAgendado[]" required>
            <input class="col-4 form-control mr-2" type="text" placeholder="Nome do Responsável" name="chamadoAgendado[]" required>
            <input class="col-3 form-control" type="date" placeholder="Precisão para conclusão" name="chamadoAgendado[]" required>
          </div>
          <div class="col-12 pt-2 pb-2">
            <textarea class="form-control" placeholder="Descrição do Chamado" style="width: 99%;" type="textarea" id="Caixa"
            name="chamadoAgendado[]" required></textarea>
          </div>
        </div>
      </div>
      `;
      container.appendChild(novoGrupo);
    }
    
    function removerCampos1() {
      var container = document.querySelector('.chamados-agendados-container1');
      var grupos = container.querySelectorAll('.grupo-campos');
      if (grupos.length != 0) {
        container.removeChild(grupos[grupos.length - 1]);
      }
    }

    /*------------Aguardando Fornecedor------------*/
    function adicionarCampos2() {
        var container = document.querySelector('.chamados-agendados-container2');
        var novoGrupo = document.createElement('div');
        novoGrupo.classList.add('grupo-campos');
        novoGrupo.innerHTML = `
        <div class="row bg-white mb-1 p-2">
        <div class="container row col ml-0 pt-2 pb-2 d-flex justify-content-center">
        <input class="col-3 form-control mr-2" type="text" placeholder="Numero do chamado" name="chamadoAgendado[]" required>
        <input class="col-4 form-control mr-2" type="text" placeholder="Nome do Responsável" name="chamadoAgendado[]" required>
        <input class="col-3 form-control" type="date" placeholder="Precisão para conclusão" name="chamadoAgendado[]" required>
          </div>
          <div class="col-12 pt-2 pb-2">
            <textarea class="form-control" placeholder="Descrição do Chamado" style="width: 99%;" type="textarea" id="Caixa"
            name="chamadoAgendado[]" required></textarea>
          </div>
        </div>
      </div>
        `;
        container.appendChild(novoGrupo);
      }
      
      function removerCampos2() {
        var container = document.querySelector('.chamados-agendados-container2');
        var grupos = container.querySelectorAll('.grupo-campos');
        if (grupos.length > 0) {
          container.removeChild(grupos[grupos.length - 1]);
        }
      }

    /*------------Casos Criticos------------*/
    function adicionarCampos3() {
        var container = document.querySelector('.chamados-agendados-container3');
        var novoGrupo = document.createElement('div');
        novoGrupo.classList.add('grupo-campos');
        novoGrupo.innerHTML = `
        <div class="row bg-white mb-1 p-2">
          <div class="row col-12 pt-2 pb-2 d-flex justify-content-center">
            <input class="col-4 form-control mr-2" type="text" placeholder="Numero do chamado" name="chamadoAgendado[]" required>
            <input class="col-7 form-control" type="text" placeholder="Descrição do caso" name="chamadoAgendado[]" required>          </div>
          </div>
        </div>

        `;
        container.appendChild(novoGrupo);
      }
      
      function removerCampos3() {
        var container = document.querySelector('.chamados-agendados-container3');
        var grupos = container.querySelectorAll('.grupo-campos');
        if (grupos.length > 0) {
          container.removeChild(grupos[grupos.length - 1]);
        }
      }

      /*------------Acionamentos Platonistas------------*/
    function adicionarCampos4() {
        var container = document.querySelector('.chamados-agendados-container4');
        var novoGrupo = document.createElement('div');
        novoGrupo.classList.add('grupo-campos');
        novoGrupo.innerHTML = `
        <div class="row text-center bg-white mb-1 p-2">
        <div class="container row col ml-0 pt-2 pb-2 d-flex justify-content-center">
        <input class="col-3 form-control mr-2" type="text" placeholder="Numero do chamado" name="chamadoAgendado[]" required>
        <input class="col-4 form-control mr-2" type="text" placeholder="Nome do Responsável" name="chamadoAgendado[]" required>
        <input class="col-4 form-control" type="text" placeholder="Nome da equipe" name="chamadoAgendado[]" required>
          </div>
          <div class="container">
              <div class="row d-flex justify-content-center">
                <div class="col-3 pb-2 pt-1">
                    <a>Inicio do Impacto:</a>
                  <div class="col d-flex justify-content-center">
                    <input class="form-control col-8" type="date" name="chamadoAgendado[]" required>
                  </div>                  
                </div>
                <div class="col-3 pb-2 pt-1">
                    <a>Fim do Impacto:</a>
                  <div class="d-flex justify-content-center">
                    <input class="form-control col-8" type="date" name="chamadoAgendado[]" required>
                  </div>                  
                </div>
                <div class="col-4 pt-4">
                  <select  class="form-control pt-2">
                    <option selected disabled>Selecione o status</option>
                    <option>Andamento</option>
                    <option>Aguardando Fornecedor</option>
                    <option>Resolvido</option>
                  </select>
                </div>
              </div>
          </div>
          <div class="col-12 pt-2 pb-2">
            <textarea class="form-control" placeholder="Descrição do Chamado" style="width: 99%;" type="textarea" id="Caixa"
            name="chamadoAgendado[]" required></textarea>
          </div>
        </div>
        `;
        container.appendChild(novoGrupo);
      }
      
      function removerCampos4() {
        var container = document.querySelector('.chamados-agendados-container4');
        var grupos = container.querySelectorAll('.grupo-campos');
        if (grupos.length > 0) {
          container.removeChild(grupos[grupos.length - 1]);
        }
      }

    /*------------Imagem de Print do Repasse------------*/

    function previewImagem() {
      var imagemInput = document.getElementById('fileInput');
      var imagemPreview = document.getElementById('imagemPreview');
  
      imagemPreview.src = URL.createObjectURL(imagemInput.files[0]);
    }

    /*------------Botão para tirar print da pagina------------*/

    function captureAndDownload() {
      html2canvas(document.body).then(function(canvas) {
        // Cria um elemento <a> para fazer o download
        var downloadLink = document.createElement("a");
        downloadLink.href = canvas.toDataURL("image/png");
        downloadLink.download = "screenshot.png";
        
        // Simula um clique no link para iniciar o download
        downloadLink.click();
      });
    }

    /*------------Calcular média de abandonos------------*/
    function calcularMedia() {
    var input1 = parseFloat(document.getElementById('input1').value);
    var input2 = parseFloat(document.getElementById('input2').value);
    
    var media= (input2 * 100) / input1;
    /**var media =  input2**/
    
    document.getElementById('media').textContent = media.toFixed(2) + "%";
  }

  /**------------Função para bloquear checkbox------------**/
  function desmarcarOutros(checkbox) {
  var checkboxes = document.getElementsByName('grupo');
  
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== checkbox) {
      checkboxes[i].checked = false;
    }
  }
}