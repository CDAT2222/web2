document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://your-api-url/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Đăng nhập thành công!');
            // Chuyển hướng đến dashboard hoặc trang khác
            window.location.href = 'dashboard.html';
        } else {
            alert('Đăng nhập thất bại: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Lỗi:', error);
        alert('Có lỗi xảy ra. Vui lòng thử lại.');
    });
});
