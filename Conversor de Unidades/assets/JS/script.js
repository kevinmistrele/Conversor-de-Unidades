const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value; 
    
    if(fromValue === toValue){
        outputElement.value = inputElement.value;
        messageElement.textContent = '';
        return;
    }

    let meter
    switch(fromValue){
        case 'm':
            meter = inputElement.value
            break;
        case 'km':
            meter = inputElement.value * 1000;
            break;
        case 'cm':
            meter = inputElement.value / 100;
            break;
        case 'mm':
            meter = inputElement.value / 1000;
            break;            
    }


    let result
    switch(toValue){
        case 'm':
            result = meter;
            break;
        case 'km':
            result = meter / 1000;
            break;
        case 'cm':
            result = meter * 100;
            break;
        case 'mm':
            result = meter * 1000;
            break;            
    }

    outputElement.value = result;

    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text

    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
    messageElement.textContent = message;
    return; 
};

convertButton.addEventListener('click', convert)

