/**
 * Created by Fer on 11/4/16.
 */
"use restrict";

$(document).ready(function () {

    console.log("Try the konami kode");

    $(".button-collapse").sideNav();
    $('.modal').modal();

    var div_loading_progress = $(".div_loading_progress");
    var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], n = 0;
    var konamiExecuted = false;

    function closeOverlay() {
        $("#overlay").fadeOut();
        $("#nav-btn").removeClass("menu-intro");
        $("#nav-btn").addClass("menu-outro");
    }

    //Events

    // KONAMI KODE
    $(document).keydown(function (e) {
        if (e.keyCode === konamiCode[n++]) {
            if (n === konamiCode.length) {
                console.log('Konami !!!');
                konamiExecuted = true;
                runIntro();
                n = 0;
                return false;
            }
        } else {
            n = 0;
        }
    });

    // $(document).keyup(function(e) {
    //     //ESC
    //     console.log(e.keyCode);
    //     if (e.keyCode === 27){
    //         if(!konamiExecuted){
    //             closeOverlay();
    //         }
    //         konamiExecuted = false;
    //         closeIntro();
    //     }
    // });

    $("#nav-btn").click(function () {
        $("#overlay").fadeIn();
        $(".main-menu").removeClass("hide");
        $("#nav-btn").removeClass("menu-load menu-outro").addClass("menu-intro");
        $('#nav-wrapper').removeClass("hide-on-large-only");
        // $('.button-collapse').sideNav('show');
    });

    $(".links").click(function (event) {
        $('.button-collapse').sideNav('hide');
        var content = $('#content');
        var target = '#' + $(this).data('target');
        $(target).removeClass('hide');
        $(content).html($(target));
    });

    $("#close-overlay").click(function () {
        closeOverlay();
    });

});