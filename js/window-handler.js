var shiftWindow = function() { scrollBy(0, -200) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
