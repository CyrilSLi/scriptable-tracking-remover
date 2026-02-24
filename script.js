if (!args.urls[0]) {
    const wv = new WebView();
    wv.present(true);
    const config = await wv.evaluateJavaScript("completion();", true);
    
    const notif = new Notification();
    notif.body = 'Configuration saved, press "Close" to exit';
    notif.schedule();
    return;
}
const input = args.urls[0];
ShareSheet.present([input]);