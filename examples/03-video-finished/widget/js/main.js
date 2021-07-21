function ii(i, len) {
    var s = i + "";
    len = len || 2;
    while (s.length < len) s = "0" + s;
    return s;
}
    
function log(msg) {
    let now = new Date();
    now = ii(now.getHours(), 2) + ':' + ii(now.getMinutes(), 2) + ':' + ii(now.getSeconds(), 2) + '.' + ii(now.getMilliseconds(), 3);
    let logger = document.querySelector('div#logger');

    let time = document.createElement('span');
    time.setAttribute('class', 'log-time');
    time.append(now)

    let line = document.createElement('span');
    line.append(time, ' ' + msg);
    
    try {
        logger.prepend(line, document.createElement('br'));
    } catch (TypeError) {
        // noop, output to console only
    }

    console.log(now + ' [DEMO] ' + msg);
}


window.addEventListener('focus', () => log('Focused'));
window.addEventListener('blur', () => log('Focus lost'));
window.addEventListener('load', () => log('Loaded'));

window.addEventListener('load', () => {
    // add eventListener for keydown
    document.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
            case 10009: //RETURN button
                tizen.application.getCurrentApplication().exit();
                break;
        }
    });
});

log('main.js');
