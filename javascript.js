function makeGetRequest(path) { 
  axios.get(path).then( 
      (response) => { 
          var result = response.data; 
          // console.log(result); 
          sourceDrop(result);
          destinationDrop(result);
      }, 
      (error) => { 
          console.log(error); 
      } 
  ); 
} 
makeGetRequest('https://api.exchangeratesapi.io/latest?base=INR'); 

function sourceDrop(data) { //Build an array containing currency records.
   var currency = Object.keys(data['rates']);
  //  console.log(currency);
   var sourceCurrency = document.getElementById("sourceCurrency"); //Add the Options to the DropDownList.
   for (var i = 0; i < currency.length; i++) {
       var option = document.createElement("OPTION"); //Set currency Name in Text part.
      //  console.log(option)
       option.innerHTML = currency[i];  //Set currency value in Value part.
       option.value = data['rates'][currency[i]];        //Add the Option element to DropDownList.
       sourceCurrency.options.add(option);
   }
}

let destinationDrop = (data) =>{ //Build an array containing currency records.
   let currency = Object.keys(data['rates']);
   let destinationCurrency = document.getElementById("destinationCurrency");  //Add the Options to the DropDownList.
    for (let i = 0; i < currency.length; i++) {
       let option = document.createElement("OPTION"); //Set currency Name in Text part.
       option.innerHTML = currency[i]; //Set currency value in Value part.
       option.value = data['rates'][currency[i]]; //Add the Option element to DropDownList.
       destinationCurrency.options.add(option);
   }
}

let getSrcDropdownValue = () => {
   let ddSrcValue = document.getElementById('sourceCurrency').value;
   console.log("source dd source value", ddSrcValue);
  //  document.getElementById('srcVal').innerText = 'Source Value:  '+ddSrcValue;
   return ddSrcValue;
}

let getDesDropdownValue = () => {
  let ddDesValue = document.getElementById('destinationCurrency').value;
  console.log("destination dd destination value", ddDesValue);
  // document.getElementById('desVal').innerText = 'Destination Value:  '+ddDesValue;
  return ddDesValue;
}

let btnConv = () => { //main logic implementation
  let amount = document.getElementById('cv').value;
  let conVal = (getDesDropdownValue() / getSrcDropdownValue()) * amount;
  document.getElementById('final').innerHTML = conVal;
  console.log(conVal)
}

let resetField =() =>{ //reset the fields
  document.getElementById('cv').value ='';
  document.getElementById('final').value ='';
}
