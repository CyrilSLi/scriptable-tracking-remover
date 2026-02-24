function sendNotif(body) {
    const notif = new Notification();
    notif.body = body;
    notif.schedule();
}

const configPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tracking Remover Configuration</title>
</head>
<body>
    <h1>Tracking Remover Configuration</h1>
    <p>Test config page</p>
    <input type="text" id="configInput" placeholder="Enter config value">
    <button id="save">Save</button>
    <script>
        document.getElementById("save").addEventListener("click", () => completion(document.getElementById("configInput").value));
    </script>
</body>
</html>
`;

if (!args.urls[0]) {
    const wv = new WebView();
    wv.loadHTML(configPage);
    wv.present(true);
    const config = await wv.evaluateJavaScript("", true);
    sendNotif("Received config: " + config);
    
    sendNotif('Configuration saved, press "Close" to exit');
    return;
}
const input = args.urls[0];
ShareSheet.present([input]);