let toggler=document.querySelector(".navbar-toggler");

toggler.onclick=function(){
    toggler.classList.toggle("open");

}
//_________scrollAnimes_________

function scrollAnime(parent , scrolled){
   onscroll=function(){
     if(scrollY>=parent.offsetTop-2300){
      for(let i=0;i<scrolled.length;i++){
      
         scrolled[i].style.transform="translateX(0px)";
     
      }
    }
   }
}
//__________________

