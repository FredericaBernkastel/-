$(function () {
  $('[type="checkbox"]#bgm').on('change', function () {
    $('html').toggleClass('bgm')
  });
  $('[type="checkbox"]#meta1').on('change', function () {
    if (window.localStorage.getItem('alert_meta1') !== '1') {
      if ($(this).is(':checked')) {
        alert('Not recommended on the first playthrough.')
      }
      window.localStorage.setItem('alert_meta1', '1')
    }
    $('html').toggleClass('meta1')
  });
  $('[type="checkbox"]#meta2').on('change', function () {
    $('html').toggleClass('meta2')
  });
});