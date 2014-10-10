(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {
    $.extend($.fn, {
        storage: function () {
            var restore = true;
            try {
                var data = JSON.parse(localStorage.getItem('space-form'))
            } catch (e) {
                console.error('bad json');
                localStorage.removeItem('space-form');
                restore = false;
            }
            if (restore) {
                jQuery.each(
                    data,
                    function (index, item) {
                        $('[name=' + item.name + ']').val(item.value);
                    }
                );
            }

            this.saveOnEvent("mousedown");
            this.saveOnEvent("keypress")
        },
        saveOnEvent: function (event) {
            $(this).on(
                event,
                function () {
                    var data = JSON.stringify($(this).serializeArray());
                    localStorage.setItem('space-form', data);
                }
            );
        }


    });

}));