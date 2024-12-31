// textEffect.js

function showTextEffect(text, elementId) {
    let index = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = '';  // Đảm bảo xóa nội dung cũ

    // Hàm để hiện chữ dần dần
    function typeEffect() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);  // Delay 100ms giữa các ký tự
        }
    }

    typeEffect(); // Bắt đầu hiệu ứng
}
