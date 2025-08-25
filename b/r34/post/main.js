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

window.addEventListener("error", function(message, source, line, column, error) {
	this.document.getElementById("console").innerHTML +=
		`<div class="error">"${message}"\nSOURCE: ${source} (${line}:${column})\n`
		+ `ERROR:${JSON.stringify(error)}`;
});

/*** LUCIDE SVG ICONS ***/
window.addEventListener("load", function() {
	lucide.createIcons();
});
