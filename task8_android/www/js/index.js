/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * ''License''); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * ''AS IS'' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var score=0;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('info-button').onclick = this.openInfo;
        document.getElementById('close-info').onclick = this.closeInfo;
        document.getElementById('start-game').onclick = this.showGame;
        document.getElementById('starbtn').onclick = this.gameInit;
        document.getElementById('enter-sentence').onclick = this.checkAnswer;
    },
    openInfo: function () {
        document.getElementById('info-box').setAttribute('style', 'display:block;');
        document.getElementById('menu-wrapper').setAttribute('style', 'display:none;');
        app.shuffleText();
    },
    closeInfo: function () {
        document.getElementById('info-box').setAttribute('style', 'display:none;');
        document.getElementById('menu-wrapper').setAttribute('style', 'display:block;');
        app.shuffleText();
    },
    showGame: function () {
        document.getElementById('menu-wrapper').setAttribute('style', 'display:none;');
        document.getElementById('game-wrapper').setAttribute('style', 'display:block;');
    },
    timer: function() {
        var seconds,
            temp;

        seconds = document.getElementById('txt').innerHTML;
        seconds = parseInt(seconds, 10);

        if (seconds == 1) {
            temp = document.getElementById('txt');
            alert('GAME OVER!');
            app.saveData();
            app.loadData();
            window.location.reload();
        }

        seconds--;
        temp = document.getElementById('txt');
        temp.innerHTML = seconds;
        timeoutMyOswego = setTimeout(function() { app.timer(); }, 1000);
    },
    gameInit: function() {
        document.getElementById('starbtn').setAttribute('style', 'display:none;');
        document.getElementById('ingame').setAttribute('style', 'display:block;');
        app.timer();
        app.shuffleText();
    },
    scramble: function (str) {
        var scrambled = '',
        randomNum;

        while (str.length > 1) {
            randomNum = Math.floor(Math.random() * str.length);
            scrambled += str.charAt(randomNum);
            if (randomNum == 0) {
                str = str.substr(randomNum + 1);
            }
            else if (randomNum == (str.length - 1)) {
                str = str.substring(0, str.length - 1);
            }
            else {
                str = str.substring(0, randomNum) + str.substring(randomNum + 1);
            }
        }
        scrambled += str;
        return scrambled;
    },

    shuffleText: function (){
        var string = 'GET TO THE CHOPPAH',
        res = string.split(' '),
        word = '',
        sentence = '',
        textoutput = '';

        for (var i = 0; i < res.length; i++) {
            word = app.scramble(res[i]);
            sentence = word + " ";
            textoutput += sentence;
        }
        document.getElementById('sentence').innerHTML = textoutput;
    },
    checkAnswer: function() {
        var string = 'GET TO THE CHOPPAH';
        var checkThisString = string.toLowerCase();
        console.log(checkThisString);
        var userEntry = document.getElementById('answer').value.toLowerCase();
        console.log(userEntry);

        if ( userEntry == checkThisString ) {
            alert('VOILA, YOU GOT IT!');
            score++;
        } else {
            alert('YOU NOOB, TRY AGAIN!');
            document.getElementById('inner-game').setAttribute('style', 'display:none;');
        }


    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.getElementById('loading').setAttribute('style', 'display:none;');
        document.getElementById('game').setAttribute('style', 'display:block;');
    }
    loadData : function() {
      var text = "Player: "+sessionStorage.getItem('player')+"</br>\n";
      text += "Score: "+sessionStorage.getItem('score')+"</br>\n";
      document.getElementById('text').innerHTML = text;
    },

    // Handle button click
    saveData : function() {
      // Save name to local storage
      sessionStorage.setItem('player1', document.getElementById('player').value);
      // Save age to session storage
      sessionStorage.setItem('score', document.getElementById('score').value);
      app.loadData();
    }
};

app.initialize();
