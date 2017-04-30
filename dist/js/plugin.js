;(function () {
    var btn = $('.btn');
    var textarea = $('.textarea');
    var error = $('.error');
    var comments = $('.user-comments');
    var message = $('.message');
    var recalls = $('.recalls');

    function getDate() {
        var date = new Date();
        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        var newDate = date.toLocaleString("ru", options);
        var res = newDate.substring(0, newDate.length - 3);
        return res;
    };

    textarea.focus(function () {
        textarea.removeClass('error-border');
        error.removeClass('show');
    });

    function check(e) {
        e.preventDefault();
        var textareaContent = textarea.val();
        var content = '<div class="message">' +
                            '<div class="user-information">' +
                                '<h5 class="user-name">Имя пользователя</h5>' +
                                '<div class="message-day">' + getDate() + '</div>' +
                            '</div>' +
                            '<div class="text-message">' + textareaContent + '</div>' +
                        '</div>';
        if (textareaContent == '') {
            textarea.addClass('error-border');
            error.addClass('show');
        } else {
            comments.append(content);
            textarea.val('');
            console.log(textareaContent);
        }
    }

    btn.on('click', check);

    textarea.keydown(function (e) {
        if (e.ctrlKey && e.keyCode == 13) {
            check(e);
        }
    });

})(jQuery);



