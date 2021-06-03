//Création de la variable contenant l'id
let urlParams = new URLSearchParams(window.location.search)
let productId = urlParams.get("given_id")
console.log(productId)

//Url initialisation
let url = `http://localhost:3000/api/cameras/${productId}`


//Recuperation Produit
fetch(url, { method: 'GET' })
	.then(data => {
		return data.json()

		//Objects to Json
	}).then(article => {
		console.log(article)

		//Code replacement variable
		let HTML = document.getElementById("object")

		let newHTML = ""

		//modification Prix
		let originalPrice = article.price / 100
		let newPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(originalPrice)

		//Création et affichage des élements HTML
		myHTML = `<img src="${article.imageUrl}">
				<!--content-->
				<form id="description">
					<div class="desc-product">
						<div>
							<h2>${article.name}</h2>
							<p>${newPrice}</p>
						</div>

						<div>
							<!--dropdown list-->
							<label for="lense">Choix de focal</label><br>
							<select name="lense" id="lense">
							</select>
						</div>
					</div>

					<p>${article.description}</p>

					<!--Submit Button-->
					<button id="addtobasket" type="submit">Ajouter au Panier</button>
				</form>`

		HTML.innerHTML = myHTML



		//Options modification
		//Code replacement variable
		let option = document.getElementById("lense")
		let newoption = ""

		console.log(article.lenses)

		//Options initialisation
		article.lenses.forEach(optionLens => {
			console.log(optionLens)
			newoption += `<option value="${optionLens}">${optionLens}</option>`
		})

		console.log(newoption)

		option.innerHTML = newoption


		//Form selection
		const form = document.querySelector('form');
		console.log(form)


		//Création d'une écoute d'évenement on click du bouton addtobasket
		form.addEventListener("submit", event => {
			event.preventDefault()
			let selectLens = event.target.lense.value

			console.log(selectLens)
			console.log("click OK")

			
		})
	})
