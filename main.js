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

let scrollBtn=document.querySelector(".scroll");

window.onscroll=function (){
  if(pageYOffset >= 150){
    
    scrollBtn.style.opacity="100%";
    scrollBtn.style.pointerEvents="auto";
  }else{
 scrollBtn.style.opacity="0%";
    scrollBtn.style.pointerEvents="none";
  } 
}
scrollBtn.onclick=function(){

  scrollTo(0,0);
}