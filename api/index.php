<?php
header('Access-Control-Allow-Origin: http://localhost:3000', false);
/* =======================
== GET REQUEST STUFF
In this section of the code we get all the parts of the HTTP request to handle if and do the right stuff in the backend.
======================= */

// GET THE REQUEST METHOD
$method = $_SERVER['REQUEST_METHOD'];

// GET THE DATA SENT WITH THE REQUEST
$data = [];
parse_str(file_get_contents("php://input"), $data); // Gets the data sent with POSt, PUT or DELETE HTTP Request

// GET THE RESOURCE (from the URL like: /?/user/11)
$request = getRequestPathAsArray(); // See function at bottom of file


/* =======================
== ROUTING
In this section we use the information fetched about the request above to trigger the right code for the job.
======================= */

$resource = $request[0]; // Gets the first part of the URL (like: user in /user/11) 

if(isset($request[1])){ // If we got a second value in the URL we fetch that as the $resource_id (like: 11 in /user/11)
	$resource_id = $request[1];
}else{
	$resource_id = null;
}


$db = mysqli_connect('localhost','root','','agileboardgame'); // Just a connection to the database
mysqli_query($db, 'SET NAMES utf8'); // Set all communication to the DB to utf8 so json_encode will work if the DB is set up with the wrong collation

$api_function = 'api_'.$resource; // Construct a string with the name of the function we want to call, always starting with api_ to avoid calling built in functions of PHP

if(function_exists($api_function)) // if the functions we want to call exists then call it
	$api_function($db, $method, $resource_id, $data);
else // else just respond that it is invalid (this should be json later for the sake of JS)
	echo "Invalid function!";


/* =======================
== API FUNCTIONS
Here are all the functions that the api consists of. All starting with "api_" in the function name.
======================= */

function api_card($db, $method, $id = null, $data = null){ // This is the function called when requesting the User resource (like: /user in the URL)
	$clean_id = mysqli_real_escape_string($db, $id); // Clean the $id and make it safe for SQL

	switch($method){// Check the HTTP Request Method and preform code based on it's type
		case 'GET':
				$query = "SELECT * FROM cards WHERE id=$clean_id";
			break;
		case 'POST':
			$clean['title'] = mysqli_real_escape_string($db, $data['title']);
			$clean['hidden'] = mysqli_real_escape_string($db, $data['hidden']);
				$query = "UPDATE cards SET hidden=$clean['hidden'] WHERE title=$clean['title']";
			break;
		case 'PUT':
			$clean['username'] = mysqli_real_escape_string($db, $data['username']);
			$clean['real_name'] = mysqli_real_escape_string($db, $data['real_name']);
			$query = "
				INSERT INTO users 
				(username, real_name) 
				VALUES ('{$clean['username']}', '{$clean['real_name']}')
			";
			break;
		case 'DELETE':
				$query = "DELETE FROM users WHERE id=$clean_id";
			break;
	}

	$result = mysqli_query($db, $query);

	if($result){
		if($method == 'GET'){
			$user = mysqli_fetch_assoc($result);
			echo json_encode($user); // converts the array woth results to JSON and print it out
		}
	}else{
		echo "Something went wrong!";
	}


}

function api_cards($db, $method, $id = null, $data = null){ // This is the function called when requesting the Users resource/collection (like: /users in the URL)
	switch($method){ // Check the HTTP Request Method and preform code based on it's type
		case 'GET':
				$query = "SELECT * FROM cards";
				$result = mysqli_query($db, $query);
				while($card = mysqli_fetch_assoc($result)){
					$cards[] = $card;
				}
				echo $method;
			break;
		case 'POST':
		case 'PUT':
		case 'DELETE':
				echo "Not allowed method in resource!";
			break;
	}
}

function api_book(){ // This is the function called when requesting the Book resource (like: /book in the URL)
	echo "This is a book!";
}

function api_card(){ // This is the function called when requesting the Card resource (like: /card in the URL)
	echo "This is a card!";
}


/* =======================
== SYSTEM FUNCTIONS
Here are all the functions used by the API "core".
======================= */

function getRequestPathAsArray(){ // Functions to convert the URL (like: /?/user/11) into an array
	$path = array_keys($_GET)[0]; // Get the first array key of the GET parameters (/user/11)
	$path_array = explode('/',$path); // Split the string (/user/11) into an array (user, 11 and so on) 
	$path_array = array_filter($path_array, function($v){ return $v !== '';}); // remove all empty values of the array
	$path_array = array_values($path_array); // renumber the keys to be 0,1,2 and so on
	return $path_array; // return the array with the parts of the URL
}