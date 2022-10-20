let lista = function(){
const lista =  {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2aabe19311mshee2007ec5f258ffp17fd73jsn5526eadbdabf',
		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
	}
}
let res = [];
fetch('https://currency-exchange.p.rapidapi.com/listquotes', lista)
	//.then(response => response.json())
	//.then(response => console.log(response))
  .then(function(serverPromise){ 
    serverPromise.json()
      .then(function(j) { 
        // Rutina para agregar opciones a un <select>
        let select = document.getElementsByName('monedas')[0];
        for (value in j) {
        let option = document.createElement("option");
        option.text = j[value];
        select.add(option);
        }
      }
      )
      .catch(function(e){
        console.log(e);
      });
  })
	.catch(err => console.error(err));

  
}




let Convertidor = function (from, to, quantity){
  const convertidor  = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2aabe19311mshee2007ec5f258ffp17fd73jsn5526eadbdabf',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
  };
  
  fetch('https://currency-exchange.p.rapidapi.com/exchange?to='+to+'&from='+from+'&q='+quantity, convertidor)

    .then(function(serverPromise){ 
      serverPromise.json()
        .then(function(j) { 
          const DOMconversion= document.querySelector('#totalConversion');

          DOMconversion.textContent = j;




        }
        )
        .catch(function(e){
          console.log(e);
        });
    })
    .catch(err => console.error(err));
  
    
  }


