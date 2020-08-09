<?php
$_POST=json_decode(file_get_contents("php://input"),true);// для работы с json
echo var_dump($_POST);//превращает данные от клиента в строку и показывает обратно на клиете
