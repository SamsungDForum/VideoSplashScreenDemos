// Copyright 2021 Samsung Electronics. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function ii(i, len) {
    let s = i + "";
    while (s.length < len) s = "0" + s;
    return s;
}

function log(msg) {
    let now = new Date();
    now = ii(now.getHours(), 2) + ':' + ii(now.getMinutes(), 2) + ':' + ii(now.getSeconds(), 2) + '.' + ii(now.getMilliseconds(), 3);

    const time = document.createElement('span');
    time.setAttribute('class', 'log-time');
    time.append(now)

    const line = document.createElement('span');
    line.append(time, ' ' + msg);
    
    try {
        const logger = document.querySelector('div#logger');
        logger.prepend(line, document.createElement('br'));
    } catch (ex) {
        if (ex instanceof TypeError) {
            // noop, output to console only
        } else {
            throw ex;
        }
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
