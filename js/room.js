function Room(id) {
  var canvas, stage;
  var update = true;
  var getCountBuyed = 0;
  var args = {};
  this.getRoom = function() {
    return getCountBuyed;
  };
  this.init = function() {
    // create stage and point it to the canvas:
    canvas = document.getElementById("roomCanvas");
    stage = new createjs.Stage(canvas);
    // enable touch interactions if supported on the current device:
    createjs.Touch.enable(stage);
    // enabled mouse over / out events
    stage.enableMouseOver(10);
    stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
    // load the source image:
    $.ajax({
      type: "POST",
      url: "http://" + window.location.hostname + "/page.php",
      dataType: "json",
      data: {
        functionname: "get_params_things", // пишешь какую функцию хочешь взять, список находится в page.php(set_params_user, get_params_user, add_user, isUser)
        name: "room",
        params: {
          // это наш масив параметров
          id: id //сюда передаешь id пользователя
        }
      },
      success: function(data) {
        args = data;
        getCountBuyed = logic.getCountThings(args);
        logic.initCircle("first", getCountBuyed);
        imager(
          "/img/room/vibro_plate.png",
          412,
          285,
          0.7,
          "Hydraulic bed-shaker ",
          "",
          250,
          data.vibro_plate,
          1,
          "vibro_plate"
        );
        imager(
          "/img/room/table_PC.png",
          210,
          263,
          1,
          "Table PC",
          "",
          250,
          data.table_pc,
          2,
          "table_pc"
        );
        imager(
          "/img/room/bed.png",
          411,
          253,
          1,
          "Car -bed",
          "",
          50,
          data.bed,
          2,
          "bed"
        );
        imager(
          "/img/room/books.png",
          266,
          129,
          1,
          "Books",
          "",
          250,
          data.books,
          2,
          "books"
        );
        imager(
          "/img/room/curtain.png",
          75,
          116,
          1,
          "Curtain",
          "",
          250,
          data.curtain,
          2,
          "curtain"
        );
        imager(
          "/img/room/lamp_table.png",
          198,
          187,
          1,
          "Lamp Table",
          "",
          250,
          data.lamp_table,
          14,
          "lamp_table"
        );
        imager(
          "/img/room/lamp_top.png",
          306,
          37,
          1,
          "Lamp Top",
          "",
          250,
          data.lamp_top,
          1,
          "lamp_top"
        );
        imager(
          "/img/room/poster.png",
          421,
          171,
          1,
          "Scientific poster or  Einstein's photo ",
          "",
          250,
          data.poster,
          2,
          "poster"
        );
        imager(
          "/img/room/TV.png",
          488,
          148,
          1,
          "TV set",
          "",
          250,
          data.tv,
          10,
          "tv"
        );
        imager(
          "/img/room/scooter.png",
          47,
          306,
          1,
          "Nuclear powered scooter",
          "",
          250,
          data.scooter,
          2,
          "scooter"
        );
        imager(
          "/img/room/planet_system.png",
          300,
          56,
          1,
          "The solar system model  ",
          "",
          250,
          data.planet_system,
          2,
          "planet_system"
        );
        imager(
          "/img/room/robot_vacuum_cleaner.png",
          120,
          341,
          1,
          "Robot Vacuum Cleaner",
          "",
          250,
          data.robot_vacuum_cleaner,
          2,
          "robot_vacuum_cleaner"
        );
        imager(
          "/img/room/jetpack.png",
          123,
          273,
          1,
          "Jetpack",
          "",
          250,
          data.jetpack,
          15,
          "jetpack"
        );
        imager(
          "/img/room/wardrobe.png",
          533,
          231,
          1,
          "Wardrobe",
          "",
          250,
          data.wardrobe,
          555,
          "wardrobe"
        );
        imager(
          "/img/room/robot.png",
          472,
          261,
          1,
          "The favourite toy-robot named «Stimey»",
          "",
          250,
          data.robot,
          100,
          "robot"
        );
        imager(
          "/img/room/sneakers.png",
          431,
          303,
          1,
          "Air-powered speedway sneakers",
          "",
          250,
          data.sneakers,
          4,
          "sneakers"
        );
        imager(
          "/img/room/guitar.png",
          285,
          240,
          1,
          "Guitar",
          "",
          250,
          data.guitar,
          16,
          "guitar"
        );
        imager(
          "/img/room/chair.png",
          238,
          237,
          1,
          "Chair",
          "",
          250,
          data.chair,
          17,
          "chair"
        );
        imager(
          "/img/room/table.png",
          270,
          326,
          1,
          "Table",
          "",
          250,
          data.table,
          155,
          "table"
        );
        imager(
          "/img/room/PC.png",
          168,
          208,
          1,
          "Computer",
          "",
          250,
          data.pc,
          14,
          "pc"
        );
        imager(
          "/img/room/phone.png",
          278,
          296,
          1,
          "Phone",
          "",
          250,
          data.phone,
          156,
          "phone"
        );
        imager(
          "/img/room/paret.png",
          333,
          273,
          1,
          "A pet",
          "",
          250,
          data.paret,
          157,
          "paret"
        );
        imager(
          "/img/room/plate_and_cup.png",
          223,
          294,
          1,
          "Self-washed plate ",
          "",
          250,
          data.plate_and_cup,
          158,
          "plate_and_cup"
        );
        imager(
          "/img/room/cactus.png",
          137,
          205,
          1,
          "Plants",
          "",
          250,
          data.cactus,
          15,
          "cactus"
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
    image.setAttribute("money", Number(money));
    image.setAttribute("buyed", Number(bued));
    image.setAttribute("zi", Number(zi));
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
    var selfArray = {};
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
    stage.addChild(bitmap);
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
    bitmap.zi = parseInt(event.target.getAttribute("zi"));
    if (bitmap.buy == 0) {
      bitmap.cursor = "pointer";
    }
    stage.setChildIndex(bitmap, bitmap.zi);
    stage.update();
    bitmap.on("click", function(evt) {
      let self = this;
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
            let thisName = $(".room .about-room-things .name").text();
            if (thisName == self.name) {
              $(".room .about-room-things h4.alert b").text("");
              $(this)
                .parent()
                .parent()
                .css("display", "none");
              self.buy = 1;
              update = true;
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
              logic.setRequest("room", "set_params_things", args);
              logic.initCircle("first", getCountBuyed);
              bitmap.cursor = "not-allowed";
            }
          });
        }
        active = 1;
        this.filters = [RedMask];
        this.cache(0, 0, bitmap.image.width, bitmap.image.height);
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

        $(".room .about-room-things h3.name").text(this.name);
        $(".room .about-room-things span").text(
          this.description + " It coast is " + this.money + "$"
        );
        $(".room .about-room-things").css({
          left: x,
          top: y,
          display: "flex"
        });
        $(document).on("mouseleave", ".room .about-room-things", function() {
          $(this).css("display", "none");
          $(".room .about-room-things .buttonRun p").removeClass("blocked");
          $(".room .about-room-things h4.alert b").text("");
          $(".room .about-room-things span").text("");
          active = 0;
          if (self.buy == 0 && active == 0) {
            self.filters = [Grayscale];
          } else if (active == 1) {
            self.filters = [RedMask];
          } else {
            self.filters = [Original];
          }
          self.cache(0, 0, self.image.width, self.image.height);
          update = true;
          return;
        });
      } else {
        this.filters = [Original];
        update = true;
      }
      update = true;
    });
    bitmap.on("mouseover", function(evt) {
      if (this.buy == 0) {
        this.filters = [RedMask];
      } else {
        this.filters = [Original];
      }
      this.cache(0, 0, bitmap.image.width, bitmap.image.height);
      update = true;
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
    }
  }
}
var room = null;
