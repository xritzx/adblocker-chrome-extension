function regexifyLinks(url){
    return "*://*."+String(url)+"/*";
}

// Compilation of popular ad agencies 
let url_list = [
    "doubleclick.net",
    "media.net",
    "undertone.com",
    "bidvertiser.com",
    "ayboll.com",
    "blogads.com",
    "viglink.com",
    "nativeads.com",
    "hexagram.com",
    "sharethrough.com",
    "gravity.com",
    "disqus.com",
    "revcontent.com",
    "content.ad",
    "taboola.com",
    "outbrain.com",
    "infolinks.com",
    "popcash.net",
    "go2cloud.org"
    // add more ad services to block 
];

url_patterns = url_list.map(regexifyLinks);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    { urls: [...url_patterns] },
    ["blocking"]
  );