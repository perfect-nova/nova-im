var CONTACT = {
	wechat: "X_ik1998",
	qq: "528332985"
}

function bindContact() {
	document.querySelectorAll("[data-contact]").forEach(function (el) {
		var value = String(CONTACT[el.getAttribute("data-contact")] || "").trim()
		if (!value) return
		el.textContent = ""
		if (/^https?:\/\//i.test(value)) {
			var link = document.createElement("a")
			link.href = value
			link.target = "_blank"
			link.rel = "noopener"
			link.textContent = value
			el.appendChild(link)
			return
		}
		el.textContent = value
	})
}

function bindLightbox() {
	var box = document.getElementById("lightbox")
	if (!box) return
	var big = box.querySelector("img")
	document.querySelectorAll(".clickable").forEach(function (img) {
		img.addEventListener("click", function () {
			big.src = img.getAttribute("src")
			big.alt = img.alt || ""
			box.classList.add("open")
		})
	})
	box.addEventListener("click", function () { box.classList.remove("open") })
}

bindContact()
bindLightbox()
