//Url initialisation
let url = 'http://localhost:3000/api/cameras'

//Products recovery
fetch(url, { method: 'GET' })
    .then(data => {
        return data.json()

        //Objects to Json
    }).then(products => {
        console.log(products)

        //Code replacement variable
        let HTML = document.getElementById("products")

        let myHTML = ""

        //Add products
        products.forEach(product => {
            console.log(product.name)
            console.log(product.price)

            //Price modification
            let originalPrice = product.price / 100
            let newPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(originalPrice)

            //HTML modification
            myHTML += `<figure>
						<img src="${product.imageUrl}" alt="${product.name}">
						<figcaption>
							<h3>${product.name}</h3>
							<p>${newPrice}</p>
							<a href="produit.html?given_id=${product._id}">Détails</a>
						</figcaption>
					</figure>`
        })

        console.log(myHTML)
        HTML.innerHTML = myHTML
    })
    .catch(function (error) {
        alert('Server not found')
    })