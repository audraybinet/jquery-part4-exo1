$(function() {
	// Initialisation des variables
	var computer = "";
	var party = 1;
	var playerScore = 0;
	var computerScore = 0;
	$('#compare').html("Jouer la manche " + party);
	$result = $('#result');

	// Choix de l'IA
	function computerChoice() {
		var randomNumber = Math.floor(Math.random()*3 + 1)
		if (randomNumber == 1) {
			computer = "Pierre";
		}
		else if (randomNumber == 2) {
			computer = "Feuille";
		}
		else {
			computer = "Ciseaux";
		}
	}

	// Prise en compte du choix du joueur
	function playerChoice() {
		$player = $('#player').val();
	}

	// Comparaison des résultats, stocké dans $result, incrémentation du score
	function compare(ia, player) {
		if ((ia == "Pierre" && $player == "Ciseaux") || (ia == "Feuille" && $player == "Pierre") || (ia == "Ciseaux" && $player == "Feuille")){
			$result = "tu as perdu !";
			computerScore++;
		}
		else if (ia == player) {
			$result = "c'est un match nul !";
		}
		else {
			$result = "tu as gagné !";
			playerScore++;
		}
	}

	// Clic sur le bouton jouer, execution des fonctions
	$('#compare').click(function() {
		computerChoice();
		playerChoice();
		compare(computer, $player);
		showText();
	});

	// Affichage des résultats
	function showText() {
		$('.left').text("Player: " + playerScore);
		$('.right').text("Computer: " + computerScore);
		$('#result').html("Stephen a joué <b>" + computer + "</b>, " + $result);
		$('#result').slideDown(500,"easeOutBack", function() {
			$('#result').delay(1000).slideUp(500,"easeInBack", function() {});
		});
		$('#compare').effect( "bounce", "slow" );
		party++;
		$('#compare').html("Jouer la manche " + party);
	}
});
