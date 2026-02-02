# EPIC 2

**Objective:** This epic consists in creating a new route: /animated-showcase. This route shuold replicate the final result of /showcase, but with entrance animations

**Methodology:** Each feature will be one step of the page construction and should be properly tested before the previous one.

## Features

- **2.1 - image and design sections:** This stage should have only the image and design sections, no logo, no clouds, no glowing dots nor modals, no scroll message. Just the background image and de Logo Design and Expedition Briefing Cards ... the scrolling effect between each section should fell the same as in the current /showcase page.

- **2.2 - Clouds:** The clouds are inserted. In this section, the final expected result is a page that loads with no entrance specific animations, but with the clouds. The page should work just like the current /showcase page, but with no glowing dots, modals, scroll or logo ... just the image, design sections and clouds layer. Clouds should be exactly the same as in /showcase, moving from right to left.

- **2.3 - Logo:** This section sould introduce the logo entrance. The logo entrance should start 0.3 seconds after entering the page ... we need to make sure that the image and clouds are already in place and that those do not present any special entrance effects before the logo starts to enter. The logo entrance should be a fadein with a smooth slidein from the top. The whole thing should take 0.3 before it starts and the animation should be 0.5s from strat to finish ... the total will be a page finalized in 0.8 seconds ... no dots nor scroll yet

- **2.3 - Dots with Modals:** This section the dots enters the page ... the dots entrance should begin right after the logo entrance finilizes. The dots should fade in one by one... The fade in animation should be it enters with a glich and shows the labels ... each dot entrance should take 0.5 seconds ... at the end of each dot entrance the labels should disapear and only the glowing dots should be there .... after all dots have entered, the page should work like the current showcase, meaning that when hovering over the dots, the title/labels are shown and when clicking in the dots, a modal should open.

- **2.4 - Scroll Button:** This feature will introduce the final element of the page. The scroll button. The scroll button should be whiter than the current one for more contrast and the message should be "scroll" instead of "scroll to explore". The scroll button should be a quick fade in that starts after all the dots are finalized. The scroll button should have a glitch and a slight bounce to it.


## Observation

- Do not break what's working: do not chance anything in /showcase ... create components that are specific to /animated-showcase page.

- organize components by page: create a folder with /showcase specific components and a folder with /animated-showcase specific components.

- copy and adapt components from /showcase. The first step of each implementation will be to analyze the components from /showcase, copy it, plan adaptations and then execute it.

- only commit with human specific request.