// Getting DOM elements
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// Adding event listener to the toggle button
toggleBtn.addEventListener('click', function(){

// Long way 
    
    // console.log(sidebar.classList);

    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar')
    // }else{
    //     sidebar.classList.add('show-sidebar');
    // }

// Short way 
    sidebar.classList.toggle('show-sidebar');
})

// Adding event listener to the close button

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
})













