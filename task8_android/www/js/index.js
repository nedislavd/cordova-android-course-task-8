/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
        document.getElementById('starbtn').onclick = this.timer;
    },
    openInfo: function () {
        document.getElementById('info-box').setAttribute('style', 'display:block;');
        document.getElementById('menu-wrapper').setAttribute('style', 'display:none;');
    },
    closeInfo: function () {
        document.getElementById('info-box').setAttribute('style', 'display:none;');
        document.getElementById('menu-wrapper').setAttribute('style', 'display:block;');
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
            temp.innerHTML = "BooM";
            return;
        }

        seconds--;
        temp = document.getElementById('txt');
        temp.innerHTML = seconds;
        timeoutMyOswego = setTimeout(function() { app.timer(); }, 1000);
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
};

app.initialize();