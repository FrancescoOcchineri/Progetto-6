document.addEventListener("DOMContentLoaded", async () => {
    getData(url);
});

let url = "https://striveschool-api.herokuapp.com/api/product/";

function getData(url) {
    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4YWE0MDI2NzYxNDAwMTgzYzNiZDciLCJpYXQiOjE3MDI0MDY3MjUsImV4cCI6MTcwMzYxNjMyNX0.SaYsGxqmoTxMxi02CtqyfzZMi3PNHMeQG3ZlsBOHhn0"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            for (let i = 0; i < json.length; i++) {
                let grid = document.querySelector('.append')
                let card = document.createElement('div');
                card.className = 'col'
                card.innerHTML = `
            <div class="card h-100" style="width: 18rem;">
                <img src="${json[i].imageUrl}" class="card-img-top h-100" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${json[i].name}</h5>
                    <p class="card-text description fw-bold badge rounded-pill text-bg-dark">${json[i].description}</p>
                    <p class="card-text brand">${json[i].brand}</p>
                    <p class="card-text price mt-auto">${json[i].price}€</p>
                    <button type="button" class="btn btn-primary details"><i class="bi bi-info-circle-fill"></i></button>
            </div>
        `;
                grid.appendChild(card);
                let button = document.querySelectorAll('.details')
                button.forEach(d => {
                d.addEventListener('click', () =>{
                    window.location = 'details.html'
                })
                })
            }
        })
}

function createData(json, url) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4YWE0MDI2NzYxNDAwMTgzYzNiZDciLCJpYXQiOjE3MDI0MDY3MjUsImV4cCI6MTcwMzYxNjMyNX0.SaYsGxqmoTxMxi02CtqyfzZMi3PNHMeQG3ZlsBOHhn0",
            "Content-Type": "application/json"
        }
    })
        .catch(err => console.log(err))
}

document.addEventListener('DOMContentLoaded', () => {
    let back = document.querySelector('.office');
    back.addEventListener('click', () => {
        window.location = 'backoffice.html'
    })
})




