const contenu = document.querySelector(".input-box");
const liste = document.querySelector(".list-container");

function ajouter() {
    if (contenu.value === ""){
        alert("Entrer une valeur!");
    }else{
        let li = document.createElement('li');
        li.innerHTML = contenu.value;
        liste.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    contenu.value = "";
    sauvegarder();

}


liste.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        sauvegarder();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        sauvegarder();
    }
},false);


function sauvegarder(){
    localStorage.setItem("data", liste.innerHTML);
}

function afficherTaches(){
    liste.innerHTML = localStorage.getItem("data");
}
afficherTaches();