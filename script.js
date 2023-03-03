$(document).ready(function() {
	
	 // Atualiza informações do evento
	  $('#data-evento').text('02/03/2023');
	  $('#hora-evento').text('11:15');
	  $('#local-evento').text('Sala 4041');

	
	// Dados dos participantes
	var participants = [
		{
			name: "Ana Lívia",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'ana.jpg'
		},
		{
			name: "Matheus Andrade",
			rank: "Al",
			position: "CFG-reserva",
			status: "cfg-reserva",
			image: 'andrade.jpg'
		},
		{
			name: "Samuel Barbosa",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'barbosa.jpg'
		},
		{
			name: "Daniel Bretherick",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'bretherick.jpg'
		},
		{
			name: "Bronson",
			rank: "Al",
			position: "CFG-Ativa",
			status: "cfg-ativa",
			image: 'bronson.jpg'
		},
		{
			name: "Burin",
			rank: "Al",
			position: "cfg-reserva",
			status: "cfg-reserva",
			image: 'burin.jpg'
		},
		{
			name: "Cangussú",
			rank: "Al",
			position: "cfg-reserva",
			status: "cfg-reserva",
			image: 'cangussú.jpg'
		},
		{
			name: "Caruso",
			rank: "Al",
			position: "CFG-reserva",
			status: "cfg-reserva",
			image: 'caruso.jpg'
		},
		{
			name: "Cuadros",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'cuadros.jpg'
		},
		{
			name: "Damitz",
			rank: "1º Ten",
			position: "CG",
			status: "cg",
			image: 'damitz.jpg'
		},
		{
			name: "Danon",
			rank: "Al",
			position: "CFG-reserva",
			status: "cfg-reserva",
			image: 'danon.jpg'
		},
		{
			name: "Felipe Santos",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'felipe.jpg'
		},
		{
			name: "Gomes",
			rank: "Al",
			position: "cfg-reserva",
			status: "cfg-reserva",
			image: 'gomes.jpg'
		},
		{
			name: "Joseph Vieira",
			rank: "Al",
			position: "CFG-ativa",
			status: "cfg-ativa",
			image: 'joseph.jpg'
		},
		{
			name: "Knoller",
			rank: "Al",
			position: "cfg-reserva",
			status: "cfg-reserva",
			image: 'knöller.jpg'
		},
		{
			name: "Nascimento",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'nascimento.jpg'
		},
		{
			name: "Mateus Lima",
			rank: "Al",
			position: "CFG-reserva",
			status: "cfg-reserva",
			image: 'mateus.jpg'
		},
		{
			name: "Nóbrega",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'nóbrega.jpg'
		},
		{
			name: "Paixão",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'paixão.jpg'
		},
		{
			name: "Pamella",
			rank: "Al",
			position: "CFG-reserva",
			status: "cfg-reserva",
			image: 'pamella.jpg'
		},
		{
			name: "Pinafi",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'pinafi.jpg'
		},
		{
			name: "Pontes",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'pontes.jpg'
		},
		{
			name: "Queiroz",
			rank: "Al",
			position: "CFG-ativa",
			status: "cfg-ativa",
			image: 'queiroz.jpg'
		},
		{
			name: "Richard",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'richard.jpg'
		},
		{
			name: "Timbó",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'timbó.jpg'
		},
		{
			name: "Vasconcelos",
			rank: "Al",
			position: "CFG-ativa",
			status: "cfg-ativa",
			image: 'vasconcelos.jpg'
		},
		{
			name: "Viegas",
			rank: "Al",
			position: "cfg-ativa",
			status: "cfg-ativa",
			image: 'viegas.jpg'
		}
	];

	// Preenche a página com os cards dos participantes
	function fillParticipants() {
		$("#participants").empty();
		var filter = $("#filter").val();
		$.each(participants, function(index, participant) {
			if (filter === "all" || participant.status === filter) {
				var card = $("<div>").addClass("participant").attr("id", "participant-" + index);
				card.append($("<img>").attr("src", participant.image));
				card.append($("<h2>").text(participant.rank + " " + participant.name));
				card.append($("<h3>").text(participant.position));
				$("#participants").append(card);
			}
		});
	}

	// Atualiza a exibição dos participantes ao selecionar o filtro
	$("#filter").on("change", function() {
		fillParticipants();
	});

	// Marca ou desmarca a presença de um participante ao clicar no card
	$(document).on("click", ".participant", function() {
		$(this).toggleClass("present");
	});

	// Gera o arquivo CSV com a lista de participantes e não participantes
	$("#export-button").on("click", function() {
		var csv = "sep=,\n";
		csv += "Participantes\n";
		csv += "Posto/Nome Conhecido, Nome Completo, Status\n";
		$.each(participants, function(index, participant) {
			var status = $(`#participant-${index}`).hasClass("present") ? "Presente" : "Ausente";
			csv += `${participant.rank} ${participant.name},${participant.name} - ${participant.position},${status}\n`;
		});
		csv += "\nNão Participantes\n";
		csv += "Posto/Nome Conhecido, Nome Completo, Status\n";
		$.each(participants, function(index, participant) {
			var status = $(`#participant-${index}`).hasClass("present") ? "Presente" : "Ausente";
			if (status === "Ausente") {
				csv += `${participant.rank} ${participant.name},${participant.name} - ${participant.position},${status}\n`;
			}
		});
		var link = document.createElement("a");
		link.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csv));
		link.setAttribute("download", "participantes.csv");
		link.style.display = "none";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	});

	// Inicializa a exibição dos participantes
	fillParticipants();

});
