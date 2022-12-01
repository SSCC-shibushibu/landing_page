function scroll_to(num) {
    $("html,body").animate({
        scrollTop: $('.' + num).offset().top - 100,
    });
}

function checkPW() {
    let input_text = $('.inpute_pw').val();
    console.log(input_text);
    if (input_text === 'CPiPC1111') {
        localStorage.setItem('pass', input_text);
        location.href = 'members/';
    } else {
        alert('Wrong Password.');
        $('.inpute_pw').val('');
    }
}




$(".inpute_pw").keypress(function(e) {
    if (e.keyCode == 13) {
        checkPW();
    }
});



// edit view

function addToHtml(_text) {
    $('.list_div').append(_text);
    $('.main_input').val('');
    $('.second_input').val('');

}

function addHR() {
    let text = '<hr>';
    addToHtml(text);
}

function addSectionTitle() {
    let content = $('.main_input').val().replace('\n', '<br>');

    let text = '<h1>' + content + '</h1>';
    addToHtml(text);
}

function addSectionDisc() {
    let content = $('.main_input').val().replace('\n', '<br>');

    let text = '<h3>' + content + '</h3>';
    addToHtml(text);
}

function addNormalText() {
    let content = $('.main_input').val().replace('\n', '<br>');

    let text = '<p class="tasks_title">' + content + '</p>';
    addToHtml(text);
}

function addNormalDisc() {
    let content = $('.main_input').val().replace('\n', '<br>');

    let text = '<p class="tasks_disc">' + content + '</p>';
    addToHtml(text);
}

function addLinks() {
    let content = $('.main_input').val().replace('\n', '<br>');
    let link_text = $('.second_input').val();

    let text = `
    <div class="link_box">
        <a href="` + link_text + `" class="tasks_link" target="_blank">
            ` + content + `
        </a>
    </div>`;
    addToHtml(text);

}

function addSpace() {
    let text = '<div class="space_box"></div>';
    addToHtml(text);
}

function export_html() {
    const get_html = $('.list_div').html();
    $('.main_input').val(get_html);
    if (!navigator.clipboard) {
        alert("このブラウザは対応していません");
        return;
    }

    navigator.clipboard.writeText(get_html).then(
        () => {
            $('.alart_text').text('コードをコピーしました。');
        },
        () => {
            $('.alart_text').text('コピーに失敗しました。');
        });

    setTimeout(function() { $('.alart_text').text(''); }, 2000);
}

function delete_html() {
    $('.list_div').contents().last().remove();
}

function checkEdit() {
    if (location.href.indexOf('edit') > 0) {
        $('.edit_view').show();
        if ($(window).width() > 500) {

            $('.list_div').css('margin', '130px 250px 50px');
        }
    } else {
        $('.edit_view').hide();
    }

    if (localStorage.getItem('pass') != 'CPiPC1111') {
        location.href = '../index.html';
    }
}