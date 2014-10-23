(function() {
  $.fn.extend({
    storage: function() {
      var data, e, item, restore, _fn, _i, _len;
      restore = true;
      try {
        data = JSON.parse(localStorage.getItem('space-form'));
      } catch (_error) {
        e = _error;
        console.error('bad json');
        localStorage.removeItem('space-form');
        restore = false;
      }
      if (restore && data) {
        _fn = function(item) {
          return $('[name=' + item.name + ']').val(item.value);
        };
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          item = data[_i];
          _fn(item);
        }
      }
      this.saveOnEvent("mousedown");
      return this.saveOnEvent("keypress");
    },
    saveOnEvent: function(event) {
      return $(this).on(event, function() {
        return localStorage.setItem('space-form', JSON.stringify($(this).serializeArray()));
      });
    }
  });

}).call(this);
