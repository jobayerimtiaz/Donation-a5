
const donationButton = document.getElementById('donation-button');
const historyButton = document.getElementById('history-button');

historyButton.addEventListener('click', function () {
    historyButton.classList.add('bg-[#B4F461]');
    historyButton.classList.remove('bg-white');
    donationButton.classList.remove('bg-[#B4F461]');
    donationButton.classList.add('bg-white');
    
    document.getElementById('donation-cards').classList.add('hidden');
    document.getElementById('transaction-history').classList.remove('hidden');
})

donationButton.addEventListener('click', function () {
    donationButton.classList.add('bg-[#B4F461]');
    donationButton.classList.remove('bg-white');
    historyButton.classList.remove('bg-[#B4F461]');
    historyButton.classList.add('bg-white');
    
    document.getElementById('donation-cards').classList.remove('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
})