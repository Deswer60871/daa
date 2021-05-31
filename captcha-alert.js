async function alarm() {
    let sound = new Audio("https://d1490khl9dq1ow.cloudfront.net/audio/sfx/mp3preview/BsTwCwBHBjzwub4i4/alarm-clock-buzzer-beeps_MyERv24__NWM.mp3");
    await sound.play();
    alert("Captcha!")
    sound.pause();
}

var interval = setInterval(() => {
    if ($(".g-recaptcha").is(":visible")) {
        alarm();
        clearInterval(interval);
        $("#alert-info").remove();
    }
}, 1000);

alarm();
$(".server_info").prepend("<b style='color: green' id='alert-info'>Captcha Alert aktivní</b>");