document.addEventListener('DOMContentLoaded', () => {
    async function getCardDetails() {
        let cardIndex = new URLSearchParams(window.location.search).get('card');

        let url = 'https://striveschool-api.herokuapp.com/api/product/';
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4YWE0MDI2NzYxNDAwMTgzYzNiZDciLCJpYXQiOjE3MDI0MDY3MjUsImV4cCI6MTcwMzYxNjMyNX0.SaYsGxqmoTxMxi02CtqyfzZMi3PNHMeQG3ZlsBOHhn0"
            }
        });

        let data = await response.json();
        let cardDetails = data[cardIndex];
        let param = document.querySelector('#param');
        param.innerHTML = `
        <div class="card mb-3 border border-3 border-black">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${cardDetails.imageUrl}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body mx-4 text-center">
        <h5 class="card-title fs-1 mt-5">${cardDetails.name}</h5>
        <p class="card-text mt-5 fw-bold badge rounded-pill text-bg-dark fs-5">Category: ${cardDetails.description}</p>
        <p class="card-text text-black mt-5 fs-3">Developed by: ${cardDetails.brand}</p>
        <p class="card-text text-danger mt-5 fs-2">${cardDetails.price}€</p>
        <p class="card-text text-success fs-5 mt-5">In Stock</p>
      </div>
    </div>
  </div>
</div>
        `

    }
    getCardDetails();
})
