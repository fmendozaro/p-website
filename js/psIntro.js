/**
 * Created by Fer on 2/23/17.
 */
"use restrict";

let psOne = $("#psone");
let blackout = $("#blackout");

function runIntro(){

    //Audio play
    blackout.fadeIn();
    $(".audio").trigger("play");
    psOne.addClass("psone-center");
    psOne.fadeIn(2000);
}

function closeIntro(){
    psOne.fadeOut();
    blackout.fadeOut();
}