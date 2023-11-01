
function updateLocalTime(timezone, elementId) {
  const now = new Date();
  const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const timeString = now.toLocaleTimeString('en-US', options);
  document.getElementById(elementId).querySelector('span').textContent = timeString;
}

setInterval(function() {
  updateLocalTime('America/Denver', 'yellowstone-time');
  updateLocalTime('America/Detroit', 'pic-rocks-time');
  updateLocalTime('Asia/Harbin', 'harbin-time');
  updateLocalTime('Asia/Seoul', 'seoul-time');
}, 1000);
