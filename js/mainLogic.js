class Logic {
  constructor(
    id,
    user,
    day,
    money,
    work,
    study,
    stadyFull,
    lang,
    stadyDone,
    dayAvelible,
    thingsExplored
  ) {
    this.id = id;
    this.user = user;
    this.day = day;
    this.dayAvelible = dayAvelible;
    this.money = money;
    this.work = work;
    this.study = study;
    this.stadyFull = stadyFull;
    this.lang = lang;
    this.nextDay = this.nextDay.bind(this);
    this.workChangeActive = this.workChangeActive.bind(this);
    this.checkAsk = this.checkAsk.bind(this);
    this.stadyNow = 1;
    this.stadyDone = stadyDone;
    this.room;
    this.outMoney;
    this.thingsExplored = thingsExplored;
  }
  getLang() {
    return this.lang;
  }

  startGame() {
    this.moneyAppend();
    this.studyClosedimg();
    this.workClosedimg();
    this.aboutStudyWindow();
    this.activeRadioButton();
    this.changeTextStudy(1);
    this.workActive(this.work);
    $("#newDay").on("click", this.nextDay);
    $("#btn-work").on("click", this.workChangeActive);
    $(".cloas-dayAvelible-mood").on("click", function() {
      $(".new-day-dayAvelible-mood").css("display", "none");
    });
    $("#new-day-cloase").on("click", () => {
      if (this.day % 3 === 0) {
        $(".new-day-dayAvelible-mood").css("display", "flex");
        ava.changeMood(1);
      }
      $(".new-day").css("display", "none");
      $(".newDayOverflow").css("display", "none");
    });
    $(".closed").on("contextmenu", this.contexmenuClosed);
    $(".about-closed").on("mouseleave", this.cloaseContextMeny);
    $("#closedOk").on("click", this.cloaseContextMeny);
    $(".newDayOverflow").on("click", function() {
      $(".new-day").css("display", "none");
      $(".newDayOverflow").css("display", "none");
    });
    $("#new-day-ask-cloase").on("click", this.checkAsk);
    $(".cloas-dayAvelible").on("click", function() {
      $(".new-day-dayAvelible").css("display", "none");
      $(".greyBlock").css("display", "none");
    });
  }

  ask(i) {
    Promise.resolve()
      .then(() => {
        return $.getJSON("/lang/ask.json");
      })
      .then(inf => {
        $(".new-day-ask").css("display", "flex");
        $(".greyBlock").css("display", "block");
        $("#new-day-ask-cloase").attr("href", inf["ask" + i][1]);
        $(".askNum").text(inf["ask" + i][0]);
        $(".askComp").on("click", function() {
          $(".hint").text(inf["ask" + i][1]);
        });
        this.setRequest("users", "set_params_things", {
          id: 1, //сюда передаешь id пользователя
          day_available: 2
        });
      });
  }

  checkAsk() {
    let num = parseInt($("#new-day-ask-cloase").attr("href")),
      input = parseInt($(".numberInput").val());

    if (num === input) {
      $(".new-day-ask").css("display", "none");
      $(".new-day-dayAvelible").css("display", "block");

      this.dayAvelible = 10;
    }
    $(".numberInput").val("");
  }
  getCountThings(json) {
    let count = 0;
    for (var element in json) {
      if (element != "id" && json[element] == 1) {
        ++count;
      }
    }
    return count;
  }
  setMoneyOut(money) {
    if (this.getMoney() >= -money) {
      this.money += money;
      this.moneyAppend();
      this.setRequest("users", "set_params_things", {
        id: this.id,
        money: this.money
      });
    }
  }

  setMoney(money) {
    if (this.getMoney() >= -money) {
      this.money += money;
      this.moneyAppend();
      this.setRequest("users", "set_params_things", {
        id: this.id,
        money: this.money
      });
    } else {
      return 1;
    }
  }

  getMoney() {
    return this.money;
  }
  initPercent(countThings = 34) {
    let percent = Math.round(Number(this.thingsExplored) / countThings * 100);
    document.querySelector(".rocketCount").innerText =
      percent > 100 ? "100%" : percent + "%";
  }
  initCircle(classCircle, countBued = 0, countThings = 24) {
    var percentageBued = countBued / countThings;
    $("." + classCircle + ".circle")
      .circleProgress({
        value: percentageBued > 100 ? 100 : percentageBued
      })
      .on("circle-animation-progress", function(event, progress) {
        $(this)
          .find("strong")
          .html(Math.round(percentageBued * 100 * progress) + "<i>%</i>");
      });
  }
  setRequest(name_table, functionname, params) {
    self = this;
    var host = "http://" + window.location.hostname;
    $.ajax({
      type: "POST",
      url: host + "/page.php",
      dataType: "json",
      data: {
        functionname: functionname, // пишешь какую функцию хочешь взять, список находится в page.php(set_params_user, get_params_user, add_user, isUser)
        name: name_table,
        params: params
      }
    });
  }

  setRoomParams(params) {
    this.room = params;
  }

  getRoomParams() {
    return this.room;
  }

  cloaseContextMeny() {
    $(".about-closed").css("display", "none");
  }

  contexmenuClosed(e) {
    if (!$(this).hasClass("closed")) {
      return;
    }
    let x = e.pageX;
    let y = e.pageY;
    let topMain = $(".main").offset().top,
      leftMain = $(".main").offset().left;
    let heightElem = $(".about-closed").outerHeight();
    if (x + 260 >= leftMain + 624) {
      x = x - 240;
    }
    if (y + heightElem >= topMain + 636) {
      y = y - heightElem + 20;
    }
    $(".about-closed").css({
      top: y - 10,
      left: x - 10,
      display: "block"
    });
  }

  workActive(i) {
    for (let a = 0; a < 5; a++) {
      $("#work" + a).removeClass("workActive");
    }

    $("#work" + (i - 1)).addClass("workActive");
    this.setWorkText(i - 1);
  }

  workChangeActive(ev) {
    let target = ev.target;
    for (let a = 0; a < 5; a++) {
      $("#work" + a).removeClass("workActive");
    }
    let num = parseInt(ev.target.getAttribute("work")) + 1;
    this.work = num;
    $("#work" + num).addClass("workActive");
    $(".room .about-works").css("display", "none");
    this.setWorkText(num);
  }

  setWorkText(num) {
    Promise.resolve()
      .then(() => {
        return this.getText();
      })
      .then(text => {
        $(".type-work").text(text["work" + num].name);
        $(".amount-work").text(text["work" + num].salaryInOur);
      });
  }

  moneyAppend() {
    $(".money-block").text(this.money);
  }

  nextContext() {
    $(".newDayOverflow").css("display", "block");
    $(".new-day").css({
      display: "flex",
      top: 202
    });
    $(".dayN").text(this.day);
    $(".dayAvailable").text(this.dayAvelible);
    $(".dayEuroPurchase").text(this.outMoney);
  }

  nextDayRender() {
    this.nextContext();
    this.moneyAppend();
    this.studyClosedimg();
    this.workClosedimg();
    this.changeTextStudy(this.stadyNow);
    this.initPercent();
  }

  getText() {
    return new Promise(resolve => {
      resolve($.getJSON("./lang/" + this.lang + ".json"));
    });
  }

  nextDay() {
    let flag = 1;
    Promise.resolve()
      .then(() => {
        return $.getJSON("./lang/" + this.lang + ".json");
      })
      .then(val => {
        let cost, dayOll;
        switch (this.stadyNow) {
          case 1:
            cost = val["person" + (this.study - 1)].fullCost;
            dayOll = val["person" + (this.study - 1)].fullDay;
            break;
          case 2:
            cost = val["person" + (this.study - 1)].distanceCost;
            dayOll = val["person" + (this.study - 1)].distanceDay;
            break;
          case 3:
            cost = val["person" + (this.study - 1)].yourselfCost;
            dayOll = val["person" + (this.study - 1)].yourselfDay;
            break;
        }
        let study = parseInt($("#2").text());

        if (cost * study > this.money) {
          return;
        }

        if (!Number(this.stadyDone)) {
          if (this.dayAvelible === 0) {
            this.ask(Math.floor(Math.random() * (3 - 1)) + 1);
            flag = 0;
          } else {
            let work = parseInt($("#3").text());

            $.ajax({
              type: "POST",
              url: "http://" + window.location.hostname + "/page.php",
              dataType: "json",
              data: {
                functionname: "counting_time_salary", // пишешь какую функцию хочешь взять, список находится в page.php(set_params_user, get_params_user, add_user, isUser)
                params: {
                  // это наш масив параметров
                  education: this.study, //сюда передаешь id пользователя
                  speciality: this.work,
                  hours: work
                }
              },
              success: data => {
                this.money += Number(data);
              }
            });

            ava.healthIdentify();
            ava.moodIdentify();
            this.outMoney = cost * study;
            this.money -= cost * study;
            this.day++;
            this.dayAvelible--;

            switch (this.stadyNow) {
              case 1:
                this.stadyFull += study;
                if (this.stadyFull >= dayOll) {
                  this.stadyFull = 0;

                  this.study++;
                  this.nextWork(this.study);
                }
                break;
              case 2:
                this.stadyFull += study + study / 4;
                if (this.stadyFull >= dayOll) {
                  this.stadyFull = 0;

                  this.study++;
                  this.nextWork(this.study);
                }
                break;
              case 3:
                this.stadyFull += study + study / 2;
                if (this.stadyFull >= dayOll) {
                  this.stadyFull = 0;

                  this.study++;
                  this.nextWork(this.study);
                }
                break;
            }
          }
        }
      })
      .then(() => {
        if (this.study === 5) {
          this.stadyDone = 1;
          this.study = 4;
          Promise.resolve()
            .then(() => {
              return $.getJSON("./lang/" + this.lang + ".json");
            })
            .then(val => {
              this.stadyFull = val["person" + (this.study - 1)].fullDay;
            });
        }
      })
      .then(() => {
        if (flag) {
          this.setRequest("users", "set_params_things", {
            // это наш масив параметров
            id: 1, //сюда передаешь id пользователя
            job: this.work,
            education: this.study,
            day: this.day,
            money: this.money,
            study_time_left: this.stadyFull,
            study_done: this.stadyDone,
            day_available: this.dayAvelible
          });

          var args = rockets.getArgs();
          args[args.active_explore] =
            Number(args[args.active_explore]) - Number($("#1").text());
          console.log(logic.thingsExplored);

          if (args[args.active_explore] <= 0) {
            this.thingsExplored++;
            this.setRequest("users", "set_params_things", {
              id: this.id,
              things_explored: this.thingsExplored
            });
            args.count_explored++;
            args.active_explore = null;
          }
          this.setRequest(rockets.getLevel(), "set_params_things", args);
          rockets.setArgs(args);
          this.nextDayRender();
        }
      });
  }

  nextWork(i) {
    if (i === 4) {
      this.work = 5;
      return;
    }
    if (i === 3) {
      this.work = 4;
      return;
    }
    if (i === 2) {
      this.work = 3;
      return;
    }
    if (i === 1) {
      this.work = 2;
      return;
    }
  }

  circleReset(val) {
    let prog = val / 100;
    $(".second.circle")
      .circleProgress({
        value: prog
      })
      .on("circle-animation-progress", function(event, progress) {
        $(this)
          .find("strong")
          .html(Math.round(val * progress) + "<i>%</i>");
      });
  }

  changeTextStudy(num) {
    Promise.resolve()
      .then(() => {
        return $.getJSON("./lang/" + this.lang + ".json");
      })
      .then(val => {
        switch (num) {
          case 1:
            $(".room-description")
              .children(".type")
              .text(val["person" + (this.study - 1)].name);
            $(".room-description")
              .children(".cost")
              .children(".amount")
              .text(val["person" + (this.study - 1)].fullCost);
            $(".room-description")
              .children(".hours-left")
              .children(".count-hours")
              .text(val["person" + (this.study - 1)].fullDay - this.stadyFull);
            this.circleReset(
              this.stadyFull / val["person" + (this.study - 1)].fullDay * 100
            );
            break;
          case 2:
            $(".room-description")
              .children(".type")
              .text(val["person" + (this.study - 1)].name);
            $(".room-description")
              .children(".cost")
              .children(".amount")
              .text(val["person" + (this.study - 1)].distanceCost);
            $(".room-description")
              .children(".hours-left")
              .children(".count-hours")
              .text(
                val["person" + (this.study - 1)].distanceDay - this.stadyFull
              );
            this.circleReset(
              this.stadyFull /
                val["person" + (this.study - 1)].distanceDay *
                100
            );
            break;
          case 3:
            $(".room-description")
              .children(".type")
              .text(val["person" + (this.study - 1)].name);
            $(".room-description")
              .children(".cost")
              .children(".amount")
              .text(val["person" + (this.study - 1)].yourselfCost);
            $(".room-description")
              .children(".hours-left")
              .children(".count-hours")
              .text(
                val["person" + (this.study - 1)].yourselfDay - this.stadyFull
              );
            this.circleReset(
              this.stadyFull /
                val["person" + (this.study - 1)].yourselfDay *
                100
            );
            break;
        }
      });
  }

  studyClosedimg() {
    for (let i = 0; i < 4; i++) {
      $("#person" + i).removeClass("personOpen");
      $("#person" + i).removeClass("closed");
    }

    $("#person" + (this.study - 1)).addClass("personOpen");

    for (let i = this.study; i < 4; i++) {
      $("#person" + i).addClass("closed");
    }
  }

  workClosedimg() {
    for (let i = 0; i < 5; i++) {
      $("#work" + i).removeClass("workOpen");
      $("#work" + i).removeClass("closed");
    }
    for (let i = 0; i < this.work; i++) {
      $("#work" + i).addClass("workOpen");
    }
    for (let i = this.work; i < 5; i++) {
      $("#work" + i).addClass("closed");
    }
  }

  contexmenuArticle(clickedClass, hiddenClass) {
    let self = this;
    $(document).on("contextmenu", "." + clickedClass + "", function(e) {
      let x = e.pageX;
      let y = e.pageY,
        id;
      Promise.resolve()
        .then(() => {
          let topMain = $(".main").offset().top,
            leftMain = $(".main").offset().left;
          let heightElem = $(".about-" + hiddenClass).outerHeight();
          if (x + 260 >= leftMain + 624) {
            x = x - 240;
          }
          if (y + heightElem >= topMain + 626) {
            y = y - heightElem + 40;
          }

          if (e.target.tagName === "IMG") {
            id = e.target.classList[1];
          } else {
            id = e.target.id;
          }

          return $.getJSON("./lang/" + self.lang + ".json");
        })
        .then(val => {
          $(".room .about-" + hiddenClass)
            .children()
            .children(".type")
            .text(val[id].name);
          $(".type-full-desctription")
            .children(".amount")
            .text(val[id].fullCost);
          $(".type-full-desctription")
            .children(".amount-hours")
            .text(val[id].fullDay);

          $(".type-desctription")
            .children(".amount")
            .text(val[id].distanceCost);
          $(".type-desctription")
            .children(".amount-hours")
            .text(val[id].distanceDay);

          $(".type-description-low")
            .children(".amount")
            .text(val[id].yourselfCost);
          $(".type-description-low")
            .children(".amount-hours")
            .text(val[id].yourselfDay);
          $(".type-full-desctription")
            .children(".amountWork")
            .text(val[id].salaryInOur);
          $("#btn-work").attr("work", id.substring(4));
          $(".room .about-" + hiddenClass).css({
            top: y - 10,
            left: x - 10,
            display: "block"
          });
        });
    });
    $(".room .about-" + hiddenClass).on("mouseleave", function() {
      $(".room .about-" + hiddenClass).css("display", "none");
    });

    $(document).on("contextmenu", function(e) {
      e.preventDefault();
    });
    function activeRadioButton() {
      $(document).on("click", ".choose-radio-button", function() {
        var activeBtn = $(this)
          .parent()
          .parent()
          .find("div[data-active=1]");
        activeBtn.children().remove();
        activeBtn.attr("data-active", "0");
        $(this).prepend('<div class="active-rbtn"></div>');
        $(this).attr("data-active", 1);
      });
    }
    activeRadioButton();
  }

  aboutStudyWindow() {
    $(document).on("click", ".overlay, .buttonStudy", function() {
      $(".about-persons").css({
        display: "none",
        top: "inherit",
        bottom: "inherit",
        left: "inherit"
      });
      $(".overlay").css({ display: "none" });
      $(".about-persons").removeClass("block-after");
      $(".about-persons").removeClass("block-before");
    });
  }

  activeRadioButton() {
    let self = this;
    $(document).on("click", ".choose-radio-button", function() {
      var activeBtn = $(".about-persons").find("div[data-active=1]");
      activeBtn.children().remove();
      activeBtn.attr("data-active", "0");
      $(this).prepend('<div class="active-rbtn"></div>');
      $(this).attr("data-active", 1);
      if (
        $(this)
          .siblings()
          .attr("class") === "description"
      ) {
        self.changeTextStudy(2);
        self.stadyNow = 2;
        return;
      }
      if (
        $(this)
          .siblings()
          .attr("class") === "description-low"
      ) {
        self.changeTextStudy(3);
        self.stadyNow = 3;
        return;
      }
      if (
        $(this)
          .siblings()
          .attr("class") === "description-full"
      ) {
        self.changeTextStudy(1);
        self.stadyNow = 1;
        return;
      }
    });
  }
}
var logic = null,
  laboratory = null,
  rockets = null,
  ava = null,
  freeTime = null,
  lang = $("body").data("lang"),
  id = null;

