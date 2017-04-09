var dim = 16;
var currentColor = "#424B54";


$(document).ready(function(){




  initialize();
  clear();
  one();
  two();
  three();
  four();
  five();

  newGrid(dim);
  size();
  draw();

});
function initialize(){
    $("body").append("<div class='header'></div>");
    $(".header").append("<button id='clear' class='large'>CLEAR</button>");
    $(".header").append("<button id='one' class='small'>1</button>");
    $(".header").append("<button id='two' class='small'>2</button>");
    $(".header").append("<button id='three' class='small'>3</button>");
    $(".header").append("<button id='four' class='small'>4</button>");
    $(".header").append("<button id='five' class='small'>5</button>");
    $(".header").append("<input type='number' id='input' class='small'>");
    $(".header").append("<button class='large' id='size' >RESIZE</button>");
    $("body").append("<div class='wrapper'></div>");


}

function clear(){
  $('#clear').click(function(){
    $('div.untouched').css("background","white");
  });
}
function one(){
  $('#one').click(function(){
    currentColor = "#424B54";
  });
}
function two(){
  $('#two').click(function(){
    currentColor = "#E1CE7A";
  });
}
function three(){
  $('#three').click(function(){
    currentColor = "#EBCFB2";
  });
}
function four(){
  $('#four').click(function(){
    currentColor = "#C5BAAF";
  });
}
function five(){
  $('#five').click(function(){
    currentColor = "#CFD4C5";
  });
}
 function size(){
   $('#size').click(function(){
     dim = $("#input").val();
     newGrid(dim);
     draw();
   });
 }


function newGrid(size){

    $(".wrapper").empty();
    for(j = 0; j<size*size;j++)
    {
      $(".wrapper").append("<div class='untouched' style='background:white'></div>");
    }

    var subSize = 720/size;

    $(".untouched").css("width",subSize);
    $(".untouched").css("height",subSize);
}


function draw(){
    $(".untouched").hover(function(){

      $(this).css("background",currentColor);
    });
}
