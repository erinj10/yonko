const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

const toggler = document.getElementById('theme-toggle');

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});


// Assuming you have a function to get the username after login
    // Replace this function with your actual method of obtaining the username
    function getUsername() {
        // You might get this information from a server response after login
        // For now, I'm assuming it's stored in localStorage
        return localStorage.getItem('username');
    }
    toggler.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    
        // Assuming you have a function to get the username after login
        // Replace this function with your actual method of obtaining the username
        var username = getUsername();
    
        // Call the displayGreeting function with the obtained username
        displayGreeting(username);
    });
    
    function getUsername() {
        // Replace this with your actual method of obtaining the username
        return localStorage.getItem('username');
    }
    
    function displayGreeting(username) {
        var greetingElement = document.getElementById('greeting');
    
        if (greetingElement && username) {
            greetingElement.innerHTML = 'Hello, ' + username + '!';
    
            // Check if dark mode is enabled
            var isDarkMode = document.body.classList.contains('dark');
    
            // Toggle a class based on dark mode
            greetingElement.classList.toggle('dark-text', isDarkMode);
        }
    }

    window.onload = function () {
        // Get the username
        var username = getUsername();

        // Call the displayGreeting function with the obtained username
        displayGreeting(username);
    };

    function displayGreeting(username) {
        var greetingElement = document.getElementById('greeting');
    
        if (greetingElement && username) {
            greetingElement.innerHTML = 'Hello, ' + username + '!';
    
            // Check if dark mode is enabled
            var isDarkMode = document.body.classList.contains('dark');
    
            // Toggle a class based on dark mode
            greetingElement.classList.toggle('dark-text', isDarkMode);
        }
    }

            function openNav() {
        var sidebar = document.getElementById("mySidebar");
        var mainContent = document.getElementById("main");

        if (sidebar.style.width === "" || sidebar.style.width === "0px") {
            sidebar.style.width = "18%"; // Adjust the width as needed
            mainContent.style.marginLeft = "250px"; // Adjust the margin as needed
        } else {
            sidebar.style.width = "0";
            mainContent.style.marginLeft = "0";
        }
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    function toggleCartDropdown() {
    var cartItems = document.getElementById("cartItems");
    cartItems.style.display = (cartItems.style.display === "block") ? "none" : "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.fa-shopping-cart')) {
        var cartItems = document.getElementById("cartItems");
        if (cartItems.style.display === "block") {
            cartItems.style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const quantityInput = document.querySelector('.quantity-input');
    const plusButton = document.querySelector('.plus');
    const minusButton = document.querySelector('.minus');

    plusButton.addEventListener('click', function (event) {
        event.stopPropagation();
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    minusButton.addEventListener('click', function (event) {
        event.stopPropagation();
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });
});

$(document).ready(function () {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll > 280) {
                    $(".navbar-dark").css("background", "orange");
                } else {
                    $(".navbar-dark").css("background", "transparent");
                }
            });
        });

        $(document).ready(function () {
  var isOpen = false;
  $(".searchbox-icon").click(function () {
    if (isOpen == false) {
      $(".searchbox").addClass("searchbox-open");
      $(".searchbox-input").focus();
      isOpen = true;
    } else {
      $(".searchbox").removeClass("searchbox-open");
      $(".searchbox-input").focusout();
      isOpen = false;
    }
  });
  $(".searchbox-icon").mouseup(function () {
    return false;
  });
  $(".searchbox").mouseup(function () {
    return false;
  });
  $(document).mouseup(function () {
    if (isOpen == true) {
      $(".searchbox-icon").css("display", "block");
      $(".searchbox-icon").click();
    }
  });
  function buttonUp() {
    var inputVal = $(".searchbox-input").val();
    inputVal = $.trim(inputVal).length;
    if (inputVal !== 0) {
      $(".searchbox-icon").css("display", "none");
    } else {
      $(".searchbox-input").val("");
      $(".searchbox-icon").css("display", "block");
    }
  }
  $("input").keyup(function () {
    buttonUp();
  });
});

document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

// https://bytewebster.com/
// https://bytewebster.com/
// https://bytewebster.com/

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});


$(document).ready(function () {
        // Initialize FullCalendar
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },
            editable: true,
            eventLimit: true,
            events: [
                {
                    title: 'BIG SALE 1.1.1',
                    start: '2023-11-14T10:00:00Z',
                    end: '2023-11-14T12:00:00Z'
                },
                {
                    title: 'Free delivery for the day',
                    start: '2023-11-16T14:30:00Z',
                    end: '2023-11-16T16:00:00Z'
                }
            ],
            dayRender: function (date, cell) {
                var today = moment().utc();
                if (date.isSame(today, 'date')) {
                    var backgroundImageDiv = $('<div class="background-image"></div>').css('background-image', 'url("logo.png")');
                    cell.append(backgroundImageDiv);
                }
            }
        });

        // Toggle calendar visibility
        $('#toggleCalendar').on('click', function () {
            $('#calendar-container').toggle();
        });
    });
    function toggleText() {
        var textContainer = document.getElementById("textContainer");
        var btnIcon = document.querySelector('.btn-secondary i');

        if (textContainer.style.height === "100px" || textContainer.style.height === "") {
            textContainer.style.height = "auto";
            btnIcon.classList.remove('fa-chevron-down');
            btnIcon.classList.add('fa-chevron-up');
        } else {
            textContainer.style.height = "100px";
            btnIcon.classList.remove('fa-chevron-up');
            btnIcon.classList.add('fa-chevron-down');
        }
    }
    
    function submitForm() {
        // You can add JavaScript logic here to handle form submission
        alert('Form submitted!'); // Example: Display an alert for demonstration purposes
      }

