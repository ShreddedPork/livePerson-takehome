const WebSocket = require('ws')


const header = {
    headers : {
        Authorization: "jwt eyJraWQiOiIwMDAwMSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlMTMwMTRjOC02YTY0LTRhYTgtYjk1Ny01NmUwNTI4OGRhNzEiLCJhdWQiOiJhY2M6ODA1NDUzOTMiLCJpc3MiOiJodHRwczpcL1wvaWRwLmxpdmVwZXJzb24ubmV0IiwiZXhwIjoyMDY0MjcwMTA3LCJpYXQiOjE2NTQwMzAwNjcsImp0aSI6IjI3YzYxN2JhLTJjNjgtNDk4ZC04ZWE4LWNiYjIzZjEyNjU3MSJ9.EFClaAS0fCq7s8bpGIlWvJgA8FxBwwc7Dj-1KQ-SVOqW2WZUzZIxMUfB6tYpvr0NjRM0JmqD2Kwq8O9i68f13ThJw3gEzYui_MPiGO9kCBZDH8WECqvDmH7AcTo4Zi6tQzKHnXrYJ2iNrxrQ6T2W1X8Qv_9voqgAQgtki_OfHt_sQYEpr2SofFBO8qTXItz0JDM06GsLDBDn93ANEuDOIWiE6Njl9esGS_CsHOuvVqtp-keFKLG75DF43HB8jnK72gcfVrOrETOUFizB7z9ddE_HJzcxEvlru6I_lbemI8qgAMu_sl2SD-Q79yRhpi8n2wOKPhloK6I0pOYfKDQMBg"
    }
}

const socket = new WebSocket('wss://va.msg.liveperson.net/ws_api/account/80545393/messaging/consumer?v=3', header);

socket.addEventListener('open', function (event) {
    socket.send('{"kind":"req","id":2,"type":"ms.PublishEvent","body":{"dialogId":"4fd99a5f-d152-4a61-94f0-5a3fd7c43321","event":{"type":"ContentEvent","contentType":"text/plain","message":"My first message"}}}');
});

socket.addEventListener('message', function (event) {
    console.log(event.data);
});



