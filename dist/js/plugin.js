;(function () {
    var btn = $('.btn');
    var textarea = $('.textarea');
    var error = $('.error');

    function check(e) {
        e.preventDefault();
        var textareaContent = textarea.val();

        if (textareaContent == '') {
            textarea.addClass('error-border');
            error.addClass('show');

        } else {
            textarea.removeClass('error-border');
            error.removeClass('show');
            console.log(textareaContent);
        }
        textarea.focus(function () {
            textarea.removeClass('error-border');
            error.removeClass('show');
        });
    }

    btn.click(check);

    textarea.keydown(function (e) {
        if (e.ctrlKey && e.keyCode == 13) {
            var textareaContent = textarea.val();

            if (textareaContent == '') {
                textarea.addClass('error-border');
                error.addClass('show');
            } else {
                textarea.removeClass('error-border');
                error.removeClass('show');
                console.log(textareaContent);
            }
            textarea.focus(function () {
                textarea.removeClass('error-border');
                error.removeClass('show');
            });
        }
    });

})(jQuery);

;(function getDate() {
    var date = new Date();
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    console.log(date.toLocaleString("ru", options));

})(jQuery);

// ;(function () {
//     var btn = $('.btn');
//     btn.keydown(function (e) {
//
//         if (e.ctrlKey && e.keyCode == 13) {
//             // Ctrl-Enter pressed
//         }
//     });
//
// })(jQuery);

