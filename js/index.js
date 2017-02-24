/**
 * Created by Fer on 11/4/16.
 */
"use restrict";

$(document).ready(function() {

    //KONAMI CODE
    console.log("Try the konami kode");

    var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        n = 0;
    $(document).keydown(function (e) {
        if (e.keyCode === konamiCode[n++]) {
            if (n === konamiCode.length) {
                console.log('Konami !!!');
                runIntro();
                n = 0;
                return false;
            }
        }
        else {
            n = 0;
        }
    });

    var pct = 0;
    var div_loading_progress = $(".div_loading_progress");

    //Functions

    function update_pct(limit, el){
        pct++;
        $(el).addClass("p" + pct);
        if (pct < limit) {
            //console.log(" loop" + pct);
            setTimeout(update_pct(limit, $(el)),10);
        }else{
            pct = 0;
        }
    }

    function loadSkills(){
        div_loading_progress.each(function (){
            var limit = $(this).data("val");
            update_pct(limit, $(this));
        });
    }

    loadSkills();

    function closeOverlay(){
        $("#overlay").fadeOut();
        $("#nav-btn").removeClass("menu-intro");
        $("#nav-btn").addClass("menu-outro");
    }

    //Events

    $(document).keyup(function(e) {
        //ESC
        console.log(e.keyCode);
        if (e.keyCode === 27){
            //closeOverlay();
            closeIntro();
        }
        if(e.keyCode === 13){
            runIntro();
        }

    });

    $("#nav-btn").click( function () {

       $("#overlay").fadeIn();
       $("#nav-btn").removeClass("menu-load");
       $("#nav-btn").removeClass("menu-outro");
       $("#nav-btn").addClass("menu-intro");

    });

    $("#close-overlay").click( function () {

       closeOverlay();

    });

});