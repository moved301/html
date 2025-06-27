import banner from "./resources/banner.png";
import logo from "./resources/logo.png";
import adminPhoto from "./resources/pewdiepie.png";

// This file simulates a local database
// All the data used in the landing page comes from this single file

const brand = {
  name: "Game Station",
  logo,
};

const hero = {
  banner,
  heroText:
    "A computer game will mean something that one uses primarily as for a hobby, a diversion from real life, and is a medium through which one plays. The primary reason to have a community centered on games is so that its' members playing experience is enriched.",
};

const community = {
  goal: "How does anybody find friends? In the traditional community, we search through our pool of neighbours and professional colleagues, in order to find people who share our values and interests. We exchange information about one another, disclose and discuss our mutual interests. In a virtual community we can go directly to the place where are favourite subjects are being discussed, then get acquainted with people who share our passions or who use words in a way we find attractive. Your chances of making friends are magnified by orders of magnitude over the old methods of finding a peer group.",
  perks: [
    "Make friends virtually",
    "Find game servers to join",
    "Share your gameplay video",
    "Get tips on critical missions",
    "Get crazy game modifications",
    "Join your favorite game groups",
    "Realtime collaboration with fellow gamers",
  ],
};

const grouplist = [
  {
    id: 1,
    title: "G.T.A Universe",
    thumb:
      "https://c4.wallpaperflare.com/wallpaper/845/817/216/niko-bellic-gta-4-grand-theft-auto-4-wallpaper-preview.jpg",
  },
  {
    id: 2,
    title: "C.O.D Phantoms",
    thumb:
      "https://i.pinimg.com/736x/b0/75/8e/b0758e5bb3866073bc56b797fb1255cb.jpg",
  },
  {
    id: 3,
    title: "The Horizon Drivers",
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3dPZAwg-GaQKshm-hL2lBD2Tp1ZhporlnzKhw6rhRaMBYehcwnizpXiXPY6SNJZMhizs&usqp=CAU",
  },
  {
    id: 4,
    title: "Counter Strike Squad",
    thumb:
      "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427",
  },

  {
    id: 5,
    title: "Minecraft Engineers",
    thumb:
      "https://canyonechoes.org/wp-content/uploads/2022/01/YESSSSSSSSSSNO.webp",
  },
  {
    id: 6,
    title: "Elden Ring Fellows",
    thumb:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jFqSYPUamfJ30AMLfGjVn61a35WbSmDucAXlwvv6uW-I46KQcy_muDDPHv9pGS1X4FU&usqp=CAU",
  },
  {
    id: 7,
    title: "Among Us Crews",
    thumb:
      "https://techraptor.net/sites/default/files/styles/image_header/public/2021-07/Among%20Us%20Servers%20Down%20July%2012%202021%20cover.jpg?itok=0p5Fru7Y",
  },

  {
    id: 8,
    title: "Unity Game Mods",
    thumb:
      "https://c4.wallpaperflare.com/wallpaper/66/41/250/cyberpunk-futuristic-computer-interfaces-wallpaper-preview.jpg",
  },
  {
    id: 9,
    title: "Amazing PC Hacks",
    thumb:
      "https://thumbs.dreamstime.com/b/close-up-computer-repair-service-maintenance-cleanup-dust-dirty-checkup-electronic-devices-close-up-computer-117236155.jpg",
  },
  {
    id: 10,
    title: "Classic Game Fans",
    thumb:
      "https://thumbs.dreamstime.com/b/old-video-game-retro-style-background-vector-illustration-eps-141029636.jpg",
  },
  {
    id: 11,
    title: "RD Redemption Tips",
    thumb:
      "https://s1.gaming-cdn.com/images/products/5679/616x353/red-dead-redemption-2-pc-game-rockstar-cover.jpg?v=1647026658",
  },
  {
    id: 12,
    title: "Game Cheatsheets",
    thumb:
      "https://img.itch.zone/aW1hZ2UvMjgyMjk2LzEzNzM1NzkucG5n/original/ra4tci.png",
  },
];

const admin = {
  photo: adminPhoto,
  username: "Pewdiepie",
  bio: "Admin | Gamer | Streamer",
  youtube: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
  instagram: "https://www.instagram.com/pewdiepie/",
};

const testlist = [
  {
    username: "DragonSlayer04",
    text: "Best community ever!",
    photo:
      "https://img.freepik.com/premium-vector/gamer-mascot-geek-boy-esports-logo-avatar-with-headphones-glasses-cartoon-character_8169-228.jpg",
  },
  {
    username: "DarkMaster69",
    text: "Great platform for mods :D",
    photo:
      "https://i.pinimg.com/236x/8d/02/ed/8d02edb5b00a2d11a398fefc56ac45e7.jpg",
  },
  {
    username: "Mystique45",
    text: "Love this platform. Thanks everyone",
    photo:
      "https://i.pinimg.com/236x/86/08/c5/8608c5397759d85490fee0e75847b417.jpg",
  },
  {
    username: "PinkPanther87",
    text: "Found the best buddies here <3",
    photo:
      "https://cdn.dribbble.com/users/1146759/screenshots/16326268/_3.png?compress=1&resize=400x300",
  },
];

const faqlist = [
  {
    id: 1,
    question: "What is Game Station?",
    answer:
      "Game Station is a platform that connects gamers, allowing them to play their favorite games with partners worldwide. We are redefining the gaming community experience, providing gamers and newcomers alike a safe place to interact.",
  },
  {
    id: 2,
    question: "How do I sign up here?",
    answer:
      "Signing up to Game Station is easy and free! Just click login on the top of the page or download our app from Play Store.",
  },
  {
    id: 3,
    question: "Can I have more than one account?",
    answer:
      "Game Station users are limited to a single account only. One account per person is in place to prevent competitive advantages in our platform.",
  },
  {
    id: 4,
    question: "What are the community guidelines?",
    answer:
      "Please read - https://www.facebook.com/fbgaminghome/creators/gaming-community-guidelines",
  },
];

export { brand, hero, community, grouplist, admin, faqlist, testlist };
