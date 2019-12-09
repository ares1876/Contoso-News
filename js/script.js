var slideInterval = 3500;

function getFigures () {
    return document.getElementById('carousel').getElementsByTagName('figure');
}
 
function moveForward () {
   var figures = getFigures();
   var pointer;
   for (var i = 0; i < figures.length; i++)
   {
       if (figures[i].className == 'visible')
       {
           figures[i].className = '';
           pointer = i;
       }
   }
   if (++pointer == figures.length)
   {
       pointer = 0;
   }
   figures[pointer].className = 'visible';
   setTimeout(moveForward, slideInterval);
}

function stratPlayback (){
    setTimeout(moveForward, slideInterval);
}

stratPlayback();
