<?php
# 
# Den här klassen ska köras om vi anropat resursen user i vårt API genom /?/user
# 

class _game extends Resource{ // Klassen ärver egenskaper från den generella klassen Resource som finns i resource.class.php

	# Här deklareras de variabler/members som objektet ska ha
	public $id, $name, $password;

	# Här skapas konstruktorn som körs när objektet skapas
	function __construct($resource_id, $request){
		
		# Om vi fått med ett id på resurser (Ex /?/user/15) och det är ett nummer sparar vi det i objektet genom $this->id
		if(is_numeric($resource_id))
			$this->id = $resource_id;

		# Vi sparar också det som kommer med i URL:en efter vårt id som en array
		$this->request = $request;
	}

	# Denna funktion körs om vi anropat resursen genom HTTP-metoden POST
	function POST($input, $db){
			$this->getGameData($input, $db);
	}

	# Den här funktionen är privat och kan bara köras inom objektet, inte utanför
	private function getGameData($input, $db){
		if($this->id){ // Om vår URL innehåller ett ID på resursen hämtas bara den usern
			$query = "
				SELECT * 
				FROM games
				WHERE id = $this->id
			";

			$result = mysqli_query($db, $query);
			$user = mysqli_fetch_assoc($result);

			$this->name = $game['name'];
			$this->password = $game['password'];
		}else{ // om vår URL inte innehåller ett ID hämtas alla users
			// $name = mysqli_real_escape_string($db, $input['name']);
			// $password = mysqli_real_escape_string($db, $input['password']);
			$input = array_keys($input);
			$input = json_decode($input[0]);

			$name = mysqli_real_escape_string($db, $input->name);
			$password = mysqli_real_escape_string($db, $input->password);

			$query = "
				SELECT * 
				FROM games
				WHERE name = '$name'
				AND password = '$password'
			";
			$result = mysqli_query($db, $query);
			$data = [];
			while($row = mysqli_fetch_assoc($result)){
				$data[] = $row;
			}
			$this->games = $data;
		}
	}

	# Denna funktion körs om vi anropat resursen genom HTTP-metoden PUT
	function PUT($input, $db){
		# I denna funktion uppdateras en specifik user med den input vi fått
		# Observera att allt uppdaterad varje gång och att denna borde byggas om så att bara det vi skickar med uppdateras
		$input = array_keys($input);
		$input = json_decode($input[0]);

		$name = mysqli_real_escape_string($db, $input->name);
		$password = mysqli_real_escape_string($db, $input->password);

		if(isset($name) && isset($password)) {
			$hasUser = "
				SELECT * FROM games
				WHERE name = '$name'
			";

			$result = mysqli_query($db, $hasUser);
			$data = [];
			while($row = mysqli_fetch_assoc($result)){
				$data[] = $row;
			}

			if (count($data) === 0) {
				$query = "
					INSERT INTO games
					(name, password)
					VALUES ('$name','$password')
				";

				mysqli_query($db, $query);
			} else {
				$this->message = 'Sorry, that user name is already taken...';
			}
		}
	}

	# Denna funktion körs om vi anropat resursen genom HTTP-metoden DELETE
	function DELETE($input, $db){
		# I denna funktion tar vi bort en specifik user med det ID vi fått med
		if($this->id){
			$query = "
				DELETE FROM games 
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
			TRUNCATE TABLE games
		";

		mysqli_query($db, $query);
		$query2 = "
			INSERT INTO games
			SELECT * FROM default_games
		";

		mysqli_query($db, $query2);
	}
}