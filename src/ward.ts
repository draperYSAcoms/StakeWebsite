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
		image: "/StakeWebsite/altaWard.webp",
		meetingTime: "10:30 - 12:30",
		address: "11350 S 1000 E Sandy Ut. 84094",
		link: "https://local.churchofjesuschrist.org/en/units/us/ut/alta-ysa-ward-18-25",
		feeders: ["", "", ""],
	},
	{
		name: "Lone Peak Ward 18-25",
		image: "/StakeWebsite/lonePeakWard.webp",
		meetingTime: "10:30 - 12:30",
		address: "11196 S Wasatch Boulevard Sandy, Utah 84092",
		link: "https://local.churchofjesuschrist.org/en/units/us/ut/lone-peak-ysa-ward-18-25",
		feeders: ["", "", ""],
	},
	{
		name: "South Mountain Ward 18-25",
		image: "/StakeWebsite/southMountain.webp",
		meetingTime: "12:00 - 2:00",
		address: "116 E 11400 S Draper, Utah 84070",
		link: "https://local.churchofjesuschrist.org/en/units/us/ut/south-mountain-ysa-ward-18-25",
		feeders: ["", "", ""],
	},
	{
		name: "Crescent Park Ward 26-35",
		image: "/StakeWebsite/crescentPark.webp",
		meetingTime: "12:00 - 2:00",
		address: "11250 S. 1000 E Sandy Utah 84094",
		link: "https://local.churchofjesuschrist.org/en/units/us/ut/crescent-park-ysa-ward-26-35",
		feeders: ["", "", ""],
	},
	{
		name: "Willow Creek Ward 26-35",
		image: "/StakeWebsite/willowCreek.webp",
		meetingTime: "10:30 - 12:30",
		address: "1970 E. Viscounti Dr. Sandy, Utah 84092",
		link: "https://local.churchofjesuschrist.org/en/units/us/ut/willow-creek-ysa-ward-26-35",
		feeders: ["", "", ""],
	},
	{
		name: "Willow Springs Ward 26-35",
		image: "/StakeWebsite/willowSprings.webp",
		meetingTime: "10:30 - 12:30",
		address: "166 E 11400 S Draper, Utah 84070",
		link: "https://local.churchofjesuschrist.org/en/units/us/ut/willow-springs-ysa-ward-26-35",
		feeders: ["", "", ""],
	},
];

