
window.onload=function(){

let sultan=document.getElementById('sultan');
let royal=document.getElementById('royal');
let pataja=document.getElementById('pataja');
let cambodia=document.getElementById('cambodia');

sultan.addEventListener("click", function() {
  //  royal.removeEventListener();
   // royal_map.style.backgroundColor="green";   
  // royal_map.style.border="1px solid green";
  // royal_map.style.visibility='visible';
   var elem = document.createElement("div");
   elem.style.width="450px";
   elem.style.height="200px";
   elem.innerHTML =  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.60251705571!2d34.37819021548548!3d27.94482822162122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145349cddb3d2083%3A0x81aa387c50e40f64!2sSultan%20Gardens%20Resort%20Main%20Building!5e0!3m2!1sru!2sua!4v1606948732995!5m2!1sru!2sua"</iframe>'
  
   document.getElementById("list").appendChild(elem);
  
})
royal.addEventListener("click", function() {

   var elem = document.createElement("div");
   elem.style.width="450px";
   elem.style.height="200px";
   elem.innerHTML =  '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14109.243477409907!2d34.3167293!3d27.8617194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x973d460a49b56cbf!2sRoyal%20Grand%20Sharm%20Resort!5e0!3m2!1sru!2sua!4v1607126963167!5m2!1sru!2sua"</iframe>'
  
   document.getElementById("list_r").appendChild(elem);
  
})
pataja.addEventListener("click", function() {

  var elem = document.createElement("div");
  elem.style.width="450px";
  elem.style.height="200px";
  elem.innerHTML =  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.4252412951087!2d100.86460064994789!3d12.917329723547232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102960fb54aabd1%3A0xa7a8e64731547900!2sHillside%20Resort%20Pattaya!5e0!3m2!1sru!2sua!4v1607128610516!5m2!1sru!2sua"</iframe>'
 
  document.getElementById("list_p").appendChild(elem);
 
})
cambodia.addEventListener("click", function() {

  var elem = document.createElement("div");
  elem.style.width="450px";
  elem.style.height="200px";
  elem.innerHTML =  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.268615480525!2d103.55806091479886!3d10.558140692469873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310809cf3d447329%3A0x97f792c8e2df48e6!2sRen%20Resort!5e0!3m2!1sru!2sua!4v1607129697588!5m2!1sru!2sua" </iframe>'
 
  document.getElementById("list_cam").appendChild(elem);
 
})





let jpg=document.querySelectorAll('img');
let jpg_function=  ['sultan1.jpg','sultan2.jpg','sultan3.jpg','rg1.jpg','rg2.jpg','rg3.jpg', 'p1.jpg','p2.jpg','p3.jpg','cam1.jpg','cam2.jpg','cam3.jpg'] //'example', 'width=300,height=300'),('sultan1.jpg', 'example', 'width=300,height=300')];
console.log(jpg_function[0])
console.log(jpg.length);


  jpg[0].addEventListener("click", function() {

    window.open(jpg_function[0], 'example', 'width=300,height=300');   
    
  })
  
  jpg[1].addEventListener("click", function() {

    window.open(jpg_function[1],'example', 'width=300,height=300');   
    
  })
  
  jpg[2].addEventListener("click", function() {

    window.open(jpg_function[2],'example', 'width=300,height=300');   
    
  })

  jpg[3].addEventListener("click", function() {

    window.open(jpg_function[3], 'example', 'width=300,height=300');   
    
  })
  
  jpg[4].addEventListener("click", function() {

    window.open(jpg_function[4],'example', 'width=300,height=300');   
    
  })
  
  jpg[5].addEventListener("click", function() {

    window.open(jpg_function[5],'example', 'width=300,height=300');   
    
  })
  jpg[6].addEventListener("click", function() {

    window.open(jpg_function[6], 'example', 'width=300,height=300');   
    
  })
  
  jpg[7].addEventListener("click", function() {

    window.open(jpg_function[7],'example', 'width=300,height=300');   
    
  })
  
  jpg[8].addEventListener("click", function() {

    window.open(jpg_function[8],'example', 'width=300,height=300');   
    
  })
  jpg[9].addEventListener("click", function() {

    window.open(jpg_function[9], 'example', 'width=300,height=300');   
    
  })
  
  jpg[10].addEventListener("click", function() {

    window.open(jpg_function[10],'example', 'width=300,height=300');   
    
  })
  
  jpg[11].addEventListener("click", function() {

    window.open(jpg_function[11],'example', 'width=300,height=300');   
    
  })

let date=document.getElementById("date");
  let d = new Date();

date.innerHTML=d;
console.log(d);
console.log(date);
}




