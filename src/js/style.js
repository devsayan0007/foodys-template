//javascript

//preloder
var preloader = document.getElementById("loading");
function disableLoader() {
  preloader.style.display = "none";
}
//side nav
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// click to like start
  // function like(){
  //   let img1 = document.getElementById("d-i-1");
  //   img1.src = "./assets/icons/love-red.pnd";
  //   return false;
  
  // }
  

// click to like end

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {   

  // prise filter start
   if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("pf1").style.display = "block";
      }else{
        document.getElementById("pf1").style.display = "none";
      }
  // prise filter end

  // sosial media bar show hide start

     if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("icon-bar-1").style.display = "block";
      }else{
        document.getElementById("icon-bar-1").style.display = "none";
      }
  // sosial media bar show hide end

  
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    if (document.body.scrollTop > 6400 || document.documentElement.scrollTop > 6400) {
      if(document.body.scrollTop > 7000 || document.documentElement.scrollTop > 7000){
        document.getElementById("g2t").style.display = "block";
        document.getElementById("ssb2").style.display = "none";
        document.getElementById("back-to-top-1").style.display = "none";
        document.getElementById("search-bar-off").style.display = "none";
      }else{
        document.getElementById("g2t").style.display = "block";
      document.getElementById("ssb2").style.display = "none";
      document.getElementById("back-to-top-1").style.display = "block";
      document.getElementById("search-bar-off").style.display = "none";
      }
    } else {
      document.getElementById("g2t").style.display = "block";
      document.getElementById("ssb2").style.display = "block";
      document.getElementById("back-to-top-1").style.display = "block";
      document.getElementById("search-bar-off").style.display = "none";
    }
  } else {
    document.getElementById("g2t").style.display = "none";
    document.getElementById("ssb2").style.display = "none";
    document.getElementById("back-to-top-1").style.display = "none";
    document.getElementById("search-bar-off").style.display = "block";
  }
}

function showSearchBar() {
  document.getElementById("g2t").style.display = "none";
  document.getElementById("ssb2").style.display = "none";
  document.getElementById("search-bar-off").style.display = "block";
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// sign-in area start
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// sign-in area end

// message area start

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("messsage-display").style.display = "block";
//   } else {
//     document.getElementById("messsage-display").style.display= "none";
//   }
// };

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
};


// message area end