//Feeder Wards Data
const feederWards = [
	"Corner Canyon 1st Ward",
	"Corner Canyon 2nd Ward",
	"Corner Canyon 3rd Ward",
	"Corner Canyon 4th Ward",
	"Corner Canyon 5th Ward",
	"Corner Canyon 6th Ward",
	"Corner Canyon 7th Ward",
	"Corner Canyon 8th Ward",
	"Corner Canyon 9th Ward",
	"South Mountain 1st Ward",
	"South Mountain 2nd Ward",
	"South Mountain 3rd Ward",
	"South Mountain 4th Ward",
	"South Mountain 5th Ward",
	"South Mountain 6th Ward",
	"South Mountain 7th Ward",
	"South Mountain 8th Ward",
	"Eagle Crest 1st Ward",
	"Eagle Crest 2nd Ward",
	"Eagle Crest 3rd Ward",
	"Eagle Crest 4th Ward",
	"Suncrest 1st Ward",
	"Suncrest 2nd Ward",
	"Suncrest 3rd Ward",
	"Meadows 2nd Ward",
	"Meadows 5th Ward",
	"Meadows 7th Ward",
	"Draper 1st Ward",
	"Draper 2nd Ward",
	"Draper 3rd Ward",
	"Draper 4th Ward",
	"Draper 5th Ward",
	"Draper 6th Ward",
	"Draper 7th Ward",
	"Draper 8th Ward",
	"Draper 9th Ward",
	"Draper 10th Ward",
	"Draper 11th Ward",
	"Draper 12th Ward",
	"Draper 15th Ward",
	"Draper 16th Ward",
	"Draper 17th Ward",
	"Riverview 8th Ward",
	"Riverview 10th Ward",
	"Eastridge 1st Ward",
	"Eastridge 2nd Ward",
	"Eastridge 3rd Ward",
	"Eastridge 4th Ward",
	"Eastridge 5th Ward",
	"Eastridge 6th Ward",
	"Eastridge 7th Ward",
	"Eastridge 8th Ward",
	"Eastridge 9th Ward (Spanish)",
	"Crescent 6th Ward",
	"Crescent 9th Ward",
	"Crescent 10th Ward",
	"Crescent 11th Ward",
	"Crescent 12th Ward",
	"Crescent 14th Ward",
	"Crescent 16th Ward",
	"Crescent 18th Ward",
	"Crescent 22nd Ward",
	"Crescent 23rd Ward",
	"Crescent 24th Ward",
	"Crescent 25th Ward",
	"Crescent 28th Ward",
	"Crescent 30th Ward",
	"Crescent 1st Ward (Spanish)",
	"Crescent View Ward",
	"Crescent Ridge 2nd Ward",
	"Crescent Ridge 3rd Ward",
	"Crescent Ridge 4th Ward",
	"Crescent Ridge 5th Ward",
	"Crescent Ridge 6th Ward",
	"Crescent Ridge 7th Ward",
	"River View 1st Ward",
	"River View 2nd Ward",
	"River View 3rd Ward",
	"River View 4th Ward",
	"River View 5th Ward",
	"River View 9th Ward",
	"Hidden Valley 4th Ward",
	"Alta Ward",
	"Amaryllis Ward",
	"Larkspur Ward",
	"Mountain Peak Ward (Portuguese)",
	"Sandy Creek Ward",
	"Savannah Ward",
	"Windy Peak Ward",
	"Buttercup Ward",
	"Glendover Ward",
	"Heytesbury Ward",
	"Wildflower Ward",
	"Ashley Park Ward",
	"Eastdell Ward",
	"Falcon Hill Ward",
	"Karalee Ward",
	"Parkview Ward",
	"Sego Lily Ward",
	"Dimple Dell Ward",
	"Dimple Dell Park Ward",
	"Lone Hollow Ward",
	"Northridge Ward",
	"Wanderwood Ward",
	"Bell Canyon Ward",
	"Glacial Park Ward",
	"Granite Ward",
	"Granite Ridge Ward",
	"Granite View Ward",
	"Little Cottonwood Ward",
	"Hegessy Ward",
	"Legacy Park Ward",
	"Meadowlark Ward",
	"Newcastle Ward",
	"Quail Hollow Ward",
	"Willow Hills Ward",
	"Willow Creek 1st Ward",
	"Willow Creek 2nd Ward",
	"Willow Creek 3rd Ward",
	"Willow Creek 4th Ward",
	"Willow Creek 6th Ward",
	"Willow Creek 7th Ward",
	"Willow Creek 9th Ward",
	"Lone Peak 1st Ward",
	"Lone Peak 2nd Ward",
	"Lone Peak 3rd Ward",
	"Lone Peak 4th Ward",
	"Lone Peak 5th Ward",
	"Albion Ward",
	"Indian Ridge Ward",
	"Aspen Hills Ward",
	"Highland Ward",
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
	.map((ward) => `<option value="${ward}">${ward}</option>`)
	.join("");

// Calculate YSA Ward based on feeder ward and age group (placeholder logic)
// function calculateYsaWard(feederWard: string, ageGroup: string): string {
// 	// Placeholder logic for demonstration purposes only
// 	if (ageGroup === "18-25") {
// 		return "Alta Ward 18-25";
// 	} else if (ageGroup === "26-35") {
// 		return "Crescent Park Ward 26-35";
// 	} else {
// 		return "Please select a valid age group.";
// 	}
// }

// Create main content
const main = document.createElement("main");
main.className = "p-4 mb-4";
main.innerHTML = `
	<h2 class="text-3xl font-bold text-center mb-4">Our Wards</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
		${wardCards}
	</div>
<!--
    <h2 class="text-2xl font-bold text-center mt-10">Find Your YSA Ward</h2>
    <div class="text-center text-sm text-gray-500 mt-6">
        <p>Search your home (feeder) ward or stake. Choose your age group and we’ll point you to the right YSA ward.</p>
       
        <p class="block mt-4">Feeder Ward:</p>
         <Select class="mt-4 p-2 border border-gray-300 rounded">
            <option value="" disabled selected>Select your feeder ward</option>
            ${feederWardOptions}
        </Select>

        <p class="block mt-4">Age Group:</p>
        <button type="radio" name="ageGroup" value="18-25" class="mx-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">18-25</button>
        <button type="radio" name="ageGroup" value="26-35" class="mx-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">26-35</button>

        <div class="mt-6"> 
            <button class="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded transition-colors">Find My Ward</button>
        </div>
        <div id="result" class="mt-4 text-lg font-semibold"></div>
     </div>
     -->
`;

// Append header, main, and footer to app
app.appendChild(header);
app.appendChild(main);
app.appendChild(footer);
