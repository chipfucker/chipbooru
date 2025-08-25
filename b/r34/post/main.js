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

/*** LUCIDE SVG ICONS ***/
window.addEventListener("load", function() {
	lucide.createIcons();
});
