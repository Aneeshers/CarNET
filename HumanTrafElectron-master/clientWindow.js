var make;
var model;
var year;
var type;
carDATA = [
    {
        make: "Honda",
        model: "Civic",
        year: "2005",
        type: "Sedan",
    },
    {
        make: "BMW",
        model: "X5",
        year: "2019",
        type: "SUV",
    },
    {
        make: "Toyota",
        model: "Camry",
        year: "2015",
        type: "Sedan",
    }
];

rowDATA = [
    {
        agency: "FBI",
        date: "03/28/20",
        timeframe: "6pm - 8pm",
    },
    {
        agency: "NSA",
        date: "03/24/20",
        timeframe: "5pm - 8pm",
    },
    {
        agency: "NYPD",
        date: "03/31/20",
        timeframe: "7pm - 8pm",
    }
];

function addRow(agency, date, timeframe, i) {
   /* console.log("123");
    var bound = document.getElementById('rows');
    var newRow = document.createElement('tr');
    newRow.id = "extraRow";
    bound.appendChild(newRow);
    var agencycell = document.createElement('td');
    agencycell.classList.add("agencycolum");
    var datecell = document.createElement('td');
    datecell.classList.add("datecolum");
    var timeframecell = document.createElement('td');
    timeframecell.classList.add("timecolum");
    var upload = document.createElement('button');
    agencycell.innerHTML = agency;
    datecell.innerText = date;
    timeframecell.innerText = timeframe;
    var uploadcell = document.createElement('td');
    uploadcell.classList.add("uploadbuttons");
    uploadcell.innerHTML = upload;
    upload.onclick = "";
    upload.innerText = "Upload";
    */
    var table = document.getElementById("clientInbox");
    var newRow = table.insertRow(table.length);
    var agencycell = newRow.insertCell(0);
    var datecell = newRow.insertCell(1);
    var timeframecell = newRow.insertCell(2);
    var buttoncell = newRow.insertCell(3);
    var btn = document.createElement('input');
    btn.type = "button";
    btn.className = "btn";
    btn.id = i;
    btn.value = "Upload";
    console.log("123");
    //btn.setAttribute('onclick', "make = carDATA[i]['make']; model = carDATA[i]['model']; year = carDATA[i]['year']; type = carDATA[i]['type']; window.location.href = './input.html'");
    console.log(make);
    buttoncell.appendChild(btn);
    agencycell.innerHTML = agency;
    datecell.innerText = date;
    timeframecell.innerText = timeframe;

}

    for (i = 0; i < rowDATA.length; i++) {
        addRow(rowDATA[i]['agency'], rowDATA[i]['date'], rowDATA[i]['timeframe'], i);

};
var testbutton0 = document.getElementById(0);
var testbutton1 = document.getElementById(1);
var testbutton2 = document.getElementById(2);
testbutton0.addEventListener("click", function () {
    console.log("123");
        make = carDATA[0]['make'];
        model = carDATA[0]['model'];
        year = carDATA[0]['year'];
        type = carDATA[0]['type'];
        window.location.href = './input.html';
    });
testbutton1.addEventListener("click", function () {
    make = carDATA[1]['make'];
    model = carDATA[1]['model'];
    year = carDATA[1]['year'];
    type = carDATA[1]['type'];
    window.location.href = './input.html';
});
testbutton2.addEventListener("click", function () {
    make = carDATA[2]['make'];
    model = carDATA[2]['model'];
    year = carDATA[2]['year'];
    type = carDATA[2]['type'];
    window.location.href = './input.html';
});
