(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {
    $.extend($.fn, {
        storage: function () {
            var data = localStorage.getItem('space-form');
            var restore = true;
            if (data) {
                try {
                    data = JSON.parse(localStorage.getItem(key))
                } catch (e) {
                    console.error('bad json');
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
            }
            this.saveOnEvent("mousedown");
            this.saveOnEvent("keypress")

        },
        saveOnEvent: function (event) {
            $(this).on(
                event,
                function () {
                    console.log('test');
                    data = JSON.stringify($(this).serializeArray());
                    localStorage.setItem('space-form', data);
                }
            );
        }


    });

}));