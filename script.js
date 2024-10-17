const overlay = document.getElementById('overlay');
const video = document.getElementById('background-video');

// Wait for user click to play the video with audio
overlay.addEventListener('click', () => {
  video.muted = false;  // Unmute audio
  video.play();          // Start the video
  overlay.style.display = 'none';  // Hide the overlay
});
