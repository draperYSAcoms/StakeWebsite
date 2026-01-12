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
                <img src="/hero1.jpg" alt="Hero Image 1" class="w-full h-96 object-cover object-bottom" >
            </div>
            <div class="swiper-slide">
                <img src="/hero2.jpg" alt="Hero Image 2" class="w-full h-96 object-cover object-center" >
            </div>
            <div class="swiper-slide">
                <img src="/hero3.jpg" alt="Hero Image 3" class="w-full h-96 object-cover object-center" >
            </div>
            <div class="swiper-slide">
                <img src="/hero4.jpg" alt="Hero Image 4" class="w-full h-96 object-cover object-center" >
            </div>

        </div>

    </div>
            <div class="swiper-pagination"></div>

  </section>

  <section class="upcomingEvents w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
    
    <div class="announcements rounded-lg p-6 flex flex-col col-span-1 lg:col-span-2"> 
      <h2 class="text-3xl font-bold mb-4">Announcements</h2>
      <div class="w-full flex-1 flex justify-center overflow-hidden aspect-video">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRoPoP7Tj74AljY1zwsPf0S5OFC4vupiWvmD_fbqhvDZ9OyZyDPK3pHC9I3osDw0GznzcWopM2Z2fv0/pubembed?start=true&loop=true&delayms=7000" frameborder="0" class="w-full h-[calc(100%+36px)]" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
    </div>
  
    <div class="rounded-lg p-6 flex flex-col col-span-1">
      <h2 class="text-3xl font-bold mb-4">Upcoming Events</h2>
      <div class="w-full flex-1 flex justify-center overflow-hidden aspect-3/4">
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&showPrint=0&mode=AGENDA&src=ODdkODRiMjYyNTZhYWI5ZWJiMjQxMjM1NjY1OWJlYjA3ZjIxMjAyY2ZjMWFlOTMzNWIxNDA4YzVhMTM0OWYwM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23a79b8e&color=%230b8043" class="w-full aspect-[3/4] border-0" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
  </section>

  <section class="stakeCenter w-full max-w-7xl mx-auto px-4">
    <div class="w-full lg:w-2/3 p-6">
      <h2 class="text-3xl font-bold mb-4">Stake Center Location</h2>
      <div class="aspect-video w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1515.9069386559056!2d-111.863418!3d40.545701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875287007cf569c5%3A0x8d6718edbc63d28b!2sDraper%20YSA%20Stake%20Center!5e0!3m2!1sen!2sus!4v1766355761687!5m2!1sen!2sus" class="w-full h-full border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>  
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
