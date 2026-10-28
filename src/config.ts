// Everything you are likely to change lives here: the name, the contact address, and each app's text and link.

const contactEmail = 'stevewasielewski@gmail.com';
const contactSubject = '[Waz Apps] Feedback';

export const site = {
  /** A working name. Change it here and it changes everywhere. */
  name: 'Waz Apps',
  tagline: 'Simple apps for the way you actually work, play, cook and fish. Nothing to download from a store.',
  /** Where feedback and questions go (it appears on the Support, Terms, Privacy and Refunds pages). */
  contactEmail,
  /** Every email link on the site pre-fills this subject, so a Gmail filter can match it ("subject:[Waz Apps]"). */
  contactSubject,
  /** The mailto: link used for every contact and feedback link. */
  contactHref: `mailto:${contactEmail}?subject=${encodeURIComponent(contactSubject)}`,
  /** Show a "draft" notice on the legal pages until they have been reviewed. */
  legalReviewed: false,
};

export interface App {
  slug: string;
  name: string;
  short: string;
  audience: string;
  accent: string;
  icon: string;
  /** Where the live web app is. */
  appUrl: string;
  status: string;
  headline: string;
  intro: string;
  features: { title: string; text: string }[];
  good: string[];
  pricing: { title: string; text: string };
  /** Honest notes about what isn't ready yet. */
  notYet?: string;
  /** Set when the app asks people to sign up: what the first sign-up looks like. */
  account?: string;
}

