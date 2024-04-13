const textBox = document.getElementById("container__textBox");
const button = document.getElementById("button");
const image = document.getElementById("container__image");
function grGenerator(){
    let inputData = textBox.value;
    if(inputData == ""){
        alert('Input field is empty!');}
     else { 
        urlApi = `https:quickchart.io/qr?text=${inputData}`;
        image.src=urlApi ;  
        
    }


}
button.addEventListener("click",grGenerator);
