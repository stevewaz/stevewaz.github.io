// Everything you are likely to change lives here: the name, the contact address, and each app's text and link.

const contactEmail = 'stevewasielewski@gmail.com';
const contactSubject = '[Waz Apps] Feedback';

export const site = {
  /** A working name. Change it here and it changes everywhere. */
  name: 'Waz Apps',
  tagline: 'Simple apps for the way you actually work, play, cook and fish. On iPhone, iPad and Android. The web versions are for testing only.',
  /** Where feedback and questions go (it appears on the Support, Terms, Privacy and Refunds pages). */
  contactEmail,
  /** Every email link on the site pre-fills this subject, so a Gmail filter can match it ("subject:[Waz Apps]"). */
  contactSubject,
  /** The mailto: link used for every contact and feedback link. */
  contactHref: `mailto:${contactEmail}?subject=${encodeURIComponent(contactSubject)}`,
  /** Show a "draft" notice on the legal pages until they have been reviewed. */
  legalReviewed: false,
};

/** The headings the Apps menu and the footer list apps under, in the order they appear. Add a new one here when an app doesn't fit. */
export const appGroups = ['Work', 'Family', 'Health and outdoors'] as const;
export type AppGroup = (typeof appGroups)[number];

export interface App {
  slug: string;
  /** Which heading the app sits under in the Apps menu and the footer. */
  group: AppGroup;
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
  /** The app's store listings. Leave a store out until it is live: its badge then reads "Coming soon". */
  stores?: { apple?: string; google?: string };
}

