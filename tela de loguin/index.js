const loginsec = document.querySelector('.login-section')
const loginlink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')
registerlink.addEventListener('click', () => {
    loginsec.classList.add('active')
})
loginlink.addEventListener('click', () => {
    loginsec.classList.remove('active')
})


$(".input-box input").focus(function () {
    $(this).siblings("label").css('top', '-5px');
}).blur(function () {
    if ($(this).val() == "")
        $(this).siblings("label").css('top', '');
});