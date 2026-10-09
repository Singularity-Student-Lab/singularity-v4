// Single source of content for the site. See LAB_DATA.md for provenance and open questions.

export type Person = {
  name: string;
  role?: string;
  photo?: string;
  github?: string;
  linkedin?: string;
  website?: string;
};

export type ResearchArea = { title: string; text: string };

export type Lab = {
  slug: string;
  number: string;
  name: string;
  field: string;
  fieldLong: string;
  meaning: string;
  summary: string;
  overview: string;
  mission: string;
  areas: ResearchArea[];
  topics: string[];
  executives: Person[];
  members: Person[];
};

const CDN = "https://res.cloudinary.com/dtlder1hw/image/upload/v1787073654/team";

export const site = {
  name: "Singularity",
  fullName: "Singularity Research Lab",
  url: "https://singularity-v4.vercel.app",
  description:
    "Singularity Research Lab is a research laboratory organised into seven laboratories spanning artificial intelligence, quantum computing, immersive technologies, cybersecurity, cloud systems, robotics and interdisciplinary research.",
  address: ["SR-209, Academic Block", "SRM University-AP", "Amaravati, Andhra Pradesh 522240", "India"],
  email: "singularitylab@srmap.edu.in",
  instagram: "https://www.instagram.com/thesingularity.srmap",
  linkedin: "https://www.linkedin.com/company/singularity-student-lab-srmap/",
  researchers: "25+",
};

export const vision =
  "We aim to advance the future of technology by driving rigorous research and fostering an environment where ideas are tested, shared and built upon. Through inclusive collaboration, we work to bridge the gap between ideas and real-world impact.";

export const mission =
  "To push the limits of technological advancement through research-driven work. We are dedicated to knowledge sharing and to preparing the next generation of researchers and engineers, ensuring a future where technology serves all.";

export const founder: Person = {
  name: "Jayanth Ramakrishnan",
  role: "Founder",
  photo: "https://res.cloudinary.com/djtemmctt/image/upload/v1773943803/jayanth_dtqvzg.jpg",
  website: "https://jayanthramakrishnan.online",
  linkedin: "https://www.linkedin.com/in/jayanth-ramakrishnan/",
  github: "https://github.com/jayanthoffl",
};

export const faculty: Person[] = [
  {
    name: "Prof. C. V. Tomy",
    role: "Dean, School of Applied Science and Engineering · Founding Faculty",
    photo: "https://res.cloudinary.com/djtemmctt/image/upload/v1774293381/tomy_rbpm0i.jpg",
  },
  {
    name: "Dr. Murali Krishna Enduri",
    role: "Head of Department, Computer Science and Engineering · Founding Faculty",
    photo: "https://res.cloudinary.com/djtemmctt/image/upload/v1774293381/HOD_ztx99a.jpg",
  },
  {
    name: "Dr. Priyanka",
    role: "Associate Head of Department, Computer Science and Engineering · Faculty Advisor",
    photo: "https://res.cloudinary.com/djtemmctt/image/upload/v1774293381/Priyanka_qcbe5c.jpg",
  },
];

export const principles: ResearchArea[] = [
  {
    title: "Learning by doing",
    text: "Members work on research-driven projects, hackathons and focused study sprints, learning methods by applying them to real problems.",
  },
  {
    title: "Seven laboratories, one community",
    text: "Each laboratory has its own focus, from artificial intelligence to robotics. Cross-laboratory collaboration is encouraged and supported.",
  },
  {
    title: "Mentorship",
    text: "Students work alongside peers, student executives and faculty mentors. The lab is supported by the Microsoft Student Community.",
  },
  {
    title: "Research with purpose",
    text: "We aim for work that can mature into publications, open-source software or community-focused solutions.",
  },
];

export const themes: (ResearchArea & { category: string })[] = [
  {
    category: "Computation",
    title: "Quantum Horizons",
    text: "Quantum computing is reshaping cryptography, optimisation and machine learning. Our members study quantum algorithms and their practical applications.",
  },
  {
    category: "Infrastructure",
    title: "Cloud and Scalable Systems",
    text: "Modern web architectures and cloud computing underpin resilient global systems. We study scalable platforms, microservices and distributed infrastructure.",
  },
  {
    category: "Security",
    title: "Cyber Defence and Decentralised Trust",
    text: "Cybersecurity and blockchain technologies are redefining data ownership, digital defence and cryptographic trust.",
  },
  {
    category: "Interaction",
    title: "Immersive Realities",
    text: "Mixed reality bridges physical and digital worlds. We explore spatial interfaces that change how people learn and interact.",
  },
  {
    category: "Access",
    title: "Inclusive Progress",
    text: "Low-code and no-code platforms let students from every background build solutions. Widening participation in technology is central to our mission.",
  },
];

