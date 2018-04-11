class Ava {
  constructor() {
    this.sex;
    this.health;
    this.mood;
    this.eye;
    this.menuAva = 0;
    this.menuAvaShow = this.menuAvaShow.bind(this);
    this.clickNewAva = this.clickNewAva.bind(this);
    this.start();
  }

  start() {
    $(".avatarImg").on("click", this.menuAvaShow);
    $(".avaChange").on("click", this.clickNewAva);

    $.ajax({
      type: "POST",
      url: "http://" + window.location.hostname + "/page.php",
      dataType: "json",
      data: {
        functionname: "get_params_things", // пишешь какую функцию хочешь взять, список находится в page.php(set_params_user, get_params_user, add_user, isUser)
        name: "avatars",
        params: {
          // это наш масив параметров
          id: logic.id
        }
      },
      success: data => {
        this.sex = Number(data.sex);
        this.health = Number(data.health);
        this.mood = Number(data.mood);
        this.eye = Number(data.eye);
        this.changeSex(this.sex);
        this.changeEye(this.eye);
        this.changeHealth(this.health);
        this.changeMood(this.mood);
      }
    });
  }

  changeSex(sex) {
    for (let i = 0; i <= 6; i++) {
      $(".ava-change-" + i).css("display", "none");
    }

    $(".ava-change-" + sex).css("display", "block");
    let ava = $(".person-body");
    switch (parseInt(sex)) {
      case 1:
        ava.each(el => {
          $(ava[el]).attr("src", "img/avatar/ava_colo1_fxxhdpi.png");
        });
        break;
      case 2:
        ava.each(el => {
          $(ava[el]).attr("src", "img/avatar/ava_colo2_fxxhdpi.png");
        });

        break;
      case 3:
        ava.each(el => {
          $(ava[el]).attr("src", "img/avatar/ava_colo3_fxxhdpi.png");
        });
        break;
      case 4:
        ava.each(el => {
          $(ava[el]).attr("src", "img/avatar/ava_colo1_mxxhdpi.png");
        });
        break;
      case 5:
        ava.each(el => {
          $(ava[el]).attr("src", "img/avatar/ava_colo2_mxxhdpi.png");
        });
        break;
      case 6:
        ava.each(el => {
          $(ava[el]).attr("src", "img/avatar/ava_colo3_mxxhdpi.png");
        });
        break;
    }
    this.saveBd(sex);
  }

  changeEye(eye) {
    switch (eye) {
      case 1:
        $(".eyes_nor").css("display", "none");
        $(".eyes_mid").css("display", "block");
        $(".eyes_up").css("display", "block");
        break;
      case 2:
        $(".eyes_nor").css("display", "block");
        $(".eyes_mid").css("display", "none");
        $(".eyes_up").css("display", "block");
        break;
      case 3:
        $(".eyes_nor").css("display", "block");
        $(".eyes_mid").css("display", "block");
        $(".eyes_up").css("display", "none");
        break;
    }
  }

  moodIdentify() {
    let sleep = parseInt($("#0").text()),
      freeTimeVal = parseInt($("#4").text()),
      roomVal = parseInt(room.getRoom()),
      rocket = parseInt(10),
      freeTimeWhat = parseInt(freeTime.freeTimeNow),
      freeTimeСoefficient;
    switch (freeTimeWhat) {
      case 1:
        freeTimeСoefficient = 1;
        break;
      case 2:
        freeTimeСoefficient = 1;
        break;
      case 3:
        freeTimeСoefficient = 1;
        break;
      case 4:
        freeTimeСoefficient = 1.2;
        break;
      case 5:
        freeTimeСoefficient = 1.5;
        break;
    }
    let mood =
      ((sleep + freeTimeVal + freeTimeСoefficient) / 10 +
        (roomVal + rocket) / (roomVal + rocket)) *
      2;

    if (mood > 6) {
      this.changeMood(1);
      return;
    }
    if (mood > 4) {
      this.changeMood(2);
      return;
    }
    this.changeMood(3);
  }

  healthIdentify() {
    let sleep = parseInt($("#0").text()),
      freeTimeVal = parseInt($("#4").text()),
      roomVal = parseInt(laboratory.getLab()),
      rocket = parseInt(10),
      freeTimeWhat = parseInt(freeTime.freeTimeNow),
      freeTimeСoefficient;
    switch (freeTimeWhat) {
      case 1:
        freeTimeСoefficient = 1.2;
        break;
      case 2:
        freeTimeСoefficient = 1.5;
        break;
      case 3:
        freeTimeСoefficient = 1;
        break;
      case 4:
        freeTimeСoefficient = 0.7;
        break;
      case 5:
        freeTimeСoefficient = 0.7;
        break;
    }
    let mood =
      ((sleep + freeTimeVal + freeTimeСoefficient) / 10 +
        (roomVal + rocket) / (roomVal + rocket)) *
      2;

    if (mood > 6) {
      this.changeHealth(1);
      return;
    }
    if (mood > 4) {
      this.changeHealth(2);
      return;
    }
    this.changeHealth(3);
  }

  changeHealth(health) {
    this.health = health;
    logic.setRequest("avatars", "set_params_things", {
      id: logic.id,
      health: this.health,
      mood: this.mood
    });
    switch (health) {
      case 1:
        this.off();
        break;
      case 2:
        this.off();
        $(".scarf").css("display", "block");

        break;
      case 3:
        this.off();
        $(".scarf").css("display", "block");
        $("#tempH").css("display", "block");
        break;
    }
    Promise.resolve()
      .then(() => {
        return $.getJSON("./lang/" + logic.getLang() + ".json");
      })
      .then(val => {
        $(".health").text(val.mood[parseInt(health) - 1]);
      });
  }

  changeMood(health) {
    this.mood = health;
    logic.setRequest("avatars", "set_params_things", {
      id: logic.id,
      health: this.health,
      mood: this.mood
    });
    switch (health) {
      case 1:
        $(".mouth_smile").css("display", "block");
        $(".mouth_sad").css("display", "none");
        break;
      case 2:
        $(".mouth_smile").css("display", "block");
        $(".mouth_sad").css("display", "none");
        break;
      case 3:
        $(".mouth_smile").css("display", "none");
        $(".mouth_sad").css("display", "block");
        break;
    }
    Promise.resolve()
      .then(() => {
        return $.getJSON("./lang/" + logic.getLang() + ".json");
      })
      .then(val => {
        $(".mood").text(val.mood[parseInt(health) - 1]);
      });
  }

  off() {
    $(".scarf").css("display", "none");
    $("#tempH").css("display", "none");
    $("#tempM").css("display", "none");
  }

  saveBd(sex) {
    this.sex = sex;
    logic.setRequest("avatars", "set_params_things", {
      id: logic.id,
      sex: this.sex
    });
  }

  menuAvaShow() {
    if (this.menuAva) {
      $(".menu-ava-right").hide("slide", { direction: "left" }, 500);
      $(".menu-ava-buttom").slideUp(500);
      setTimeout(() => {
        this.menuAva = 0;
        $("main").off("click", this.menuAvaShow);
      }, 500);

      return;
    } else {
      $(".menu-ava-right").show("slide", { direction: "left" }, 500);
      $(".menu-ava-buttom").slideDown(500);
      setTimeout(() => {
        $("main").on("click", this.menuAvaShow);
      }, 4);

      this.menuAva = 1;
      return;
    }
  }

  clickNewAva(event) {
    let id = event.target.getAttribute("id").split("-")[1];
    this.changeSex(id);
    this.menuAvaShow();
  }
}
