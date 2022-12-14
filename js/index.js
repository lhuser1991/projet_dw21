(function() { 
    // on cible l'objet header
    let objNav = document.querySelector("header");
    // on mémorise la position de nav
    let memoPositionNav = objNav.offsetTop;
    function sticky(){
      // position du curseur au scroll
      var posCurseur = this.pageYOffset;
      // je teste la différence de distance entre le scroll et nav
      if(memoPositionNav-posCurseur<1){
        objNav.style.position = "fixed";
        objNav.style.top = 0;
        objNav.style.zIndex = 999;
        objNav.style.width = "100%";
      }
      if(posCurseur<10){
        objNav.style.position = "relative";
      }
    }
    // evenement
    window.addEventListener("scroll", sticky);
  })()