//show password start
function showpassword() {
  var x = document.getElementById("pwd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
//show password end

//DETECE CAPS ON OR NOR START
var input = document.getElementById("pwd");
var text = document.getElementById("text");
input.addEventListener("keyup", function(event) {

if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});
//DETECE CAPS ON OR NOR END

// show like message start
function myLike() {
  var x = document.getElementById("likemessage");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
// show like message end

// click to add  popup message show start
function clickToAdd() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
// click to add  popup message show end
 

// shopping cart section start
function onCartClick() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown1-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// shopping cart section end

// text scroll
document.getElementById("myTable").style.overflowY="scroll";

// GeoLocation Track Start
var x = document.getElementById("output");
    // x.innerHTML = "Here is output";
     
     function getLocation(){
        //  alert(1);
        if(navigator.geolocation){
            // x.innerHTML = "Supporting";
            navigator.geolocation.getCurrentPosition(showPosition);
        }else{
            x.innerHTML = "Browser not Support";
        }
     };
     function showPosition(position){
         x.innerHTML = "<p class='text-light'>Latitude ="+position.coords.latitude + "</p>";
         x.innerHTML += "<p class='text-light'>Longitude ="+position.coords.longitude+"</p>";
     }
// GeoLocation Track End

// jquery
// on page loade popup box will be appair
$(document).ready(function() {
    setTimeout(function() {
      $("#myModal").css("display", "block");
    }, 30500);
  });
  $(".close").click(function() {
    // $("#myModal").css("display", "none");
    $('#myModal').fadeOut(); // will first fade out the loading animation 
    $('#myModal').delay(400).fadeOut('slow')// will fade out the white DIV that covers the website. 
  });
  $(".noThanks").click(function() {
    // $("#myModal").css("display", "none");
    $('#myModal').fadeOut(); // will first fade out the loading animation 
    $('#myModal').delay(400).fadeOut('slow')// will fade out the white DIV that covers the website. 
  });
  //tooltip
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

  // search filter start

  $(document).ready(function(){
    $("#searchfilter").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myList li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
// search filter end

  // timer coundown start
  $(document).ready(function() {
    var time = $(".time").text();
    var interval = setInterval(function() {
      var count = time.split(':');
      var hour = count[0];
      var min = count[1];
      var sec = count[2];
      var counter = $(".timer").find("span");
      counter.eq(0).text(hour);
      counter.eq(1).text(min);
      counter.eq(2).text(sec);
      if (hour == 0 && min == 0) {
        $(".timer").css("color","red");
      }
      if (sec == 0) {
        if (min != 0) {
          counter.eq(1).text(min--);
          sec = 59;
        }
        else if (min == 0 && hour != 0) {
          counter.eq(0).text(hour--);
          counter.eq(1).text(min = 59);
          sec = 59;
        }
        else if (hour == 0 && min == 0 && sec == 0) {
          counter.eq(2).text(0);
        }
        if (hour == 0 && min == 0) {
          $(".timer").css("color","red");
        }
      }
      counter.eq(0).text(hour);
      counter.eq(1).text(min);
      counter.eq(2).text(--sec);
      time = counter.eq(0).text()+":"+counter.eq(1).text()+":"+counter.eq(2).text();
      if (hour == 0 && min == 0 && sec == 0) {
        clearInterval(interval);
        alert("Sorry :( Time Up Offer Closed :( ");
      }
    },1000);
  });
  //timer coundown end

  //user reatind details start

  $(document).ready(function(){
    $(".details").mouseenter(function(){
      $(".b").toggle();
      // $(".btn-1").css("display", "none");
    });
   $(".details").mouseleave(function(){
      $(".b").toggle();
      // $(".btn-1").css("display", "block");
    });	
  });

  //user reatind details end

// jquery add to cart or add food start

$(document).ready(function(){
  $("#MuttonBiryani").click(function(){
  $("tbody").append("<tr>"+ " <td><li></li></td>" + "<td><a class='dropdown-item' href='#MuttonBiryani'>Mutton Biryani</a></td>"+ 
  "<td>Qun</td>"+ "<td>&#x20b9; 180</td>"
  +"<td><button><i class='material-icons'>create</i></button><button id='itm1'><i class='material-icons' id='itm1'>delete_outline</i></button></td>" +"</tr>");		        
  });	
  
  $("#EggRoll").click(function(){
  $("tbody").append("<tr>"+ " <td><li></li></td>" + "<td><a class='dropdown-item' href='#EggRoll'>Egg Roll</a></td>"+
  "<td>Qun</td>"+ "<td>&#x20b9; 50</td>"
  +"<td><button><i class='material-icons'>create</i></button><button id='itm1'><i class='material-icons' id='itm2'>delete_outline</i></button></td>" +"</tr>");		        
  });	

  $("#KerelaFish").click(function(){
  $("tbody").append("<tr>"+ " <td><li></li></td>"+ "<td><a class='dropdown-item' href='#KerelaFish'>Kerela Fish</a></td>"+
  "<td>Qun</td>"+ "<td>&#x20b9; 260</td>"
  +"<td><button><i class='material-icons'>create</i></button><button id='itm1'><i class='material-icons' id='itm3'>delete_outline</i></button></td>" +"</tr>");		        
  });	

  $("#Samosa").click(function(){
  $("tbody").append("<tr>"+ " <td><li></li></td>"+ "<td><a class='dropdown-item' href='#Samosa'>Samosa</a></td>"+ 
  "<td>Qun</td>"+ "<td>&#x20b9; 15</td>"
  +"<td><button><i class='material-icons'>create</i></button><button id='itm1'><i class='material-icons' id='itm4'>delete_outline</i></button></td>" +"</tr>");		        
  });	

  $("#PolowRice").click(function(){
  $("tbody").append("<tr>"+ " <td><li></li></td>"+ "<td><a class='dropdown-item' href='#PolowRice'>Polow Rice</a></td>"+ 
  "<td>Qun</td>"+ "<td>&#x20b9; 190</td>"
  +"<td><button><i class='material-icons'>create</i></button><button id='itm1'><i class='material-icons' id='itm5'>delete_outline</i></button></td>" +"</tr>");		        
  });	

  $("#ChickenKasha").click(function(){	
  $("tbody").append("<tr>"+ " <td><li></li></td>"+ "<td><a class='dropdown-item' href='#ChickenKasha'>Chicken Kasha</a></td>"+ 
  "<td>Qun</td>"+ "<td>&#x20b9; 160</td>"
  +"<td><button><i class='material-icons'>create</i></button><button id='itm1'><i class='material-icons' id='itm6'>delete_outline</i></button></td>" +"</tr>");     
  });	
  
  $("#MixChowmein").click(function(){
  $("tbody").append("<tr>"+ " <td><li></li></td>"+ "<td><a class='dropdown-item' href='#MixChowmein'>Mix Chowmein</a></td>"+ 
  "<td>Qun</td>"+ "<td>&#x20b9; 180</td>"
  +"<td><button><i class='material-icons'>create</i></button><button id='itm1'><i class='material-icons' id='itm7'>delete_outline</i></button></td>" +"</tr>");		        
  });	
  
  $("#ChiliChicken").click(function(){
  $("tbody").append("<tr>"+ " <td><li></li></td>"+ "<td><a class='dropdown-item' href='#ChiliChicken'>Chili Chicken</a></td>"+ 
  "<td>Qun</td>"+ "<td>&#x20b9; 185</td>"
  +"<td><button><i class='material-icons'>create</i></button><button id='itm1'><i class='material-icons' id='itm8'>delete_outline</i></button></td>" +"</tr>");		        
  });	
  
  $("#MixFriedRice").click(function(){	
  $("tbody").append("<tr>"+ " <td><li></li></td>"+ "<td><a class='dropdown-item' href='#MixFriedRice'>Mix Fried Rice</a></td>"+ 
  "<td>Qun</td>"+ "<td>&#x20b9; 165</td>"
  +"<td><button><i class='material-icons'>create</i></button><button id='itm1'><i class='material-icons' id='itm9'>delete_outline</i></button></td>" +"</tr>");	        
  });	
  
  $("#ChickenMomo").click(function(){
  $("tbody").append("<tr>"+ " <td><li></li></td>"+ "<td><a class='dropdown-item' href='#ChickenMomo'>Chicken Momo</a></td>"+ 
  "<td>Qun</td>"+ "<td>&#x20b9; 100</td>"
  +"<td><button><i class='material-icons'>create</i></button><button id='itm1'><i class='material-icons' id='itm10'>delete_outline</i></button></td>" +"</tr>");		        
  });	
  
  $("#PolowRice2").click(function(){
  $("tbody").append("<tr>"+ " <td><li></li></td>"+ "<td><a class='dropdown-item' href='##PolowRice2'>Polow Rice</a></td>"+ 
  "<td>Qun</td>"+ "<td>&#x20b9; 190</td>"
  +"<td><button><i class='material-icons'>create</i></button><button id='itm1'><i class='material-icons' id='itm11'>delete_outline</i></button></td>" +"</tr>");		        
  });

  $("#ChickenKasha2").click(function(){
  $("tbody").append("<tr>"+ " <td><li></li></td>"+ "<td><a class='dropdown-item' href='#ChickenKasha2'>Chicken Kasha</a></td>"+ 
  "<td>Qun</td>"+ "<td>&#x20b9; 160</td>"
  +"<td><button><i class='material-icons'>create</i></button><button id='itm1'><i class='material-icons' id='itm12'>delete_outline</i></button></td>" +"</tr>");		        
  });	
  
  });	
  

// jquery add to cart or add food end

// jquery delete to cart or delete food start

// $(document).ready(function(){
//   $("#itm1").click(function(){	 
//  $("#remove1").remove();	 
//  });                                                                           
//  });	
 

//  $(document).ready(function(){
//   $("#itm1").click(function(){	 
//  $("#remove1").empty();	 
//  });                                                                           
//  });	
// jquery delete to cart or delete food end

// submenu start
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });


  return false;
});

