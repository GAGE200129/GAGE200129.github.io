
export let mqtt_temperature = 0;
export let mqtt_humidity = 0;
export let mqtt_luminance = 0;

export function kich_hoat_mqtt() {
    // Kich hoat mqtt
    const options = {
        clean: true,
        connectTimeout: 4000,
        clientId: 'gage',
        username: 'nhom2iot',
        password: 'topserver',
        host: "nhom2iot.ddns.net",
        port: 8083
    }

    const client = mqtt.connect(options)
    client.on('connect', function () {
        console.log('Mqtt Connected');
        client.subscribe("home/light_value", (err) => {
            if (err) {
                console.error('Subscription error: ', err);
            } else {
                console.log('Subscribed to home/light_value topic');
            }
        });

        client.subscribe("home/humidity", (err) => {
            if (err) {
                console.error('Subscription error: ', err);
            } else {
                console.log('Subscribed to home/humidity topic');
            }
        });

        client.subscribe("home/temperature", (err) => {
            if (err) {
                console.error('Subscription error: ', err);
            } else {
                console.log('Subscribed to home/temperature topic');
            }
        });


    });

    // Receive messages
    client.on('message', function (topic, message) {
        switch (topic) {
            case "home/temperature":
                mqtt_temperature = parseFloat(message);
                break;

            case "home/humidity":
                mqtt_humidity = parseFloat(message);
                break;

            case "home/light_value":
                mqtt_luminance = parseInt(message);
                break;
        }
    });

    // Error handling
    client.on('error', (err) => {
        console.error('Connection error: ', err);
    });

    //Register callbacks for control buttons
    
    return client;
}
