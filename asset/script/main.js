i = 1;

function plus(c) {
    document.getElementById('imgS'+i).style.display = "none";
    i = i+c;
    if (i>3) {i=1};
    if (i<1) {i=3};
    document.getElementById('imgS'+i).style.display = "block";
}

function show(d) {
    document.getElementById('imgS'+i).style.display = "none";
    i=d;
    document.getElementById('imgS'+i).style.display = "block"
}
