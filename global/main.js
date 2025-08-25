const debug = true;

window.addEventListener("error", (e) => {
	this.document.getElementById("console").innerHTML +=
		`<div class="error">"${e.message}"\nSOURCE: ${e.source} (${e.lineno}:${e.colno})\n`
		+ `ERROR:${JSON.stringify(e.error)}`;
});

const con = {
	"log": (m) => {
		document.getElementById("console").innerHTML += `<div class="log">"${m}"</div>`;
	},
	"warn": (m) => {
		document.getElementById("console").innerHTML += `<div class="warn">"${m}"</div>`;
	},
	"error": (m) => {
		document.getElementById("console").innerHTML += `<div class="error">"${m}"</div>`;
	},
	"debug": (m) => {
		document.getElementById("console").innerHTML += `<div class="debug">"${m}"</div>`;
	},
	"info": (m) => {
		document.getElementById("console").innerHTML += `<div class="info">"${m}"</div>`;
	}
};

/*** TITLE ***/
window.addEventListener("load", function() {
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