document.addEventListener('DOMContentLoaded', function () {
    const shortenBtn = document.getElementById('shortenBtn');
    const copyBtn = document.getElementById('copyBtn');
  
    shortenBtn.addEventListener('click', shortenURL);
    copyBtn.addEventListener('click', copyToClipboard);
  });
  
  function shortenURL() {
    const urlInput = document.getElementById('urlInput');
    const shortUrlInput = document.getElementById('shortUrl');
  
    const longUrl = urlInput.value.trim();
  
    if (longUrl !== '') {
      const apiUrl = `http://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;
  
      fetch(apiUrl)
        .then(response => response.text())
        .then(result => {
          shortUrlInput.value = result;
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error shortening URL. Please try again.');
        });
    } else {
      alert('Please enter a valid URL.');
    }
  }

// Add this to popup.js
function showCopiedPopup() {
  const copiedPopup = document.getElementById('copiedPopup');
  copiedPopup.classList.add('show');
  setTimeout(() => {
    copiedPopup.classList.remove('show');
  }, 2000); // Adjust the duration as needed (currently set to 2 seconds)
}
  
  function copyToClipboard() {
    const shortUrlInput = document.getElementById('shortUrl');
    shortUrlInput.select();
    document.execCommand('copy');
    alert('Short URL copied to clipboard!');
  }
  