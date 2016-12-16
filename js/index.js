/**
 * Created by Fer on 11/4/16.
 */
$(document).ready(function() {

    console.log("Try the konami kode");
    var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        n = 0;
    $(document).keydown(function (e) {
        if (e.keyCode === k[n++]) {
            if (n === k.length) {
                console.log('Konami !!!');
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

    //click events
    $("#nav-btn").click( function () {

       $("#overlay").fadeIn();
       $("#nav-btn").removeClass("menu-load");
       $("#nav-btn").removeClass("menu-outro");
       $("#nav-btn").addClass("menu-intro");

    });

    $("#close-overlay").click( function () {

        $("#overlay").fadeOut();
        $("#nav-btn").removeClass("menu-intro");
        $("#nav-btn").addClass("menu-outro");

    });

});