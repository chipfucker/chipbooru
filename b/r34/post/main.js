window.addEventListener("load", () => {
	const post = document.getElementById("post");
    const element = {
		"element": document.getElementById("post"),
		"media": {
			"type": post.querySelector("div.media").getAttribute("data-type"),
			"content": post.querySelector("div.media > div.content > img, div.media > div.content > video"),
			"progress": post.querySelector("div.media > div.progress > div")
		},
		"controls": {
			"play-pause": post.querySelector("div.media > div.controls > div.play-pause"),
			"mute": post.querySelector("div.media > div.controls > div.audio"),
			"time": {
				"remaining": post.querySelector("div.media > div.controls > div.time > div.left > span"),
				"total": post.querySelector("div.media > div.controls > div.time > div.right > span")
			},
			"seek": {
				"backward": {
					"five": post.querySelector("div.media > div.controls > div.backward > div.five"),
					"ten": post.querySelector("div.media > div.controls > div.backward > div.ten")
				},
				"forward": {
					"five": post.querySelector("div.media > div.controls > div.forward > div.five"),
					"ten": post.querySelector("div.media > div.controls > div.forward > div.ten")
				}
			},
			"fullscreen": post.querySelector("div.media > div.controls > div.fullscreen")
		},
		"info": {
			"post": {
				"score": post.querySelector("div.info dd[data-info='score']"),
				"owner": post.querySelector("div.info dd[data-info='owner']"),
				"rating": post.querySelector("div.info dd[data-info='rating']"),
				"status": post.querySelector("div.info dd[data-info='status']"),
				"has_notes": post.querySelector("div.info dd[data-info='has_notes']"),
				"change": post.querySelector("div.info dd[data-info='change']")
			},
			"link": {
				"parent": post.querySelector("div.info dd[data-info='parent_id']"),
				"source": post.querySelector("div.info dd[data-info='source']")
			},
			"file": {
				"id": post.querySelector("div.info dd[data-info='id']"),
				"directory": post.querySelector("div.info dd[data-info='directory']"),
				"image": post.querySelector("div.info dd[data-info='image']"),
				"hash": post.querySelector("div.info dd[data-info='hash']")
			}
		},
		"tags": {
			"copyright": post.querySelector("div.tags > div.copyright"),
			"character": post.querySelector("div.tags > div.character"),
			"artist": post.querySelector("div.tags > div.artist"),
			"general": post.querySelector("div.tags > div.general"),
			"meta": post.querySelector("div.tags > div.meta"),
			"null": post.querySelector("div.tags > div.null")
		},
		"comments": post.querySelector("div.comments")
	};

	con.debug(JSON.stringify(element, null, 4));
});