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
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        document.addEventListener("resume", onResume, false);
        app.receivedEvent('deviceready');
        console.log('Received Event: ' + id);
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

/* Example of Appoxee Plugin method implementation */

function onResume() {

    /*
     * When application resumes, we will fetch the last push payload.
     * We recommend parsing the payload, and performing any deep-linking or navigation actions according to the payload.
     */
    MappPlugin.getLastPushPayload(function (json) {

        var jsonString = JSON.stringify(json);

        if (jsonString && jsonString.length > 2) {

            alert("Last Push Payload: " + jsonString);
        }
    });
}

/* Initialization */

function engage() {

    /*
     *
     * Please make sure to provide your own SDK key and App Secret.
     *
     * In order to check the platfrom, we are using cordova-plugin-device from https://github.com/apache/cordova-plugin-device
     *
     */

    if (device.platform == "iOS") {

        // No need to engage.
        // Engaging is performed under the hood, by supplying the AppoxeeConfig.plist file.

    } else {

        MappPlugin.engage("5fb62966c631d5.78907078",
            "1028993954364",
            "TEST",
            "264072",
            "33",
            function (json) {
                alert(JSON.stringify(json)); // Note, used for debugging.
            },
            function (json) {
                alert(JSON.stringify(json)); // Note, used for debugging.
            });

    }
}

/* Alias */

function setDeviceAlias() {

    /*
     *
     * Please make sure to provide your own logic based alias value.
     *
     */

    MappPlugin.setDeviceAlias("mika@mikic.com",
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function setDeviceAlias2() {

    /*
     *
     * Please make sure to provide your own logic based alias value.
     *
     */

    MappPlugin.setDeviceAlias("zika@zikic.com",
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function getAlias() {


    MappPlugin.getAlias(function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}


function removeDeviceAlias() {

    MappPlugin.removeDeviceAlias("", function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

/* Device API */

function deviceInformation() {

    MappPlugin.deviceInformation(function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

/* Inbox API */

function getRichMessages() {

    MappPlugin.getRichMessages(function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function deleteRichMessage() {

    /*
     *
     * Please make sure provide a Rich message ID, which you want to delete.
     * Message ID's can be retrieved in AppoxeePlugin.refreshInbox()
     *
     */

    MappPlugin.deleteRichMessage("0",
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function refreshInbox() {

    MappPlugin.refreshInbox(function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}


/* Tags API */

function addTagsToDeviceAndRemove() {

    /*
     *
     * Please make sure to provide your own relevant tags as device tags.
     * To know which tags are available for your app call AppoxeePlugin.fetchApplicationTags() and AppoxeePlugin.fetchDeviceTags()
     *
     */

    MappPlugin.addTagsToDeviceAndRemove(["Cordova1", "Cordova2", "Cordova3"],
        [" "],
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function removeTagsFromDevice() {

    /*
     *
     * Please make sure to provide your own relevant tags as device tags.
     * To know which tags are available for your app call AppoxeePlugin.fetchDeviceTags()
     *
     */

    MappPlugin.removeTagsFromDevice(["Cordova1", "Cordova2", "Cordova3"],
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function addTagsToDevice() {

    /*
     *
     * Please make sure to provide your own relevant tags as device tags.
     * To know which tags are available for your app call AppoxeePlugin.fetchApplicationTags() and AppoxeePlugin.fetchDeviceTags()
     *
     */

    MappPlugin.addTagsToDevice(["Cordova1", "Cordova2", "Cordova3"],
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function fetchDeviceTags() {

    MappPlugin.fetchDeviceTags(function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function fetchApplicationTags() {

    MappPlugin.fetchApplicationTags(function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}


/* Push API */

function isPushEnabled() {

    MappPlugin.isPushEnabled(function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function disablePushNotifications() {

    /*
     *
     * Please make sure to provide your own relevant 'soft' opting out state.
     *
     */

    MappPlugin.disablePushNotifications("true",
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function enablePushNotifications() {

    /*
     *
     * Please make sure to provide your own relevant 'soft' opting out state.
     *
     */

    MappPlugin.disablePushNotifications("false",
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function showNotificationOnForeground() {

    MappPlugin.showNotificationsOnForeground("true",
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}


/* Custom Fields API */

function setDateField() {

    /*
     *
     * Please make sure to provide your own relevant key and Date value.
     *
     */

    MappPlugin.setDateField("CustomDate1",
        "2015-03-21 12:12:12",
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function setNumericField() {

    /*
     *
     * Please make sure to provide your own relevant key and Numeric value.
     *
     */

    MappPlugin.setNumericField("CustomNumeric1",
        "10001",
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}


function setStringField() {

    /*
     *
     * Please make sure to provide your own relevant key and String value.
     *
     */

    MappPlugin.setStringField("CustomString1",
        "Kapara is Awesome",
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function fetchCustomFieldByKey() {

    /*
     *
     * Please make sure to provide your own relevant key.
     *
     */

    MappPlugin.fetchCustomFieldByKey("CustomNumeric1",
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}


function setApplicationBadgeToZero() {

    MappPlugin.setApplicationBadgeNumber("0",
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}


function getLastPushPayload() {

    /*
     * Please make sure your code handles the push payload upon successful fetch
     */

    MappPlugin.getLastPushPayload(function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}


function fetchInboxMessages() {
    MappPlugin.fetchInboxMessages(function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function fireInAppEvent() {
        MappPlugin.fireInAppEvent("app_open",
            function (json) {
                alert(JSON.stringify(json));
            },
            function (json) {
                alert(JSON.stringify(json));
            });
    }

function lockScreenOrientation() {


    MappPlugin.lockScreenOrientation(1,
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

//Android only
function onActionListener() {


    MappPlugin.onActionListener(
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}


//Android only
function setOnPushMessageListener() {


    MappPlugin.setOnPushMessageListener(
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function removeBadgeNumber() {


    MappPlugin.removeBadgeNumber(
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function startGeoLocation() {


    MappPlugin.startGeo(
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}

function stopGeoLocation() {


    MappPlugin.stopGeo(
        function (json) {
            alert(JSON.stringify(json));
        },
        function (json) {
            alert(JSON.stringify(json));
        });
}


