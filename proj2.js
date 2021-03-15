const button = document.querySelector('.cl1');

button.addEventListener('click',Func);

function Func(event){
    event.preventDefault();
    var s = document.getElementById("lab1").value;
    localStorage.clear();
    localStorage.setItem('input',JSON.stringify(s));
    console.log(s);
    newW = window.open("graph.html");
}