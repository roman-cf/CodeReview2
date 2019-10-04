var dataArr = [["kein Land", "Austria", "Hungary", "Greece"],[0,100,120,150],[0,0,0,3],[0,50,100,50]]
// 0: Land
// 1: hp factor
// 2: Age Addition
// 3: Plus at the End

function output(outputText){
	document.querySelector("#result").style.visibility = "visible";
	document.getElementById("result").innerHTML = outputText;
}

function calculateInsurance() {
	
	var nameV = document.getElementById("namen").value;
	var ageV = Number(document.getElementById("carAge").value);
	var c_i = Number(document.getElementById("country").value);
	var psV = Number(document.getElementById("ps").value);

	if (psV==0 || ageV == 0){
		var outputText = "Please fill in all fields."
		output(outputText);
	}else{

		insurance = psV*dataArr[1][c_i]/(ageV+dataArr[2][c_i])+dataArr[3][c_i];

		UpName = (function(){
		return nameV.charAt(0).toUpperCase() + nameV.slice(1);
		}());
		
		output(UpName	+ ", your insurance will cost "+ insurance.toFixed(2) + "€") 	
	}

}

