<?php
#
# Den här klassen ska köras om vi anropat resursen user i vårt API genom /?/user
#

class _retrospective extends Resource{ // Klassen ärver egenskaper från den generella klassen Resource som finns i resource.class.php

	# Här deklareras de variabler/members som objektet ska ha
	public $id, $text;

	# Här skapas konstruktorn som körs när objektet skapas
	function __construct($resource_id, $request){

		# Om vi fått med ett id på resurser (Ex /?/user/15) och det är ett nummer sparar vi det i objektet genom $this->id
		if(is_numeric($resource_id))
			$this->id = $resource_id;

		# Vi sparar också det som kommer med i URL:en efter vårt id som en array
		$this->request = $request;
	}

	# Denna funktion körs om vi anropat resursen genom HTTP-metoden GET
	function GET($input, $db){

		# Här kollar vi om det efterfrågats en "collection" inom resursen, exempelvis "friends" i URL:en /?/user/15/friends
		$collection = "";
		if(isset($this->request[0])) $collection = $this->request[0];

		# Beroende på vilken "collectsion" som anropats gör vi olika saker
		switch($collection){
			case 'friends':
					echo "friends!";
				break;
			case 'books':
					echo "books!";
				break;
			case 'posts':
					echo "posts!";
				break;
			default: // Om det inte är en collection, eller om den inte är definierad ovan
				$this->getRetrospectiveData($input, $db);
		}
	}

	# Den här funktionen är privat och kan bara köras inom objektet, inte utanför
	private function getRetrospectiveData($input, $db){
		if($this->id){ // Om vår URL innehåller ett ID på resursen hämtas bara den usern
			$query = "
				SELECT *
				FROM retrospectives
				WHERE id = $this->id
			";

			$result = mysqli_query($db, $query);
			$user = mysqli_fetch_assoc($result);

			$this->text = $retrospective['text'];
		}else{ // om vår URL inte innehåller ett ID hämtas alla users
			$query = "
				SELECT *
				FROM retrospectives
			";
			$result = mysqli_query($db, $query);
			$data = [];
			while($row = mysqli_fetch_assoc($result)){
				$data[] = $row;
			}
			$this->retrospectives = $data;
		}
	}

	# Denna funktion körs om vi anropat resursen genom HTTP-metoden POST
	function POST($input, $db){
		# I denna funktion skapar vi en ny user med den input vi fått
		$input = array_keys($input);
		$input = json_decode($input[0]);

		$text = mysqli_real_escape_string($db, $input->text);

		if(isset($text)) {
		$query = "
			INSERT INTO retrospectives
			(text)
			VALUES ('$text')
		";
	} else {
		echo "No resource given";
	}
		mysqli_query($db, $query);
	}

	# Denna funktion körs om vi anropat resursen genom HTTP-metoden PUT
	function PUT($input, $db){
		# I denna funktion uppdateras en specifik user med den input vi fått
		# Observera att allt uppdaterad varje gång och att denna borde byggas om så att bara det vi skickar med uppdateras
		if($this->id){
			$hidden = mysqli_real_escape_string($db, $input['hidden']);

			$query = "
				UPDATE retrospectives
				SET hidden = '$hidden'
				WHERE id = $this->id
			";

			mysqli_query($db, $query);
		}else{
			echo "No resource given";
		}
	}

	# Denna funktion körs om vi anropat resursen genom HTTP-metoden DELETE
	function DELETE($input, $db){
		# I denna funktion tar vi bort en specifik user med det ID vi fått med
		if($this->id){
			$query = "
				DELETE FROM retrospectives
				WHERE id = $this->id
			";

			mysqli_query($db, $query);
		}else{
			echo "No resource given";
		}
	}
	# Denna funktion körs om vi anropat resursen genom HTTP-metoden RESETGAME
	function RESETGAME($input, $db){
		# I denna funktion truncatar vi tabellen och laddar en default-tabellen
		$query = "
			TRUNCATE TABLE retrospectives
		";

		mysqli_query($db, $query);
		$query2 = "
			INSERT INTO retrospectives
			SELECT * FROM default_retrospectives
		";

		mysqli_query($db, $query2);
	}
}
