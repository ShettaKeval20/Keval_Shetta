// src/data/projects.js
const projects = [
  {
  id: "smart-exam-ai",
  title: "AI/ML Smart Online Exam Framework",
  description:
    "A facial recognition and sound-monitoring based exam system to prevent malpractice during online tests, developed as a final year college project.",
  detailedDescription:
    "This AI/ML-based system was built during the COVID-19 pandemic to tackle rampant online exam malpractice. It uses facial recognition (via Python's DeepFace) and background noise detection (PyAudio) to monitor students. The application consists of dual portals—one for students and one for faculty. Students must upload their ID and verify their face before accessing exams, and are continuously monitored through the webcam and mic. Disturbances, device usage, and eye tracking are logged and stored securely in a MySQL database. Faculty can review all evidence, monitor exam behavior, and generate results through the admin panel.",
  github: "https://github.com/ShettaKeval20/24_Developing-AI-Based-Comprehensive-Framework-For-Online-Assessments",
  video: "https://drive.google.com/file/d/1U33pp6f1gDn8MBA5ZMkT5OIwQkaw8DEp/view", // Or YouTube demo link if available
  demo: "#", // Optional
  year: "2022",
  team: "Group (3 members)",
  members: ["Keval Shetta", "Member 2", "Member 3"],
  category: "AI/ML + web",
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "DeepFace",
    "PyAudio",
    "Apache",
    "MySQL"
  ],
  image: "/icons/smart-exam.png", // Replace with your project image path
  challenges:
    "Preventing cheating during remote exams, ensuring accurate face recognition in various lighting conditions, capturing background noise without false positives, storing media data efficiently.",
  solutions:
    "Integrated DeepFace for facial authentication, PyAudio for live noise monitoring, and OpenCV for eye tracking. Implemented automatic screenshot capture on anomalies. Built robust login flow with ID card + face match requirement. Stored all evidence securely using MySQL and presented clean admin reports.",
  features: [
    "Facial authentication with DeepFace",
    "ID card upload verification",
    "Noise detection with PyAudio",
    "Automatic screenshots on suspicious activity",
    "Dual portals for Student and Professor",
    "MySQL-based incident reporting",
    "Manual result control by professors"
  ],
  whatILearned:
    "How to integrate AI/ML into full-stack apps, manage image/audio data securely, build privacy-focused exam systems, and create real-world security flows with Python, frontend, and backend combined.",
  keyDecisions: [
    "Used DeepFace over manual facial matching for better accuracy.",
    "Used OpenCV and PyAudio instead of browser-side tools for deeper control.",
    "Designed ID+Face dual-auth for extra exam security.",
    "Decoupled student/professor portals for clarity and performance."
  ]
},
{
  id: "buddiesgram",
  title: "BuddiesGram",
  description:
    "BuddiesGram is a real-time social app to share and explore visual moments. Public posts connect people worldwide, just like threads on Twitter. Private chats stay secure — only friends can message each other.",
  detailedDescription:
    "BuddiesGram was built to recreate the freedom of global sharing while prioritizing user safety and meaningful connections. The goal was simple: let anyone share photos and moments publicly, discover new people, and engage through likes and comments — but protect personal space by restricting private messages to real friends only. Unlike typical social media where anyone can send unsolicited messages, BuddiesGram uses a friends-only chat system to prevent spam, threats, or harassment. Technically, it leverages Google Sign-In via OAuth 2.0 for secure authentication, Firebase Authentication for login and signup, Firebase Realtime Database to store and sync posts and messages in real time, and XML for clean UI layouts following Material Design guidelines. Many challenges were solved through trial and error, like building robust API integrations with Retrofit and optimizing backend operations to handle real-time interactions smoothly. The result? A social platform where people can truly connect — publicly and safely.",
  github: "https://github.com/ShettaKeval20/Buddiesgram",
  video: "https://drive.google.com/file/d/1ueRy9UO9MlYeLrOke3HIJq68cDjhKazE/view", // replace with your link
  year: "2023",
  team: "Group (3 members)",
  members: [],
  category: "Android",
  tech: [
    "Java",
    "Firebase Auth",
    "Firebase Realtime DB",
    "XML",
    "Retrofit",
    "Material Design"
  ],
  image: "/icons/Buddies.jpeg",
  challenges:
    "Implementing secure Google OAuth with Firebase Auth, ensuring smooth real-time sync in Realtime Database, and optimizing UI responsiveness for different Android devices.",
  solutions:
    "Integrated Google Sign-In with OAuth 2.0, structured Realtime DB for fast reads/writes, and applied lazy loading for images and posts. Used Retrofit for scalable API handling.",
  features: [
    "Google Sign-In for secure login",
    "Public posts like Threads",
    "Friends-only chat system",
    "Like & comment functionality",
    "Firebase Realtime updates",
    "Modern Material UI"
  ],
  whatILearned:
    "This project taught me how to implement secure OAuth authentication using Firebase, design scalable Realtime Database structures for instant updates, and optimize API interactions with Retrofit. I also learned to apply user feedback iteratively to refine UX and handle edge cases like blocking unsolicited messages.",
  keyDecisions: [
    "Chose Firebase Realtime DB instead of Firestore for faster sync and lower latency for chat.",
    "Implemented Google OAuth to eliminate password storage and boost sign-up conversion.",
    "Used Retrofit for robust network calls and future API integrations."
  ],
  // architectureDiagram: "/images/buddiesgram-architecture.png" // replace with your diagram path
},
    {
id: "inbriefs",
  title: "InBriefs News App",
  description: "100-word news summaries in a mobile-friendly format with personalized feeds, interaction features, and night mode.",
  detailedDescription:
    "InBriefs is a React Native mobile application that delivers concise 100-word news summaries tailored to user preferences. It features a personalized news feed that dynamically fetches content using RESTful APIs. To enhance performance, we addressed latency challenges by optimizing data fetching, resulting in faster content load and smoother user experience. Firebase Realtime Database was integrated to allow user interactions like likes, shares, and bookmarks in real-time. Postman was used for testing API reliability and data flow. The app supports social login, dark mode, and seamless real-time content updates to keep users engaged.",
  github: "https://github.com/itsaakashpatel/inbriefs-app",
  video: "https://cln.sh/mhF0vGCH",
  demo: "",
  year: "2022",
  team: "Group (3 members)",
  members: ["Keval Shetta", "Teammate 1", "Teammate 2"],
  category: "React",
  tech: ["React Native", "Firebase", "RESTful APIs", "Postman"],
    image: "/icons/inbriefs.png",
      challenges:
    "Managing large volumes of news data efficiently, minimizing load time, handling real-time interactions without UI lags.",
  solutions:
    "Used optimized API calls with caching techniques, integrated Firebase for real-time database updates, and streamlined backend logic to improve data sync.",
  features: [
    "Personalized news feed",
    "100-word summaries",
    "Dark mode",
    "Realtime likes and shares",
    "Social login with Google",
    "Save for later feature"
  ],
  whatILearned:
    "Improved understanding of optimizing mobile app performance using Firebase and REST APIs, real-time database syncing, and user-centric design for news platforms.",
  keyDecisions: [
    "Selected Firebase Realtime DB for low-latency interaction",
    "Used Postman to simulate real-world API loads",
    "Enabled night mode for better UX during evening reading"
  ]
  },
{
  id: "achieveit",
  title: "AchieveIt App",
  description:
    "Android app to stay updated with task deadlines, calendar integration, notification reminders.",
  detailedDescription:
    "AchieveIt is a Kotlin-based Android productivity app that enables users to stay on top of their goals through intuitive task creation, built-in calendar integration, and personalized notifications. It includes a sleep tracking feature to monitor and improve user wellness. The app architecture follows MVVM for improved scalability and maintainability. Integrated Retrofit for seamless API connectivity, and tackled challenges such as feature interdependencies and database inconsistencies. A key focus was optimizing performance under growing data loads. Collaborative efforts helped debug and stabilize API integration through agile, test-driven practices.",
  github: "https://github.com/kevalpro/AchieveIt",
  video: "https://drive.google.com/file/d/1z4IB5oYpRTpmiFFp5WQHpJmnrEQukze3/view",
  demo: "",
  year: "2022",
  team: "Group (3 members)",
  members: ["Keval Shetta"],
  category: "Android",
  tech: ["Kotlin", "Retrofit", "MVVM", "Room DB", "LiveData", "Google Calendar API"],
  image: "/icons/achieveit.png", // Replace this with the correct local image
  challenges:
    "Managing dependencies between calendar, task, and sleep modules; optimizing performance for large task lists; handling API errors gracefully.",
  solutions:
    "Used MVVM for clean separation of concerns, Retrofit for robust API communication, Room for efficient local data storage, and structured error handling for API responses.",
  features: [
    "Task creation with reminders",
    "Calendar integration",
    "Sleep tracking dashboard",
    "MVVM architecture",
    "Realtime updates via LiveData",
    "Deadline notifications"
  ],
  whatILearned:
    "Deepened my expertise in Kotlin, MVVM architecture, lifecycle-aware components, and robust API integration with Retrofit and Room.",
  keyDecisions: [
    "Adopted MVVM to improve modularity and testability",
    "Used Retrofit for seamless API communication",
    "Implemented Google Calendar API for user task sync"
  ]
},
{
  id: "weatherapp",
  title: "Weather Forecast App",
  description:
    "Innovative iOS app delivering real-time weather updates with seamless data retrieval and user-centric design.",
  detailedDescription:
    "The Weather Forecast App is an iOS application built using Swift, designed to fetch and display accurate and real-time meteorological data. It integrates weather APIs to ensure users receive up-to-date temperature, precipitation, and wind details. Focused on performance and responsiveness, the app tackles challenges around real-time data retrieval and latency, delivering fast and consistent forecasts for daily planning. The user interface is clean, modern, and optimized for clarity. Emphasis was placed on reliability and usability to improve daily decision-making for users.",
  github: "https://github.com/kevalpro/WeatherForecastApp", // update if needed
  video: "https://drive.google.com/file/d/1rvGzGR6uDngpBJupnSLaRivaagnuA9Xl/view?usp=sharing", // add a walkthrough link if available
  demo: "",  // optional live TestFlight link or hosted demo
  year: "2022",
  team: "Group (3 members)",
  members: ["Keval Shetta"],
  category: "iOS App",
  tech: ["Swift", "UIKit", "REST API", "JSON Parsing", "Xcode"],
  image: "/icons/weather.png", // replace with your local path
  challenges:
    "Real-time data fetching with minimal latency, handling inconsistent API responses, optimizing UI responsiveness during API calls.",
  solutions:
    "Used native REST API integration with structured error handling, optimized JSON parsing using Codable, and implemented async UI updates for smooth performance.",
  features: [
    "Live weather updates",
    "Real-time data refresh",
    "City-based search functionality",
    "Responsive and clean UI",
    "Weather icons with conditions",
    "Reliable forecast data"
  ],
  whatILearned:
    "Gained practical experience in Swift-based API integration, efficient data parsing, UI optimization for iOS, and user-centric performance tuning.",
  keyDecisions: [
    "Chose RESTful API for weather data due to ease of integration and reliability",
    "Used UIKit for lightweight and responsive UI components",
    "Implemented structured error handling to ensure consistent user experience"
  ]
},
  //   {
  //   id: "portfolio",
  //   title: "Inbrief - News App",
  //   description: "...",
  //   detailedDescription: "This is where you'll go deeper into challenges, features, solutions, etc.",
  //   github: "...",
  //   video: "...",
  //   demo: "...",
  //   year: "2025",
  //   team: "Solo",
  //   members: [],
  //   category: "App",
  //   tech: ["React", "Tailwind", "Three.js"],
  //   image: "/icons/React.png",
  //   challenges: "3D positioning, mobile optimization, performance tuning",
  //   solutions: "Used lazy loading, memoization, and code splitting",
  //   features: ["3D skills view", "Responsive", "Dark mode"],
  // },
  // Add others...
];

export default projects;
