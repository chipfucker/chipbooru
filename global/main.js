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
