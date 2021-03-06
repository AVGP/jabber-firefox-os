(function(XMPP) {
    'use strict';

    var client = new XMPP.Client({
        /* Note these are connection details for a local dev server :) */
        boshURL: window.prompt('Jabber Server URL', 'https://your-server.com:5281/http-bind/'),
        jid: window.prompt('Your Jabber ID', 'you@example.org'),
        password: window.prompt('Your password', ''),
        preferred: 'PLAIN' // <- should check "Sidebar > Connection > Allow Plaintext Login" setting
    });

    client.addListener(
        'online',
        function() {
            console.log('online');
        }
    );

    client.addListener(
        'error',
        function(e) {
            console.error(e);
            alert('Erorr: ' + e);
        }
    );
}(window.XMPP));