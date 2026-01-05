import "./style.css";
import { setupHeader } from "./format/header";
import { setupFooter } from "./format/footer";

const app = document.querySelector<HTMLDivElement>("#app")!;
const header = setupHeader();
const footer = setupFooter();

// Ward data
const wards = [
	{
		name: "Alta Ward 18-25",
		image: "/altaWard.webp",
		meetingTime: "12:00 - 2:00",
		address: "11350 S 1000 E Sandy Ut. 84094",
		link: "https://local.churchofjesuschrist.org/en/units/us/ut/alta-ysa-ward-18-25",
		feeders: ["", "", ""],
	},
	{
		name: "Lone Peak Ward 18-25",
		image: "/lonePeakWard.webp",
		meetingTime: "10:30 - 12:30",
		address: "11196 S Wasatch Boulevard Sandy, Utah 84092",
		link: "https://local.churchofjesuschrist.org/en/units/us/ut/lone-peak-ysa-ward-18-25",
		feeders: ["", "", ""],
	},
	{
		name: "South Mountain Ward 18-25",
		image: "/southMountain.webp",
		meetingTime: "10:30 - 12:30",
		address: "116 E 11400 S Draper, Utah 84070",
		link: "https://local.churchofjesuschrist.org/en/units/us/ut/south-mountain-ysa-ward-18-25",
		feeders: ["", "", ""],
	},
	{
		name: "Crescent Park Ward 26-35",
		image: "/crescentPark.webp",
		meetingTime: "10:30 - 12:30",
		address: "11250 S. 1000 E Sandy Utah 84094",
		link: "https://local.churchofjesuschrist.org/en/units/us/ut/crescent-park-ysa-ward-26-35",
		feeders: ["", "", ""],
	},
	{
		name: "Willow Creek Ward 26-35",
		image: "/willowCreek.webp",
		meetingTime: "12:00 - 2:00",
		address: "1970 E. Viscounti Dr. Sandy, Utah 84092",
		link: "https://local.churchofjesuschrist.org/en/units/us/ut/willow-creek-ysa-ward-26-35",
		feeders: ["", "", ""],
	},
	{
		name: "Willow Springs Ward 26-35",
		image: "/willowSprings.webp",
		meetingTime: "12:00 - 2:00",
		address: "166 E 11400 S Draper, Utah 84070",
		link: "https://local.churchofjesuschrist.org/en/units/us/ut/willow-springs-ysa-ward-26-35",
		feeders: ["", "", ""],
	},
];

