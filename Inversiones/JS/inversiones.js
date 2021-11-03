function annualInterestPercentageAmount(amount, annualInterest, lapse) {
    const operacion = (amount * annualInterest) /100;
    
    return operacion * lapse;
};

function sumOfValues(value, value2) {
    return value + value2;
};

function showInvestmentAmount() {
    let inputAmount = document.getElementById("inputInvestmentAmount");
    let inputAnnualInterest = document.getElementById("inputLapseOfTime");
    let inputLapse = document.getElementById("inputAnnualInterest");

    let valueAmount = parseInt(inputAmount.value);
    let valueAnnualInterest = parseInt(inputAnnualInterest.value);
    let valueLapse = parseInt(inputLapse.value);

    if(valueAmount < 0 || valueAnnualInterest < 0 || valueLapse < 0){
        let resultText = document.getElementById('resultTextInvestment');
        resultText.innerText = "Negative values ​​are not allowed ❗❗";

    }else{
        if(valueAmount && valueAnnualInterest && valueLapse){
            const operation = annualInterestPercentageAmount(valueAmount, valueAnnualInterest, valueLapse);
            let result = sumOfValues(valueAmount, operation);
            let resultText = document.getElementById('resultTextInvestment');
            resultText.innerHTML = `Your investment with initial capital of <strong> $${valueAmount} </strong> and simple annual interest of <strong> ${valueLapse}% </strong> over ${valueAnnualInterest}  years will be <strong> $${result} </strong>`;
        }else{
            let resultText = document.getElementById('resultTextInvestment');
            resultText.innerText = "Missing data ❗❗";
        }
    };    
};
