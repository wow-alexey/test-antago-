;(function () {
    var btn = $('.btn');
    var textarea = $('.textarea');
    var error = $('.error');
    var comments = $('.user-comments');
    var reply = $('.reply');
    var recalls = $('.recalls');

    function check(e) {
        e.preventDefault();
        var textareaContent = textarea.val();

        if (textareaContent == '') {
            textarea.addClass('error-border');
            error.addClass('show');

        } else {
            comments.append('<div class="reply">' +
                                '<h5 class="user-name">Имя пользователя</h5>' +
                                '<div class="full-date">'+ getDate() +'</div>' +
                                '<div class="comment-content">'+ textareaContent +'</div>' +
                            '</div>');
            (function clean() {
                textarea.val('');
            })();
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
                comments.append('<div class="reply">' +
                                    '<h5 class="user-name">Имя пользователя</h5>' +
                                    '<div class="full-date">'+ getDate() +'</div>' +
                                    '<div class="comment-content">'+ textareaContent +'</div>' +
                                '</div>');
                (function clean() {
                    textarea.val('');
                })();
                console.log(textareaContent);
            }
            textarea.focus(function () {
                textarea.removeClass('error-border');
                error.removeClass('show');
            });
        }
    });

})(jQuery);

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

