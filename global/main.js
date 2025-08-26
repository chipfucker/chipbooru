const debug = true;

window.addEventListener("error", (e) => {
	this.document.getElementById("console").innerHTML +=
		`<div class="error">"${e.message}" (${e.lineno}:${e.colno})\n`
		+ `ERROR: ${JSON.stringify(e.error, null, 4)}`;
});

const con = {
	"log": function () {
        console.log.apply(window, arguments);
		document.getElementById("console").innerHTML += `<div class="log">"${Array.prototype.slice.call(arguments).join('", "')}"</div>`;
	},
	"warn": function () {
        console.warn.apply(window, arguments);
		document.getElementById("console").innerHTML += `<div class="warn">"${Array.prototype.slice.call(arguments).join('", "')}"</div>`;
	},
	"error": function () {
        console.error.apply(window, arguments);
		document.getElementById("console").innerHTML += `<div class="error">"${Array.prototype.slice.call(arguments).join('", "')}"</div>`;
	},
	"debug": function () {
        console.debug.apply(window, arguments);
		document.getElementById("console").innerHTML += `<div class="debug">"${Array.prototype.slice.call(arguments).join('", "')}"</div>`;
	},
	"info": function () {
        console.info.apply(window, arguments);
		document.getElementById("console").innerHTML += `<div class="info">"${Array.prototype.slice.call(arguments).join('", "')}"</div>`;
	}
};

/*** TITLE ***/
window.addEventListener("load", () => {
	const el = document.getElementById("title");
	document.addEventListener("mousemove", function(e) {
		el.style.top = (e.clientY + 25) +"px";
		el.style.left = (e.clientX + 5) +"px";
		const title = e.target.closest("[data-title], [data-desc]")?.getAttribute("data-title") || "";
		const desc = e.target.closest("[data-title], [data-desc]")?.getAttribute("data-desc") || "";
		if (title || desc) {
			el.style.display = "block";
			el.querySelector("span.title").innerHTML = title;
			el.querySelector("span.desc").innerHTML = desc;
		} else {
			el.style.display = "none";
			el.querySelector("span.title").innerHTML = "";
			el.querySelector("span.desc").innerHTML = "";
		}
	});
});

/*** LUCIDE SVG ICONS ***/
window.addEventListener("load", () => {
	lucide.createIcons();
});