export function setupHeader() {
	const header = document.createElement("header");
	header.className =
		"w-full bg-cyan-200/60 p-4 flex justify-between items-center relative";

	const title = document.createElement("a");
	title.textContent = "Draper YSA Stake";
	title.href = "/StakeWebsite/index.html";
	title.className = "text-xl font-semibold";

	// Hamburger button (visible on mobile)
	const hamburger = document.createElement("button");
	hamburger.className =
		"md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 cursor-pointer";
	hamburger.setAttribute("aria-label", "Toggle menu");
	hamburger.innerHTML = `
		<span class="hamburger-line block w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
		<span class="hamburger-line block w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
		<span class="hamburger-line block w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
	`;

	// Desktop nav (hidden on mobile)
	const desktopNav = document.createElement("nav");
	desktopNav.className = "hidden md:flex gap-4 justify-end items-center";

	// Mobile nav (hidden by default, shown when hamburger clicked)
	const mobileNav = document.createElement("nav");
	mobileNav.className =
		"mobile-nav hidden absolute top-full left-0 right-0 bg-cyan-200/95 flex-col items-center gap-4 py-4 shadow-lg z-40";

	const links = [
		{ name: "Ward", href: "/StakeWebsite/ward.html" },
		{ name: "Gathering Place", href: "/StakeWebsite/gatheringPlace.html" },
	];

	links.forEach((link) => {
		// Desktop link
		const desktopLink = document.createElement("a");
		desktopLink.textContent = link.name;
		desktopLink.href = link.href;
		desktopLink.className = "nav-link";
		desktopNav.appendChild(desktopLink);

		// Mobile link
		const mobileLink = document.createElement("a");
		mobileLink.textContent = link.name;
		mobileLink.href = link.href;
		mobileLink.className = "nav-link text-lg py-2";
		mobileNav.appendChild(mobileLink);
	});

	// Toggle mobile menu
	hamburger.addEventListener("click", () => {
		const isOpen = mobileNav.classList.contains("flex");
		if (isOpen) {
			mobileNav.classList.remove("flex");
			mobileNav.classList.add("hidden");
			hamburger.classList.remove("open");
		} else {
			mobileNav.classList.remove("hidden");
			mobileNav.classList.add("flex");
			hamburger.classList.add("open");
		}
	});

	header.appendChild(title);
	header.appendChild(desktopNav);
	header.appendChild(hamburger);
	header.appendChild(mobileNav);

	return header;
}
