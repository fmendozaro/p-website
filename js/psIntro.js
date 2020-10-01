/**
 * Created by Fer on 2/23/17.
 */
"use restrict";

let psOne = $("#psone");
let blackout = $("#blackout");

function runIntro(){
    //Audio play
    blackout.show();
    psOne.css('display', 'flex').hide().fadeIn(3000);
    $(".audio").trigger("play");
    psOne.addClass("psone-center");
    psOne.fadeIn(3000);
}

function closeIntro(){
    psOne.fadeOut();
    blackout.fadeOut();
}