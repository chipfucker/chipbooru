const debug = true;
/*** CONSOLE SUBSCRIER ***/
window.addEventListener("load", function() {
	let callback = (category, args) => {
		let message = `<div class="${category}">${
			JSON.stringify(args, null, "\t") }</div>`;
		document.getElementById("console").innerHTML += message; 
	};
	cs.bind(callback);
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
