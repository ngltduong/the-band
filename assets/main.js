// Declaration Variable for Booking Ticket Modal
const bookTicketModal = document.querySelector('.js-booking-modal'); 
const bookTicketBtns = document.querySelectorAll('.js-booking-ticket');
const closeBookTicketModal = document.querySelector('.js-close-btn');
const containerBookTicketModal = document.querySelector('.js-container-modal');

// Declaration Variable for Mobile Menu
var header = document.getElementById('header');
var mobileMenuBar = document.querySelector('.js-menu-icon');
var navListItems = document.querySelectorAll('.js-nav-list-item');
var headerHeight = header.clientHeight;

for(const navListItem of navListItems){
    navListItem.addEventListener('click', () =>{
        header.style.height = null;
    })
}

mobileMenuBar.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
  console.log(isClosed);
  if(isClosed) {
      header.style.height = 'auto';
    }
  else {
      header.style.height = null;
  }
}

function openkBookTicketBtn(){
    bookTicketModal.classList.add("open");
}

function hideBookTicketModalBtn(){
    bookTicketModal.classList.remove("open")
}

for(const bookTicketBtn of bookTicketBtns){
    bookTicketBtn.addEventListener('click', openkBookTicketBtn);
}

closeBookTicketModal.addEventListener('click', hideBookTicketModalBtn);

containerBookTicketModal.addEventListener('click', function (event){
        event.stopPropagation();
});

bookTicketModal.addEventListener('click', hideBookTicketModalBtn);




