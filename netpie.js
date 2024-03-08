var c = 0;

function removetime(t) {
    document.getElementById(t).parentNode.removeChild(document.getElementById(t));
}

function addTime() {
    startTime = document.getElementById("startTime").value;
    stopTime = document.getElementById("stopTime").value;
    if (startTime>stopTime) {
        pop("การระบุเวลาผิดพลาด");
    } else {
        document.getElementById("show").innerHTML += `<div id="time`+startTime+`"><button class="d_but" onclick="removetime('time`+startTime+`')">ลบ</button> `+startTime+` - `+stopTime+`</div>`;
        document.getElementById("show").scrollTop = document.getElementById("show").scrollHeight;
    }
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