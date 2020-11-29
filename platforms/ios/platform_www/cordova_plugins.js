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
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
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
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-device": "2.0.2",
  "cordova-sqlite-storage": "5.1.0",
  "cordova-android-support-gradle-release": "3.0.1",
  "cordova-mapp-plugin": "0.0.1"
};
// BOTTOM OF METADATA
});