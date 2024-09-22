
//First Card
document.getElementById('noakhali-donate').addEventListener('click', function () {

    const noakhaliAmount = parseFloat(document.getElementById('noakhail-amount').value);

    if (noakhaliAmount <= 0 || isNaN(noakhaliAmount)) {
        document.getElementById('invild-error').classList.remove('hidden');
        return;
    }

    const mainAccounts = parseFloat(document.getElementById('main-account').innerText);
    const mainAccount = mainAccounts - noakhaliAmount;

    document.getElementById('main-account').innerText = mainAccount.toFixed(2);
    document.getElementById('amount').innerText = noakhaliAmount.toFixed(2);

    //Input Filed Clear
    document.getElementById('noakhail-amount').value = '';

    // alert message
    // alert(`Amount added: ${noakhaliAmount.toFixed(2)} BDT Successfully`);

    //Show Modal
    const modal = document.getElementById('noakhali-modal');
    modal.showModal();

});

//Feni Donate
document.getElementById('feni-donate').addEventListener('click', function () {

    const feniAmount = parseFloat(document.getElementById('feni-amount').value);

    if (feniAmount <= 0 || isNaN(feniAmount)) {
        document.getElementById('feni-invild-error').classList.remove('hidden');
        return;
    }

    const mainAmounts = document.getElementById('main-account').innerText;
    const mainAmount = mainAmounts - feniAmount;

    document.getElementById('feni-add-amount').innerText = feniAmount.toFixed(2);
    document.getElementById('main-account').innerText = mainAmount.toFixed(2);

    //Input Filed Clear
    document.getElementById('feni-amount').value = '';

    //Show Modal
    document.getElementById('feni-modal').showModal();

});

//Khulna Donate
document.getElementById('khulna-donate').addEventListener('click', function () {

    const khulnaAmount = parseFloat(document.getElementById('khulna-amount').value);

    const mainAmounts = document.getElementById('main-account').innerText;
    const mainAmount = mainAmounts - khulnaAmount;

    document.getElementById('khulna-add-amount').innerText = khulnaAmount.toFixed(2);
    document.getElementById('main-account').innerText = mainAmount.toFixed(2);

    //Input Filed CLear
    document.getElementById('khulna-amount').value = '';

    //Show Modal
    document.getElementById('khulna-modal').showModal();

});

//Donation Btn
const donationBtn = document.getElementById('donation-btn');
donationBtn.addEventListener('click', function () {

    donationBtn.classList.add("bg-[rgb(180,244,97)]");
    historyBtn.classList.remove("bg-[rgb(180,244,97)]");

    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');

});

//History Btn
const historyBtn = document.getElementById('history-btn');
historyBtn.addEventListener('click', function () {

    historyBtn.classList.add("bg-[rgb(180,244,97)]");
    donationBtn.classList.remove("bg-[rgb(180,244,97)]");

    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');

    //Time & Date
    const now = new Date();
    const dateTimeString = now.toLocaleString();

    const historyItem = document.createElement('div');
    historyItem.className = "border border-gray-300 p-10 rounded-lg mb-8";

    historyItem.innerHTML = `
    
    <p class="text-lg font-semibold text-gray-800"> Taka donated for Khulna</p>

    <p>${now}</p>
    
    `;

    const historyContainer = document.getElementById('history-container');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

});
