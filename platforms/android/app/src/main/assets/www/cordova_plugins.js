cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-mapp-plugin.MappPlugin",
      "file": "plugins/cordova-mapp-plugin/www/MappPlugin.js",
      "pluginId": "cordova-mapp-plugin",
      "clobbers": [
        "MappPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-androidx": "1.0.2",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-android-support-gradle-release": "3.0.1",
    "cordova-mapp-plugin": "0.0.1"
  };
});