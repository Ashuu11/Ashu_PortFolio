import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { SiBlender } from "react-icons/si"
import { SiUnity } from "react-icons/si"
import { Project, Service, Skill } from './types'

import { BsCircleFill } from 'react-icons/bs'

export const services:Service[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
          "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
      },
      {
        Icon: FaServer,
        title: "Backend  Development",
        about:
          "handle database, server, api using <b>Express </b> & other popular frameworks",
      },
      {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
          "I can develop robust  REST API using <b>Node API</b> ",
      },
      {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "a daily problem solver in <b>GeeksForGeeks</b>  and <b>Leet Code</b> ",
      },
      {
        Icon: SiBlender,
        title: "Graphics Designer",
        about:
          "made a lot of assets and 3D models using <b>Blender</b>",
      },
      {
        Icon: SiUnity,
        title: "Game Designer",
        about:
          "built dynamic and addictive games for both Android as well as PC using <b>Unity Game Engine</b>",
      },
    ];

export const languages:Skill[] = [
  {
    Icon: BsCircleFill,
    name: "C & C++",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "75%",
  },
  {
    Icon: BsCircleFill,
    name: "C#",
    level: "50%",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "50%",
  },
];

export const tools:Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Unity Game Engine",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Blender",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "50%",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45%",
  },
  {
    Icon: BsCircleFill,
    name: "Figma/ Adobe XD",
    level: "60%",
  },
];

