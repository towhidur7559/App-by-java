const detailsButton = document.getElementById('detail-submit-btn');

detailsButton.addEventListener('click', function () {
    const buyerDetailes = document.getElementById('buyer-details-input');
    console.log(buyerDetailes, 'Hello');
    document.getElementById('buyer-info').innerText = buyerDetailes.value;
    buyerDetailes.value = '';

});