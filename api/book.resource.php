<?php
# 
# Den här klassen ska köras om vi anropat resursen usebookr i vårt API genom /?/book
# 

class _book extends Resource{ // Klassen ärver egenskaper från den generella klassen Resource som finns i resource.class.php

	# Den här funktionen skriver över den ärvda funktionen output() från Resource
	function output(){
		echo "Nonono";
	}

	function GET(){
		echo "GET book";
	}

	function POST(){
		echo "post book";
	}

	function PUT(){
		echo "put book";
	}

	function DELETE(){
		echo "DELETE book";
	}
}