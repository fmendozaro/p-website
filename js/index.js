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
    var limit = 90;
    var div_loading_progress = $(".div_loading_progress");

    function display_pct(p) {
        div_loading_progress.addClass("p"+p);
    }

    function update_pct(){
        display_pct(pct++);

        if (pct<=limit) {
            setTimeout(update_pct,10);
        }
    }

    setTimeout(update_pct,100);

});