function removeUrlAnchor(url) {
    let urlSplit = url.split('');
    let finalUrl = '';
    
    for (let i = 0; i < urlSplit.length; i++) {
      if (urlSplit[i] === '#') {
        break;
      }
      else {
        finalUrl += urlSplit[i];
      }
    }
    
    return finalUrl;
  }