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
    <p id="saveStatus"></p>
    <script>
        var config;
        document.getElementById("save").addEventListener("click", () => {
            config = document.getElementById("configInput").value;
            document.getElementById("saveStatus").textContent = "Config saved: " + config;
        });
        document.getElementById("configInput").addEventListener("input", () => {
            document.getElementById("saveStatus").innerHTML = "";
        });
    </script>
</body>
</html>
`;

if (!args.urls[0]) {
    const wv = new WebView();
    await wv.loadHTML(configPage);
    await wv.present(true);

    const config = await wv.evaluateJavaScript("config");
    if (!config) {
        return;
    }
    sendNotif("Received config: " + config);
    return;
}
const input = args.urls[0];
ShareSheet.present([input]);