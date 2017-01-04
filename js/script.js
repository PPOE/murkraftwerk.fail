(function ($) {
  'use strict';

  $(function () {

    var $questions = $('.content .question');


    $questions.each(function (index, $question) {
      $('> .headline', $question).css('transform', 'rotate(' + ((Math.random() * 7) - 4) + 'deg)');
    });
    $('> article', $questions).each(function () {
      $(this).css('transform', 'translateX(-50%) rotate(' + ((Math.random() * 5) - 4) + 'deg)');
    });




    var $randomQ = $questions.eq(Math.round(Math.random() * $questions.length) - 1);
    $randomQ.show();

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


    });

})(jQuery);
