(function ($) {
  'use strict';

  $(function () {

    if (navigator.userAgent.match(/iPhone|iPad|Android/i)) {
      $('.share-btn.whatsapp,.share-btn.facebook-messenger').css('display', 'inline-block');
    }

    var $questions = $('.content .question');


    $questions.each(function (index, $question) {
      $('> .headline', $question).css('transform', 'rotate(' + ((Math.random() * 7) - 4) + 'deg)');
    });
    $('> article', $questions).each(function () {
      $(this).css('transform', 'translateX(-50%) rotate(' + ((Math.random() * 5) - 4) + 'deg)');
    });

    $questions.removeClass('show');
    var randomNumber = Math.round(Math.random() * $questions.length) - 1;
    var $randomQ = $questions.eq(randomNumber);
    $randomQ.addClass('show');

    $('button.positive', $questions).on('click', function (event) {
      if ($('article.positive', $questions).hasClass('show')) {
        $('article', $questions).removeClass('show');
      } else {
        $('article', $questions).removeClass('show');
        $('article.positive', $questions).addClass('show');
      }
    });

    $('button.negative', $questions).on('click', function () {
      if ($('article.negative', $questions).hasClass('show')) {
        $('article', $questions).removeClass('show');
      } else {
        $('article', $questions).removeClass('show');
        $('article.negative', $questions).addClass('show');
      }
    });

    $('article .close', $questions).on('click', function() {
      $('article', $questions).removeClass('show');
    });

    $('html, body, .content, .question, .question .headline').on('click', function(event) {
      if (event.target !== this) {
        return;
      }
      $('article', $questions).removeClass('show');
    });

    $(document).keyup(function(event) {
      if (event.keyCode === 27) { // esc
        $('article', $questions).removeClass('show');
      }
    });

    $('.nextQuestion').on('click', function(event) {
      event.preventDefault();
      $('.question article').removeClass('show');
      $questions.removeClass('show');

      var oldRandomNumber = randomNumber;
      do {
        randomNumber = Math.round(Math.random() * $questions.length) - 1;
        //console.log('round: ' + oldRandomNumber + ' - ' + randomNumber);
      } while (oldRandomNumber === randomNumber);

      $randomQ = $questions.eq(randomNumber);
      $randomQ.addClass('show');
    });


    });

})(jQuery);