$.ajax({
  type: "POST",
  url: "http://" + window.location.hostname + "/page.php",
  dataType: "json",
  data: {
    functionname: "add_user", // пишешь какую функцию хочешь взять, список находится в page.php(set_params_user, get_params_things, add_user, isUser)
    params: {
      // это наш масив параметров
      login: "login" //сюда передаешь id пользователя
    }
  },
  success: data => {
    id = data;
    Promise.resolve().then(() => {
      $.ajax({
        type: "POST",
        url: "http://" + window.location.hostname + "/page.php",
        dataType: "json",
        data: {
          functionname: "get_params_things", // пишешь какую функцию хочешь взять, список находится в page.php(set_params_user, get_params_things, add_user, isUser)
          name: "users",
          params: {
            // это наш масив параметров
            id: id //сюда передаешь id пользователя
          }
        },
        success: function(data) {
          Promise.resolve()
            .then(() => {
              //user,day,money,work,study,stadyFull,stadyDist,stadyYor,lang
              introStart(lang);
              logic = new Logic(
                data.id,
                data.login,
                Number(data.day),
                Number(data.money),
                Number(data.job),
                Number(data.education),
                Number(data.study_time_left),
                lang,
                Number(data.study_done),
                Number(data.day_available),
                Number(data.things_explored)
              );
              logic.startGame();
              logic.contexmenuArticle("personOpen", "persons");
              logic.contexmenuArticle("relaxOpen", "relaxs");
              logic.contexmenuArticle("workOpen", "works");
              logic.contexmenuArticle("labOpen", "lab");
              logic.initPercent();
            })
            .then(() => {
              Promise.resolve()
                .then(() => {
                  return $.getJSON("/lang/" + lang + ".json");
                })
                .then(inf => {
                  room = new Room(Number(data.id), inf);
                  room.init();
                  laboratory = new Laboratory(Number(data.id), inf);
                  laboratory.init();
                  rockets = new Rockets(
                    Number(data.id),
                    Number(data.level_explore),
                    inf
                  );
                  rockets.init();
                  //sex,health
                  ava = new Ava();
                  freeTime = new FreeTime();
                });
            });
        }
      });
    });
  }
});
