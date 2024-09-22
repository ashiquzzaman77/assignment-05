
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
    
    //Clear input filed
    document.getElementById('noakhail-amount').value = '';

    // Show alert message
    // alert(`Amount added: ${noakhaliAmount.toFixed(2)} BDT Successfully`);

    const modal = document.getElementById('noakhali-modal');
    modal.showModal();
 
});