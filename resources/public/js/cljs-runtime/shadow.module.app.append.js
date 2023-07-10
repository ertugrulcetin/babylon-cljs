
shadow.cljs.devtools.client.env.module_loaded('app');

try { main.core.init(); } catch (e) { console.error("An error occurred when calling (main.core/init)"); throw(e); }