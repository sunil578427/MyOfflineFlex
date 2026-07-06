const openSidebarBtn = document.getElementById('openSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

const openLoginBtn = document.getElementById('openLogin');
const closeLoginBtn = document.getElementById('closeLogin');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');

const videoModal = document.getElementById('videoModal');
const closeVideoBtn = document.getElementById('closeVideo');
const trailerPlayer = document.getElementById('trailerPlayer');
const trailerButtons = document.querySelectorAll('.play-trailer');

// 1. Sidebar open/close
if(openSidebarBtn) {
    openSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
    });
}
function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
}
if(closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
if(sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

// 2. Login Popup
if(openLoginBtn) openLoginBtn.addEventListener('click', () => loginModal.classList.add('show'));
if(closeLoginBtn) closeLoginBtn.addEventListener('click', () => loginModal.classList.remove('show'));
if(loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('🎉 Sign In Successful!');
        loginModal.classList.remove('show');
    });
}

// 3. Offline Trailer Controls
trailerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoUrl = button.getAttribute('data-video');
        trailerPlayer.src = videoUrl;
        trailerPlayer.load();
        trailerPlayer.play();
        videoModal.classList.add('show');
    });
});

function stopVideo() {
    videoModal.classList.remove('show');
    trailerPlayer.pause();
    trailerPlayer.src = "";
}

if(closeVideoBtn) closeVideoBtn.addEventListener('click', stopVideo);
if(videoModal) {
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            stopVideo();
        }
    });
}
