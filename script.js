window.addEventListener('message', function(event) {
    let data = event.data;

    if (data.action === 'notify') {
        let notification = document.createElement('div');
        notification.classList.add('notification', data.type);

        let icon = document.createElement('div');
        icon.classList.add('icon');
        icon.innerHTML = `<i class="fas ${data.icon}"></i>`;

        let content = document.createElement('div');
        content.classList.add('content');

        let title = document.createElement('div');
        title.classList.add('title');
        title.innerText = data.title;

        let message = document.createElement('div');
        message.classList.add('message');
        message.innerText = data.message;

        let progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');

        content.appendChild(title);
        content.appendChild(message);

        notification.appendChild(icon);
        notification.appendChild(content);
        notification.appendChild(progressBar);

        let container = document.getElementById('notification-container');

        // Clear existing styles
        container.style.top = "";
        container.style.right = "";
        container.style.bottom = "";
        container.style.left = "";
        container.style.transform = "";

        // Apply notification position
        if (data.position.top) container.style.top = data.position.top;
        if (data.position.right) container.style.right = data.position.right;
        if (data.position.bottom) container.style.bottom = data.position.bottom;
        if (data.position.left) container.style.left = data.position.left;
        if (data.position.transform) container.style.transform = data.position.transform;

        container.appendChild(notification);

        setTimeout(function() {
            notification.style.opacity = 1;
        }, 100);

        // Animate the progress bar
        setTimeout(function() {
            progressBar.style.transition = `width ${data.duration || 3000}ms linear`;
            progressBar.style.width = '100%';
        }, 100); // Add a slight delay to ensure smooth animation

        setTimeout(function() {
            notification.style.opacity = 0;
            setTimeout(function() {
                notification.remove();
            }, 500);
        }, data.duration || 3000);
    }
});
