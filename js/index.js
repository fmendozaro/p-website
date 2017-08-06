/**
 * Created by Fer on 11/4/16.
 */
$(document).ready(function () {
    "use restrict";
    console.log("Try the konami kode");

    $(".button-collapse").sideNav();
    $(".modal").modal();
    Materialize.fadeInImage('#content');

    var div_loading_progress = $(".div_loading_progress");
    var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], n = 0;
    var konamiExecuted = false;

    function closeOverlay() {
        shrinkMenu();
        $("#overlay").fadeOut();
        $("#nav-btn").removeClass("menu-intro");
        $("#nav-btn").addClass("menu-outro");
        $(".main-menu").fadeOut("menu-outro");
    }

    function shrinkMenu(){
        $(".main-menu").animate({
            height: 0,
            width: 0,
            top: '200px',
            left: '50%'
        });
    }

    function growMenu(){
        // Desktop & iPad
        var width = (screen.width > 1024) ? "38%" : "35.5%";
        $(".main-menu").animate({
            height: 300,
            width: 300,
            top: '80px',
            left: width
        });
    }

    //Events

    // KONAMI KODE
    $(document).keydown(function (e) {
        if (e.keyCode === konamiCode[n++]) {
            if (n === konamiCode.length) {
                console.log("Konami !!!");
                konamiExecuted = true;
                runIntro();
                n = 0;
                return false;
            }
        } else {
            n = 0;
        }
    });

    $(document).keyup(function(e) {
        //ESC
        console.log(e.keyCode);
        if (e.keyCode === 27){
            if(!konamiExecuted){
                closeOverlay();
            }
            konamiExecuted = false;
            closeIntro();
        }
    });

    $("#nav-btn").click(function () {
        $("#overlay").fadeIn();

        setTimeout(function(){
            growMenu();
        }, 1000);

        $(".main-menu").fadeIn();
        $(".main-menu").removeClass("hide");
        $("#nav-btn").removeClass("menu-load menu-outro").addClass("menu-intro");
        $("#nav-wrapper").removeClass("hide-on-large-only");
        // $(".button-collapse").sideNav("show");
    });

    $(".links").click(function (event) {
        $(".button-collapse").sideNav("hide");
        var $content = $("#content");
        var targetText = "#" + $(this).data("target");
        var targetDiv = $(targetText);
        $content.html($(targetDiv).html());

        if(targetText == "#contact"){
            console.log($(this).children("a"));
            $(this).children("a")[0].click();
        }

        // Materialize.fadeInImage(content);
        closeOverlay();
    });

    $("#close-overlay").click(function () {
        closeOverlay();
    });

});