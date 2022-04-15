var weatherType = "現在の天気"
console.log(weatherType)
var code = "バーコード"
var ressult8 = "味方のカード"

const damageRange = 0.2;

const playerData = {
    name: "あなたのカード",
    hp: "?",
    attack: 5,
    deffence: 2
}

const enemyData = {
    name: "CPUのカード",
    hp: "?",
    attack: 4,
    deffence: 1
}


$(document).ready(function () {
    'use strict'


    const APIKEY = "4bf6ecf1671e9b03b2bfa351280f4766";


    //現在位置の取得ができるかどうか
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);

        // 現在位置の取得に成功した場合
        function success(position) {
            const positionData = position.coords;
            // 緯度経度を表示して動作確認
            // console.log( position.coords.latitude);
            // console.log( position.coords.longitude);

            //緯度経度の取得

            const lat = positionData.latitude;
            const lon = positionData.longitude;
            $('.location').text('現在の位置（' + Math.floor(lat * 100) / 100 + ',' + Math.floor(lon * 100) / 100 + ')');


            //現在の天気データを呼び出し
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather",
                dataType: "jsonp",
                data: "lat=" + lat + "&lon=" + lon + "&appid=" + APIKEY,

                //天気データ呼び出し成功時の挙動
                success: function input (data) {                
                    if (data.weather[0].main === "Clear") {
                        $('body').css('background-color', "#87cefa");
                        $('.dayWeather').text("晴れ");
                    } else if (data.weather[0].main === "Rain") {
                        $('body').css('background-color', '#191970');
                        $('.dayWeather').text("雨");
                    } else if (data.weather[0].main === "Clouds") {
                        $('body').css('background-color', '#d3d3d3');
                        $('.dayWeather').text("くもり");
                    } else if (data.weather[0].main === "Snow") {
                        $('body').css('background-color', '#fffff');
                        $('.dayWeather').text("雪");
                    }
                    
                    weatherType = data.weather[0].main
                    // 箱に天気が入っているか確認
                    console.log(weatherType)


                    //データの表示
                    $('.dayWeatherIcon').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png ');
                }
            });

        }

        //現在位置の取得に失敗した場合
        function error(error) {
            alert("位置情報が取得できなかったため、東京の天気を表示します");
            $('.location').text('東京');

            TokyoWeather();

        }
        //現在位置がそもそも取得できない場合
    } else {
        alert("位置情報が取得できなかったため、東京の天気を表示します");
        $('.location').text('東京');

        TokyoWeather();
    }

    //東京の天気
    function TokyoWeather() {

        //現在の天気データ呼び出し
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            dataType: "jsonp",
            data: "q=Tokyo,jp&appid=" + APIKEY,
            //天気データ呼び出し成功時の挙動
            success: function (data) {
                if (data.weather[0].main === "Sunny" || data.weather[0].main === "Clear") {
                    $('body').css('background-image', 'url(Sunny.jpg)');
                    $('.dayWeather').text("晴れ");
                } else if (data.weather[0].main === "Rain") {
                    $('body').css('background-image', 'url(Rain.jpg)');
                    $('.dayWeather').text("雨");
                } else if (data.weather[0].main === "Clouds") {
                    $('body').css('background-image', 'url(Cloudy.jpg)');
                    $('.dayWeather').text("くもり");
                } else if (data.weather[0].main === "Snow") {
                    $('body').css('background-image', 'url(Snowy.jpg)');
                    $('.dayWeather').text("雪");
                }

                    //各データの表示
                    $('.dayWeatherIcon').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png ');
            }
        });


    }


}());

console.log(weatherType)


// モーダルウィンドウ

$('.inline').modaal({
	before_open: function() {
		alert('カメラを起動します');
	},
	after_close: mikata
});

