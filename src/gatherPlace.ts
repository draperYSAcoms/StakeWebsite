import "./style.css";
import { setupHeader } from "./format/header";
import { setupFooter } from "./format/footer";

const app = document.querySelector<HTMLDivElement>("#app")!;
const header = setupHeader();
const footer = setupFooter();

// Create main content
const main = document.createElement("main");
main.className = "p-4 mb-4";
main.innerHTML = `
	<h2 class="text-3xl font-bold text-center mb-4">
		Draper YSA Gathering Place
	</h2>
	<div class="max-w-4xl mx-auto rounded-lg shadow-md overflow-hidden">
		<div class="p-4 text-center">
			<p class="text-gray-600 text-sm mb-1">
				Come for dinner, and institute classes every Wednesday. With sports,
				and activities afterwards.
			</p>
			<p class="text-gray-600 text-sm mb-1">
				Meeting Time: Wednesdays 6:30 PM - 9:00 PM
			</p>
			<p class="text-gray-600 text-sm mb-4">
				Address: 12345 S 200 E Draper, Utah 84020
			</p>
		</div>
	</div>
`;

// Append header, main, and footer to app
app.appendChild(header);
app.appendChild(main);
app.appendChild(footer);
