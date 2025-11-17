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
<main class="flex flex-col items-center justify-center gap-4">
  <section class="heroSlider w-full relative">
    <div class="swiper max-h-96" style="clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%)">
        <div class="swiper-wrapper relative">
            <div class="swiper-slide">
                <img src="/hero1.jpeg" alt="Hero Image 1" class="w-full h-96 object-cover object-center" >
            </div>
            <div class="swiper-slide">
                <img src="/hero2.jpeg" alt="Hero Image 2" class="w-full h-96 object-cover object-center" >
            </div>
            <div class="swiper-slide">
                <img src="/hero3.jpeg" alt="Hero Image 3" class="w-full h-96 object-cover object-center" >
            </div>
            <div class="swiper-slide">
                <img src="/hero4.jpeg" alt="Hero Image 4" class="w-full h-96 object-cover object-center" >
            </div>

        </div>

    </div>
            <div class="swiper-pagination absolute bottom-20 bg-Secondary"></div>

  </section>

  <section class="wardDiscovery max-w-7xl mx-auto">
    <h2 class="text-3xl font-bold mb-4">Discover Your Ward</h2>
  </section>

  <section class="upcomingEvents max-w-7xl mx-auto">
    <h2 class="text-3xl font-bold mb-4">Upcoming Events</h2>
  </section>

  <section class="testimonials">
    <h2 class="text-3xl font-bold mb-4">Testimonials</h2>
  </section>

  <section class="stakeCenter">
    <h2 class="text-3xl font-bold mb-4">Stake Center Location</h2>
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
