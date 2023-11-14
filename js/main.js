
    let distanceInKm = parseFloat(prompt("Inserisci il numero di chilometri da percorrere:"));
    let passengerAge = parseFloat(prompt("Inserisci la tua età"));
    //impostare prezzo per km 
    const priceForKm = 0.21
    let totalPrice = distanceInKm * priceForKm;
    let roundedPrice = totalPrice.toFixed(2);
    
    
    
    if (isNaN(distanceInKm) || isNaN(passengerAge)) {
        alert("Mi dispiace non hai inserito entrambi dei numeri!")
    } else {
    
        if (passengerAge < 18) {
            let discountUnderage = ((totalPrice / 100) * 20);
            totalPrice = totalPrice - discountUnderage;
        } else if (passengerAge >= 65) {
            let discountOver65 = ((totalPrice / 100) * 40);
            totalPrice = totalPrice - discountOver65;           
        }                  

        document.getElementById("price").innerHTML =("Prezzo totale:")+ (" ") + roundedPrice +("$");

    }

    