export const apps: App[] = [
  {
    slug: 'simple-kennel',
    group: 'Work',
    name: 'Simple Kennel',
    short: 'Boarding, schedule, vet records and invoices for a small kennel.',
    audience: 'For small boarding kennels',
    accent: '#7B5EA7',
    icon: 'img/simple-kennel.png',
    appUrl: 'https://stevewaz.github.io/simple_kennel_blazor/',
    status: 'Beta',
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
    good: ['iPhone, iPad and Android, with a web version for testing', 'Syncs between your staff\'s devices', 'Your data stays yours: export it any time'],
    pricing: { title: 'In beta', text: 'Simple Kennel is in beta, for your whole team. A simple monthly price will be announced before launch, and you will get plenty of notice.' },
    notYet: 'Beta: we are working with our first kennels. Tell us what you need.',
    account: 'Simple Kennel uses an account so your whole team shares one schedule. The owner signs up first, then invites staff by email.',
  },
  {
    slug: 'coach-board',
    group: 'Work',
    name: 'Coach Board',
    short: 'Design plays, keep the roster and schedule, and chat with your team.',
    audience: 'For coaches and teams',
    accent: '#2AA9E0',
    icon: 'img/coach-board.png',
    appUrl: 'https://stevewaz.github.io/coach_board_blazor/',
    status: 'Beta',
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
    good: ['iPhone, iPad and Android, with a web version for testing', 'Everyone on the team stays in step', 'Works offline'],
    pricing: { title: 'In beta', text: 'Coach Board is in beta for coaches. Pricing for teams will be announced before launch.' },
    account: 'The coach signs up and starts the team. Players join with a short code, so they do not need an account.',
  },
  {
    slug: 'heirloom',
    group: 'Family',
    name: 'Heirloom',
    short: 'The family recipe book, with a meal plan and shopping list.',
    audience: 'For home cooks and families',
    accent: '#D67F48',
    icon: 'img/heirloom.png',
    appUrl: 'https://stevewaz.github.io/heirloom_blazor/',
    status: 'Beta',
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
    good: ['iPhone, iPad and Android, with a web version for testing', 'Works with no internet', 'Warm and simple'],
    pricing: { title: 'In beta', text: 'Heirloom is in beta and runs on your own device. Sharing a family kitchen between phones is coming.' },
    notYet: 'Coming soon: share your recipes with family so everyone has the same book on their phone.',
    account: 'Sign up with your name and an email address. It is how you will share your recipe book with family once sharing arrives.',
  },
  {
    slug: 'family-game-night',
    group: 'Family',
    name: 'Family Game Night',
    short: 'Trivia, drawing and word games for the whole family.',
    audience: 'For families',
    accent: '#2E7D32',
    icon: 'img/family-game-night.png',
    appUrl: 'https://stevewaz.github.io/family_game_night_blazor/',
    status: 'Beta',
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
    good: ['iPhone, iPad and Android, with a web version for testing', 'Solo games work offline', 'Easy for kids and grandparents'],
    pricing: { title: 'Solo games in beta', text: 'The solo games are in beta. Playing against the family, turn by turn, is coming.' },
    notYet: 'Coming soon: family matches, where everyone plays the same round whenever they are free.',
    account: 'Sign up with your name and an email address. It is how you will play family matches once they arrive.',
  },
  {
    slug: 'steady',
    group: 'Health and outdoors',
    name: 'Steady',
    short: 'Gentle, no-weights workouts, ready-made 100s, and a builder of your own.',
    audience: 'For people over 50',
    accent: '#0F6B5A',
    icon: 'img/steady.png',
    appUrl: 'https://stevewaz.github.io/personal_train_blazor/',
    status: 'Beta',
    headline: 'Stay strong and steady, with nothing but your own body.',
    intro: 'Short workouts you can do at home with no weights and no gym, and ready-made workouts that take you to 100 push-ups, squats, planks and more, at your own pace. Everything stays on your device.',
    features: [
      { title: 'Workouts that fit your day', text: 'Pick how long you have and how you feel. Strength, balance, heart and energy, and stretching, with a warm-up and cool-down.' },
      { title: 'Easy on sensitive spots', text: 'Tell it about sore knees, back, shoulders or wrists, a wobbly balance, or not wanting to get down on the floor, and those moves are left out.' },
      { title: 'The 100s', text: '100 push-ups, squats, crunches, calf raises, glute bridges or hip hinges, or a 100-second plank, in sets of 25 with a rest between. They start with gentle versions, and anything that does not suit you is left out.' },
      { title: 'Ready-made workouts', text: 'A morning wake-up, chair strength, balance, light cardio and a wind-down stretch, each one tap to start, or copy one and change it.' },
      { title: 'Animated demonstrations', text: 'A moving figure shows each exercise, with a pause button, and it starts paused if you prefer less motion.' },
      { title: 'Build your own workout', text: 'Choose the exercises, the sets and the reps, up to 500, or start from one of the 100s, and save it to use again.' },
      { title: 'Spoken cues, large text', text: 'Optional voice prompts, bigger text sizes, light and dark, and colour themes.' },
      { title: 'Works offline', text: 'Your workouts and progress are saved on your device, so it works anywhere, even without a signal.' },
    ],
    good: ['iPhone, iPad and Android, with a web version for testing', 'No weights, no gym, no account', 'Works with no internet'],
    pricing: { title: 'In beta', text: 'Steady is in beta and runs on your own device, with no account and no card.' },
    notYet: 'Steady is new and the exercises have not yet been reviewed by a physiotherapist. Check with your doctor before starting a new exercise programme, and stop if anything hurts.',
  },
  {
    slug: 'fishlog',
    group: 'Health and outdoors',
    name: 'FishLog',
    short: 'A fishing journal with a catch log, trips, insights and an offline map.',
    audience: 'For anglers',
    accent: '#12525A',
    icon: 'img/fishlog.png',
    appUrl: 'https://stevewaz.github.io/fishlog_blazor/',
    status: 'Beta',
    headline: 'Every catch, every trip, in one simple log.',
    intro: 'Log your catches in seconds, group them into trips, and see what your fishing looks like over time. Works at the lake, even with no signal.',
    features: [
      { title: 'Log a catch', text: 'Pick or type the species, then add the length, weight, notes and the spot. One tap fills in where you are, and the weather there is saved with the catch.' },
      { title: 'Photos of your catch', text: 'Take a photo or choose one from your gallery, and keep it with the catch.' },
      { title: 'Trips', text: 'Group your catches into a trip and see how many fish and species you landed, and the biggest one.' },
      { title: 'Insights', text: 'Your longest and heaviest catches, your top species, the last twelve months, and catches by moon phase.' },
      { title: 'Conditions and moon', text: 'Current air temperature and wind where you are, plus the moon phase and solunar windows. The moon times are folklore, not a forecast.' },
      { title: 'A map for the water', text: 'Satellite, topo and USGS topo and imagery views, optional terrain shading, water layers, lake names, and boat ramps and fishing access. Lake depth maps cover several states.' },
      { title: 'Saved spots', text: 'Save your favorite spots on the map and measure distances between them. Your spots are private and stay on your device.' },
      { title: 'Sync across your devices', text: 'Sign in and your catches and trips are backed up and shared between your phone and tablet. Full-size photos stay on the device that took them. It is optional.' },
      { title: 'Works offline, light and dark', text: 'Your log, trips and insights work with no connection, and so does the map inside a downloaded region (Michigan and South Carolina to start). Weather and the online map layers need a connection.' },
    ],
    good: ['iPhone, iPad and Android, with a web version for testing', 'Your log and offline maps work with no signal', 'Optional account to back up and sync your devices'],
    pricing: { title: 'In beta', text: 'FishLog is in beta. If pricing is introduced later, it will be announced well ahead of time.' },
    account: 'An account backs up your catches and trips and syncs them between your devices. Your log also works on this device without one.',
  },
  {
    slug: 'plow',
    group: 'Work',
    name: 'Plow',
    short: 'A visit log for solo snow plow operators, with proof of service and simple invoices.',
    audience: 'For plow operators',
    accent: '#1F4F8F',
    icon: 'img/plow.png',
    appUrl: 'https://stevewaz.github.io/plow_blazor/',
    status: 'Beta',
    headline: 'Proof you plowed it, in one tap.',
    intro: 'Log each visit with the time, your location, photos, the salt you used and the weather, so you can show you serviced the lot. Then bill your customers from the same log.',
    features: [
      { title: 'One-tap service visit', text: 'Tap a lot and the visit is logged with the date and time, your GPS position and whether you were at the lot, and the weather: temperature, wind, sky and snowfall over the last day.' },
      { title: 'Plowed, salted, shoveled', text: 'Mark what you did, add the pounds of salt in a tap, and attach photos and notes.' },
      { title: 'Share a visit', text: 'Send a visit as a message, with the time, place, weather and what was done, when a customer or property manager asks. You can also text the customer straight from the visit or the invoice.' },
      { title: 'A proof report you can hand over', text: 'Per lot and month: every visit with its time, GPS position, distance from the lot, weather, notes and photos, ready to print or save as a PDF. Each report ends with a fingerprint code. If the records change later, a new report shows a different code, and a visit edited after it was logged is marked as edited.' },
      { title: 'Maps', text: 'See each visit and lot on a map, and open it in your phone\'s own maps app for directions.' },
      { title: 'Snow or lawn', text: 'Add a lawn price to a lot and log mowing, trimming or cleanup the same way. From May to September a lot with a lawn price starts as a mow.' },
      { title: 'Your lots, in route order', text: 'Keep each lot with its address and price per push, a shovel fee and notes, and move them up and down into the order you drive.' },
      { title: 'Simple invoices', text: 'Each month, per lot: the visits, the amounts and a total, ready to print or send. The price on each visit is saved when you log it, so changing your rates later does not change past invoices.' },
      { title: 'Getting paid', text: 'Add your Venmo, PayPal, Zelle, Square or Stripe details and they print on the invoice, with a Pay now link. Venmo and PayPal.Me links get the total filled in. Plow never handles the money.' },
      { title: 'Works offline, with backups', text: 'Your lots, visits and photos are saved on your device in a real database, so it works in a parking lot with no signal. Weather and map tiles need a connection. Save everything to a backup file from Settings and restore it on a new phone.' },
    ],
    good: ['iPhone and iPad, with a web version for testing', 'Works with no signal', 'Plow never touches your payments'],
    pricing: { title: 'In beta', text: 'Plow is in beta and runs on your own device. If pricing is introduced later, it will be announced well ahead of time.' },
    notYet: 'Plow is new. Your data lives on your device, and there is no automatic sync between devices yet, so make a backup file from Settings now and then: a lost or reset phone means lost records since your last backup. A visit log is a record you keep, not legal advice, and it does not replace insurance.',
  },
];

