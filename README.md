# Hidden Talent

A local front-end football scouting concept, inspired by the supplied sketches and La Liga lineup references.

Open **http://localhost/abbbbb/?v=20261112-profile-stars-2#home** while Apache is running in XAMPP. The site is served directly from C:/xampp/htdocs/abbbbb. No build step, Node server, MySQL database or PHP processing is required.

The homepage follows the user's Paint sketch: a white half-pitch with wine-red boundaries, a centre semicircle and a simple goal, seen diagonally from the side. Six light-grey cross-field lines divide the half-pitch into seven equal 7.5-metre sections, following the same affine perspective. They sit beneath the red boundaries and player cards. Lighter red lines mark the penalty area and six-yard box. The formation uses the available page width with small responsive side margins. All eleven portrait cards have exactly the same dimensions; no player has a depth scale or different rotation. Homepage cards display the formation position instead of the squad number, and potential appears as a five-star scale with half stars. The fictional sample ratings 91+ display five stars, 89-90 display four and a half, and the remaining lineup players display four. The defenders, midfielders and forwards follow parallel formation lines in a fixed 4-3-3, with gaps between every card. One affine map supplies both the field markings and card-foot positions. The goalkeeper stands centrally in front of the goal. Cards gently float at rest. Hovering a card smoothly lifts it and holds it still while the other cards keep floating. Leaving the card smoothly lowers it and resumes its floating phase. Keyboard focus has the same lift behavior, and reduced-motion settings remove animation and transitions.

The other screens are Players, individual profiles, Compare and Favourites. Search, filters and selection controls change only the browser view. All players, clubs and statistics are fictional. Changes reset on refresh; there is no backend or real scouting model.

Edit app.js for records and lineup positions, lineup.css for the homepage, styles.css for shared styles, and index.html for the shell. Assets and fonts are local.

## Active visual assets

- assets/pitch-white-red.svg is the active code-drawn 1800 by 1000 half-pitch. It contains a pure white surface and red lines in the perspective of the supplied drawing. All four corners and the centre semicircle stay within the frame. There is no stadium or grass photograph on the homepage.
- assets/players.png is a six-person fictional portrait sheet, also created with the built-in image generation tool. Its prompt is in assets/portrait-prompt.txt. The six portraits are reused across twelve sample records.
- Earlier field and stadium variants remain in assets as unused reference assets. Their generation prompts remain beside them.
- Manrope and Barlow Condensed are distributed with their SIL Open Font License files.

Pitch dimensions follow [IFAB Law 1](https://www.theifab.com/laws/latest/the-field-of-play/). The XAMPP dashboard and server configuration are preserved.

Player profiles show current ability, potential ability and each key attribute using the same five-star display scale with half stars. Potential stars match the homepage cards. Wine-coloured stars denote current ability and attributes, while gold denotes potential. Ratings are a presentation of the fictional sample data; match statistics remain quantitative. Profile-specific styles are in ratings.css.
