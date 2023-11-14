// Questo è il file che contiene tutto il codice JS della pagina web

function ticketTrain(event) {
    event.preventDefault();

    let startStation = document.getElementById("start_station").value;
    let endStation = document.getElementById("end_station").value;
    let age = document.getElementById("age").value;
    let km = document.getElementById("km").value;


    
    document.getElementById("ticket_start_station").innerHTML = startStation;
    document.getElementById("ticket_end_station").innerHTML = endStation;
    
    let totalPrice = km * 0.21;
    let roundedPrice = totalPrice.toFixed(2);

    if (isNaN(km) || isNaN(age)) {
        alert("Mi dispiace non hai inserito un valore accettato nei campi 'Età' o in 'Age'!")
    } else {
    
        if (age < 18) {
            let discountUnderage = ((totalPrice / 100) * 20);
            totalPrice = totalPrice - discountUnderage;
        } else if (age >= 65) {
            let discountOver65 = ((totalPrice / 100) * 40);
            totalPrice = totalPrice - discountOver65;           
        }                  
        document.getElementById("price").innerHTML = roundedPrice +("$");

        document.getElementById("ticket").classList.remove("d-none");

    } 
    // prendere le value inserite dall' utente ed inserirle nel codice html
   


}

