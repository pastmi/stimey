<?php

include 'libs/db.php';

R::ext('xdispense', function( $type ){
    return R::getRedBean()->dispense( $type );
});

function add_user ($login) {
	isUser($login);
	$user = R::dispense( 'users' );
	    $user->login = $login;
	    $user->job = 1;
	    $user->education = 1;
		$user->freeTime = 0;
	    $user->day = 0;
	    $user->money = 300;
	    $user->studyTimeLeft = 0;
	    $user->studyDone = 0;
		$user->dayAvailable = 10;
	    $user->level_explore = 1;
		$user->things_explroed = 0;


    $room = R::dispense('room');
	    $room->vibro_plate = 0;
	    $room->table_PC = 0;
	    $room->bed = 0;
	    $room->books = 0;
	    $room->curtain = 0;
	    $room->lamp_table = 0;
	    $room->lamp_top = 0;
	    $room->poster = 0;
	    $room->TV = 0;
	    $room->scooter = 0;
	    $room->planet_system = 0;
	    $room->robot_vacuum_cleaner = 0;
	    $room->jetpack = 0;
	    $room->wardrobe = 0;
	    $room->robot = 0;
	    $room->sneakers = 0;
	    $room->guitar = 0;
	    $room->chair = 0;
	    $room->table = 0;
	    $room->PC = 0;
	    $room->phone = 0;
	    $room->paret = 0;
	    $room->plate_and_cup = 0;
	    $room->cactus = 0;
    $user->room = $room;

	$laboratory = R::dispense('laboratory');
	    $laboratory->test_chamber = 0;
	    $laboratory->cabinet = 0;
	    $laboratory->gas_analyser = 0;
	    $laboratory->notice_board = 0;
	    $laboratory->lab_bench = 0;
	    $laboratory->reagent_cabinet = 0;
	    $laboratory->climate_chamber = 0;
	    $laboratory->set_of_tools = 0;
	    $laboratory->laboratory_robot = 0;
	    $laboratory->recording_oscillometer = 0;
	    $laboratory->centrifuge = 0;
	    $laboratory->drawing_table = 0;
	    $laboratory->electronic_scale = 0;
	    $laboratory->temperature_meter = 0;
	    $laboratory->amperemeter = 0;
	    $laboratory->supercomputer = 0;
	    $laboratory->voltage_meter = 0;
	    $laboratory->aspirator = 0;
	    $laboratory->set_for_drawing = 0;
	    $laboratory->moisture_analyzer = 0;
	    $laboratory->set_for_drawing = 0;
	    $laboratory->microscope = 0;
	    $laboratory->set_of_flasks = 0;
	    $laboratory->alcohol_burner = 0;
    $user->laboratory = $laboratory;

	$avatar = R::dispense('avatars');
		$avatar->sex = 1;
		$avatar->health = 1;
		$avatar->mood = 1;
		$avatar->eye = 2;
	$user->avatar = $avatar;

	$rocket_level_1 = R::xdispense('rocket_level_1');
		$rocket_level_1->S1_part_03 = 250;
		$rocket_level_1->S1_part_01 = 250;
		$rocket_level_1->S1_part_02 = 250;
		$rocket_level_1->S1_part_04 = 250;
		$rocket_level_1->S1_part_05 = 250;
		$rocket_level_1->S1_part_06 = 250;
		$rocket_level_1->S1_part_07 = 250;
		$rocket_level_1->S1_part_08 = 250;
		$rocket_level_1->S1_part_09 = 250;
		$rocket_level_1->level_explored = 0;
		$rocket_level_1->active_explore = null;
		$rocket_level_1->count_explored = 0;
	$user->rocket_level_1 = $rocket_level_1;

	$rocket_level_2 = R::xdispense('rocket_level_2');
		$rocket_level_2->S2b_part_01 = 250;
		$rocket_level_2->S2b_part_02 = 250;
		$rocket_level_2->S2b_part_03 = 250;
		$rocket_level_2->S2b_part_04 = 250;
		$rocket_level_2->S2b_part_05 = 250;
		$rocket_level_2->S2b_part_06 = 250;
		$rocket_level_2->S2b_part_07 = 250;
		$rocket_level_2->S2b_part_08 = 250;
		$rocket_level_2->S2b_part_09 = 250;
		$rocket_level_2->S2b_part_10 = 250;
		$rocket_level_2->level_explored = 0;
		$rocket_level_2->active_explore = null;
		$rocket_level_2->count_explored = 0;
	$user->rocket_level_2 = $rocket_level_2;

	$rocket_level_3 = R::xdispense('rocket_level_3');
		$rocket_level_3->S3_part_01 = 250;
		$rocket_level_3->S3_part_02 = 250;
		$rocket_level_3->S3_part_03 = 250;
		$rocket_level_3->S3_part_04 = 250;
		$rocket_level_3->S3_part_05 = 250;
		$rocket_level_3->S3_part_06 = 250;
		$rocket_level_3->S3_part_07 = 250;
		$rocket_level_3->S3_part_08 = 250;
		$rocket_level_3->S3_part_09 = 250;
		$rocket_level_3->S3_part_10 = 250;
		$rocket_level_3->S3_part_11 = 250;
		$rocket_level_3->S3_part_12 = 250;
		$rocket_level_3->S3_part_13 = 250;
		$rocket_level_3->S3_part_14 = 250;
		$rocket_level_3->S3_part_15 = 250;
		$rocket_level_3->level_explored = 0;
		$rocket_level_3->active_explore = null;
		$rocket_level_3->count_explored = 0;
	$user->rocket_level_3 = $rocket_level_3;

    R::store($user);
    return $user;
}
function set_params_user ( $user_id, $params = array() ) {
	$data = array();
	if ( !empty( $params ) ) {
		foreach ($params as $key => $value) {
			if ( isset ($params[$key]) ) {
				$data[$key] = (int)$params[$key];
			}
		}
	}
	$user = R::load('users', $user_id);
	foreach ($params as $key => $value) {
		if ( isset ($data[$key]) ) {
			$user->$key = $data[$key];
		}
	}
	R::store($user);
	return true;
}
function get_params_user ( $user_id ) {
	if ( $user = R::findOne('users', 'id = ?', array($user_id)) ) {
		$data = array();
		foreach ($user as $key => $value) {
			$data[$key] = $value;
		}
		return $data;
	}
}
function set_params_things( $name_table, $id, $params = array() ) {
	$data = array();
	if ( !empty( $params ) ) {
		foreach ($params as $key => $value) {
			if ( isset ($params[$key]) ) {
				if ( $key == 'active_explore' ) {
					$data[$key] = $params[$key];
				} else {
					$data[$key] = (int)$params[$key];
				}
			}
		}
	}
	$thing = R::load($name_table, $id);
	foreach ($params as $key => $value) {
		if ( isset ($data[$key]) ) {
			$thing->$key = $data[$key];
		}
	}
	R::store($thing);
	return true;
}
function get_params_things ( $name_table, $id ) {
	if ( $thing = R::findOne($name_table, 'id = ?', array($id)) ) {
		$data = array();
		foreach ($thing as $key => $value) {
			$data[$key] = $value;
		}
		return $data;
	}
}
function set_params_room( $room_id, $params = array() ) {
	$data = array();
	if ( !empty( $params ) ) {
		foreach ($params as $key => $value) {
			if ( isset ($params[$key]) ) {
				$data[$key] = (int)$params[$key];
			}
		}
	}
	$room = R::load('room', $room_id);
	foreach ($params as $key => $value) {
		if ( isset ($data[$key]) ) {
			$room->$key = $data[$key];
		}
	}
	R::store($room);
	return true;
}
function get_params_room ( $room_id ) {
	if ( $room = R::findOne('room', 'id = ?', array($room_id)) ) {
		$data = array();
		foreach ($room as $key => $value) {
			$data[$key] = $value;
		}
		return $data;
	}
}
function set_params_avatar( $avatar_id, $params = array() ) {
	$data = array();
	if ( !empty( $params ) ) {
		foreach ($params as $key => $value) {
			if ( isset ($params[$key]) ) {
				$data[$key] = (int)$params[$key];
			}
		}
	}
	$avatar = R::load('avatars', $avatar_id);
	foreach ($params as $key => $value) {
		if ( isset ($data[$key]) ) {
			$avatar->$key = $data[$key];
		}
	}
	R::store($avatar);
	return true;
}
function get_params_avatar ( $avatar_id ) {
	if ( $avatar = R::findOne('avatars', 'id = ?', array($avatar_id)) ) {
		$data = array();
		foreach ($avatar as $key => $value) {
			$data[$key] = $value;
		}
		return $data;
	}
}
function isUser ( $login ) {
	if ( R::count('users', 'login = ?', array($login)) > 0 ) {
		return false;
	}
	return true;
}
function counting_time_salary ( $education, $speciality, $hours ) {
	$work_json = file_get_contents('http://' . $_SERVER['HTTP_HOST'] . '/lang/ru.json');
	$work = json_decode($work_json,true);

	for ($i=0; $i < 8; $i++) { 
		if( ++$work['work'.$i]['eduction'] == $education && ++$work['work'.$i]['speciality'] == $speciality ) {
			$salary = round((int)$work['work'.$i]['salaryInOur'] * (int)$hours);
		}
	}
	return $salary;	
}