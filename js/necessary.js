function start() {
    setTimeout(() => {
        var status = document.getElementById('statusOnline');
        if (status.textContent == 'online') {
            status.style.color = 'green'
        } else {
            status.style.color = 'red'
        }
    }, 2000);
}