$(document).ready(function () {
    "use strict";

    $('.btn-area .btn-dtl').on('click', function (e) {
        e.preventDefault();
        $('.main .page-overlay').toggle();
        $('.overlay.bet-details').fadeToggle();
    });

    $('.btn-area .report').on('click', function (e) {
        e.preventDefault();
        $('.main .page-overlay').toggle();
        $('.overlay.game-report').fadeToggle();
    });

    $('.btn-area .result').on('click', function (e) {
        e.preventDefault();
        $('.main .page-overlay').toggle();
        $('.overlay.time-result').fadeToggle();
    });

    $('.main .page-overlay, .overley-title ul li a.times').on('click', function () {
        $('.main .page-overlay').toggle();
        $('.overlay.time-result').fadeOut();
        $('.overlay.game-report').fadeOut();
        $('.overlay.bet-details').fadeOut();
    });



    let nextInput = null;
    let prevInput = null;
    let upInput = null;
    let downInput = null;

    function inputInfo(focusInput, focusInputIndex) {
        focusInput = focusInput,
        focusInputIndex = focusInputIndex;
        nextInput = document.querySelector('input[data-index="' + (Number(focusInputIndex) + 1) + '"]');
        prevInput = document.querySelector('input[data-index="' + (Number(focusInputIndex) - 1) + '"]');
        upInput = document.querySelector('input[data-index="' + (Number(focusInputIndex) - 12) + '"]');
        downInput = document.querySelector('input[data-index="' + (Number(focusInputIndex) + 12) + '"]');
    }

    let allTableInputs = document.querySelectorAll('table input');

    Array.from(allTableInputs).forEach((item, index) => {
        let indexVal = index + 1;
        item.setAttribute('data-index', indexVal);

        item.addEventListener('click', function (e) {
            item.blur();
            e.target.focus();
            inputInfo(e.target, e.target.getAttribute('data-index'));
        })
    });

    document.addEventListener('keydown', function (e) {
        let focusInput = document.querySelector('input:focus');

        if (focusInput) {
            let focusInputIndex = focusInput.getAttribute('data-index');
            inputInfo(focusInput, focusInputIndex);

            switch (e.keyCode) {
                case 37: //Left arrow;
                    if (prevInput) {
                        prevInput.focus();
                    }
                    break;
                case 38: // Up arrow;
                    if (upInput) {
                        upInput.focus();
                    }
                    break;
                case 39: // Right arrow;
                    if (nextInput) {
                        nextInput.focus();
                    }
                    break;
                case 40: // Down arrow;
                    if (downInput) {
                        downInput.focus();
                    }
                    break;
            }
        }


    });

    function currentTime(tt) {
        var date = new Date(); /* creating object of Date class */
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var midday = "AM";
        midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
        hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour); /* assigning hour in 12-hour format */
        hour = updateTime(hour);
        min = updateTime(min);
        sec = updateTime(sec);
        document.querySelector("#curent-time").innerHTML = hour + ":" + min + ":" + sec + " " + midday; /* adding time to the div */
        var t = setTimeout(currentTime, 1000); /* setting timer */
    }

    function updateTime(k) { /* appending 0 before time elements if less than 10 */
        if (k < 10) {
            return "0" + k;
        }
        else {
            return k;
        }
    }

    // currentTime();


    let nowTime = new Date();

    console.log(nowTime);

});