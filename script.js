setInterval(function() { 
    var $cross = document.getElementsByClassName("ytp-ad-overlay-close-container")[0]; 
    var $skip = document.getElementsByClassName("ytp-ad-skip-button")[0]; 
    if ($cross != undefined) $cross.click(); 
    if ($skip != undefined) $skip.click() 
    }, 3000);