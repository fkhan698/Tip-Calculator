


function calculateTip(){

var billAmnt = document.getElementById('billAmnt').value;
var serviceQual = document.getElementById('serviceQual').value;
var peopleAmt = document.getElementById('peopleAmt').value;
var total = billAmnt * serviceQual / peopleAmt;
total = Math.round(total * 100) / 100;
total = total.toFixed(2);
    if(billAmnt === "" || serviceQual === 0){
        alert("Please enter values");
    }
    if(peopleAmt === "" || peopleAmt <= 1){
        peopleAmt = 1;
    }

    document.getElementById('totalTip').style.display = "block";
    document.getElementById('tip').innerHTML = total;
    
    
    console.log(total);
}


calcButton.addEventListener('click', calculateTip);
