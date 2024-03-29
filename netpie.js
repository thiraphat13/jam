var c = 0;
var E_coutt = 0;
client = new Paho.MQTT.Client("mqtt.netpie.io", 443, "ec159352-d771-4019-9718-8a5fe6656937");
client.onMessageArrived = onMessageArrived;

var options = {
    useSSL: true,
    userName : "KcZrVsDNGzXD4tkZGErVqm5rBhWMqWmM",
    password : "2wn1nXNEyTPKAEHtpE6QpYe3ZXiVkXhb",  
    onSuccess: onConnect,
    onFailure:doFail,
}
     
client.connect(options);

function onConnect() {
    client.subscribe("@msg/open");
    client.subscribe("@msg/engine");
    client.subscribe("@msg/startTime");
    client.subscribe("@msg/D_Time");
    client.subscribe("@msg/E_cout");
}

function doFail(e){
    document.getElementById("status").className = "offline";
    document.getElementById("status").innerHTML = e;
  }

function onMessageArrived(message) {
    if (message.destinationName=="@msg/open") {
        document.getElementById("h_cout").innerHTML = message.payloadString;
    }
    if (message.destinationName=="@msg/E_cout") {
        E_coutt =+ 1;
        document.getElementById("c_cout").innerHTML = E_coutt;
    }
}

// function publishMessage() {
//     message = new Paho.MQTT.Message(msg_name);
//     message.destinationName = "@msg/eng";
//     client.send(message);
// }

function engine() {
    message = new Paho.MQTT.Message("open");
    message.destinationName = "@msg/engine";
    client.send(message);
}

function removetime(t) {
    document.getElementById(t).parentNode.removeChild(document.getElementById(t));

    message = new Paho.MQTT.Message(t);
    message.destinationName = "@msg/D_Time";
    client.send(message);
}

function addTime() {
    startTime = document.getElementById("startTime").value;
    document.getElementById("show").innerHTML += `<div id=`+startTime+`><button class="d_but" onclick="removetime('`+startTime+`')">ลบ</button> `+startTime+`</div>`;
    document.getElementById("show").scrollTop = document.getElementById("show").scrollHeight;

    message = new Paho.MQTT.Message(startTime);
    message.destinationName = "@msg/startTime";
    client.send(message);
}

function pop(texta) {
    if (c == 0) {
        document.getElementById("tt").innerHTML = texta;
        document.getElementById("pop").style.display = "block";
        c = 1;
    } else {
        document.getElementById("pop").style.display = "none";
        c = 0;
    }
}