export const apps: App[] = [
  {
    slug: 'simple-kennel',
    name: 'Simple Kennel',
    short: 'Boarding, schedule, vet records and invoices for a small kennel.',
    audience: 'For small boarding kennels',
    accent: '#7B5EA7',
    icon: 'img/simple-kennel.png',
    appUrl: 'https://stevewaz.github.io/simple_kennel_blazor/',
    status: 'Early access',
    headline: 'Run your kennel from one simple board.',
    intro: 'Bookings, customers and pets, vaccination records, check-in and check-out, and invoices, all in one place, on any phone, tablet or computer. It keeps working when the internet drops.',
    features: [
      { title: 'A schedule board that catches conflicts', text: 'See every run at a glance, with morning and afternoon half-days. Double-bookings are caught for you, and a customer\'s own pets can share a run.' },
      { title: 'Customers and pets', text: 'Profiles with photos and notes, so anyone on your team can see who is who.' },
      { title: 'Vet documents and vaccine checks', text: 'Attach records to each pet and see at a glance whose vaccines are due, with an optional required-Bordetella rule.' },
      { title: 'Check-in and check-out', text: 'Check a pet in and the invoice is made for you. Check out when they go home.' },
      { title: 'Invoices and payments', text: 'Part payments, tax, an optional card surcharge, and a printable invoice. Export to QuickBooks as a CSV.' },
      { title: 'Rates that match how you charge', text: 'Price per pet per night, by how many pets share a run. Discounts for seniors, military or your own custom one.' },
      { title: 'Your whole team', text: 'The owner invites staff by email, and everyone sees the same up-to-date schedule on their own device.' },
      { title: 'Works offline', text: 'Everything is saved on the device first and syncs when it can, so a bad connection never stops you.' },
    ],
    good: ['Install it on any device with no app store', 'Syncs between your staff\'s devices', 'Your data stays yours: export it any time'],
    pricing: { title: 'Free for now', text: 'Free while we are in early access, for your whole team. A simple monthly price will be announced before launch, and you will get plenty of notice.' },
    notYet: 'Early access: we are working with our first kennels. Tell us what you need.',
    account: 'Simple Kennel uses an account so your whole team shares one schedule. The owner signs up first, then invites staff by email.',
  },
  {
    slug: 'coach-board',
    name: 'Coach Board',
    short: 'Design plays, keep the roster and schedule, and chat with your team.',
    audience: 'For coaches and teams',
    accent: '#2AA9E0',
    icon: 'img/coach-board.png',
    appUrl: 'https://stevewaz.github.io/coach_board_blazor/',
    status: 'Early access',
    headline: 'Draw the play. Then watch it run.',
    intro: 'A play designer that actually moves, plus your roster, schedule and team chat. Built for youth and school coaches.',
    features: [
      { title: 'A play designer', text: 'Draw runs, passes and shots with your finger, place your players and the other team, or start from a ready-made formation for your sport.' },
      { title: 'Plays that move', text: 'Press play and each player slides along their line, in the order you set. Lines with the same step move together, and passes send the ball.' },
      { title: 'Share a play', text: 'Send a picture, or an animated GIF, of the play to your players in a group chat.' },
      { title: 'Roster and numbers', text: 'Your players, numbers and positions, and the numbers carry onto the field when you place them.' },
      { title: 'Schedule and reminders', text: 'Games and practices on one calendar, with a reminder before each one in the iPhone, iPad and Android apps.' },
      { title: 'Team chat', text: 'One chat for the team that works when you are offline and sends when you are back.' },
      { title: 'Join with a code', text: 'Coaches start the team and players join with a short code. No accounts to set up for each one.' },
      { title: 'Eight sports', text: 'Girls\' and boys\' lacrosse, basketball, volleyball, field hockey, ice hockey, soccer, football and flag football.' },
    ],
    good: ['Install it on any device with no app store', 'Everyone on the team stays in step', 'Works offline'],
    pricing: { title: 'Free for now', text: 'Free for coaches while we are in early access. Pricing for teams will be announced before launch.' },
    account: 'The coach signs up and starts the team. Players join with a short code, so they do not need an account.',
  },
  {
    slug: 'heirloom',
    name: 'Heirloom',
    short: 'The family recipe book, with a meal plan and shopping list.',
    audience: 'For home cooks and families',
    accent: '#D67F48',
    icon: 'img/heirloom.png',
    appUrl: 'https://stevewaz.github.io/heirloom_blazor/',
    status: 'Free on your device',
    headline: 'The recipes that matter, kept together.',
    intro: 'Add, organize and pass down your family\'s recipes. Plan the week, and turn it into a shopping list sorted by store section.',
    features: [
      { title: 'Add recipes your way', text: 'Type one in, scan a printed or handwritten card with your camera, or bring one in from a web page.' },
      { title: 'Browse and search', text: 'Categories, tags and search, with your favorites and what you have cooked.' },
      { title: 'A week of meals', text: 'Plan what you are cooking each day, with everything in one view.' },
      { title: 'A shopping list that makes sense', text: 'Pull the ingredients from your planned meals into a list grouped by store section, so you walk the store once.' },
      { title: 'Photos on your device', text: 'Photos of the dish or the recipe card stay on your device.' },
      { title: 'Light and dark', text: 'Easy on the eyes, in the kitchen or at night.' },
      { title: 'Works offline', text: 'It is all on your device, so it works anywhere, even without a signal.' },
    ],
    good: ['Install it on any device with no app store', 'Works with no internet', 'Warm and simple'],
    pricing: { title: 'Free on your device', text: 'Using Heirloom on your own device is free. Sharing a family kitchen between phones is coming.' },
    notYet: 'Coming soon: share your recipes with family so everyone has the same book on their phone.',
    account: 'Sign up with your name and an email address. It is how you will share your recipe book with family once sharing arrives.',
  },
  {
    slug: 'family-game-night',
    name: 'Family Game Night',
    short: 'Trivia, drawing and word games for the whole family.',
    audience: 'For families',
    accent: '#2E7D32',
    icon: 'img/family-game-night.png',
    appUrl: 'https://stevewaz.github.io/family_game_night_blazor/',
    status: 'Solo games free',
    headline: 'Game night, whenever everyone is free.',
    intro: 'Eight quick games to play on your own or pass around the family. No one has to be online at the same moment.',
    features: [
      { title: 'Family Trivia', text: 'Five questions in a category you pick, ten seconds each.' },
      { title: 'Draw & Guess', text: 'Guess the drawing you are sent from four choices, then draw something for the next person.' },
      { title: 'Word Scramble', text: 'Unscramble the letters, solo or passing the phone around.' },
      { title: 'Emoji Guess', text: 'Work out the movie, song or phrase hidden in a few emoji.' },
      { title: 'Category Blitz', text: 'Does the word belong? Yes or no, fast.' },
      { title: 'Word Builder', text: 'Build as many words as you can from seven letters in a minute.' },
      { title: 'Roll or Bank', text: 'A push-your-luck dice game: keep what scores, then roll again or bank it.' },
      { title: 'Telephone Pictionary', text: 'Write, draw, describe and see how the phrase changed along the way.' },
    ],
    good: ['Install it on any device with no app store', 'Solo games work offline', 'Easy for kids and grandparents'],
    pricing: { title: 'Free to play solo', text: 'The solo games are free. Playing against the family, turn by turn, is coming.' },
    notYet: 'Coming soon: family matches, where everyone plays the same round whenever they are free.',
    account: 'Sign up with your name and an email address. It is how you will play family matches once they arrive.',
  },
  {
    slug: 'steady',
    name: 'Steady',
    short: 'Gentle, no-weights workouts, and a Road to 100 push-ups.',
    audience: 'For people over 50',
    accent: '#0F6B5A',
    icon: 'img/steady.png',
    appUrl: 'https://stevewaz.github.io/personal_train_blazor/',
    status: 'Free on your device',
    headline: 'Stay strong and steady, with nothing but your own body.',
    intro: 'Short workouts you can do at home with no weights and no gym, and a plan that builds you up to 100 push-ups, squats, planks and more, at your own pace. Everything stays on your device.',
    features: [
      { title: 'Workouts that fit your day', text: 'Pick how long you have and how you feel. Strength, balance, heart and energy, and stretching, with a warm-up and cool-down.' },
      { title: 'Easy on sensitive spots', text: 'Tell it about sore knees, back, shoulders or wrists, a wobbly balance, or not wanting to get down on the floor, and those moves are left out.' },
      { title: 'Road to 100', text: 'Push-ups, squats, crunches, calf raises, glute bridges, hip hinges and planks. Start from a quick test or a number you already know, such as 25, and build up through 25, 50, 75 and 100.' },
      { title: 'Build-up sets', text: 'Each session warms you up with lighter sets, then asks for one all-out set. Your best sets the next target.' },
      { title: 'Animated demonstrations', text: 'A moving figure shows each exercise, with a pause button, and it starts paused if you prefer less motion.' },
      { title: 'Build your own workout', text: 'Choose the exercises, the sets and the reps, up to 500, and save it to use again.' },
      { title: 'Spoken cues, large text', text: 'Optional voice prompts, bigger text sizes, light and dark, and colour themes.' },
      { title: 'Works offline', text: 'Your workouts and progress are saved on your device, so it works anywhere, even without a signal.' },
    ],
    good: ['Install it on any device with no app store', 'No weights, no gym, no account', 'Works with no internet'],
    pricing: { title: 'Free on your device', text: 'Steady is free to use on your own device, with no account and no card.' },
    notYet: 'Steady is new and the exercises have not yet been reviewed by a physiotherapist. Check with your doctor before starting a new exercise programme, and stop if anything hurts.',
  },
  {
    slug: 'fishlog',
    name: 'FishLog',
    short: 'A fishing journal with a catch log, trips, insights and an offline map.',
    audience: 'For anglers',
    accent: '#12525A',
    icon: 'img/fishlog.png',
    appUrl: 'https://stevewaz.github.io/fishlog_blazor/',
    status: 'Free on your device',
    headline: 'Every catch, every trip, in one simple log.',
    intro: 'Log your catches in seconds, group them into trips, and see what your fishing looks like over time. Works at the lake, even with no signal. Everything stays on your device.',
    features: [
      { title: 'Log a catch', text: 'Pick or type the species, then add the length, weight, notes and the spot. One tap fills in where you are.' },
      { title: 'Photos of your catch', text: 'Take a photo or choose one from your gallery, and keep it with the catch.' },
      { title: 'Trips', text: 'Group your catches into a trip and see how many fish and species you landed, and the biggest one.' },
      { title: 'Insights', text: 'Your longest and heaviest catches, your top species, the last twelve months, and catches by moon phase.' },
      { title: 'Conditions and moon', text: 'Current air temperature and wind where you are, plus the moon phase and solunar windows. The moon times are folklore, not a forecast.' },
      { title: 'A map for the water', text: 'Satellite, topo and USGS topo and imagery views, optional terrain shading, water layers, lake names, and boat ramps and fishing access. Lake depth maps cover several states.' },
      { title: 'Saved spots', text: 'Save your favorite spots on the map and measure distances between them. Your spots are private and stay on your device.' },
      { title: 'Works offline, light and dark', text: 'Your log, trips and insights work with no connection, and so does the map inside a downloaded region (Michigan and South Carolina to start). Weather and the online map layers need a connection.' },
    ],
    good: ['Install it on any device with no app store', 'Your log and offline maps work with no signal', 'No account, and your catches stay on your device'],
    pricing: { title: 'Free for now', text: 'FishLog is free to use while we are in early access. If pricing is introduced later, it will be announced well ahead of time.' },
  },
];

/** A link inside the site that works under any base path (a sub-path or the root of a domain). */
export const href = (path = ''): string => import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
