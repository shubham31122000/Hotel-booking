
// const cancelBtn = document.getElementById('cancel-btn');
// const sideNav = document.getElementById('sidenav');
// const modal = document.getElementById('modal');



// cancelBtn.addEventListener('click', function(){
//     sideNav.classList.remove('show');
//     modal.classList.remove('showModal');
// });

// window.addEventListener('click', function(event){
//     if(event.target === modal){
//         sideNav.classList.remove('show');
//         modal.classList.remove('showModal');
//     }
// });

let userLoggedIn = false;



$(document).ready(function() {
    $("#book-room").click(function() {
        let para = `<p class="booking-msg"> Congratulations! Your room is booked </p>`;
        $(".displayMessage").append(para);
    });

    // $("#book-room").click(function(){
    //     // alert("Clicked");
    //     // window.location.href="index.html";
    //     let val = document.getElementById("last-name");
    //     console.log(val.value);
    //   });
    

    $("#room-booking-page").click(function() {
        if (userLoggedIn) 
            $("#room-booking-page").attr("href","Form.html");
        else 
            $("#room-booking-page").attr("href","login.html");
    });
});