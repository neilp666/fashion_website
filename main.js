// 1. Click on hamburger - run a function
// 2. Inside the function we are going to add/remove the class of open
// 3. Make sure our link doesn't jump the page to the top

$('.menu-toggle').on('click', function() {
  $('.menu').toggleClass('open')
  return false
})