export const projects:Project[] = [
  { 
    id:1,
    name: "Krono Crypto Price Tracker",
    description:
      "This app shows a statistical view about the top cryptocurrencies prices",
    image_path: "/images/Price.png",
    deployed_url: "https://krono-crypto-price-tracker.vercel.app/",
    Github_url: "https://github.com/Ashuu11/Krono-Crypto-Price-Tracker",
    category: ["reactjs", "nextjs"],
    key_tech: ["React", "Coingecko-api", "Tailwind CSS"],
  },

  {
    id:2,
    name: "Stack Overflow Clone",
    image_path: "/images/Stack.png",
    deployed_url: "https://stack-overflow-clone-ashu.netlify.app/",
    Github_url: "https://github.com/Ashuu11/Stack-Overflow-Clone",
    category: ["reactjs", "expressjs", "nodejs", "mongoDb"],
    description:
      "A Full Stack Website with Login/Signup Functionality as well as Posting/Deleting Questions and Answers Functionality",
    key_tech: ["Redux", "JWT Authentication", "Material UI"],
  },

  {
    id:3,
    name: "Share Karo (Responsive Social Media Application)",
    image_path: "/images/Share.png",
    deployed_url: "https://share-karo-ashu.netlify.app/",
    Github_url: "https://github.com/Ashuu11/Share_Karo",
    category: [ "reactjs", "firebase"],
    description:
      "Responsive and Interactive Social Media Application with Sharing Photos, Commenting and Login Functionality",
    key_tech: [ "React", "Redux", "Sanity Content Database", "Google Auth", "Sanity IO", "Tailwind CSS", ],
  },

  {
    id:4,
    name: "YouTube Clone",
    image_path: "/images/Yt.png",
    deployed_url: "https://yt-clone-ashu.web.app/",
    Github_url: "https://github.com/Ashuu11/Youtube_Clone_Ashu",
    category: [ "reactjs", "firebase"],
    description:
      'Full Functional YouTube Clone where one can login with his/her youtube account to enjoy the features. User can like a video,comment on a video & Much More ',
    key_tech: [ "React", "Redux", "YouTube Data API" ],
  },

  {
    id:5,
    name: "Krono Music Player",
    image_path: "/images/Krono.png",
    deployed_url: "https://krono-music-player-final.vercel.app/",
    Github_url: "https://github.com/Ashuu11/Krono-Music-Player-Final",
    category: [ "nextjs", "reactjs"],
    description:
      "Responsive Music Player with an eye-catching User Interface, User can Login with their Spotify Accounts",
    key_tech: ["React", "Spotify Developers API", "Tailwind CSS", "Vercel"],
  },

  {
    id:6,
    name: "CoinHawk MarketCap",
    image_path: "/images/Hawk.png",
    deployed_url: "https://coinhawk-marketcap-ashu.netlify.app/",
    Github_url: "https://github.com/Ashuu11/CoinHawk-MarketCap",
    category: ["reactjs", "nextjs"],
    description:
      "Responsive and interactive Crypto trading Blockchain Application where Users can connect their wallet and swap/ trade cryptos",
    key_tech: ["React", "Tailwind CSS", "Chart-JS", "Blockchain", "Moralis", "Web 3.0"],
  },

  {
    id:7,
    name: "Kryptonaut NFT MarketPlace",
    image_path: "/images/nft.png",
    deployed_url: "https://kryptonaut-nft-market-place-ashu.vercel.app/",
    Github_url: "https://github.com/Ashuu11/Kryptonaut_NFT_MarketPlace",
    category: ["reactjs", "nextjs"],
    description:
      "Responsive NFT MarketPlace Blockchain Application where Users can Mint their own NFT's and List their own NFT's with MetaMask",
    key_tech: ["React", "Tailwind CSS", "ThirdWeb", "Blockchain", "Infura", "Web 3.0"],
  },

  {
    id:8,
    name: "Prof Car",
    image_path: "/images/Prof.png",
    deployed_url: "https://ashu1127.itch.io/prof-car",
    Github_url: "https://github.com/Ashuu11/Prof-Car",
    category: ["Game Dev","C#"],
    description:
      "Prof. Car is 3D Arcade-Racing game. In this game, the primary protagonist is the Car that is coaching the participant a way to force correctly and securely, obeying all the visitor's rules and guidelines in a proper way and to make sure the protection of the opposite passengers in that automobile",
    key_tech: ["C#", "Unity Game Engine"],
  },

  {
    id:9,
    name: "Solitary Cure",
    image_path: "/images/Solitary.png",
    deployed_url: "https://timetrvgghoul.itch.io/a-solitary-cure",
    Github_url: "https://github.com/Ashuu11/Solitary-Cure",
    category: ["Game Dev","C#"],
    description:
      "From the view of the general masses, 2020 was not that great of a year and we all know the major reason why. So with the theme '2020' at mind we developed a game  which could bring the inner realistic 'hero' of the player who at sometime this year wanted to help others.",
    key_tech: ["C#", "Unity Game Engine", "Adobe Illustrator", "Blender"],
  },

  {
    id:10,
    name: "The Transporter",
    image_path: "/images/transporter.png",
    deployed_url: "",
    Github_url: "https://github.com/Ashuu11/The-Transporter",
    category: ["Game Dev","C#"],
    description:
      "An action and adventure First-person 3D shooter game for PC.",
    key_tech: ["C#", "Unity Game Engine", "Blender"],
  },

  {
    id:11,
    name: "Till the End",
    image_path: "/images/Till.png",
    deployed_url: "https://timetrvgghoul.itch.io/till-the-end",
    Github_url: "https://github.com/Ashuu11/Till-the-End",
    category: ["Game Dev","C#"],
    description:
      "You are stranded in a desert and stuck in a time loop with no means of direction and extremely limited resources. You have to escape before nightfall or else you will reset. There are multiple exits but beware for there is only one true means of freedom",
    key_tech: ["C#", "Unity Game Engine"],
  },

  {
    id:12,
    name: "Immortal",
    image_path: "/images/Immotal.jpeg",
    deployed_url: "https://t33n-masooom.itch.io/immortal",
    Github_url: "https://github.com/Ashuu11/Immortal",
    category: ["Game Dev","C#"],
    description:
      "IMMORTAL - A FPS SHOOTER GAME MADE WITH UNITY 3D. IT INCLUDES 4 LEVELS . ALL ARE UNLOCKED . YOU CAN PLAY ANY LEVEL YOU WANT.",
    key_tech: ["C#", "Unity Game Engine", "Blender"],
  },

  {
    id:13,
    name: "Jammo Shooter",
    image_path: "/images/Jammo.jpg",
    deployed_url: "https://play.google.com/store/apps/details?id=com.MagmaStudios.JammoShooter",
    Github_url: "",
    category: ["Game Dev", "C#"],
    description:
      "Jammo Shooter is an AR Shooter game with a whole new experience. Play for free today and join the Shooting fun! Shoot and pop Jammo's in this relaxing AR game . Complete the level and win points",
    key_tech: ["C#", "Unity Game Engine", "Blender", "Augmented Reality"],
  },

  {
    id:14,
    name: "Motor Craze",
    image_path: "/images/Motor.png",
    deployed_url: "https://play.google.com/store/apps/details?id=com.MagmaStudios.MotorCraze",
    Github_url: "",
    category: ["Game Dev", "C#"],
    description:
      "Motor Craze is an endless bike racing game where your limits of focus and determination are tested. Zoom through beautiful environments and try your best to survive numerous obstacles to earn points and be the best in the world!",
    key_tech: ["C#", "Unity Game Engine", "Blender", "Side Scroller Racing"],
  },


];