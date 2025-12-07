import "./style.css";
import { setupHeader } from "./format/header";
import { setupFooter } from "./format/footer";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

let header = setupHeader();
let footer = setupFooter();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

${header.outerHTML}
<main class="flex flex-col items-center justify-center gap-4 pb-4">
  <section class="heroSlider w-full relative">
    <div class="swiper max-h-96" style="clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%)">
        <div class="swiper-wrapper relative">
            <div class="swiper-slide">
                <img src="/StakeWebsite/hero1.jpeg" alt="Hero Image 1" class="w-full h-96 object-cover object-center" >
            </div>
            <div class="swiper-slide">
                <img src="/StakeWebsite/hero2.jpeg" alt="Hero Image 2" class="w-full h-96 object-cover object-center" >
            </div>
            <div class="swiper-slide">
                <img src="/StakeWebsite/hero3.jpeg" alt="Hero Image 3" class="w-full h-96 object-cover object-center" >
            </div>
            <div class="swiper-slide">
                <img src="/StakeWebsite/hero4.jpeg" alt="Hero Image 4" class="w-full h-96 object-cover object-center" >
            </div>

        </div>

    </div>
            <div class="swiper-pagination"></div>

  </section>

  <section class="upcomingEvents max-w-7xl mx-auto">
    <h2 class="text-3xl font-bold mb-4">Upcoming Events</h2>
    <iframe src="https://calendar.google.com/calendar/embed?src=87d84b26256aab9ebb2412356659beb07f21202cfc1ae9335b1408c5a1349f03%40group.calendar.google.com&ctz=America%2FDenver" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
  </section>

  <section class="stakeCenter">
    <h2 class="text-3xl font-bold mb-4">Stake Center Location</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d757.9571842925571!2d-111.86366440882615!3d40.54537272639968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875287007cf569c5%3A0x8d6718edbc63d28b!2sDraper%20YSA%20Stake%20Center!5e0!3m2!1sen!2sus!4v1765143414932!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>
</main>

 ${footer.outerHTML}
`;

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
