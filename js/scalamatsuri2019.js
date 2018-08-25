var scalamatsuri = scalamatsuri || {};

scalamatsuri.displayDescription = function (id, raw) {
  var w = $(window).width() - 20;
  var h = $(window).height() - 20;
  if (w < 0) {
    w = 10;
  }
  if (h < 0) {
    h = 10;
  }
  if (w > 600) {
    w = 600;
  }
  if (h > 400) {
    h = 400;
  }
  $("#dialog_message #dialog_contents").remove();
  $("#dialog_message").append(
    $("<div id='dialog_contents'/>").append(raw)
  ).dialog({
    modal: true,
    width: w,
    height: h,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      }
    }
  });
};

$(document).ready(function () {

  var rooms = [
    {name: "day0", maxNo: 3, firstRoom: "C"},
    {name: "day1", maxNo: 3, firstRoom: "A"},
    {name: "day2", maxNo: 6, firstRoom: "A"}
  ];

  /**
   * classを生成する
   * @param prefix
   * @param firstRoom
   * @param roomIndex
   * @returns {string}
   */
  function roomClass(prefix, firstRoom, roomIndex) {
    // index分roomをshiftする
    var room = String.fromCharCode(firstRoom.charCodeAt(0) + roomIndex);
    return "." + prefix + "Room" + room;
  }

  /**
   * idを生成する
   * @param room
   * @param index
   * @returns {string}
   */
  function makeId(room, index) {
    return "#" + room.name + "Switch" + (index + 1);
  }

  /**
   * 表示
   * @param room
   * @param index
   */
  function showRoom(room, index) {
    $(roomClass(room.name, room.firstRoom, index)).show();
  }

  /**
   * リセット
   * @param room
   */
  function resetRoom(room) {
    for (var roomIdx = 0; roomIdx < room.maxNo; roomIdx++) {
      var resetId = makeId(room, roomIdx);

      $(resetId).toggleClass("onNavLink", false);
      $(roomClass(room.name, room.firstRoom, roomIdx)).hide();
    }
  }

  $(".gnavSmClick").click(function () {
    $(".smVerGnav").slideToggle();
  });

  rooms.forEach(function (room) {
    for (var idx = 0; idx < room.maxNo; idx++) {
      var id = makeId(room, idx);

      // 各nav linkに即時適用させる必要があるため
      (function (targetId) {
        $(targetId)
          .click(function () {
            var clickedId = $(this).attr('id');

            var prefix = clickedId.substring(0, 4);
            var currentIndex = +(clickedId.replace(prefix + 'Switch', '')) - 1;

            var room = rooms
              .filter(function (room) {
                return room.name === prefix;
              })
              .pop();

            resetRoom(room);

            showRoom(room, currentIndex);
            $(this).toggleClass("onNavLink");
          });

      })(id);
    }
  });

  function showTables() {
    rooms.forEach(function (room) {
      for (var idx = 0; idx < room.maxNo; idx++) {
        showRoom(room, idx);
      }
    });
  }

  function resetTables() {
    rooms.forEach(function (room) {
      resetRoom(room);
    });
  }

  function showFirstRoom() {
    rooms.forEach(function (room) {
      showRoom(room, 0);
    });
  }

  function addOnNavLinkToFirstSwitch() {
    rooms.forEach(function (room) {
      var id = makeId(room, 0);

      $(id).toggleClass("onNavLink", true);
    });
  }

  function initSchedule() {
    if ($(document).width() >= 1024) {
      $('.day0roomswitch').hide();
      $('.day1roomswitch').hide();
      $('.day2roomswitch').hide();

      showTables();
    } else {
      resetTables();

      $('.day0roomswitch').show();
      $('.day1roomswitch').show();
      $('.day2roomswitch').show();

      addOnNavLinkToFirstSwitch();
      showFirstRoom();
    }
  }

  var lastWidth = $(window).width();
  $(window).resize(function () {
    var w = $(window).width();
    // scrolling causes resize events to occur on smart phones
    if (lastWidth !== w) {
      lastWidth = w;
      initSchedule();
    }
  });

  initSchedule();
});
