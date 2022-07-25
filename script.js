let outputText = "";
let check = false;

const clickThis = element =>{
	let finalText = document.querySelector('#output');

	if(element.innerText !== '←'){
		if(check === false){
			outputText = '';
		}
		if(element.innerText === 'Space'){
			outputText += ' ';	
		} else{
			outputText += element.innerText;
		}
		check = true;
	} else{
		if(check === true){
			outputText = outputText.slice(0, -1);
		}
	}
	if(outputText === ''){
		outputText = 'Enter Your Text';
		check = false;
	}
		
	finalText.innerText = outputText;
}	
	

window.addEventListener("resize", () =>{
	if(window.innerWidth < 820){
		alert('Ako smanjite prozor necete videti celu tastaturu!');
	}
});

let form = document.querySelector('form');

form.addEventListener("submit", (event) => {
	event.preventDefault();
});
