/**
 * jquery.buttonFile
 *
 * Version:     1.0.0
 * Last Update: 2013/01/26
 * Manuel Bitto (manuel.bitto@gmail.com)
 *
 * Tested in Firefox and Chrome
 *
 * Use a simple link or button as an <input type='file'> to open the default file browser
 *
 *
 */
(function($) {

    var counter = 0;

    var init = function(options) {

        options = $.extend({}, options);

        // Initialize all buttonFile elements
        this.each(function(i, el){

            var $el = $(el),
                $hiddenInputFile = $('<input type="file" style="display:none">');

            $el.data('jquery_buttonFile', ++counter);
            $hiddenInputFile.addClass('jquery_buttonFile_' + counter);
            $el.after($hiddenInputFile);
        });

        $(this).on('click', function(e){
            e.preventDefault();
            $('.jquery_buttonFile_' + $(e.target).data('jquery_buttonFile')).trigger('click');
        });

        return this;
    };

    var publicMethods = {};

    // Plug buttonFile in
    $.fn.buttonFile = function(method){

        // We have a method like $('.class').plugin("doThis");
        if (publicMethods[method]) {
            return publicMethods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        }
        // We have the initialization of plugin
        else if (typeof method === 'object' || ! method) {
            return init.apply(this, arguments);
        }
        // We've done something wrong here
        else {
            $.error('Method ' +  method + ' does not exist in jquery.buttonFile plugin');
        }
    };
})(jQuery);
