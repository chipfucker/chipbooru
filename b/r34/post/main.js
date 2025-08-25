const debug = true;
/*** CONSOLE SUBSCRIER ***/
window.addEventListener("load", function() {
	let callback = (category, args) => {
		let message = `<div class="${category}">${
			JSON.stringify(args, null, "\t") }</div>`;
		document.getElementById("console").innerHTML += message; 
	};
	window.ConsoleSubscriber.bind(callback);

	console.log("this is a log bitch");
	console.warn("bitch this is a warn");
	console.debug("i be poopin");
});

window.addEventListener("error", (e) => {
	this.document.getElementById("console").innerHTML +=
		`<div class="error">"${e.message}"\nSOURCE: ${e.source} (${e.lineno}:${e.colno})\n`
		+ `ERROR:${JSON.stringify(e.error)}`;
});

/*** LUCIDE SVG ICONS ***/
window.addEventListener("load", function() {
	lucide.createIcons();
});
