function openfile() {
    let input = document.createElement('input');
    input.type = 'file';
    input.click();
}
$('#menubar').click();
setTimeout(() => {
    if ($(window).width() < 570) {
        $('#menubar').click();
    }
}, 500);