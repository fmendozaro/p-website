/**
 * Created by Fer on 2/23/17.
 */
"use restrict";

var psOne = $("#psone");
var blackout = $("#blackout");

function runIntro(){

    //Audio play
    blackout.fadeIn();
    $(".audio").trigger("play");
    psOne.css("background-color","white");
    psOne.fadeIn(2000);

}

function closeIntro(){
    psOne.fadeOut();
    blackout.fadeOut();
}