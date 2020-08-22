/**
 * Created by Fer on 11/4/16.
 */
"use strict";

$(document).ready(function () {

    console.log("Try the konami kode");

    var div_loading_progress = $(".div_loading_progress");
    var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], n = 0;
    var konamiExecuted = false;
    var cardsDiv = $("#cards");
    var cards = "", imgsHTML = "";
    var today = new Date();
    var slideShow = $('#slideshow');

    $('.modal').modal();
    $(".button-collapse").sideNav({edge: "right"});
    Materialize.fadeInImage("#content");
    Materialize.fadeInImage('#logo');
    $('.tap-target').tapTarget("open").tapTarget("close");

    function closeOverlay() {
        shrinkMenu();
        $("#overlay").fadeOut();
        $("#nav-btn").removeClass("menu-intro").addClass("menu-outro");
        $(".main-menu").fadeOut("menu-outro");
    }

    function shrinkMenu(){
        $(".main-menu").animate({
            height: 0,
            width: 0,
            top: '50%',
            left: '50%',
            marginTop: '0px',
            marginLeft: '0px'
        });
    }

    function growMenu(){
        // Desktop & iPad
        // var width = (screen.width > 1024) ? wFit : "35.5%";
        $(".main-menu").animate({
            height: 300,
            width: 300,
            top: '50%',
            left: '50%',
            marginTop: '-150px',
            marginLeft: '-150px'
        });
    }

    // Event handlers

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

        $(".main-menu").fadeIn().removeClass("hide");
        $("#nav-btn").removeClass("menu-load menu-outro").addClass("menu-intro");
        $("#nav-wrapper").removeClass("hide-on-large-only");
        // $(".button-collapse").sideNav("show");
    });

    $(".links").click(function (event) {
        $(".button-collapse").sideNav("hide");
        var $content = $("#content");
        var targetText = "#" + $(this).data("target");
        var targetDiv = $(targetText);

        if(targetText === "#contact"){
            console.log($(this).children("a"));
            $(this).children("a")[0].click();
        }else{
            $content.html($(targetDiv).html());
            Materialize.fadeInImage("#content");
        }

        // Materialize.fadeInImage(content);
        closeOverlay();
    });

    // Forces a link to a particular section
    // $(".links").first().next().trigger('click');

    $("#close-overlay").click(function () {
        closeOverlay();
    });

    $("#contact-form").submit(function(e){
        e.preventDefault();
    });

    $("#send-email").click(function(e){
       e.preventDefault();
       $.ajax({
           url: "/php/mailer.php",
           method: "POST",
           data: $(this).parent().serialize(),
       }).done(function(data){
           $('#contact').modal('close');
           Materialize.toast(data.msg, 4000);
       }).fail(function( jqXHR, data ) {
           Materialize.toast("Request failed: " + data.error, 4000);
       });
    });

    // Load projects section
    PROPS.projects.forEach(function(el, i){
        cards += `<div class="card">
                <div class="card-image">
                    <img src="${el.imgUrl}">
                    <span class="card-title blue-text blue lighten-5"><strong>${el.name}</strong></span>
                    <a class="btn-floating halfway-fab waves-effect waves-light light-blue" href="${el.url}" target="_blank"><i class="material-icons">language</i></a>
                </div>
                <div class="card-content light-blue lighten-5">
                    <p>${el.description}</p>
                </div>
                <div class="card-action blue-text text-darken-2">
                    <a class="links" href="${el.url}" target="_blank">${el.name} link</a>
                </div>
            </div>`;
    });

    cardsDiv.append(cards);

    var shuffled = PROPS.experience
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

    shuffled.forEach(function(e){
        var lang = e.lang.toUpperCase();
        var years = (new Date()).getFullYear() - e.year;
        $('.experience-hub').append(`<span class="letter" data-letter="${lang}">${lang}</span>`);
    });

    $('#dev-exp').text(today.getFullYear() - PROPS.generalExp.dev);
    $('#teach-exp').text(today.getFullYear() - PROPS.generalExp.teach);

    // Load the cohorts

    PROPS.cohorts.forEach( function(e, i){
        imgsHTML += `<img class="cohort responsive-img" src="img/cohorts/${e}">`;
    });
    slideShow.append(imgsHTML);

});