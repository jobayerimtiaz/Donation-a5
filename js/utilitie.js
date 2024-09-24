
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);    
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function donationHandler(buttonId, inputFieldId, donateId, totalAmountId) {
    document.getElementById(buttonId)
        .addEventListener('click', function(event){
            event.preventDefault();           
            let totalAmount = getTextFieldValueById(totalAmountId);
            let donationAmount = getInputFieldValueById(inputFieldId);
            let addDonation = getTextFieldValueById(donateId);
            let newDonationAmount = donationAmount + addDonation;
            let newTotal = totalAmount - donationAmount;
            document.getElementById(donateId).innerText = newDonationAmount;
            document.getElementById(totalAmountId).innerText = newTotal;
            document.getElementById(inputFieldId).value = "";
        });
}

donationHandler('noakhali-button', 'noakhali-donate-input', 'noakhali-amount', 'total-amount');
donationHandler('feni-button', 'feni-donate-input', 'feni-amount', 'total-amount');
donationHandler('quota-button', 'quota-donate-input', 'quota-amount', 'total-amount');
    