function mikata() {
    // 数字抜出し
    const result1 = code.charAt(1);
    const result2 = code.charAt(3);
    const result3 = code.charAt(5);
    // const result4 = code.charAt(7);
    console.log(result1);
    console.log(result2);
    console.log(result3);
    // console.log(result4);

    // 数字に変換
    num1 = parseInt(result1)
    num2 = parseInt(result2)
    num3 = parseInt(result3)
    // num4 = parseInt(result4)

    // 計算
    const result5 = num1 + num2 + num3 + 10
    // const result5 = num1 + num2 + num3 + num4 + 10
    console.log(result5);

    // 下1桁を使う変数にする
    result6 = String(result5);
    console.log(result6);
    const result7 = result6.substr(-1);
    console.log(result7);
    result8 = parseInt(result7)

    //playerデータの生成
    if (result8 === 1){
        playerData["name"] = "モモンガ"
        playerData["hp"] = 30
        playerData["attack"] = 3
        playerData["deffence"] = 0
        $("h3").css("color", "black");
        document.getElementById('card_a').src = 'img/mikata1.png';
    } else if (result8 === 2) {
        playerData["name"] = "シーサー"
        playerData["hp"] = 30
        playerData["attack"] = 3
        playerData["deffence"] = 0
        $("h3").css("color", "black");
        document.getElementById('card_a').src = 'img/mikata2.png';
    } else if (result8 === 3){
        playerData["name"] = "むちゃうマン"
        playerData["hp"] = 30
        playerData["attack"] = 3
        playerData["deffence"] = 0
        $("h3").css("color", "black");
        document.getElementById('card_a').src = 'img/mikata3.png';
    } else if (result8 === 4){
        playerData["name"] = "栗まんじゅう"
        playerData["hp"] = 30
        playerData["attack"] = 3
        playerData["deffence"] = 0
        $("h3").css("color", "black");
        document.getElementById('card_a').src = 'img/mikata4.png';
    } else if (result8 === 5){
        playerData["name"] = "オデ"
        playerData["hp"] = 30
        playerData["attack"] = 3
        playerData["deffence"] = 0
        $("h3").css("color", "black");
        document.getElementById('card_a').src = 'img/mikata5.png';
    } else if (result8 === 6){
        playerData["name"] = "うさぎ"
        playerData["hp"] = 30
        playerData["attack"] = 3
        playerData["deffence"] = 0
        $("h3").css("color", "black");
        document.getElementById('card_a').src = 'img/mikata6.png';
    } else if (result8 === 7){
        playerData["name"] = "ハチワレ"
        playerData["hp"] = 30
        playerData["attack"] = 3
        playerData["deffence"] = 0
        $("h3").css("color", "black");
        document.getElementById('card_a').src = 'img/mikata7.png';
    } else if (result8 === 8){
        playerData["name"] = "討伐ちいかわ"
        playerData["hp"] = 30
        playerData["attack"] = 3
        playerData["deffence"] = 0
        $("h3").css("color", "black");
        document.getElementById('card_a').src = 'img/mikata8.png';
    } else if (result8 === 9){
        playerData["name"] = "ラッコ"
        playerData["hp"] = 30
        playerData["attack"] = 3
        playerData["deffence"] = 0
        $("h3").css("color", "black");
        document.getElementById('card_a').src = 'img/mikata9.png';
    } else {
        playerData["name"] = "ちいかわ"
        playerData["hp"] = 30
        playerData["attack"] = 3
        playerData["deffence"] = 0
        $("h3").css("color", "black");
        document.getElementById('card_a').src = 'img/mikata0.png';
    }
    insertText("playerName", playerData["name"])
    insertText("currentPlayerHp", playerData["hp"])
    insertText("maxPlayerHp", playerData["hp"])
}

// スキャナー
$(".inline").on("click", function () {

    startScanner();

});

