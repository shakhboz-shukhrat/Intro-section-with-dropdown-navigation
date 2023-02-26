$(document).ready(function () {
  let desktopSize = window.matchMedia("(min-width: 376px)");
  if (desktopSize.matches) {
    $(".list1").hide();
    $(".list2").hide();
    $(".up").hide();
    $(".up2").hide();
    $(".hero-mobile").hide();
    $(".menu").hide();
    $(".mobi").hide();
    $(".list-mobi").hide();
    $(".list-mobi2").hide();
    $(".up-mobi").hide();
    $(".up2-mobi").hide();
    $(".login-mobi").hide();
    $(".register-mobi").hide();
    $(".c-mobi").hide();
    $(".close").hide();
    $(".company-mobi").hide();
    $(".features-mobi").hide();
    $(".features").click(function () {
      $(".list1").toggle(500);
      $(".up").toggle(300);
      $(".down").toggle(300);
    });
    $(".company").click(function () {
      $(".list2").toggle(500);
      $(".up2").toggle(300);
      $(".down2").toggle(300);
    });
  } else {
    $(".hero").hide();
    $(".list1").hide();
    $(".list2").hide();
    $(".c").hide();
    $(".mobi").hide();
    $(".content2").hide();
    $(".list-mobi").hide();
    $(".list-mobi2").hide();
    $(".up-mobi").hide();
    $(".up2-mobi").hide();
    $(".features-mobi").click(function () {
      $(".list-mobi").toggle(500);
      $(".up-mobi").toggle(300);
      $(".down-mobi").toggle(300);
    });
    $(".company-mobi").click(function () {
      $(".list-mobi2").toggle(500);
      $(".up2-mobi").toggle(300);
      $(".down2-mobi").toggle(300);
    });
    $(".close").click(function () {
      $(".content2").hide(300);
      $(".mobi").hide(350);
    });
    $(".menu").click(function () {
      $(".content2").show(300);
      $(".mobi").show(350);
    });
  }
});
