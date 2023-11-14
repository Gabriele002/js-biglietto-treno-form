// Questo è il file che contiene tutto il codice JS della pagina web

function ticketTrain(event) {
    event.preventDefault();

    let startStation = document.getElementById("start_station").value;
    let endStation = document.getElementById("end_station").value;
    // prendere le value inserite dall' utente ed inserirle nel codice html
    document.getElementById("ticket_start_station").innerHTML = startStation;
    document.getElementById("ticket_end_station").innerHTML = endStation;

}
if (startStation != Roma || Milano || Napoli){
    alert('Inserire una stazione valida');
}