var realFileBtn = document.getElementById("file_button");
var realReqBtn = document.getElementById("submitRequests");
var customTxt = document.getElementById("no_file");
var requestTxt = document.getElementById("request-text");
var fs = require('fs');
var path = require('path');


realReqBtn.addEventListener("click", function () {
    document.getElementById("car_type").value = "";
    document.getElementById("car_model").value = "";
    document.getElementById("address").value = "";
    document.getElementById("radius").value = "";

    requestTxt.innerHTML = "Request Sending...";

    setTimeout(function () {
        requestTxt.innerHTML = "Request Sent";
    }, 3000);

});

realFileBtn.addEventListener("click", function () {
    if (realFileBtn.value) {
        customTxt.innerHTML = "Upload successful!";

        const thePath = path.join(document.getElementById('file_button').files[0].path);
        const newPath = path.join(__dirname, '/uploads/test.mp4');
        fs.copyFile(thePath, newPath, function (err) {
            if (err)
                throw err;
            console.log('Move complete.');
        });
        document.getElementById('video').setAttribute('src', '/uploads/test.mp4');
        document.getElementById('video').load();
        document.getElementById('video').play();
    } else {
        customTxt.innerHTML = "No file chosen.";
    }

});
