export function setupFooter() {
	const footer = document.createElement("footer");
	footer.className = "w-full bg-cyan-200/60 px-4 py-2 text-center";

	const socialMedia = document.createElement("div");
	socialMedia.className = "flex gap-4 justify-center mb-2";

	const socialLinks = [
		{
			name: "Facebook",
			href: "https://www.facebook.com/draperysastake",
			logo: "facebook.svg",
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com/draperutahysastake/",
			logo: "instagram.svg",
		},
		{
			name: "FlockNote",
			href: "https://draperysa.flocknote.com/DRAPERYSASTAKE",
			logo: "flocknote.svg",
		},
	];

	socialLinks.forEach((link) => {
		const a = document.createElement("a");
		a.href = link.href;
		a.target = "_blank";
		a.rel = "noopener noreferrer";

		const img = document.createElement("img");
		img.src = `/${link.logo}`;
		img.alt = `${link.name} logo`;
		img.className =
			"h-5 w-5 hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer hover:text-Primary";

		a.appendChild(img);
		socialMedia.appendChild(a);
	});

	footer.appendChild(socialMedia);

	const disclaimer = document.createElement("p");
	disclaimer.textContent =
		"This is not an official website of the Church of Jesus Christ of Latter-day Saints";
	footer.appendChild(disclaimer);

	const legal = document.createElement("p");
	legal.textContent = "© 2025 Draper YSA Stake | All rights reserved ";
	footer.appendChild(legal);

	return footer;
}
