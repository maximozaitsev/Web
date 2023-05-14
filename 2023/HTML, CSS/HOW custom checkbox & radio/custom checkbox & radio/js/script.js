$(document).ready(function () {
  // CHECKBOX
  $.each($(".checkbox"), function (index, val) {
    if ($(this).find("input").prop("checked") == true) {
      $(this).addClass("active");
    }
  });
  $(document).on("click", ".checkbox", function (event) {
    if ($(this).hasClass("active")) {
      $(this).find("input").prop("checked", false);
    } else {
      $(this).find("input").prop("checked", true);
    }
    $(this).toggleClass("active");
  });

  // RADIO
  $.each($(".radiobutton__item"), function (index, val) {
    if ($(this).find("input").prop("checked") == true) {
      $(this).addClass("active");
    }
  });
  $(document).on("click", ".radiobutton__item", function (event) {
    $(this)
      .parents(".radiobuttons")
      .find(".radiobutton__item")
      .removeClass("active");
    $(this)
      .parents(".radiobuttons")
      .find(".radiobutton__item input")
      .prop("checked", false);
    $(this).toggleClass("active");
    $(this).find("input").prop("checked", true);
    return false;
  });
});
