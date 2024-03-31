var settings = {
  get: function (key) { return JSON.parse(window.localStorage.getItem(key)); },
  set: function (key, value) { window.localStorage.setItem(key, JSON.stringify(value)); },
  toggle: function (key) {
    var v = !JSON.parse(window.localStorage.getItem(key));
    window.localStorage.setItem(key, JSON.stringify(v));
    return v;
  }
}

$(function () {
  if (settings.get('bgm')) { $('html').addClass('bgm') }
  $('[type="checkbox"]#bgm')
    .prop('checked', settings.get('bgm'))
    .on('change', function () {
      $('html').toggleClass('bgm');
      settings.set('bgm', $(this).is(':checked'))
    });

  if (settings.get('meta1')) { $('html').addClass('meta1') }
  $('[type="checkbox"]#meta1')
    .prop('checked', settings.get('meta1'))
    .on('change', function () {
      if (settings.get('alert_meta1') !== '1') {
        if ($(this).is(':checked')) {
          alert('Not recommended on the first playthrough.') // n. Witness of an entire play
        }
        settings.set('alert_meta1', '1')
      }
      settings.toggle('meta1');
      $('html').toggleClass('meta1')
    });

  if (settings.get('meta2')) { $('html').addClass('meta2') }
  $('[type="checkbox"]#meta2')
    .prop('checked', settings.get('meta2'))
    .on('change', function () {
      settings.toggle('meta2');
      $('html').toggleClass('meta2')
    });

  if (settings.get('meta3')) { $('html').addClass('meta3') }
  $('[type="checkbox"]#meta3')
    .prop('checked', settings.get('meta3'))
    .on('change', function () {
      settings.toggle('meta3');
      $('html').toggleClass('meta3')
    });

  (function () {
    var i = 1;
    $('page').each(function () {
      $(this).attr('data-id', i);
      i = i + 1;
    });
  })();
});