/** A link inside the site that works under any base path (a sub-path or the root of a domain). */
export const href = (path = ''): string => import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');

// ---------------------------------------------------------------------------------------------------------------------------------
// Pricing. These are the prices planned for after the beta. Nothing is charged today (see the note on the Pricing page), so keep the
// wording on that page honest until billing exists. Prices are shown as written: change them here.

export interface Plan {
  name: string;
  /** "$19", or a word such as "Later" when there is no price yet. */
  price: string;
  /** "/month", "/year"... Left out when there is no price. */
  per?: string;
  blurb: string;
  features: string[];
  /** The plan most people should start with. */
  best?: boolean;
  /** Not built yet: shown dimmed, with a "Coming later" label instead of a button. */
  soon?: boolean;
}

export interface AppPricing {
  slug: string;
  /** What the plans are sized by, in a few words. */
  sizedBy: string;
  plans: Plan[];
  note?: string;
}

/** Shown on every paid plan. */
export const pricingTrial = 'Every paid plan will start with a free 14-day trial. Cancel anytime.';

export const appPricing: AppPricing[] = [
  {
    slug: 'simple-kennel',
    sizedBy: 'One price for your whole kennel',
    plans: [
      {
        name: 'Kennel', price: '$25', per: '/month', best: true,
        blurb: 'Everything in Simple Kennel, for you and your staff.',
        features: ['Schedule board that catches conflicts', 'Customers, pets and vaccine checks', 'Check-in, check-out and invoices', 'Invite your whole team by email, so everyone sees the same schedule', 'QuickBooks CSV export', 'Works offline'],
      },
    ],
  },
  {
    slug: 'coach-board',
    sizedBy: 'One price for you and your teams',
    plans: [
      {
        name: 'Coach', price: '$10', per: '/month', best: true,
        blurb: 'Everything in Coach Board.',
        features: ['Eight sports', 'Play designer and animated plays', 'Roster, schedule and reminders', 'Team chat', 'Players join with a code and need no account'],
      },
    ],
  },
  {
    slug: 'plow',
    sizedBy: 'One price for the whole season',
    plans: [
      {
        name: 'Season pass', price: '$25', per: '/season', best: true,
        blurb: 'For an owner-operator with their own truck.',
        features: ['One-tap visits with time, GPS, weather and photos', 'Proof report with a tamper-evident fingerprint', 'Snow or lawn pricing, invoices and texting', 'Works offline, with backups'],
      },
      {
        name: 'Crews', price: 'Later',
        blurb: 'A separate app for dispatchers and drivers.',
        features: ['Dispatch dashboard and live map', 'A driver app', 'A view for customers and property managers'],
        soon: true,
      },
    ],
  },
  {
    slug: 'heirloom',
    sizedBy: 'One plan for the whole family',
    plans: [
      {
        name: 'Plus', price: '$1.99', per: '/month', best: true,
        blurb: 'Everything in Heirloom.',
        features: ['Unlimited recipes', 'Scan a recipe card with your camera', 'Meal planning and a smart shopping list', 'Works offline'],
      },
    ],
    note: 'Sharing a family kitchen between phones is on the way and will be included.',
  },
  {
    slug: 'family-game-night',
    sizedBy: 'One plan for the whole family',
    plans: [
      {
        name: 'Family', price: '$1.99', per: '/month', best: true,
        blurb: 'Every game, for everyone at home.',
        features: ['All the solo games', 'Passing the phone around the table', 'Playing against the family, turn by turn, when it arrives'],
      },
    ],
  },
  {
    slug: 'steady',
    sizedBy: 'One plan, just for you',
    plans: [
      {
        name: 'Plus', price: '$1.99', per: '/month', best: true,
        blurb: 'Everything in Steady.',
        features: ['Workouts that fit your day and how you feel', 'Easy on sensitive spots', 'The 100s and ready-made workouts', 'Animated demonstrations and spoken cues', 'No account needed'],
      },
    ],
  },
  {
    slug: 'fishlog',
    sizedBy: 'One plan, just for you',
    plans: [
      {
        name: 'Plus', price: '$1.99', per: '/month', best: true,
        blurb: 'Everything in FishLog.',
        features: ['Unlimited catches and trips', 'Photos, insights, conditions and moon', 'A map for the water with saved spots', 'Sync across your devices'],
      },
    ],
  },
];
