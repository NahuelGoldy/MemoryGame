
var firstSelected = false;
var firstTile = null;

function flip(tile){
    if(firstTile === null || tile !== firstTile){
        document.getElementById(tile.id).classList.toggle("flipper");
        if(!firstSelected){
            firstSelected = true;
            firstTile = tile;
        }
        else{
            var tile1value = tile.getElementsByTagName('p')[0].innerHTML;
            var tile2value = firstTile.getElementsByTagName('p')[0].innerHTML;
            if(tile1value === tile2value){
                document.getElementById(tile.id).classList.add("ticked");
                document.getElementById(firstTile.id).classList.add("ticked");
            }
            else{
                //add pause (2-3seg)
                document.getElementById(tile.id).classList.toggle("flipper");
                document.getElementById(tile.id).classList.toggle("flipper-back");
                document.getElementById(firstTile.id).classList.toggle("flipper");
                document.getElementById(firstTile.id).classList.toggle("flipper-back");
            }
            firstSelected = false;
            firstTile = null;
        }
    }
}

function sleep(miliseconds) {
   var currentTime = new Date().getTime();
   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

//Smooth scrolling from "Quiero jugar" button to dashboard
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') 
      && 
      location.hostname === this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-65
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          
        });
      }
    }
  });


