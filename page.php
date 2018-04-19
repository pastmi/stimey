<?php
header('Content-Type: application/json');

include 'functions.php';
if ( isset ( $_POST ) && !empty( $_POST ) ) {
	$data = $_POST;
	$errors = array();

	if ( ! isset( $data['functionname'] ) ) {
		$errors[] = 'No function name!';
	}
	if ( ! isset( $data['params'] ) ) {
		$errors[] = 'No parametres!';
	}
	if ( empty( $errors ) ) {
		switch ($data['functionname']) {
			///////////////////////////////////
			//Добавление пользователя
			///////////////////////////////////
			case 'add_user':
				if ( isset ( $data['params']['login'] ) ) {
					if ( $user = add_user($data['params']['login']) ) {
						echo $user;
					} 
					else {
						echo 'Error user registration';
					}
				}
				break;
			////////////////////////////////////
			//Изменение параметров таблицы
			///////////////////////////////////
			case 'set_params_things':
				if ( isset ( $data['params']['id'] ) ) {
					$params = array();
					$id = $data['params']['id'];
					$name_table = $data['name'];
					foreach ($data['params'] as $key => $value) {
						if ( isset ( $data['params'][$key] ) ) {
							if ( $key != 'id' ) {
								if ( $key == 'active_explore' ) {
									$params[$key] = $value;
								} else {
									$params[$key] = (int)$value;
								}
							}
						}
					}
					if ( set_params_things($name_table, $id, $params) ) {
						echo 'data rooms was changed';
					} else {
						echo 'failure for changed data';
					}
				}
				break;
			//////////////////////////////////////
			//Получение параметров таблицы
			/////////////////////////////////////
			case 'get_params_things':
				if ( isset ( $data['params']['id'] ) && isset( $data['name'] ) ) {
					$room = get_params_things($data['name'], $data['params']['id']);
					echo json_encode($room);
				}
				break;
			//////////////////////////////////////
			//Есть ли такой пользователь
			/////////////////////////////////////
			case 'isUser':
				if ( isset ( $data['params']['login'] ) ) {
					return isUser($data['params']['login']);
				}
				break;
			//////////////////////////////////////
			//Получение зарплаты пользователя
			/////////////////////////////////////
			case 'counting_time_salary':
				if ( isset ( $data['params']['education'] ) && isset ( $data['params']['speciality'] ) && isset ( $data['params']['hours'] ) ) {
					$salary = counting_time_salary($data['params']['education'], $data['params']['speciality'], $data['params']['hours']);
					echo json_encode($salary);
				}
				break;
			default:
				echo 'Not found function ' . $data['functionname'];
				break;
		}
	}
}