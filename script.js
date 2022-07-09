$(document).ready(function () {
    GetData();
    // Play_audio();
    // load_and_play()
    // get_audio_play()
    $('#btn-cmd').click(function () {
        // Play_audio()
        // load_and_play()
        alert("Uploading command to Machine")
        // alert()
    })
    // $('#alert_btn').trigger('click')
    // playSound()
    // skhst_cheers()

});

function Play_audio() {
    $("#alert_audio").get(0).play();
}

function load_and_play() {
    // var audio = new Audio('./sound.mp3');
    var audio = new Audio
    audio.src = './sound.mp3';
    // when the sound has been loaded, execute your code
    audio.oncanplaythrough = (event) => {
        var playedPromise = audio.play();
        if (playedPromise) {
            playedPromise.catch((e) => {
                console.log(e)
                if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
                    console.log(e.name);
                }
            }).then(() => {
                console.log("playing sound !!!");
            });
        }
    }
}
function GetData_old() {
    var url = 'https://api.thingspeak.com/channels/1361501/feeds.json?key=QPZGNFSI8520A5CZ&results=1';
    $.ajax
        ({
            url: url,
            type: 'GET',
            contentType: "application/json",
            //dataType: "json",
            //crossDomain: true,
            success: function (data, textStatus, xhr) {
                $.each(data, function (i, item) {
                    if (i == 'feeds') {
                        var ubound = item.length;
                        $('#span-feed-1').text(item[i].field1);
                                    $('#span-feed-2').text(item[i].field2);
                                    $('#span-feed-3').text(item[i].field3);
                                    $('#span-feed-4').text(item[i].field4);
                                    $('#span-feed-5').text(item[i].field5);
                    }
                });
            },
            error: function (xhr, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });

    setTimeout(GetData, 10000);
}
function GetData() {
    var url = 'https://api.thingspeak.com/channels/1786850/feeds.json?key=ORLD77YOE62KIWTW&results=10';
    $.ajax
        ({
            url: url,
            type: 'GET',
            contentType: "application/json",
            //dataType: "json",
            //crossDomain: true,
            success: function (data, textStatus, xhr) {
                $.each(data, function (i, item) {
                    if (i == 'feeds') {
                        
                        var ubound = item.length;
                        // var temperature = item[0].field2
                        // console.log(item.length,temperature)
                        // alert(temperature)
                        var i= ubound-1;
                        $('#span-feed-1').text(item[i].field1);
                                $('#span-feed-2').text(item[i].field2);
                                $('#span-feed-3').text(item[i].field3);
                                $('#span-feed-4').text(item[i].field4);
                                $('#span-feed-5').text(item[i].field5);
                        
                            // //do what you need here
                            // for (var i = 0; i < 10; i++) {
                            //     setInterval(function(){
                            //         $('#span-feed-1').text(item[i].field1);
                            //         $('#span-feed-2').text(item[i].field2);
                            //         $('#span-feed-3').text(item[i].field3);
                            //         $('#span-feed-4').text(item[i].field4);
                            //         $('#span-feed-5').text(item[i].field5);
                            //         console.log('chan')
                            //     },1000)
                                
                            // }
                        

                        // var temperature = item[ubound - 1].field1
                        // var humidity = item[ubound - 1].field2
                        // const feedData = [temperature,humidity]

                    }
                });
            },
            error: function (xhr, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });

    // setTimeout(GetData, 10000);
}


function loadSound() {
    createjs.Sound.registerSound("assets/thunder.mp3", 18);
}

function playSound() {
    createjs.Sound.play(18);
}

function skhst_cheers() {
    var url = 'https://badasstechie.github.io/Clips/Siren.mp3';
    window.AudioContext = window.AudioContext || window.webkitAudioContext; //fix up prefixing
    var context = new AudioContext(); //context
    var source = context.createBufferSource(); //source node
    source.connect(context.destination); //connect source to speakers so we can hear it
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer'; //the  response is an array of bits
    request.onload = function () {
        context.decodeAudioData(request.response, function (response) {
            source.buffer = response;
            source.start(0); //play audio immediately
            source.loop = true;
        }, function () { console.error('The request failed.'); });
    }
    request.send();
}
function onChange(e) {
    if (this.checked) {
        clickFunction2();
    } else {
        clickFunction();
    }
}

function clickFunction() {
    var currSpan = document.getElementById("span-info-3");
    currSpan.textContent = "Stopped";
}

function clickFunction2() {
    var currSpan = document.getElementById("span-info-3");
    currSpan.textContent = "Running";
}


