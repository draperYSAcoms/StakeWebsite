export function setupHeader() {
	const header = document.createElement("header");
	header.className = "w-full bg-cyan-200/60 p-4 grid grid-cols-2 items-center";

	const nav = document.createElement("nav");
	nav.className = "flex gap-4 justify-end items-center";

	const links = [
		{ name: "Ward", href: "/StakeWebsite/ward.html" },
		{ name: "Gathering Place", href: "/StakeWebsite/gatheringPlace.html" },
	];

	links.forEach((link) => {
		const a = document.createElement("a");
		a.textContent = link.name;
		a.href = link.href;
		a.className = "nav-link";
		nav.appendChild(a);
	});

	const title = document.createElement("h1");
	title.textContent = "Draper YSA Stake";
	title.className = "text-xl font-semibold";
	header.appendChild(title);
	header.appendChild(nav);

	return header;
}