const startScanner = () => {
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#photo-area'),
            constraints: {
                decodeBarCodeRate: 3,
                successTimeout: 500,
                codeRepetition: true,
                tryVertical: true,
                frameRate: 15,
                width: 640,
                height: 480,
                facingMode: "environment"
            },
        },
        decoder: {
            readers: [
                "i2of5_reader"
            ]
        },

    }, function (err) {
        if (err) {
            console.log(err);
            return
        }

        console.log("Initialization finished. Ready to start");
        Quagga.start();

        // Set flag to is running
        _scannerIsRunning = true;
    });

    Quagga.onProcessed(function (result) {
        var drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, {
                        x: 0,
                        y: 1
                    }, drawingCtx, {
                        color: "green",
                        lineWidth: 2
                    });
                });
            }

            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, {
                    x: 0,
                    y: 1
                }, drawingCtx, {
                    color: "#00F",
                    lineWidth: 2
                });
            }

            if (result.codeResult && result.codeResult.code) {
                Quagga.ImageDebug.drawPath(result.line, {
                    x: 'x',
                    y: 'y'
                }, drawingCtx, {
                    color: 'red',
                    lineWidth: 3
                });
            }
        }
    });

    //計算結果の変数代入
    Quagga.onDetected(function (result) {
        code = result.codeResult.code
        console.log(result.codeResult.code);
        console.log(code);
        $("h1").text(code);


        // カメラ停止
        console.log("stop");
        Quagga.stop();

        document.getElementsByClassName("inline").classList.add("deactive")
        document.getElementsByClassName("start").classList.remove("deactive")
    })
}

console.log(code)



// 勝負ボタン後の挙動
// $('.fight').modaal({
// 	before_open: teki,
//     animation_speed: "2000",
//     after_open: kekka
// });

const displayChange1 = document.getElementById("prepalation");
const displayChange2 = document.getElementById("battle");


