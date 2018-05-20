function Rockets(id, levelExplore,inf) {
	let lang = inf;
  var canvas, stage;
  var update = true,
    fly = false;
  var globalActiveExplore = { explored: 0 };
  var level = levelExplore;
  var thingsExplored = 0;
  var args = {};
  var rocketLevel = "rocket_level_" + levelExplore;
  var activeExploreDB;

  this.getLevel = function() {
    return "rocket_level_" + levelExplore;
  };
  this.getActiveExplore = function() {
    return activeExploreDB;
  };
  this.getArgs = function() {
    return args;
  };
  this.setArgs = function(data) {  
    args = data;
    thingsExplored = args.count_explored;
    activeExploreDB = args.active_explore;
    stage.removeAllChildren();
    if (level == 3) {
      imager(
        "/img/Stages/Stage 3/S3_part_01.png",
        297,
        427,
        0.8,
        lang['S3_part_01'],
        "Description for this things. ",
        args.s3_part_01,
        0,
        8,
        0,
        "s3_part_01"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_02.png",
        298,
        391,
        0.8,
        lang['S3_part_02'],
        "Description for this things. ",
        args.s3_part_02,
        0,
        9,
        0,
        "s3_part_02"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_03.png",
        298,
        378,
        0.8,
         lang['S3_part_03'],
        "Description for this things. ",
        args.s3_part_03,
        0,
        8,
        0,
        "s3_part_03"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_04.png",
        273,
        345,
        0.8,
         lang['S3_part_04'],
        "Description for this things. ",
        args.s3_part_04,
        0,
        10,
        0,
        "s3_part_04"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_05.png",
        314,
        346,
        0.8,
        lang['S3_part_05'],
        "Description for this things. ",
        args.s3_part_05,
        0,
        9,
        0,
        "s3_part_05"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_06.png",
        297,
        341,
        0.8,
        lang['S3_part_06'],
        "Description for this things. ",
        args.s3_part_06,
        0,
        9,
        0,
        "s3_part_06"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_07.png",
        255,
        283,
        0.8,
       lang['S3_part_07'],
        "Description for this things. ",
        args.s3_part_07,
        0,
        8,
        0,
        "s3_part_07"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_08.png",
        304,
        283,
        0.8,
        lang['S3_part_08'],
        "Description for this things. ",
        args.s3_part_08,
        0,
        8,
        0,
        "s3_part_08"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_09.png",
        299,
        283,
        0.8,
        lang['S3_part_09'],
        "Description for this things. ",
        args.s3_part_09,
        0,
        9,
        0,
        "s3_part_09"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_10.png",
        320,
        193,
        0.8,
        lang['S3_part_10'],
        "Description for this things. ",
        args.s3_part_10,
        0,
        300,
        0,
        "s3_part_10"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_11.png",
        267,
        200,
        0.8,
         lang['S3_part_11'],
        "Description for this things. ",
        args.s3_part_11,
        0,
        8,
        0,
        "s3_part_11"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_12.png",
        336,
        155,
        0.8,
         lang['S3_part_12'],
        "Description for this things. ",
        args.s3_part_12,
        0,
        8,
        0,
        "s3_part_12"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_13.png",
        299,
        286,
        0.8,
        lang['S3_part_13'],
        "Description for this things. ",
        args.s3_part_13,
        0,
        8,
        0,
        "s3_part_13"
      );
      imager(
        "/img/Stages/Stage 3/S3_part_14.png",
        313,
        268,
        0.8,
        lang['S3_part_14'],
        "Description for this things. ",
        args.s3_part_14,
        0,
        300,
        0,
        "s3_part_14"
      );
      flyButton();
    } else if (level == 2) {
      imager(
        "/img/Stages/Stage 2b/S2b_part_01.png",
        299,
        256,
        0.8,
        lang['S2b_part_01'],
        "Description for this things. ",
        args.s2b_part_01,
        0,
        8,
        0,
        "s2b_part_01"
      );
      imager(
        "/img/Stages/Stage 2b/S2b_part_02.png",
        318,
        227,
        0.8,
        lang['S2b_part_02'],
        "Description for this things. ",
        args.s2b_part_02,
        0,
        9,
        0,
        "s2b_part_02"
      );
      imager(
        "/img/Stages/Stage 2b/S2b_part_03.png",
        301,
        293,
        0.8,
        lang['S2b_part_03'],
        "Description for this things. ",
        args.s2b_part_03,
        0,
        8,
        0,
        "s2b_part_03"
      );
      imager(
        "/img/Stages/Stage 2b/S2b_part_04.png",
        298,
        349,
        0.8,
         lang['S2b_part_04'],
        "Description for this things. ",
        args.s2b_part_04,
        0,
        10,
        0,
        "s2b_part_04"
      );
      imager(
        "/img/Stages/Stage 2b/S2b_part_05.png",
        300,
        340,
        0.8,
        lang['S2b_part_05'],
        "Description for this things. ",
        args.s2b_part_05,
        0,
        9,
        0,
        "s2b_part_05"
      );
      imager(
        "/img/Stages/Stage 2b/S2b_part_06.png",
        298,
        410,
        0.8,
        lang['S2b_part_06'],
        "Description for this things. ",
        args.s2b_part_06,
        0,
        8,
        0,
        "s2b_part_06"
      );
      imager(
        "/img/Stages/Stage 2b/S2b_part_07.png",
        300,
        225,
        0.8,
        lang['S2b_part_07'],
        "Description for this things. ",
        args.s2b_part_07,
        0,
        8,
        0,
        "s2b_part_07"
      );
      imager(
        "/img/Stages/Stage 2b/S2b_part_08.png",
        245,
        255,
        0.8,
        lang['S2b_part_08'],
        "Description for this things. ",
        args.s2b_part_08,
        0,
        8,
        0,
        "s2b_part_08"
      );
      imager(
        "/img/Stages/Stage 2b/S2b_part_09.png",
        299,
        88,
        0.8,
        lang['S2b_part_09'],
        "Description for this things. ",
        args.s2b_part_09,
        0,
        9,
        0,
        "s2b_part_09"
      );
      imager(
        "/img/Stages/Stage 2b/S2b_part_10.png",
        336,
        120,
        0.8,
         lang['S2b_part_10'],
        "Description for this things. ",
        args.s2b_part_10,
        0,
        9,
        0,
        "s2b_part_10"
      );
      flyButton();
    } else if (level == 4) {
      imager(
        "/img/Stages/Stage 2a/S2a_part_04.png",
        316,
        153,
        0.47,
        "S2a_part_04",
        "Description for this things. ",
        250,
        1,
        300,
        0,
        "S2a_part_04",
        5
      );
      imager(
        "/img/Stages/Stage 2a/S2a_part_01.png",
        318,
        356,
        0.47,
        "S2a_part_01",
        "Description for this things. ",
        0,
        1,
        1,
        0,
        "S2a_part_01",
        2
      );
      imager(
        "/img/Stages/Stage 2a/S2a_part_02.png",
        317,
        123,
        0.47,
        "S2a_part_02",
        "Description for this things. ",
        0,
        0,
        200,
        0,
        "S2a_part_02",
        3
      );
      imager(
        "/img/Stages/Stage 2a/S2a_part_03.png",
        314,
        123,
        0.47,
        "S2a_part_03",
        "Description for this things. ",
        0,
        1,
        400,
        0,
        "S2a_part_03",
        4
      );
    } else if (level == 1) {
      activeExploreDB = args.active_explore;
      imager(
        "/img/Stages/Stage 1/S1_part_03.png",
        381,
        206,
        0.47,
         lang['S1_part_03'],
        "Description for this things. ",
        args.s1_part_03,
        0,
        0,
        0,
        "s1_part_03",
        0
      );
      imager(
        "/img/Stages/Stage 1/S1_part_01.png",
        302,
        476,
        0.47,
        lang['S1_part_01'],
        "Description for this things. ",
        args.s1_part_01,
        0,
        1,
        0,
        "s1_part_01",
        0
      );
      imager(
        "/img/Stages/Stage 1/S1_part_02.png",
        172,
        257,
        0.47,
        lang['S1_part_02'],
        "Description for this things. ",
        args.s1_part_02,
        0,
        10,
        0,
        "s1_part_02",
        0
      );
      imager(
        "/img/Stages/Stage 1/S1_part_04.png",
        315,
        218,
        0.47,
       lang['S1_part_04'],
        "Description for this things. ",
        args.s1_part_04,
        0,
        200,
        0,
        "s1_part_04"
      );
      imager(
        "/img/Stages/Stage 1/S1_part_05.png",
        315,
        196,
        0.47,
         lang['S1_part_05'],
        "Description for this things. ",
        args.s1_part_05,
        0,
        300,
        0,
        "s1_part_05"
      );
      imager(
        "/img/Stages/Stage 1/S1_part_06.png",
        318,
        356,
        0.47,
        lang['S1_part_06'],
        "Description for this things. ",
        args.s1_part_06,
        0,
        300,
        0,
        "s1_part_06"
      );
      imager(
        "/img/Stages/Stage 1/S1_part_07.png",
        274,
        120,
        0.47,
         lang['S1_part_07'],
        "Description for this things. ",
        args.s1_part_07,
        0,
        300,
        0,
        "s1_part_07"
      );
      imager(
        "/img/Stages/Stage 1/S1_part_08.png",
        316,
        103,
        0.47,
         lang['S1_part_08'],
        "Description for this things. ",
        args.s1_part_08,
        0,
        300,
        0,
        "s1_part_08"
      );
      imager(
        "/img/Stages/Stage 1/S1_part_09.png",
        315,
        6,
        0.47,
        lang['S1_part_09'],
        "Description for this things. ",
        args.s1_part_09,
        0,
        300,
        0,
        "s1_part_09"
      );
      flyButton();
    }
  };
  this.init = function() {
    // create stage and point it to the canvas:
    canvas = document.getElementById("rocketCanvas");
    stage = new createjs.Stage(canvas);
    stage.removeAllChildren();

    // enable touch interactions if supported on the current device:
    createjs.Touch.enable(stage);
    // enabled mouse over / out events
    stage.enableMouseOver(10);
    stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
    // load the source image:
    // var subjectIsBy = logic.request('get_params_room',{id:1});
    // explored = 10;
    if (level == 3) {
      $.ajax({
        type: "POST",
        url: "http://" + window.location.hostname + "/page.php",
        dataType: "json",
        data: {
          functionname: "get_params_things", // пишешь какую функцию хочешь взять, список находится в page.php(set_params_user, get_params_user, add_user, isUser)
          name: "rocket_level_" + levelExplore,
          params: {
            // это наш масив параметров
            id: id //сюда передаешь id пользователя
          }
        },
        success: function(data) {
          args = data;
          activeExploreDB = args.active_explore;
          thingsExplored = args.count_explored;
          imager(
            "/img/Stages/Stage 3/S3_part_01.png",
            297,
            427,
            0.8,
             lang['S3_part_01'],
            "Description for this things. ",
            args.s3_part_01,
            0,
            8,
            0,
            "s3_part_01"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_02.png",
            298,
            391,
            0.8,
             lang['S3_part_02'],
            "Description for this things. ",
            args.s3_part_02,
            0,
            9,
            0,
            "s3_part_02"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_03.png",
            298,
            378,
            0.8,
            lang['S3_part_03'],
            "Description for this things. ",
            args.s3_part_03,
            0,
            8,
            0,
            "s3_part_03"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_04.png",
            273,
            345,
            0.8,
             lang['S3_part_04'],
            "Description for this things. ",
            args.s3_part_04,
            0,
            10,
            0,
            "s3_part_04"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_05.png",
            314,
            346,
            0.8,
             lang['S3_part_05'],
            "Description for this things. ",
            args.s3_part_05,
            0,
            9,
            0,
            "s3_part_05"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_06.png",
            297,
            341,
            0.8,
             lang['S3_part_06'],
            "Description for this things. ",
            args.s3_part_06,
            0,
            9,
            0,
            "s3_part_06"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_07.png",
            255,
            283,
            0.8,
            lang['S3_part_07'],
            "Description for this things. ",
            args.s3_part_07,
            0,
            8,
            0,
            "s3_part_07"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_08.png",
            304,
            283,
            0.8,
            lang['S3_part_08'],
            "Description for this things. ",
            args.s3_part_08,
            0,
            8,
            0,
            "s3_part_08"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_09.png",
            299,
            283,
            0.8,
            lang['S3_part_09'],
            "Description for this things. ",
            args.s3_part_09,
            0,
            9,
            0,
            "s3_part_09"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_10.png",
            320,
            193,
            0.8,
             lang['S3_part_10'],
            "Description for this things. ",
            args.s3_part_10,
            0,
            300,
            0,
            "s3_part_10"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_11.png",
            267,
            200,
            0.8,
             lang['S3_part_11'],
            "Description for this things. ",
            args.s3_part_11,
            0,
            8,
            0,
            "s3_part_11"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_12.png",
            336,
            155,
            0.8,
            lang['S3_part_12'],
            "Description for this things. ",
            args.s3_part_12,
            0,
            8,
            0,
            "s3_part_12"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_13.png",
            299,
            286,
            0.8,
             lang['S3_part_13'],
            "Description for this things. ",
            args.s3_part_13,
            0,
            8,
            0,
            "s3_part_13"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_14.png",
            313,
            268,
            0.8,
             lang['S3_part_14'],
            "Description for this things. ",
            args.s3_part_14,
            0,
            300,
            0,
            "s3_part_14"
          );
          imager(
            "/img/Stages/Stage 3/S3_part_15.png",
            299,
            118,
            0.8,
            lang['S3_part_15'],
            "Description for this things. ",
            args.s3_part_15,
            0,
            300,
            0,
            "s3_part_15"
          );
          flyButton();
        }
      });
    } else if (level == 2) {
      $.ajax({
        type: "POST",
        url: "http://" + window.location.hostname + "/page.php",
        dataType: "json",
        data: {
          functionname: "get_params_things", // пишешь какую функцию хочешь взять, список находится в page.php(set_params_user, get_params_user, add_user, isUser)
          name: "rocket_level_" + levelExplore,
          params: {
            // это наш масив параметров
            id: id //сюда передаешь id пользователя
          }
        },
        success: function(data) {
          args = data;
          activeExploreDB = args.active_explore;
          thingsExplored = args.count_explored;
          imager(
            "/img/Stages/Stage 2b/S2b_part_01.png",
            299,
            256,
            0.8,
             lang['S2b_part_01'],
            "Description for this things. ",
            args.s2b_part_01,
            0,
            8,
            0,
            "s2b_part_01"
          );
          imager(
            "/img/Stages/Stage 2b/S2b_part_02.png",
            318,
            227,
            0.8,
            lang['S2b_part_02'],
            "Description for this things. ",
            args.s2b_part_02,
            0,
            9,
            0,
            "s2b_part_02"
          );
          imager(
            "/img/Stages/Stage 2b/S2b_part_03.png",
            301,
            293,
            0.8,
            lang['S2b_part_03'],
            "Description for this things. ",
            args.s2b_part_03,
            0,
            8,
            0,
            "s2b_part_03"
          );
          imager(
            "/img/Stages/Stage 2b/S2b_part_04.png",
            298,
            349,
            0.8,
            lang['S2b_part_04'],
            "Description for this things. ",
            args.s2b_part_04,
            0,
            10,
            0,
            "s2b_part_04"
          );
          imager(
            "/img/Stages/Stage 2b/S2b_part_05.png",
            300,
            340,
            0.8,
            lang['S2b_part_05'],
            "Description for this things. ",
            args.s2b_part_05,
            0,
            9,
            0,
            "s2b_part_05"
          );
          imager(
            "/img/Stages/Stage 2b/S2b_part_06.png",
            298,
            410,
            0.8,
            lang['S2b_part_06'],
            "Description for this things. ",
            args.s2b_part_06,
            0,
            8,
            0,
            "s2b_part_06"
          );
          imager(
            "/img/Stages/Stage 2b/S2b_part_07.png",
            300,
            225,
            0.8,
            lang['S2b_part_07'],
            "Description for this things. ",
            args.s2b_part_07,
            0,
            8,
            0,
            "s2b_part_07"
          );
          imager(
            "/img/Stages/Stage 2b/S2b_part_08.png",
            245,
            255,
            0.8,
            lang['S2b_part_08'],
            "Description for this things. ",
            args.s2b_part_08,
            0,
            8,
            0,
            "s2b_part_08"
          );
          imager(
            "/img/Stages/Stage 2b/S2b_part_09.png",
            299,
            88,
            0.8,
            lang['S2b_part_09'],
            "Description for this things. ",
            args.s2b_part_09,
            0,
            9,
            0,
            "s2b_part_09"
          );
          imager(
            "/img/Stages/Stage 2b/S2b_part_10.png",
            336,
            120,
            0.8,
            lang['S2b_part_10'],
            "Description for this things. ",
            args.s2b_part_10,
            0,
            9,
            0,
            "s2b_part_10"
          );
          flyButton();
        }
      });
    } else if (level == 4) {
      imager(
        "/img/Stages/Stage 2a/S2a_part_04.png",
        316,
        153,
        0.47,
        lang['S2a_part_04'],
        "Description for this things. ",
        250,
        1,
        300,
        0,
        "S2a_part_04",
        5
      );
      imager(
        "/img/Stages/Stage 2a/S2a_part_01.png",
        318,
        356,
        0.47,
        lang['S2a_part_01'],
        "Description for this things. ",
        0,
        1,
        1,
        0,
        "S2a_part_01",
        2
      );
      imager(
        "/img/Stages/Stage 2a/S2a_part_02.png",
        317,
        123,
        0.47,
        lang['S2a_part_02'],
        "Description for this things. ",
        0,
        0,
        200,
        0,
        "S2a_part_02",
        3
      );
      imager(
        "/img/Stages/Stage 2a/S2a_part_03.png",
        314,
        123,
        0.47,
        lang['S2a_part_03'],
        "Description for this things. ",
        0,
        1,
        400,
        0,
        "S2a_part_03",
        4
      );
    } else if (level == 1) {
      $.ajax({
        type: "POST",
        url: "http://" + window.location.hostname + "/page.php",
        dataType: "json",
        data: {
          functionname: "get_params_things", // пишешь какую функцию хочешь взять, список находится в page.php(set_params_user, get_params_user, add_user, isUser)
          name: rocketLevel,
          params: {
            // это наш масив параметров
            id: id //сюда передаешь id пользователя
          }
        },
        success: function(data) {
          args = data;
          activeExploreDB = args.active_explore;
          thingsExplored = args.count_explored;
          imager(
            "/img/Stages/Stage 1/S1_part_03.png",
            381,
            206,
            0.47,
            "Loading elevator",
            "Description for this things. ",
            args.s1_part_03,
            0,
            0,
            0,
            "s1_part_03",
            0
          );
          imager(
            "/img/Stages/Stage 1/S1_part_01.png",
            302,
            476,
            0.47,
            "Support",
            "Description for this things. ",
            args.s1_part_01,
            0,
            1,
            0,
            "s1_part_01",
            0
          );
          imager(
            "/img/Stages/Stage 1/S1_part_02.png",
            172,
            257,
            0.47,
            "Take off area",
            "Description for this things. ",
            args.s1_part_02,
            0,
            10,
            0,
            "s1_part_02",
            0
          );
          imager(
            "/img/Stages/Stage 1/S1_part_04.png",
            315,
            218,
            0.47,
            "Spacecraft body",
            "Description for this things. ",
            args.s1_part_04,
            0,
            200,
            0,
            "s1_part_04"
          );
          imager(
            "/img/Stages/Stage 1/S1_part_05.png",
            315,
            196,
            0.47,
            "Rocket assist",
            "Description for this things. ",
            args.s1_part_05,
            0,
            300,
            0,
            "s1_part_05"
          );
          imager(
            "/img/Stages/Stage 1/S1_part_06.png",
            318,
            356,
            0.47,
            "Second stage engine",
            "Description for this things. ",
            args.s1_part_06,
            0,
            300,
            0,
            "s1_part_06"
          );
          imager(
            "/img/Stages/Stage 1/S1_part_07.png",
            274,
            120,
            0.47,
            "Access door",
            "Description for this things. ",
            args.s1_part_07,
            0,
            300,
            0,
            "s1_part_07"
          );
          imager(
            "/img/Stages/Stage 1/S1_part_08.png",
            316,
            103,
            0.47,
            "Window",
            "Description for this things. ",
            args.s1_part_08,
            0,
            300,
            0,
            "s1_part_08"
          );
          imager(
            "/img/Stages/Stage 1/S1_part_09.png",
            315,
            6,
            0.47,
            "Signals intelligent",
            "Description for this things. ",
            args.s1_part_09,
            0,
            300,
            0,
            "s1_part_09"
          );
          flyButton();
        }
      });
    }
    createjs.Ticker.addEventListener("tick", rocketFly);
    // $('#Level2').on('click', function () {
    //     fly = true;
    // });
  };
  function flyButton() {
    if (level == 1 && thingsExplored != 9) {
      $("#laboratory .divButtonLaboratory .buttonLaboratory p").each(
        function() {
          $(this).addClass("blocked");
        }
      );
      $("#Level1").removeClass("blocked");
    } else if (level == 1 && thingsExplored == 9) {
      $("#laboratory .divButtonLaboratory .buttonLaboratory p").each(
        function() {
          $(this).addClass("blocked");
        }
      );
      $("#Level2").removeClass("blocked");
      $("#Level2").on("click", function() {
        fly = true;
         musicPlay('click');
        logic.setRequest("users", "set_params_things", {
          id: id, //сюда передаешь id пользователя
          level_explore: 2
        });
      });
    } else if (level == 2 && thingsExplored == 10) {
      $("#Level3").removeClass("blocked");
      $("#Level3").on("click", function() {
         musicPlay('click');
        level = 3;
        levelExplore = 3;
        logic.setRequest("users", "set_params_things", {
          id: id, //сюда передаешь id пользователя
          level_explore: 3
        });
        rockets.init();
      });
      $("#laboratory .divButtonLaboratory .buttonLaboratory p").each(
        function() {
          $(this).addClass("blocked");
        }
      );
      $("#Level3").removeClass("blocked");
    } else if (level == 2 && thingsExplored != 10) {
      $("#laboratory .divButtonLaboratory .buttonLaboratory p").each(
        function() {
          $(this).addClass("blocked");
        }
      );
      $("#Level2").removeClass("blocked");
      $("#Level2")
        .parent()
        .addClass("buttonLaboratoryActive");
    } else if (level == 3 && thingsExplored != 15) {
      $("#laboratory .divButtonLaboratory .buttonLaboratory p").each(
        function() {
          $(this).addClass("blocked");
        }
      );
      $("#Level3").removeClass("blocked");
      $("#Level3")
        .parent()
        .addClass("buttonLaboratoryActive");
    } else {
      $("#laboratory .divButtonLaboratory .buttonLaboratory p").each(
        function() {
          $(this).addClass("blocked");
        }
      );
    }
  }
  function imager(
    src,
    x,
    y,
    scale,
    name,
    desc,
    time,
    explored,
    zi,
    activeExplore,
    nameRow,
    fly = 1
  ) {
    var image = new Image();
    image.src = src;
    image.setAttribute("x", x);
    image.setAttribute("y", y);
    image.setAttribute("scale", scale);
    image.setAttribute("name", name);
    image.setAttribute("description", desc);
    explored = Number(time) <= 0 ? 1 : 0;
    image.setAttribute("time", time);
    image.setAttribute("explored", explored);
    image.setAttribute("zi", zi);
    activeExplore = activeExploreDB == nameRow ? 1 : 0;
    globalActiveExplore.explored = activeExplore;
    image.setAttribute("activeExplore", activeExplore);
    image.setAttribute("nameRow", nameRow);
    image.setAttribute("fly", Number(fly));
    image.onload = handleImageLoad;
  }
  function stop() {
    createjs.Ticker.removeEventListener("tick", tick);
  }
  function handleImageLoad(event) {
    var argsBitmap;
    var image = event.target;
    let bitmap = {};
    var explored = event.target.getAttribute("explored");
    var active = 0;
    var selfArray = {};
    var WhiteMask = new createjs.ColorMatrixFilter([
      0.7,
      0.7,
      0.7,
      0,
      0, // red component
      0.7,
      0.7,
      0.7,
      0,
      0, // green component
      0.7,
      0.7,
      0.7,
      0,
      0, // blue component
      0,
      0,
      0,
      1,
      0 // alpha
    ]);
    var Original = new createjs.ColorFilter();
    var RedMask = new createjs.ColorFilter(0, 0, 0, 1, 1, 0, 0, -90);
    // var RedMask = new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0);
    bitmap = new createjs.Bitmap(image);
    bitmap.x = parseInt(event.target.getAttribute("x"));
    bitmap.y = parseInt(event.target.getAttribute("y"));
    bitmap.regX = (bitmap.image.width / 2) | 0;
    bitmap.regY = (bitmap.image.height / 2) | 0;
    bitmap.scale = bitmap.originalScale = event.target.getAttribute("scale");
    bitmap.name = event.target.getAttribute("name");
    bitmap.description = event.target.getAttribute("description");
    bitmap.time = Number(event.target.getAttribute("time"));
    bitmap.explored = event.target.getAttribute("explored");
    bitmap.activeExplore = event.target.getAttribute("activeExplore");
    bitmap.zi = parseInt(event.target.getAttribute("zi"));
    bitmap.nameRow = event.target.getAttribute("nameRow");
    bitmap.fly = parseInt(event.target.getAttribute("fly"));
    if (bitmap.explored == 0) {
      bitmap.cursor = "pointer";
    }
    if (bitmap.activeExplore == 1) {
      globalActiveExplore.explored = 1;
      globalActiveExplore.name = bitmap.name;
      globalActiveExplore.time = bitmap.time;
    }
    if (bitmap.explored == 0 && bitmap.activeExplore == 0) {
      bitmap.filters = [WhiteMask];
    } else if (bitmap.explored == 0 && bitmap.activeExplore == 1) {
      bitmap.filters = [RedMask];
    } else {
      bitmap.filters = [Original];
    }
    stage.addChild(bitmap);
    bitmap.cache(0, 0, bitmap.image.width, bitmap.image.height);
    stage.setChildIndex(bitmap, bitmap.zi);
    stage.update(event);
    // bitmap.on("mousedown", function (evt) {
    //     this.parent.addChild(this);
    //     this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
    // });

    // // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
    // bitmap.on("pressmove", function (evt) {
    //     this.x = evt.stageX + this.offset.x;
    //     this.y = evt.stageY + this.offset.y;
    //     console.log(this.x + ', ' +this.y);
    //     // indicate that the stage should be updated on the next tick:
    //     update = true;
    // });
    bitmap.on("click", function(evt) {
       musicPlay('click');
      let self = this;
      if (this.explored == 0 && globalActiveExplore.explored == 0) {
        if (self.activeExplore == 1) {
          $(".room .about-rocket-things .buttonRun").css({ display: "none" });
          $(".room .about-rocket-things h4.alert b").text(
            globalActiveExplore.time + " hours left to explore"
          );
        } else {
          $(document).on("click", "#buyButton", function() {
             musicPlay('click');
            let thisName = $(".room .about-rocket-things .name").text();
            if (thisName == self.name) {
              $(".room .about-rocket-things .buttonRun").css({
                display: "flex"
              });
              $(".room .about-rocket-things h4.alert b").text("");
              $(this)
                .parent()
                .parent()
                .css("display", "none");

              // self.explored = 1;
              args.active_explore = self.nameRow;
              logic.setRequest(
                "rocket_level_" + levelExplore,
                "set_params_things",
                {
                  id: id, //сюда передаешь id пользователя
                  active_explore: self.nameRow
                }
              );

              self.activeExplore = 1;
              globalActiveExplore.explored = 1;
              globalActiveExplore.name = self.name;
              globalActiveExplore.time = self.time;
              update = true;
              if (self.explored == 0 && active == 0) {
                self.filters = [WhiteMask];
              } else if (explored == 1 || self.activeExplore == 1) {
                self.filters = [RedMask];
              } else {
                self.filters = [Original];
              }
              self.cache(0, 0, self.image.width, self.image.height);
            }
          });
        }
        active = 1;
        this.filters = [RedMask];
        this.cache(0, 0, bitmap.image.width, bitmap.image.height);
        let topMain = $(".main").offset().top,
          leftMain = $(".main").offset().left;
        let x = parseInt(evt.rawX) + leftMain;
        let y = parseInt(evt.rawY) + topMain + 60;

        let width = $(".room .about-rocket-things").width(),
          height = $(".room .about-rocket-things").height();

        if (x + 260 >= leftMain + 624) {
          x = x - 250;
        }
        if (y + 250 >= topMain + 636) {
          y = y - 220;
        }

        $(".room .about-rocket-things h3.name").text(this.name);
        $(".room .about-rocket-things .buttonRun").css({ display: "flex" });
        $(".room .about-rocket-things span").text(
          this.description +
            " Time to explore the thing is " +
            args[this.nameRow] +
            " hours"
        );
        $(".room .about-rocket-things").css({
          left: x,
          top: y,
          display: "flex"
        });
        $(document).on("mouseleave", ".room .about-rocket-things", function() {
          $(this).css("display", "none");
          $(".room .about-rocket-things .buttonRun").css({ display: "flex" });
          $(".room .about-rocket-things .buttonRun p").removeClass("blocked");
          $(".room .about-rocket-things h4.alert b").text("");
          $(".room .about-rocket-things span").text("");
          active = 0;
          self.explored = 0;
          if (self.explored == 0 && active == 0 && self.activeExplore == 0) {
            self.filters = [WhiteMask];
          } else if (active == 1 || self.activeExplore == 1) {
            self.filters = [RedMask];
          } else {
            self.filters = [Original];
          }
          self.cache(0, 0, self.image.width, self.image.height);
          update = true;
          return;
        });
      } else if (this.explored == 0 && globalActiveExplore.explored == 1) {
        if (self.activeExplore == 1) {
          $(".room .about-rocket-things .buttonRun").css({ display: "none" });
          $(".room .about-rocket-things h4.alert b").text(
            globalActiveExplore.time + " hours left to explore"
          );
        } else {
          $(".room .about-rocket-things h3.name").text(self.name);
          $(".room .about-rocket-things .buttonRun").css({ display: "none" });
          $(".room .about-rocket-things h4.alert b").text(
            "The " +
              globalActiveExplore.name +
              " is currently being explored. " +
              globalActiveExplore.time +
              " hours left to explore. Wait please."
          );
        }
        active = 1;
        this.filters = [RedMask];
        this.cache(0, 0, bitmap.image.width, bitmap.image.height);
        let topMain = $(".main").offset().top,
          leftMain = $(".main").offset().left;
        let x = parseInt(evt.rawX) + leftMain;
        let y = parseInt(evt.rawY) + topMain + 60;

        let width = $(".room .about-room-things").width(),
          height = $(".room .about-room-things").height();

        if (x + 260 >= leftMain + 624) {
          x = x - 250;
        }
        if (y + 250 >= topMain + 636) {
          y = y - 220;
        }

        $(".room .about-rocket-things h3.name").text(this.name);
        $(".room .about-rocket-things span").text(
          this.description +
            " Time to explore the thing is " +
            args[this.nameRow] +
            " hours"
        );
        $(".room .about-rocket-things").css({
          left: x,
          top: y,
          display: "flex"
        });
        $(document).on("mouseleave", ".room .about-rocket-things", function() {
          $(this).css("display", "none");
          $(".room .about-rocket-things .buttonRun").css({ display: "flex" });
          $(".room .about-rocket-things .buttonRun p").removeClass("blocked");
          $(".room .about-rocket-things h4.alert b").text("");
          $(".room .about-rocket-things span").text("");
          active = 0;
          if (self.explored == 0 && active == 0 && self.activeExplore == 0) {
            self.filters = [WhiteMask];
          } else if (active == 1 || self.activeExplore == 1) {
            self.filters = [RedMask];
          } else {
            self.filters = [Original];
          }
          self.cache(0, 0, self.image.width, self.image.height);
          update = true;
          return;
        });
      } else {
        let topMain = $(".main").offset().top,
          leftMain = $(".main").offset().left;
        let x = parseInt(evt.rawX) + leftMain;
        let y = parseInt(evt.rawY) + topMain + 175;

        let width = $(".room .about-rocket-things").width(),
          height = $(".room .about-rocket-things").height();

        if (x + 260 >= leftMain + 624) {
          x = x - 220;
        }
        if (y + 250 >= topMain + 636) {
          y = y - 220;
        }
        $(".room .about-rocket-things h3.name").text("This thing is bought");
        $(".room .about-rocket-things .buttonRun").css({ display: "none" });
        $(".room .about-rocket-things span").text("");
        $(".room .about-rocket-things").css({
          left: x,
          top: y,
          display: "flex"
        });
        $(document).on("mouseleave", ".room .about-rocket-things", function() {
          $(this).css("display", "none");
          $(".room .about-rocket-things .buttonRun").css({ display: "flex" });
          $(".room .about-rocket-things .buttonRun p").removeClass("blocked");
          $(".room .about-rocket-things h4.alert b").text("");
          $(".room .about-rocket-things span").text("");
          active = 0;
          if (self.explored == 0 && active == 0 && self.activeExplore == 0) {
            self.filters = [WhiteMask];
          } else if (active == 1 || self.activeExplore == 1) {
            self.filters = [RedMask];
          } else {
            self.filters = [Original];
          }
          self.cache(0, 0, self.image.width, self.image.height);
          update = true;
          return;
        });
        this.filters = [Original];
        update = true;
      }
      update = true;
    });
    bitmap.on("mouseover", function(evt) {
      if (this.explored == 0 || this.activeExplore == 1) {
        this.filters = [RedMask];
      } else {
        this.filters = [Original];
      }
      this.cache(0, 0, bitmap.image.width, bitmap.image.height);
      update = true;
    });
    bitmap.on("mouseout", function(evt) {
      if (this.explored == 0 && active == 0 && this.activeExplore == 0) {
        this.filters = [WhiteMask];
      } else if (active == 1 || this.activeExplore == 1) {
        this.filters = [RedMask];
      } else {
        this.filters = [Original];
      }
      this.cache(0, 0, bitmap.image.width, bitmap.image.height);
      update = true;
    });
    createjs.Ticker.addEventListener("tick", tick);
  }
  function tick(event) {
    // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
    if (update) {
      self = null;
      update = false; // only update once
      stage.update(event);
      stage.sortChildren(sortByZ);
    }
  }
  function rocketFly(event) {
    // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
    if (fly && level == 1) {
      stage.children.forEach(function(evt) {
        if (evt.fly == 0) {
          evt.y += 6;
          if (evt.y - stage.canvas.height > stage.canvas.height) {
            level = 4;
            rockets.init();
          }
        }
      });
      stage.update(event);
    }
    if (fly && level == 4) {
      stage.children.forEach(function(evt) {
        if (evt.fly == 2) {
          evt.y += 6;
        }
        if (evt.fly == 3) {
          evt.x += 6;
          evt.y += 2;
          evt.rotation += 0.5;
        }
        if (evt.fly == 4) {
          evt.x -= 6;
          evt.y += 2;
          evt.rotation -= 0.5;
          // stage.scale*=1.5;
          if (evt.x + stage.canvas.width + 100 < stage.canvas.height) {
            // fly = false;
            stage.scale += 0.1;
            stage.x -= 35;
            if (stage.scale >= 1.6) {
              fly = false;
              level = 2;
              levelExplore = 2;
              rockets.init();
            }
          }
        }
      });
      stage.update(event);
    }
  }
  function sortByZ(obj1, obj2, options) {
    if (obj1.zIndex > obj2.zIndex) {
      return 1;
    }
    if (obj1.zIndex < obj2.zIndex) {
      return -1;
    }
    return 0;
  }
}
