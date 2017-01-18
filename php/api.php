<?php
$db = mysqli_connect('localhost', 'root','' , 'krokben');

$sql = "SELECT * FROM cards";
$result = mysqli_query($db, $sql);

$data = array();
while ($row = mysqli_fetch_assoc($result)) {
  $row_data = array(
      'id' => $row['id'],
      'index' => $row['index'],
      'type' => $row['type'],
      'title' => $row['title'],
      'price' => $row['price'],
      'analysis' => $row['analysis'],
      'development' => $row['development'],
      'test' => $row['test']
  );
  array_push($data, $row_data);
}

function utf8_converter($array) { // Convert array to UTF8 function
    array_walk_recursive($array, function(&$item, $key){
        if(!mb_detect_encoding($item, 'utf-8', true)){
                $item = utf8_encode($item);
        }
    });

    return $array;
}

// echo json_encode(utf8_converter($data));
// echo json_last_error_msg();

  echo "hej";
?>