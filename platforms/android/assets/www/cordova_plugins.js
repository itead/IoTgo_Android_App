cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.knowledgecode.cordova.websocket/www/websocket.js",
        "id": "com.knowledgecode.cordova.websocket.websocket",
        "clobbers": [
            "WebSocket"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.knowledgecode.cordova.websocket": "0.8.0"
}
// BOTTOM OF METADATA
});