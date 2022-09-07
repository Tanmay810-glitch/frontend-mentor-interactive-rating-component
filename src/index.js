
$(document).ready(function () {

    
    let $nums = $('.number').on('click', e => {
      window.num = $(e.target).toggleClass('clicked');
        $nums.not(window.num).removeClass('clicked');
        // console.log(e.target.innerHTML)
        // console.log(window.num.html())
      });
    
    

    $('.btn').on('click', e => {
      $('.rating-state').css('display', 'none');
      $('.thank-you-state').css('display', 'block');
      console.log(window.num2);
      $('span').html(window.num.html());
    })

});