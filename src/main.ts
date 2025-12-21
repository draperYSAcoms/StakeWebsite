import "./style.css";
import { setupHeader } from "./format/header";
import { setupFooter } from "./format/footer";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
const header = setupHeader();
const footer = setupFooter();

// Create main content
const main = document.createElement("main");
main.className = "flex flex-col items-center justify-center gap-10 pb-4";
main.innerHTML = `
  <section class="heroSlider w-full relative">
    <div class="swiper max-h-96" style="clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%)">
        <div class="swiper-wrapper relative">
            <div class="swiper-slide">
                <img src="/StakeWebsite/hero1.jpg" alt="Hero Image 1" class="w-full h-96 object-cover object-bottom" >
            </div>
            <div class="swiper-slide">
                <img src="/StakeWebsite/hero2.jpg" alt="Hero Image 2" class="w-full h-96 object-cover object-center" >
            </div>
            <div class="swiper-slide">
                <img src="/StakeWebsite/hero3.jpg" alt="Hero Image 3" class="w-full h-96 object-cover object-center" >
            </div>
            <div class="swiper-slide">
                <img src="/StakeWebsite/hero4.jpg" alt="Hero Image 4" class="w-full h-96 object-cover object-center" >
            </div>

        </div>

    </div>
            <div class="swiper-pagination"></div>

  </section>

  <section class="upcomingEvents w-full max-w-3xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-4">Upcoming Events</h2>
    <div class="relative w-full ">
<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&mode=AGENDA&showPrint=0&title=Stake%20Events&src=ODdkODRiMjYyNTZhYWI5ZWJiMjQxMjM1NjY1OWJlYjA3ZjIxMjAyY2ZjMWFlOTMzNWIxNDA4YzVhMTM0OWYwM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23a79b8e&color=%230b8043" style="border:solid 1px #777" width="768" height="450" frameborder="0" scrolling="no"></iframe>    </div>
  </section>

  <section class="stakeCenter w-full max-w-3xl mx-auto px-4">
    <h2 class="text-3xl font-bold mb-4">Stake Center Location</h2>
    <div class="relative w-full " style="padding-bottom: 56.25%; max-height: 450px;">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1515.9069386559056!2d-111.863418!3d40.545701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875287007cf569c5%3A0x8d6718edbc63d28b!2sDraper%20YSA%20Stake%20Center!5e0!3m2!1sen!2sus!4v1766355761687!5m2!1sen!2sus" width="768" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    </div>
  </section>
`;

// Append header, main, and footer to app
app.appendChild(header);
app.appendChild(main);
app.appendChild(footer);

// Initialize Swiper
new Swiper(".swiper", {
	modules: [Navigation, Pagination, Autoplay],
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