$(".start").on("click", function teki() {

    // enemyの生成


            console.log(weatherType);
            var rondom = "敵の数字"

            // 天気に応じて乱数を発生させる
            if (weatherType === "Clear") {
                random = Math.floor(Math.random()*7);
                console.log(random, "晴れの日ランダム数字")
            } else if (weatherType === "Rain") {
                random = Math.floor(Math.random()*7 + 2);
                console.log(random, "雨の日ランダム数字")
            } else if (weatherType === "Clouds") {
                random = Math.floor(Math.random()*9);
                console.log(random, "曇りの日ランダム数字")
            } else if (weatherType === "Snow") {
                random = Math.floor(Math.random()*5 + 4);
                console.log(random, "雪の日ランダム数字")
            } else {
                random = Math.floor(Math.random()*9);
                console.log(random, "その他の日ランダム数字")
            }
            console.log(weatherType);
            console.log(random);

            
            if (random === 1){
                enemyData["name"] = "たまごボーロ"
                enemyData["hp"] = 30
                enemyData["attack"] = 3
                enemyData["deffence"] = 0
                $("h2").css("color", "White");
                document.getElementById('card_b').src = 'img/teki1.png';
            } else if (random === 2) {
                enemyData["name"] = "ありじごく"
                enemyData["hp"] = 30
                enemyData["attack"] = 3
                enemyData["deffence"] = 0
                $("h2").css("color", "White");
                document.getElementById('card_b').src = 'img/teki2.png';
            } else if (random === 3){
                enemyData["name"] = "アミアブラ"
                enemyData["hp"] = 30
                enemyData["attack"] = 3
                enemyData["deffence"] = 0
                $("h2").css("color", "White");
                document.getElementById('card_b').src = 'img/teki3.png';
            } else if (random === 4){
                enemyData["name"] = "きめら"
                enemyData["hp"] = 30
                enemyData["attack"] = 3
                enemyData["deffence"] = 0
                $("h2").css("color", "White");
                document.getElementById('card_b').src = 'img/teki4.png';
            } else if (random === 5){
                enemyData["name"] = "とり"
                enemyData["hp"] = 30
                enemyData["attack"] = 3
                enemyData["deffence"] = 0
                $("h2").css("color", "White");
                document.getElementById('card_b').src = 'img/teki5.png';
            } else if (random === 6){
                enemyData["name"] = "なんだって"
                enemyData["hp"] = 30
                enemyData["attack"] = 3
                enemyData["deffence"] = 0
                $("h2").css("color", "White");
                document.getElementById('card_b').src = 'img/teki6.png';
            } else if (random === 7){
                enemyData["name"] = "大型きめら"
                enemyData["hp"] = 30
                enemyData["attack"] = 3
                enemyData["deffence"] = 0
                $("h2").css("color", "White");
                document.getElementById('card_b').src = 'img/teki7.png';
            } else if (random === 8){
                enemyData["name"] = "わしの力じゃ"
                enemyData["hp"] = 30
                enemyData["attack"] = 3
                enemyData["deffence"] = 0
                $("h2").css("color", "White");
                document.getElementById('card_b').src = 'img/teki8.png';
            } else if (random === 9){
                enemyData["name"] = "カブト王"
                enemyData["hp"] = 30
                enemyData["attack"] = 3
                enemyData["deffence"] = 0
                $("h2").css("color", "White");
                document.getElementById('card_b').src = 'img/teki9.png';
            } else {
                enemyData["name"] = "ゴブリン"
                enemyData["hp"] = 30
                enemyData["attack"] = 3
                enemyData["deffence"] = 0
                $("h2").css("color", "White");
                document.getElementById('card_b').src = 'img/teki0.png';
            }
            insertText("enemyName", enemyData["name"])
            insertText("currentEnemyHp", enemyData["hp"])
            insertText("maxEnemyHp", enemyData["hp"])

            if(getComputedStyle(prepalation).display == "none"){
                displayChange1.style.display = "block";
            } else {
                displayChange1.style.display = "none";
            }


            if(getComputedStyle(battle).display == "none"){
                displayChange2.style.display = "block";
            } else {
                displayChange2.style.display = "none";
            }


        })



        
        function insertText(id, text) {
            document.getElementById(id).textContent = text;
        }
        
        function damageCalculation(attack, deffence) {
            const maxDamage = attack * (1 + damageRange);
            const minDamage = attack * (1 - damageRange);
            const attackDamage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
        
            const damage = attackDamage - deffence;
        
            if (damage < 1) {
                return 0
            } else {
                return damage;
            }
        }
        
        
        insertText("playerName", playerData["name"])
        insertText("currentPlayerHp", playerData["hp"])
        insertText("maxPlayerHp", playerData["hp"])
        
        insertText("enemyName", enemyData["name"])
        insertText("currentEnemyHp", enemyData["hp"])
        insertText("maxEnemyHp", enemyData["hp"])
        
        document.getElementById("attack").addEventListener("click", function() {
            let endGame = false;
        
            const playerDamage = damageCalculation(playerData["attack"], enemyData["deffence"]);
            const enemyDamage = damageCalculation(enemyData["attack"], playerData["deffence"]);
        
            enemyData["hp"] -= playerDamage /* =の左に-を置く→左の変数を、左の変数-右側の数値で再定義*/
            playerData["hp"] -= enemyDamage
        
            insertText("currentEnemyHp", enemyData["hp"])
            insertText("currentPlayerHp", playerData["hp"])
        
            if (enemyData["hp"] <= 0) {
                alert("勝利")
                endGame = true;
        
                enemyData["hp"] = 0;
                insertText("currentEnemyHp", enemyData["hp"])
        
            } else if (playerData["hp"] <= 0){
                alert("敗北")
                endGame = true;
        
                playerData["hp"] = 0;
                insertText("currentPlayerHp", playerData["hp"])
        
            }
        
            if (endGame) {
            this.classList.add("deactive");    /* this は現在のイベント発生の要素= document.getElementById("attack")*/
            }
        })
        


















    // 勝敗判定関数
    function kekka() {
        if(result8 > random){
            $("h4").text("勝ち");
            document.getElementById('battle_result').src = 'img/kachi.png';
        } else if(result8 < random){
            $("h4").text("負け");
            document.getElementById('battle_result').src = 'img/make.png';
        } else {
            $("h4").text("あいこ");
            document.getElementById('battle_result').src = 'img/aiko.png';
        }
    }









