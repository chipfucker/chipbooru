const debug = true;
/*** CONSOLE SUBSCRIER ***/
(function() {
	let callback = (category, args) => {
		let message = `<div class="${category}">${
			args.JSON.stringify(args, null, "\t") }</div>`;
		document.getElementById("console").innerHTML += message; 
	};
	cs.bind(callback);
})();

/*** LUCIDE SVG ICONS ***/
window.addEventListener("load", function() {
	lucide.createIcons();
});
