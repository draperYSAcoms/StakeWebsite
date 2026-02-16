# Draper YSA Stake Website (Non-Technical Guide)

This project is a small website with three pages:

- Home page (the main landing page)
- Wards page
- Gathering Place page

The content on each page is built with small TypeScript files. You do not need to know coding to change the text, links, or images, but you will edit the file that matches the page you want to update.

## Quick "Where Do I Edit" Map

- Home page content: [src/main.ts](src/main.ts)
- Wards page content and ward list: [src/ward.ts](src/ward.ts)
- Gathering Place page content: [src/gatherPlace.ts](src/gatherPlace.ts)
- Header (top navigation) on every page: [src/format/header.ts](src/format/header.ts)
- Footer (social links and disclaimer) on every page: [src/format/footer.ts](src/format/footer.ts)
- Site-wide styles and colors: [src/style.css](src/style.css)
- Images and icons: [public/](public/)

## How the Pages Are Connected

Each page is a small HTML file that loads its matching TypeScript file:

- Home page HTML: [index.html](index.html) -> loads [src/main.ts](src/main.ts)
- Wards page HTML: [ward.html](ward.html) -> loads [src/ward.ts](src/ward.ts)
- Gathering Place HTML: [gatheringPlace.html](gatheringPlace.html) -> loads [src/gatherPlace.ts](src/gatherPlace.ts)

## What You Can Edit (No Coding Experience Needed)

### Home Page (src/main.ts)

You can edit:

- Hero slider images (the big rotating photos)
- Announcements section title
- Announcements slideshow link
- Upcoming Events calendar link
- Stake Center map link

The hero images come from the public folder. The current names are:

- /hero1.jpg
- /hero2.jpg
- /hero3.jpg
- /hero4.jpg

To change those, replace the files in [public/](public/) with new images using the same names.

### Wards Page (src/ward.ts)

You can edit:

- Ward cards (name, image, meeting time, address, and link)
- The feeder ward list for the "Find Your YSA Ward" tool

Look for these two lists in the file:

- `const wards = [...]` for the ward cards
- `const feederWards = [...]` for the feeder ward tool

Images used in the ward cards also live in [public/](public/) (for example `altaWard.webp`).

### Gathering Place Page (src/gatherPlace.ts)

You can edit:

- The main title text
- The description text
- Meeting time
- Address

### Header and Footer (all pages)

- Header text and menu links: [src/format/header.ts](src/format/header.ts)
- Footer social media links and disclaimer: [src/format/footer.ts](src/format/footer.ts)

## Parts That Use Iframes (External Embedded Content)

These are special sections that show content from other websites. To update them, change the URL inside the `src="..."` line in [src/main.ts](src/main.ts).

- Announcements slideshow (Google Slides embed)
- Upcoming Events (Google Calendar embed)
- Stake Center Location (Google Maps embed)

Tip: If the embedded content looks wrong, the fix is usually on the external site (Slides, Calendar, Maps), not in this code.

## Most Used Tailwind Classes (Plain-English Meaning)

These are the short class names you will see often. They control layout and spacing.

- `w-full` = full width
- `max-w-7xl`, `max-w-6xl`, `max-w-4xl` = set a max width so content does not stretch too wide
- `mx-auto` = center content horizontally
- `px-4`, `p-4`, `p-6` = padding (space inside a box)
- `mb-4`, `mt-4`, `gap-6`, `gap-8` = spacing between items
- `grid`, `grid-cols-1`, `lg:grid-cols-3` = grid layout and columns
- `flex`, `flex-col`, `items-center`, `justify-center` = flex layout and alignment
- `rounded-lg` = rounded corners
- `shadow-md` = soft shadow
- `text-3xl`, `text-lg`, `text-sm` = text size
- `font-bold`, `font-semibold` = text weight
- `bg-cyan-200/60`, `bg-cyan-500` = background color

If you change text or images and the layout still looks fine, you probably do not need to touch these classes.

## Images and Icons

All images and icons are in the [public/](public/) folder. If you replace a file there and keep the same file name, the site will use the new image automatically.

## Common Edits Checklist

- Update a home page hero image -> replace file in [public/](public/)
- Update ward info -> edit `const wards` in [src/ward.ts](src/ward.ts)
- Update feeder ward tool -> edit `const feederWards` in [src/ward.ts](src/ward.ts)
- Update Gathering Place details -> edit [src/gatherPlace.ts](src/gatherPlace.ts)
- Update social links -> edit [src/format/footer.ts](src/format/footer.ts)
- Update menu links -> edit [src/format/header.ts](src/format/header.ts)

If you want help with a specific change, tell me what you want updated and I can point to the exact line.
