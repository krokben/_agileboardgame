<?php
#
# Den här klassen ska köras om vi anropat resursen user i vårt API genom /?/user
#

class _gamestate extends Resource{ // Klassen ärver egenskaper från den generella klassen Resource som finns i resource.class.php

	# Här deklareras de variabler/members som objektet ska ha
	public $id, $game_id, $type, $type_id, $prop, $val;

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
			case 'final':
					$query = "
						SELECT *
						FROM gamestate
						WHERE prop = 'final'
					";

					$result = mysqli_query($db, $query);
					$data = [];
					while($row = mysqli_fetch_assoc($result)){
						$data[] = $row;
					}
					$this->gamestate = $data;
				break;
			default: // Om det inte är en collection, eller om den inte är definierad ovan
				$this->getGamestateData($input, $db);
		}
	}

	# Den här funktionen är privat och kan bara köras inom objektet, inte utanför
	private function getGamestateData($input, $db){
		if($this->id){ // Om vår URL innehåller ett ID på resursen hämtas bara den usern
			$query = "
				SELECT *
				FROM gamestate
				WHERE id = $this->id
			";

			$result = mysqli_query($db, $query);
			$user = mysqli_fetch_assoc($result);

			$this->game_id = $gamestate['game_id'];
			$this->type = $gamestate['type'];
			$this->type_id = $gamestate['type_id'];
			$this->prop = $gamestate['prop'];
			$this->val = $gamestate['val'];
		}else{ // om vår URL inte innehåller ett ID hämtas alla users
			$query = "
				SELECT *
				FROM gamestate
			";
			$result = mysqli_query($db, $query);
			$data = [];
			while($row = mysqli_fetch_assoc($result)){
				$data[] = $row;
			}
			$this->gamestate = $data;
		}
	}

	# Denna funktion körs om vi anropat resursen genom HTTP-metoden POST
	function POST($input, $db){
		# I denna funktion skapar vi en ny user med den input vi fått
		$input = array_keys($input);
		$input = json_decode($input[0]);

		$game_id = mysqli_real_escape_string($db, $input->game_id);
		$type = mysqli_real_escape_string($db, $input->type);
		$type_id = mysqli_real_escape_string($db, $input->type_id);
		$prop = mysqli_real_escape_string($db, $input->prop);
		$val = mysqli_real_escape_string($db, $input->val);

		$query = "
			INSERT INTO gamestate
			(game_id, type, type_id, prop, val)
			VALUES ('$game_id', '$type', '$type_id', '$prop', '$val')
		";

		mysqli_query($db, $query);
	}

	# Denna funktion körs om vi anropat resursen genom HTTP-metoden PUT
	function PUT($input, $db){
		# I denna funktion uppdateras en specifik user med den input vi fått
		# Observera att allt uppdaterad varje gång och att denna borde byggas om så att bara det vi skickar med uppdateras
		if($this->id){


			$input = array_keys($input);
			$input = json_decode($input[0]);

			$title = mysqli_real_escape_string($db, $input->title);
			$price = mysqli_real_escape_string($db, $input->price);
			$analysis = mysqli_real_escape_string($db, $input->analysis);
			$development = mysqli_real_escape_string($db, $input->development);
			$test = mysqli_real_escape_string($db, $input->test);
			$type = mysqli_real_escape_string($db, $input->type);
			$location = mysqli_real_escape_string($db, $input->location);

			// foreach($input as $k => $v){
			// 	$sqlparts[] = "`$k` = '$v'";
			// }

			// $sql_params = implode($sqlparts, ",")

			if(isset($title)) {
				$query = "
					UPDATE gamestate
					SET title = '$title', price = '$price',
					analysis = '$analysis', development = '$development',
					test = '$test', type = '$type',
					location = '$location'
					WHERE id = $this->id
				";

				mysqli_query($db, $query);
			}
			else if(isset($location)) {
				$query = "
					UPDATE gamestate
					SET location = '$location'
					WHERE id = $this->id
				";

				mysqli_query($db, $query);
			}
		}else{
			echo "No resource given";
		}
	}

	# Denna funktion körs om vi anropat resursen genom HTTP-metoden DELETE
	function DELETE($input, $db){
		# I denna funktion tar vi bort en specifik user med det ID vi fått med
		if($this->id){
			$query = "
				DELETE FROM gamestate
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
		if($this->id){
			$query = "
				DELETE FROM gamestate
				WHERE game_id = $this->id
			";
			
			mysqli_query($db, $query);
		}else{
			echo "No resource given";
		}
	}
}