//Feeder Wards Data
const feederWards = [
	{
		name: "Corner Canyon 1st Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Corner Canyon 2nd Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Corner Canyon 3rd Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Corner Canyon 4th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Corner Canyon 5th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Corner Canyon 6th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Corner Canyon 7th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Corner Canyon 8th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Corner Canyon 9th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "South Mountain 1st Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "South Mountain 2nd Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "South Mountain 3rd Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "South Mountain 4th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "South Mountain 5th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "South Mountain 6th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "South Mountain 7th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "South Mountain 8th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Eagle Crest 1st Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Eagle Crest 2nd Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Eagle Crest 3rd Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Eagle Crest 4th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Suncrest 1st Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Suncrest 2nd Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Suncrest 3rd Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Meadows 2nd Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Meadows 5th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Meadows 7th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{ name: "Draper 1st Ward", younger: "Alta", older: "Crescent Park" },
	{
		name: "Draper 2nd Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{ name: "Draper 3rd Ward", younger: "Alta", older: "Crescent Park" },
	{
		name: "Draper 4th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Draper 5th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Draper 6th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{ name: "Draper 7th Ward", younger: "Alta", older: "Crescent Park" },
	{
		name: "Draper 8th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{ name: "Draper 9th Ward", younger: "Alta", older: "Crescent Park" },
	{
		name: "Draper 10th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Draper 11th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{ name: "Draper 12th Ward", younger: "Alta", older: "Crescent Park" },
	{
		name: "Draper 15th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Draper 16th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{ name: "Draper 17th Ward", younger: "Alta", older: "Crescent Park" },
	{
		name: "Riverview 8th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{
		name: "Riverview 10th Ward",
		younger: "South Mountain",
		older: "Willow Springs",
	},
	{ name: "Eastridge 1st Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Eastridge 2nd Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Eastridge 3rd Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Eastridge 4th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Eastridge 5th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Eastridge 6th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Eastridge 7th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Eastridge 8th Ward", younger: "Alta", older: "Crescent Park" },
	{
		name: "Eastridge 9th Ward (Spanish)",
		younger: "Alta",
		older: "Crescent Park",
	},
	{ name: "Crescent 6th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent 9th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent 10th Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Crescent 11th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent 12th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent 14th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent 16th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent 18th Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Crescent 22nd Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent 23rd Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent 24th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent 25th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent 28th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent 30th Ward", younger: "Alta", older: "Crescent Park" },
	{
		name: "Crescent 1st Ward (Spanish)",
		younger: "Alta",
		older: "Crescent Park",
	},
	{ name: "Crescent View Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Crescent Ridge 2nd Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent Ridge 3rd Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent Ridge 4th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent Ridge 5th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent Ridge 6th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Crescent Ridge 7th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "River View 1st Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "River View 2nd Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "River View 3rd Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "River View 4th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "River View 5th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "River View 9th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Hidden Valley 4th Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Alta Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Amaryllis Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Larkspur Ward", younger: "Alta", older: "Crescent Park" },
	{
		name: "Mountain Peak Ward (Portuguese)",
		younger: "Alta",
		older: "Crescent Park",
	},
	{ name: "Sandy Creek Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Savannah Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Windy Peak Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Buttercup Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Glendover Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Heytesbury Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Wildflower Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Ashley Park Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Eastdell Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Falcon Hill Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Karalee Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Parkview Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Sego Lily Ward", younger: "Alta", older: "Crescent Park" },
	{ name: "Dimple Dell Ward", younger: "Lone Peak", older: "Willow Creek" },
	{
		name: "Dimple Dell Park Ward",
		younger: "Lone Peak",
		older: "Willow Creek",
	},
	{ name: "Lone Hollow Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Northridge Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Wanderwood Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Bell Canyon Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Glacial Park Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Granite Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Granite Ridge Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Granite View Ward", younger: "Lone Peak", older: "Willow Creek" },
	{
		name: "Little Cottonwood Ward",
		younger: "Lone Peak",
		older: "Willow Creek",
	},
	{ name: "Hegessy Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Legacy Park Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Meadowlark Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Newcastle Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Quail Hollow Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Willow Hills Ward", younger: "Lone Peak", older: "Willow Creek" },
	{
		name: "Willow Creek 1st Ward",
		younger: "Lone Peak",
		older: "Willow Creek",
	},
	{
		name: "Willow Creek 2nd Ward",
		younger: "Lone Peak",
		older: "Willow Creek",
	},
	{
		name: "Willow Creek 3rd Ward",
		younger: "Lone Peak",
		older: "Willow Creek",
	},
	{
		name: "Willow Creek 4th Ward",
		younger: "Lone Peak",
		older: "Willow Creek",
	},
	{
		name: "Willow Creek 6th Ward",
		younger: "Lone Peak",
		older: "Willow Creek",
	},
	{
		name: "Willow Creek 7th Ward",
		younger: "Lone Peak",
		older: "Willow Creek",
	},
	{
		name: "Willow Creek 9th Ward",
		younger: "Lone Peak",
		older: "Willow Creek",
	},
	{ name: "Lone Peak 1st Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Lone Peak 2nd Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Lone Peak 3rd Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Lone Peak 4th Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Lone Peak 5th Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Albion Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Indian Ridge Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Aspen Hills Ward", younger: "Lone Peak", older: "Willow Creek" },
	{ name: "Highland Ward", younger: "Lone Peak", older: "Willow Creek" },
];

// Generate ward cards HTML
const wardCards = wards
	.map(
		(ward) => `
	<div class="bg-white rounded-lg shadow-md overflow-hidden">
		<img
			src="${ward.image}"
			alt="${ward.name}"
			class="w-full h-48 object-cover" />
		<div class="p-4 text-center">
			<h3 class="text-lg font-semibold mb-2">${ward.name}</h3>
			<p class="text-gray-600 text-sm mb-1">
				Meeting Time: ${ward.meetingTime}
			</p>
			<p class="text-gray-600 text-sm mb-4">
				Address: ${ward.address}
			</p>
			<a
				href="${ward.link}"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded transition-colors"
				>Learn More</a
			>
		</div>
	</div>
`
	)
	.join("");

// Generate feeder wards options HTML
const feederWardOptions = feederWards
	.map((ward) => `<option value="${ward.name}">${ward.name}</option>`)
	.join("");

// Calculate YSA Ward based on feeder ward and age group
function calculateYsaWard(feederWardName: string, ageGroup: string): string {
	const feederWard = feederWards.find((ward) => ward.name === feederWardName);

	if (!feederWard) {
		return "Please select a valid feeder ward.";
	}

	if (ageGroup === "18-25") {
		return `${feederWard.younger} Ward 18-25`;
	} else if (ageGroup === "26-35") {
		return `${feederWard.older} Ward 26-35`;
	} else {
		return "Please select a valid age group.";
	}
}

function rendorResult() {
	const resultDiv = document.getElementById("result")!;
	const feederWardSelect = document.querySelector("select")!;
	const ageGroupButtons = document.getElementsByName(
		"ageGroup"
	) as NodeListOf<HTMLButtonElement>;

	const feederWard = feederWardSelect.value;
	let ageGroup = "";
	ageGroupButtons.forEach((button) => {
		if (button.classList.contains("selected")) {
			ageGroup = button.value;
		}
	});

	const ysaWard = calculateYsaWard(feederWard, ageGroup);
	resultDiv.textContent = `Your YSA Ward is: ${ysaWard}`;
}

// Add event listener to "Find My Ward" button
document.addEventListener("DOMContentLoaded", () => {
	const findWardButton = document.querySelector("button.bg-cyan-500")!;
	findWardButton.addEventListener("click", rendorResult);

	// Add toggle functionality for age group buttons
	const ageGroupButtons = document.getElementsByName(
		"ageGroup"
	) as NodeListOf<HTMLButtonElement>;
	ageGroupButtons.forEach((button) => {
		button.addEventListener("click", () => {
			ageGroupButtons.forEach((btn) => btn.classList.remove("selected"));
			button.classList.add("selected");
		});
	});
});

// Create main content
const main = document.createElement("main");
main.className = "p-4 mb-4";
main.innerHTML = `
	<h2 class="text-3xl font-bold text-center mb-4">Our Wards</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
		${wardCards}
	</div>

    <h2 class="text-2xl font-bold text-center mt-10">Find Your YSA Ward</h2>
    <div class="text-center text-sm text-gray-500 mt-6">
        <p>Search your home (feeder) ward or stake. Choose your age group and we’ll point you to the right YSA ward.</p>
       
        <p class="block mt-4">Feeder Ward:</p>
         <select class="mt-4 p-2 border border-gray-300 rounded">
            <option value="" disabled selected>Select your feeder ward</option>
            ${feederWardOptions}
        </select>
        <p class="block mt-4">Age Group:</p>
        <input type="radio" name="ageGroup" value="18-25" class="mx-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 checked:bg-gray-100">18-25
        <input type="radio" name="ageGroup" value="26-35" class="mx-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 checked:bg-gray-100">26-35

        <div class="mt-6"> 
            <button class="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded transition-colors">Find My Ward</button>
        </div>
        <div id="result" class="mt-4 text-lg font-semibold"></div>
     </div>

`;

// Append header, main, and footer to app
app.appendChild(header);
app.appendChild(main);
app.appendChild(footer);
