$(function () {
  $('[type="checkbox"]#bgm').on('change', function () {
    $('html').toggleClass('bgm')
  });
  $('[type="checkbox"]#meta1').on('change', function () {
    if ($(this).is(':checked')) {
      alert('Recommended after multiple playthroughs.')
    }
    $('html').toggleClass('meta1')
  });
  $('[type="checkbox"]#meta2').on('change', function () {
    if ($(this).is(':checked')) {
      alert('Recommended after reading meta1.')
    }
    $('html').toggleClass('meta2')
  });
});