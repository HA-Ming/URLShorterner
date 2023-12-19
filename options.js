document.addEventListener('DOMContentLoaded', function () {
    const saveBtn = document.getElementById('saveBtn');
    const bitlyTokenInput = document.getElementById('bitlyToken');
  
    saveBtn.addEventListener('click', saveBitlyToken);
  
    chrome.storage.sync.get('bitlyToken', function (result) {
      const bitlyToken = result.bitlyToken;
      if (bitlyToken) {
        bitlyTokenInput.value = bitlyToken;
      }
    });
  });
  
  function saveBitlyToken() {
    const bitlyTokenInput = document.getElementById('bitlyToken');
    const bitlyToken = bitlyTokenInput.value.trim();
  
    if (bitlyToken !== '') {
      chrome.storage.sync.set({ 'bitlyToken': bitlyToken }, function () {
        alert('Bitly API token saved!');
      });
    } else {
      alert('Please enter a valid Bitly API token.');
    }
  }
  