export const joinSteps: ResearchArea[] = [
  {
    title: "A recruitment drive opens",
    text: "Recruitment is announced on campus and through our Instagram and LinkedIn pages. Applications are accepted only during a defined window, not on a rolling basis.",
  },
  {
    title: "You choose a laboratory",
    text: "Applicants select the laboratory that matches their interests: AI and machine learning, quantum computing, immersive technologies, cybersecurity, cloud systems, robotics or interdisciplinary research.",
  },
  {
    title: "Evaluation and placement",
    text: "Applicants are evaluated by the laboratory. Selected students join its team and begin work alongside current members and executives.",
  },
];

export const recruitment = {
  open: false,
  status: "Applications are currently closed.",
  detail:
    "The next recruitment drive has not yet been scheduled. It will be announced first on our Instagram and LinkedIn pages.",
};

export const labs: Lab[] = [
  {
    slug: "prajna-kritrima",
    number: "01",
    name: "Prajna Kritrima Lab",
    field: "Artificial Intelligence",
    fieldLong: "Artificial Intelligence, Machine Learning and Generative AI",
    meaning: "Sanskrit for artificial intelligence: prajna, wisdom; kritrima, made by hand.",
    summary: "Machine learning, deep learning and generative models, studied from first principles through to application.",
    overview:
      "Prajna Kritrima Lab is the artificial intelligence laboratory of Singularity. Its members study machine learning, deep learning and generative AI, from the theory behind neural networks to the design of intelligent agents and applied systems.",
    mission:
      "To advance artificial intelligence through research in machine learning, deep learning and generative AI, and to build systems that are not only capable but also ethical, explainable and beneficial to society.",
    areas: [
      { title: "Machine and Deep Learning", text: "Neural network architectures, training methods and evaluation." },
      { title: "Generative AI and Language Models", text: "Large language models, generative models and AI agents." },
      { title: "Computer Vision", text: "Methods for image and video understanding." },
    ],
    topics: ["Neural networks", "Large language models", "Computer vision", "Generative AI"],
    executives: [
      { name: "B Md Fawaz", role: "Executive", photo: `${CDN}/fawaz.png`, github: "https://github.com/f4w4z", linkedin: "https://www.linkedin.com/in/fawaaaaz/" },
      { name: "Lavjeet Kumar Rai", role: "Executive", photo: `${CDN}/lavjeet.png`, github: "https://github.com/lavjeetrai", linkedin: "https://www.linkedin.com/in/lavjeet-rai/" },
    ],
    members: [
      { name: "A Sai Shivanand", github: "https://github.com/asaishivanand-design", linkedin: "https://www.linkedin.com/in/sai-shivanand-appalla-9398b3321" },
      { name: "Akash Pandey" },
      { name: "Arijit Das", github: "https://github.com/arijitdas369", linkedin: "https://www.linkedin.com/in/arijit-das-891119383" },
      { name: "Jameela Muskaan" },
      { name: "K Guna Vishnu", github: "https://github.com/vishnukusi", linkedin: "https://www.linkedin.com/in/guna-vishnu-kusi-208522375" },
      { name: "Priyanshu", github: "https://github.com/Priyanshu-777", linkedin: "https://www.linkedin.com/in/priyanshu002" },
      { name: "Ritabbrata Chakraborty", github: "https://github.com/ChakrabortyRitabbrata-design", linkedin: "https://www.linkedin.com/in/ritabbrata-chakraborty-028a83342" },
      { name: "Shashanka Biswas", github: "https://github.com/Shashanka25", linkedin: "https://www.linkedin.com/in/shashanka-biswas-b09967395" },
      { name: "Surya Teja E", github: "https://github.com/sonic-08", linkedin: "https://www.linkedin.com/in/surya-teja-evuri-3bb1933b1" },
      { name: "Y Naga Pragnesh", github: "https://github.com/Pragnesh-10", linkedin: "https://www.linkedin.com/in/yedrunagapragnesh" },
    ],
  },
  {
    slug: "aanu-tattva",
    number: "02",
    name: "Aanu Tattva Lab",
    field: "Quantum Computing",
    fieldLong: "Quantum Computing and Quantum Machine Learning",
    meaning: "Sanskrit: aanu, atom; tattva, principle or essence.",
    summary: "Quantum algorithms, quantum machine learning and the foundations of quantum information.",
    overview:
      "Aanu Tattva Lab is the quantum computing laboratory of Singularity, where physics meets computation. Members study qubits, entanglement and quantum algorithms, moving from theoretical foundations to simulation.",
    mission:
      "To explore the potential of quantum computing through the study of quantum algorithms, quantum machine learning and quantum error correction, with attention to problems in optimisation, simulation and artificial intelligence.",
    areas: [
      { title: "Quantum Algorithms", text: "Algorithms that exploit superposition and entanglement, and their classical counterparts." },
      { title: "Quantum Machine Learning", text: "Hybrid quantum-classical models and variational methods." },
      { title: "Quantum Error Correction", text: "Noise, decoherence and the codes that protect quantum information." },
    ],
    topics: ["Qubits", "Entanglement", "Quantum machine learning", "Error correction"],
    executives: [
      { name: "Baratam Praneeth Gupta", role: "Executive", photo: `${CDN}/praneeth_gupta.jpg`, github: "https://github.com/Praneeth0910", linkedin: "https://www.linkedin.com/in/baratam-praneeth-gupta-baba24361" },
    ],
    members: [
      { name: "Ashwath Raj M", github: "https://github.com/Ashwath-Raj", linkedin: "https://www.linkedin.com/in/ashwath-raj-mulakalapalli" },
      { name: "K. Y. Vardhan", github: "https://github.com/vardhan-kadali", linkedin: "https://www.linkedin.com/in/vardhan-kadali-655446395/" },
      { name: "Sri Vastava Sri Harsha Gampa", github: "https://github.com/SRIVASTAVASRIHARSHA", linkedin: "https://www.linkedin.com/in/sri-vastava-sri-harsha-gampa-830b64382" },
      { name: "Sembeti Sai Pujith", github: "https://github.com/sembetisaipujith", linkedin: "https://www.linkedin.com/in/sai-pujith-sembeti-a305863b1" },
      { name: "Kondameeda Jaswanth Kumar", github: "https://github.com/KJaswanthKumar2108", linkedin: "https://www.linkedin.com/in/jaswanth-kumar-kondameeda" },
      { name: "Tejaswini", github: "https://github.com/codemaniac-debug", linkedin: "https://www.linkedin.com/in/sri-tejaswini-golakoti-07694b271/" },
      { name: "Jyoshna Pilli", github: "https://github.com/jyoshnapilli28-ctrl", linkedin: "https://www.linkedin.com/in/jyoshna-pilli-694aa23a9" },
    ],
  },
  {
    slug: "chitra-darshan",
    number: "03",
    name: "Chitra Darshan Lab",
    field: "Immersive Technologies",
    fieldLong: "Game Development, Augmented, Virtual and Mixed Reality",
    meaning: "Sanskrit for vision through imagery.",
    summary: "Augmented, virtual and mixed reality, real-time 3D and interactive media.",
    overview:
      "Chitra Darshan Lab is the immersive technologies laboratory of Singularity, covering augmented, virtual and mixed reality and game development. Members design virtual environments, interactive experiences and mixed reality applications.",
    mission:
      "To study interactive media and spatial computing through game mechanics, immersive technologies and human-computer interaction, building experiences that educate, inform and inspire.",
    areas: [
      { title: "Spatial Computing and XR", text: "Mixed reality interfaces, hand tracking and haptic feedback." },
      { title: "Real-time 3D", text: "Rendering, procedural shading and game physics." },
      { title: "Interactive Learning", text: "Simulations and narratives designed for education." },
    ],
    topics: ["Unity", "Unreal Engine", "ARKit", "Shaders"],
    executives: [
      { name: "Pranav Sikka", role: "Executive", photo: `${CDN}/pranav.png` },
      { name: "Shambo Chakraborty", role: "Executive", photo: `${CDN}/shambo.png`, github: "https://github.com/shambochakraborty10-stack", linkedin: "https://www.linkedin.com/in/shambo-chakraborty-480747395" },
    ],
    members: [],
  },
  {
    slug: "varahamihira",
    number: "04",
    name: "Varahamihira Lab",
    field: "Cybersecurity and Blockchain",
    fieldLong: "Cybersecurity, Blockchain and Digital Defence",
    meaning: "Named after Varahamihira, the sixth-century astronomer and polymath.",
    summary: "Applied cryptography, threat analysis and decentralised systems.",
    overview:
      "Varahamihira Lab is the cybersecurity and blockchain laboratory of Singularity. Members study cryptography, secure system design and threat intelligence, alongside the protocols behind decentralised networks.",
    mission:
      "To advance cybersecurity and blockchain technologies through careful study, secure protocol design and proactive defence, and to educate students in ethical hacking and threat analysis.",
    areas: [
      { title: "Decentralised Ledgers", text: "Smart contract security, consensus mechanisms and privacy protocols." },
      { title: "Threat Intelligence", text: "Vulnerability research, penetration testing and reverse engineering." },
      { title: "Applied Cryptography", text: "Post-quantum cryptography, secure computation and digital identity." },
    ],
    topics: ["Smart contracts", "Zero-knowledge proofs", "Penetration testing", "Cryptography"],
    executives: [
      { name: "Anmol Sharma", role: "Executive", photo: `${CDN}/anmol.png`, github: "https://github.com/Gostmennnnn", linkedin: "https://www.linkedin.com/in/Anmol-sharma-ba0b6a387" },
      { name: "Aditya Joshi", role: "Executive", photo: `${CDN}/aditya.png`, github: "https://github.com/adityajoshi18vk-art", linkedin: "https://www.linkedin.com/in/aditya-joshi-659001350/" },
    ],
    members: [
      { name: "Ayush Agnihotri", github: "https://github.com/ayushagnihotrii", linkedin: "https://www.linkedin.com/in/ayush-agnihotri-b3719b380" },
      { name: "Tanishq Yadav" },
      { name: "Zen Vats" },
      { name: "Yugal Sunil Patil" },
    ],
  },
  {
    slug: "bhaskaracharya",
    number: "05",
    name: "Bhaskaracharya Lab",
    field: "Cloud and Web Systems",
    fieldLong: "Web Development and Cloud Computing",
    meaning: "Named after Bhaskaracharya, the twelfth-century mathematician and astronomer.",
    summary: "Distributed systems, cloud infrastructure and modern web engineering.",
    overview:
      "Bhaskaracharya Lab is the web and cloud computing laboratory of Singularity. Members study web architecture, cloud platforms and distributed systems, combining sound engineering with careful design.",
    mission:
      "To advance web technologies and cloud computing through the study of scalable architectures, distributed systems and modern web frameworks, building digital services that are fast, accessible and resilient.",
    areas: [
      { title: "Distributed Cloud Platforms", text: "Microservices, container orchestration and edge computing." },
      { title: "Modern Web Engineering", text: "Performant, accessible client applications with React and Next.js." },
      { title: "APIs and Data", text: "Event-driven architectures, real-time backends and caching." },
    ],
    topics: ["Kubernetes", "Serverless", "Next.js", "Distributed systems"],
    executives: [
      { name: "Yuvraj Singh", role: "Executive", photo: `${CDN}/yuvraj.png`, github: "https://github.com/YUVRAJ-SINGH-3178", linkedin: "https://www.linkedin.com/in/yuvraj-singh-3178saturn/" },
      { name: "Praneeth", role: "Executive", photo: `${CDN}/praneeth.png`, github: "https://github.com/praneethzz", linkedin: "https://www.linkedin.com/in/praneeth-zz-985638391" },
      { name: "Supreet Kothuri", role: "Executive", photo: `${CDN}/supreet.png` },
    ],
    members: [
      { name: "Arnav Mehar", github: "https://github.com/Arnavmehar-5", linkedin: "https://www.linkedin.com/in/arnavmehar" },
      { name: "Avantika Singh", github: "https://github.com/avantika770", linkedin: "https://www.linkedin.com/in/avantika-space" },
      { name: "Jignesh Setty", github: "https://github.com/JIGNESH-SETTY", linkedin: "https://www.linkedin.com/in/jignesh-setty-957620380" },
      { name: "Sunkara Purna Jaswanth", github: "https://github.com/purnajaswanth-dev", linkedin: "https://www.linkedin.com/in/sunkara-purna-jaswanth" },
      { name: "Vinay Sathwik Motakatla", github: "https://github.com/vinaysathwik-ai", linkedin: "https://www.linkedin.com/in/motakatla-vinay-sathwik-387b94392/" },
      { name: "Yash Jaiswal", github: "https://github.com/Yash-programs16", linkedin: "https://www.linkedin.com/in/yash-jaiswal-78390739b" },
    ],
  },
  {
    slug: "agastya",
    number: "06",
    name: "Agastya Lab",
    field: "Robotics and Embedded Systems",
    fieldLong: "Robotics, Internet of Things and Embedded Systems",
    meaning: "Named after the sage Agastya, remembered for wisdom and invention.",
    summary: "Drones, long-range IoT networks and embedded hardware.",
    overview:
      "Agastya Lab is the robotics and embedded systems laboratory of Singularity. Members build smart systems, autonomous drones and long-range IoT networks that connect the physical and digital worlds.",
    mission:
      "To advance robotics, IoT and embedded systems through the study of autonomous systems, smart sensors and intelligent hardware, preparing students to work on connected, automated systems.",
    areas: [
      { title: "Autonomous Aerial Systems", text: "Flight control, obstacle avoidance and waypoint navigation." },
      { title: "LoRa Mesh Networks", text: "Low-power, long-range wireless sensor networks for agriculture and campus monitoring." },
      { title: "Firmware and Edge Devices", text: "Real-time embedded systems on ESP32 and ARM Cortex microcontrollers." },
    ],
    topics: ["UAVs", "LoRa", "FreeRTOS", "Edge sensing"],
    executives: [
      { name: "Agastya Pandey", role: "Executive", photo: `${CDN}/agastya.png` },
      { name: "Tarun Karma", role: "Executive", github: "https://github.com/HackerZ-app", linkedin: "https://www.linkedin.com/in/tarun-karma-581a043b9" },
    ],
    members: [
      { name: "Hriday Lath", linkedin: "https://www.linkedin.com/in/hridaylath" },
      { name: "Yandava Abhishek", github: "https://github.com/abhishekyandava7-png", linkedin: "https://www.linkedin.com/in/abhishek-yandava-557333352" },
    ],
  },
  {
    slug: "navya-vigyan",
    number: "07",
    name: "Navya Vigyan Lab",
    field: "Interdisciplinary Research",
    fieldLong: "Interdisciplinary and Experimental Technology",
    meaning: "Sanskrit for modern science.",
    summary: "Work across disciplines, together with research strategy and coordination across the laboratories.",
    overview:
      "Navya Vigyan Lab is the interdisciplinary laboratory of Singularity, where technology meets strategy and organisation. Its members explore the intersections of research, entrepreneurship and leadership, and support coordination across the other laboratories.",
    mission:
      "To encourage interdisciplinary research and experimental engineering, helping students connect diverse fields, translate research into application, and develop the leadership to shape emerging fields.",
    areas: [
      { title: "Research to Application", text: "Carrying academic ideas through to products, ventures and public benefit." },
      { title: "Cross-Disciplinary Prototyping", text: "Projects that combine biology, physics, AI and computing." },
      { title: "Research Coordination", text: "Coordination between laboratories, research ethics and publication practice." },
    ],
    topics: ["Research strategy", "Entrepreneurship", "Cross-disciplinary work"],
    executives: [
      { name: "Akshita Kanche", role: "Executive", photo: `${CDN}/akshita.png` },
      { name: "Dhriti Tandon", role: "Executive", photo: `${CDN}/dhriti.png` },
    ],
    members: [],
  },
];

export const getLab = (slug: string) => labs.find((l) => l.slug === slug);

// Each laboratory's image lives at public/images/labs/<slug>.jpg.
export const labImage = (lab: Pick<Lab, "slug">) => `/images/labs/${lab.slug}.jpg`;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/labs", label: "Laboratories" },
  { href: "/people", label: "People" },
  { href: "/join", label: "Join" },
];
