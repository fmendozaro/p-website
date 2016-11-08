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
                alert('Konami !!!'); // à remplacer par votre code
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
            console.log("loop" + pct);
            setTimeout(update_pct(limit, $(el)),10);
        }
    }

    function loadSkills(){
        div_loading_progress.each(function (){
            var limit = $(this).data("val");
            setTimeout(update_pct(limit, $(this)),100);
        });
    }

    loadSkills();


});