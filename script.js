function sorteia(){
    var id = Math.floor( Math.random() * 151 ) + 1;  //[1,151]
    var url = "https://pokeapi.co/api/v2/pokemon/" + id;
    new Ajax.Request(url,
      {
        method : "get",
        onSuccess : ajaxSuccess
      }
    );
  
    var url2 = "https://pokeapi.co/api/v2/pokemon-species/" + id;
    new Ajax.Request(url2,
      {
        method : "get",
        onSuccess : ajaxSuccess2
      }
    );
  }
  //Atualiza a descrição
  function ajaxSuccess2(response){
    var obj = JSON.parse(response.responseText);
  
    document.getElementById("desc").innerText = obj.flavor_text_entries[0].flavor_text;
  }
  // Atualiza a imagem e nome
  function ajaxSuccess(response){
    var obj = JSON.parse(response.responseText);
  
    var nomeM = obj.name[0].toUpperCase() + obj.name.substring(1);
    document.getElementById("nome").innerText = nomeM;
  
    document.getElementById("img").src = obj.sprites.front_default;
  }
  