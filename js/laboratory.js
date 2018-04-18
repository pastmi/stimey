function Laboratory(id,inf) {
var lang = inf;
  var canvasL, stageL;
  var offset;
  var updateL = true;
  var getCountBuyed = 5;
  this.getLab = function() {
    return getCountBuyed;
  };
  this.init = function() {
    // create stage and point it to the canvas:
    canvasL = document.getElementById("laboratoryCanvas");
    stageL = new createjs.Stage(canvasL);
    // enable touch interactions if supported on the current device:
    createjs.Touch.enable(stageL);
    // enabled mouse over / out events
    stageL.enableMouseOver(10);
    stageL.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
    // load the source image:
    // var subjectIsBy = logic.request('get_params_room',{id:1});
    // console.log(logic.getRoomParams());
    $.ajax({
      type: "POST",
      url: "http://" + window.location.hostname + "/page.php",
      dataType: "json",
      data: {
        functionname: "get_params_things", // пишешь какую функцию хочешь взять, список находится в page.php(set_params_user, get_params_user, add_user, isUser)
        name: "laboratory",
        params: {
          // это наш масив параметров
          id: id //сюда передаешь id пользователя
        }
      },
      success: function(data) {
        args = data;
        getCountBuyed = logic.getCountThings(args);
        logic.initCircle("lab", getCountBuyed);
        imager(
          "/img/lab/lab_01.png",
          86,
          140,
          1,
          lang['lab_01'],
          "",
          250,
          data.test_chamber,
          5,
          "test_chamber"
        );
        imager(
          "/img/lab/lab_02.png",
          188,
          117,
          1,
          lang['lab_02'],
          "",
          250,
          data.cabinet,
          1,
          "cabinet"
        );
        imager(
          "/img/lab/lab_03.png",
          328,
          148,
          1,
          lang['lab_03'],
          "",
          50,
          data.gas_analyser,
          1,
          "gas_analyser"
        );
        imager(
          "/img/lab/lab_04.png",
          266,
          129,
          1,
          lang['lab_04'],
          "",
          250,
          data.notice_board,
          5,
          "notice_board"
        );
        imager(
          "/img/lab/lab_05.png",
          317,
          233,
          1,
          lang['lab_05'],
          "",
          250,
          data.lab_bench,
          1,
          "lab_bench"
        );
        imager(
          "/img/lab/lab_06.png",
          392,
          139,
          1,
          lang['lab_06'],
          "",
          250,
          data.reagent_cabinet,
          2,
          "reagent_cabinet"
        );
        imager(
          "/img/lab/lab_07.png",
          418,
          112,
          1,
          lang['lab_07'],
          "",
          250,
          data.climate_chamber,
          6,
          "climate_chamber"
        );
        imager(
          "/img/lab/lab_08.png",
          466,
          177,
          1,
          lang['lab_08'],
          "",
          250,
          data.set_of_tools,
          3,
          "set_of_tools"
        );
        imager(
          "/img/lab/lab_09.png",
          183,
          169,
          1,
          lang['lab_09'],
          "",
          250,
          data.laboratory_robot,
          6,
          "laboratory_robot"
        );
        imager(
          "/img/lab/lab_10.png",
          137,
          205,
          1,
          lang['lab_10'],
          "",
          250,
          data.recording_oscillometer,
          7,
          "recording_oscillometer"
        );
        imager(
          "/img/lab/lab_11.png",
          345,
          138,
          1,
          lang['lab_11'],
          "",
          250,
          data.centrifuge,
          5,
          "centrifuge"
        );
        imager(
          "/img/lab/lab_12.png",
          518,
          150,
          1,
         lang['lab_12'],
          "",
          250,
          data.drawing_table,
          4,
          "drawing_table"
        );
        imager(
          "/img/lab/lab_13.png",
          360,
          147,
          1.2,
          lang['lab_13'],
          "",
          250,
          data.electronic_scale,
          5,
          "electronic_scale"
        );
        imager(
          "/img/lab/lab_14.png",
          364,
          101,
          1,
         lang['lab_14'],
          "",
          250,
          data.temperature_meter,
          5,
          "temperature_meter"
        );
        imager(
          "/img/lab/lab_15.png",
          229,
          130,
          1,
         lang['lab_15'],
          "",
          250,
          data.amperemeter,
          4,
          "amperemeter"
        );
        imager(
          "/img/lab/lab_16.png",
          245,
          108,
          1.2,
          lang['lab_16'],
          "",
          250,
          data.supercomputer,
          6,
          "supercomputer"
        );
        imager(
          "/img/lab/lab_17.png",
          228,
          108,
          1.2,
         lang['lab_17'],
          "",
          250,
          data.voltage_meter,
          5,
          "voltage_meter"
        );
        imager(
          "/img/lab/lab_18.png",
          221,
          87,
          1.2,
          lang['lab_18'],
          "",
          250,
          data.aspirator,
          5,
          "aspirator"
        );
        imager(
          "/img/lab/lab_19.png",
          402,
          198,
          1,
          lang['lab_19'],
          "",
          250,
          data.set_for_drawing,
          5,
          "set_for_drawing"
        );
        imager(
          "/img/lab/lab_20.png",
          532,
          171,
          1,
         lang['lab_20'],
          "",
          250,
          data.moisture_analyzer,
          5,
          "moisture_analyzer"
        );
        imager(
          "/img/lab/lab_21.png",
          238,
          83,
          1,
         lang['lab_21'],
          "",
          250,
          1,
          5
        );
        imager(
          "/img/lab/lab_22.png",
          340,
          288,
          1,
          lang['lab_22'],
          "",
          250,
          data.microscope,
          5,
          "microscope"
        );
        imager(
          "/img/lab/lab_23.png",
          441,
          261,
          1,
         lang['lab_23'],
          "",
          250,
          data.set_of_flasks,
          12,
          "set_of_flasks"
        );
        imager(
          "/img/lab/lab_24.png",
          535,
          240,
          1,
         lang['lab_24'],
          "",
          250,
          data.alcohol_burner,
          12,
          "alcohol_burner"
        );
      }
    });
  };
  function imager(src, x, y, scale, name, desc, money, bued, zi, data) {
    var image = new Image();
    image.src = src;
    image.setAttribute("x", x);
    image.setAttribute("y", y);
    image.setAttribute("scale", scale);
    image.setAttribute("name", name);
    image.setAttribute("description", desc);
    image.setAttribute("money", money);
    image.setAttribute("buyed", bued);
    image.setAttribute("zi", zi);
    image.setAttribute("data", data);
    image.onload = handleImageLoad;
  }
  function stop() {
    createjs.Ticker.removeEventListener("tick", tick);
  }
  function handleImageLoad(event) {
    var image = event.target;
    var bitmap;
    var buy = event.target.getAttribute("buyed");
    var active = 0;
    var Grayscale = new createjs.ColorMatrixFilter([
      0.3,
      0.3,
      0.3,
      0,
      0, // red component
      0.3,
      0.3,
      0.3,
      0,
      0, // green component
      0.3,
      0.3,
      0.3,
      0,
      0, // blue component
      0,
      0,
      0,
      1,
      0 // alpha
    ]);
    var Original = new createjs.ColorFilter();
    var RedMask = new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0, 0);
    bitmap = new createjs.Bitmap(image);
    stageL.addChild(bitmap);
    bitmap.x = event.target.getAttribute("x");
    bitmap.y = event.target.getAttribute("y");
    bitmap.regX = (bitmap.image.width / 2) | 0;
    bitmap.regY = (bitmap.image.height / 2) | 0;
    bitmap.scale = bitmap.originalScale = event.target.getAttribute("scale");
    if (buy == 0) {
      bitmap.filters = [Grayscale];
    } else {
      bitmap.filters = [Original];
    }
    bitmap.cache(0, 0, bitmap.image.width, bitmap.image.height);
    bitmap.name = event.target.getAttribute("name");
    bitmap.description = event.target.getAttribute("description");
    bitmap.money = event.target.getAttribute("money");
    bitmap.buy = event.target.getAttribute("buyed");
    bitmap.data = event.target.getAttribute("data");
    if (bitmap.buy == 0) {
      bitmap.cursor = "pointer";
    }
    stageL.setChildIndex(bitmap, event.target.getAttribute("zi"));
    stageL.update();
    // bitmap.on("mousedown", function (evt) {
    //     this.parent.addChild(this);
    //     this.offset = {x: this.x - evt.stageX, y: this.y - evt.stageY};
    // });

    // // the pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released.
    // bitmap.on("pressmove", function (evt) {
    //     this.x = evt.stageX + this.offset.x;
    //     this.y = evt.stageY + this.offset.y;
    //     console.log(Math.round(this.x) + ', ' + Math.round(this.y));
    //     // indicate that the stage should be updated on the next tick:
    //     update = true;
    // });
    bitmap.on("click", function(evt) {
      var self = this;
      if (this.buy == 0) {
        if (logic.getMoney() < bitmap.money) {
          $(".room .about-room-things .buttonRun p").addClass("blocked");
          $(".room .about-room-things h4.alert b").text(
            "There are not enough funds on your balance to make this purchase!"
          );
          $(document).on("click", "#buyButton", function(e) {
            e.preventDefault();
          });
        } else {
          $(document).on("click", "#buyButton", function() {
            $(".room .about-room-things h4.alert b").text("");
            $(this)
              .parent()
              .parent()
              .css("display", "none");
            self.buy = 1;
            updateL = true;
            if (self.buy == 0 && active == 0) {
              self.filters = [Grayscale];
            } else if (active == 1) {
              self.filters = [RedMask];
            } else {
              self.filters = [Original];
            }
            self.cache(0, 0, self.image.width, self.image.height);
            args[self.data] = "1";
            logic.setMoney(-bitmap.money);
            getCountBuyed++;
            logic.initCircle("lab", getCountBuyed);
            logic.setRequest("laboratory", "set_params_things", args);
            bitmap.cursor = "not-allowed";
          });
        }
        active = 1;
        this.filters = [RedMask];
        this.cache(0, 0, bitmap.image.width, bitmap.image.height);
        $(".room .about-room-things h3.name").text(this.name);
        $(".room .about-room-things span").text(
          this.description + " It is coast  " + this.money + "$"
        );
        let topMain = $(".main").offset().top,
          leftMain = $(".main").offset().left;
        let x = parseInt(evt.rawX) + leftMain;
        let y = parseInt(evt.rawY) + topMain + 175;

        let width = $(".room .about-room-things").width(),
          height = $(".room .about-room-things").height();

        if (x + 260 >= leftMain + 624) {
          x = x - 220;
        }
        if (y + 250 >= topMain + 636) {
          y = y - 220;
        }
        $(".room .about-room-things").css({
          left: x,
          top: y,
          display: "flex"
        });
        $(document).on("mouseleave", ".room .about-room-things", function() {
          $(this).css("display", "none");
          active = 0;
          updateL = true;
          if (self.buy == 0 && active == 0) {
            self.filters = [Grayscale];
          } else if (active == 1) {
            self.filters = [RedMask];
          } else {
            self.filters = [Original];
          }
          self.cache(0, 0, self.image.width, self.image.height);
        });
      } else {
        this.filters = [Original];
        updateL = true;
      }
      updateL = true;
    });
    bitmap.on("mouseover", function(evt) {
      if (this.buy == 0) {
        this.filters = [RedMask];
      } else {
        this.filters = [Original];
      }
      this.cache(0, 0, bitmap.image.width, bitmap.image.height);
      updateL = true;
    });
    bitmap.on("mouseout", function(evt) {
      if (this.buy == 0 && active == 0) {
        this.filters = [Grayscale];
      } else if (active == 1) {
        this.filters = [RedMask];
      } else {
        this.filters = [Original];
      }
      this.cache(0, 0, bitmap.image.width, bitmap.image.height);
      updateL = true;
    });
    createjs.Ticker.addEventListener("tick", tick);
  }
  function tick(event) {
    // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
    if (updateL) {
      updateL = false; // only update once
      stageL.update(event);
    }
  }
}
