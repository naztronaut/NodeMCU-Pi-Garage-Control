let config = {
    mqttHost: "MQTT Host here",
    mqttPort: 1884, // 1884 is default, change to whichever you like
    mqttUser: "MQTT user here",
    mqttPass: "MQTT password here!"
};

$(document).ready(function() {

    /**
     * Garage Door
     * Uses ESP8266 modules - NodeMCU to be exact
     * @type {*|AudioNode|void|*}
     */

    let client = mqtt.connect({servers : [{ host: config.mqttHost, port: config.mqttPort}], username : config.mqttUser, password: config.mqttPass});
    client.subscribe(['garage/temperature', 'garage/humidity']);
    client.on("message", function (topic, payload) {
        let resp = JSON.parse(payload.toString());
        console.log(topic);
        if (topic == "garage/temperature") {
            handleGarageTemperature(resp);
        } else if (topic == "garage/humidity") {
            handleGarageHumidity(resp);
        }
    });

    function handleGarageTemperature(temperature) {
        console.log("temperature is: " + temperature + "\u00B0F");
        $("#temperature").text(temperature);
    }

    function handleGarageHumidity(humidity) {
        console.log("Humidity is: " + humidity + "%");
        $("#humidity").text(humidity);
    }

    $("#garageButton").off().on('click', function (e) {
       console.log('clicked');
       client.publish("garageDoor/trigger");
    });
});