fetch("a.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) 
{
    let con1 = document.getElementById("education");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = "<h3>" + data[i].date + ': ' + data[i].title + "</h3>";
        con1.appendChild(div);
    }
};

fetch("b.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData1(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData1(data) 
{
    let con2 = document.getElementById("work-exp");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = "<h3>" + data[i].date + ': ' + data[i].title + "</h3>" + "</br>" + data[i].paragraph;
        con2.appendChild(div);
    }
};





