var partie="";
var joueur1="";
var joueur2="";
var gagnant="";
var tour=true;
var compteur=0;
var croix= "/morpion/Images/croix.png";
var rond= "/morpion/Images/rond.png";
var tableau=new Array();
tableau[0]=new Array();
tableau[1]=new Array();
tableau[2]=new Array();

function clickHome(){
  partie = document.getElementById("partie").value;
  joueur1 = document.getElementById("joueur1").value;
  joueur2 = document.getElementById("joueur2").value;
  localStorage.setItem("partie",partie);
  localStorage.setItem("joueur1",joueur1);
  localStorage.setItem("joueur2",joueur2);
  window.location.href = "/morpion/Jeu2.html";
}

function clickRes(){
  window.location.href = "/morpion/acceuil2.html";
}

function jouer(cas,n){
  console.log(cas.src);
  if(tour && cas.src=="http://192.168.1.69/morpion/Images/blanc.png"){
    cas.src=croix;
    tour=false;
    document.getElementById("joueur").innerHTML=localStorage.getItem("joueur2");
    if(n==1){
      tableau[0][0]="x";
    }
    else if(n==2){
      tableau[0][1]="x";
    }
    else if(n==3){
      tableau[0][2]="x";
    }
    else if(n==4){
      tableau[1][0]="x";
    }
    else if(n==5){
      tableau[1][1]="x";
    }
    else if(n==6){
      tableau[1][2]="x";
    }
    else if(n==7){
      tableau[2][0]="x";
    }
    else if(n==8){
      tableau[2][1]="x";
    }
    else if(n==9){
      tableau[2][2]="x";
    }
    compteur++;
    resultat();
  }
  else if(cas.src=="http://192.168.1.69/morpion/Images/blanc.png"){
    cas.src=rond;
    tour=true;
    document.getElementById("joueur").innerHTML=localStorage.getItem("joueur1");
    if(n==1){
      tableau[0][0]="o";
    }
    else if(n==2){
      tableau[0][1]="o";
    }
    else if(n==3){
      tableau[0][2]="o";
    }
    else if(n==4){
      tableau[1][0]="o";
    }
    else if(n==5){
      tableau[1][1]="o";
    }
    else if(n==6){
      tableau[1][2]="o";
    }
    else if(n==7){
      tableau[2][0]="o";
    }
    else if(n==8){
      tableau[2][1]="o";
    }
    else if(n==9){
      tableau[2][2]="o";
    }
    compteur++;
    resultat();
  }
  console.log(tableau);
}

function resultat(){
  var cas1 ="";
  var cas2 ="";
  var cas3 ="";
  var cas4 ="";
  var cas5 ="";
  var cas6 ="";
  var cas7 ="";
  var cas8 ="";
  cas1=tableau[0][0]+tableau[0][1]+tableau[0][2];
  cas2=tableau[1][0]+tableau[1][1]+tableau[1][2];
  cas3=tableau[2][0]+tableau[2][1]+tableau[2][2];
  cas4=tableau[0][0]+tableau[1][0]+tableau[2][0];
  cas5=tableau[0][1]+tableau[1][1]+tableau[2][1];
  cas6=tableau[0][2]+tableau[1][2]+tableau[2][2];
  cas7=tableau[0][0]+tableau[1][1]+tableau[2][2];
  cas8=tableau[0][2]+tableau[1][1]+tableau[2][0];
  if (cas1=="xxx"||cas2=="xxx"||cas3=="xxx"||cas4=="xxx"||cas5=="xxx"||cas6=="xxx"||cas7=="xxx"||cas8=="xxx"){
    console.log(joueur1);
    localStorage.setItem("gagnant",localStorage.getItem("joueur1"));
    window.location.href = "/morpion/resultat2.html";
  }
  else if (cas1=="ooo"||cas2=="ooo"||cas3=="ooo"||cas4=="ooo"||cas5=="ooo"||cas6=="ooo"||cas7=="ooo"||cas8=="ooo"){
    localStorage.setItem("gagnant",localStorage.getItem("joueur2"));
    window.location.href = "/morpion/resultat2.html";
  }
  else if (compteur==9){
    localStorage.setItem("gagnant","Match nul!");
    window.location.href = "/morpion/resultat2.html";
  }

}

function initJeu(){
  document.getElementById("partien").innerHTML=localStorage.getItem("partie");
  document.getElementById("joueur").innerHTML=localStorage.getItem("joueur1");
}
function initRes(){
  console.log(localStorage.getItem("gagnant"));
  document.getElementById("res").innerHTML=localStorage.getItem("gagnant");
}

