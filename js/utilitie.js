
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

function donationHandler(buttonId, donateFieldId, donateId, totalAmountId, historyId, headingTextId) {
    document.getElementById(buttonId)
        .addEventListener('click', function(event){
            event.preventDefault();           
            let totalAmount = getTextFieldValueById(totalAmountId);
            let donationAmount = getInputFieldValueById(donateFieldId);
            let addDonation = getTextFieldValueById(donateId);

            if (isNaN(donationAmount) || donationAmount <= 0) {
                document.getElementById(donateFieldId).value = '';
                alert('Amount Invalid!');
                return;
            }

            if (donationAmount > totalAmount) {
                document.getElementById(donateFieldId).value = '';
                alert("Insufficient Balance!");
                return;
            }

            let newDonationAmount = donationAmount + addDonation;
            let newTotal = totalAmount - donationAmount;
            document.getElementById(donateId).innerText = newDonationAmount;
            document.getElementById(totalAmountId).innerText = newTotal;
            document.getElementById(donateFieldId).value = "";

            let headingTitle = document.getElementById(headingTextId).textContent;

            let TransactionHistory = document.getElementById(historyId);
            let UpdateHistory = document.createElement('div');

            UpdateHistory.innerHTML = `
            <div class="flex flex-col p-5 mt-5 bg-white border border-border-color rounded-2xl">
                <h3 class="text-lg font-bold">
                    ${donationAmount.toFixed(2)} Taka is ${headingTitle}
                </h3>
                <p id="history-date" class="text-sm md:text-base text-paragraph-color">
                </p>
            </div>
            `
            TransactionHistory.insertBefore(UpdateHistory, TransactionHistory.firstChild);

            const date = new Date();
            UpdateHistory.querySelector("#history-date").innerText = "Date: " + date.toString();

            const modalPopUp = document.getElementById('modal');
            modalPopUp.showModal();

        });
}

donationHandler('noakhali-button', 'noakhali-donate-input', 'noakhali-amount', 'total-amount', 'transaction-history','noakhali-text' );
donationHandler('feni-button', 'feni-donate-input', 'feni-amount', 'total-amount','transaction-history', 'feni-text');
donationHandler('quota-button', 'quota-donate-input', 'quota-amount', 'total-amount', 'transaction-history', 'quota-text');
    
