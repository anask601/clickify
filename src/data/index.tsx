import {
  AiFillGithub,
  AiOutlineCodepen,
  AiOutlineCodeSandbox,
} from "react-icons/ai";
import {
  SiAdobeacrobatreader,
  SiAdobephotoshop,
  SiAnchor,
  SiAsana,
  SiBitly,
  SiBuffer,
  SiCanva,
  SiDashlane,
  SiDiagramsdotnet,
  SiDiscord,
  SiDotnet,
  SiGlitch,
  SiGooglekeep,
  SiGooglesheets,
  SiHashnode,
  SiIndeed,
  SiInvision,
  SiJamboard,
  SiKahoot,
  SiMedium,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
  SiMicrosoftteams,
  SiMicrosoftword,
  SiMiro,
  SiNamecheap,
  SiNextdotjs,
  SiNotion,
  SiPrezi,
  SiRailway,
  SiRunkit,
  SiShopify,
  SiSpotify,
  SiStackbit,
  SiSurveymonkey,
  SiSvelte,
  SiTailwindcss,
  SiVercel,
  SiWix,
  SiWordpress,
} from "react-icons/si";
import { FaNode, FaReact, FaRust, FaSignature } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io";
import { TbBarcode } from "react-icons/tb";
import { MdOutlineTextFields, MdVpnLock } from "react-icons/md";
import { BiChalkboard } from "react-icons/bi";
import { RiFileList3Line } from "react-icons/ri";
import {
  AdobeSpark,
  AngularJs,
  BeFunky,
  BitIo,
  Codespace,
  Docusaurus,
  EditorX,
  Figma,
  Flutter,
  GitHubGist,
  GoogleAppScript,
  GoogleCalendar,
  GoogleDocs,
  GoogleForms,
  GoogleMeet,
  GoogleSites,
  GoogleSlides,
  iconSize,
  JavaScript,
  Matlab,
  MicrosoftVisualStudio,
  Personio,
  Resume,
  TypeScript,
  VideoEditor,
  Vite,
  VueJs,
} from "./icons";

interface EbookMark {
  name: string;
  key: string;
  icon: unknown;
  description: string;
  url: string;
  tags?: string[];
}
export const actions: EbookMark[] = [
  {
    name: "Google Meet",
    key: "google-meet",
    icon: GoogleMeet,
    description: "Create a real-time meeting using Google Meet.",
    url: "https://meet.new",
    tags: [
      "zoom",
      "meeting",
      "video",
      "conference",
      "communication",
      "collaboration",
      "teleconference",
      "webinar",
      "videoconference",
      "remote",
      "virtual",
      "team",
      "videocall",
    ],
  },
  {
    name: "Google Calendar",
    key: "google-calendar",
    icon: GoogleCalendar,
    description: "Create and send a new Google Calendar invite.",
    url: "https://meeting.new",
    tags: [
      "scheduling",
      "events",
      "appointments",
      "reminders",
      "alerts",
      "notifications",
      "planning",
      "invite",
    ],
  },
  {
    name: "Google Docs",
    key: "google-docs",
    icon: GoogleDocs,
    description: "Create a new document using Google Docs.",
    url: "https://docs.new",
    tags: [
      "document management",
      "online collaboration",
      "word processing",
      "spreadsheets",
      "presentations",
      "google suite",
      "office productivity",
    ],
  },
  {
    name: "Google Sheet",
    key: "google-sheet",
    icon: <SiGooglesheets size={iconSize} color="#34A853" />,
    description: "Create a new spreadsheet using Google Sheets.",
    url: "https://sheets.new",
    tags: [
      "Office suite",
      "excel",
      "Productivity",
      "finance",
      "budgeting",
      "investing",
    ],
  },
  {
    name: "Google Keep",
    key: "google-keep",
    icon: <SiGooglekeep size={iconSize} color="#FFBB00" />,
    description: "Create a new note using Google Keep.",
    url: "https://keep.new",
    tags: [
      "note-taking",
      "organization",
      "task management",
      "collaboration",
      "reminders",
      "labeling",
      "search",
    ],
  },
  {
    name: "Google Forms",
    key: "google-forms",
    icon: GoogleForms,
    description: "Create a new form using Google Forms.",
    url: "https://form.new",
    tags: [
      "survey",
      "quiz",
      "application form",
      "feedback form",
      "event registration",
      "order form",
      "subscription form",
      "membership form",
      "contact form",
      "job application form",
    ],
  },
  {
    name: "Google Slides",
    key: "google-slides",
    icon: GoogleSlides,
    description: "Create an online presentation using Google Slides.",
    url: "https://slide.new",
    tags: [
      "presentation",
      "report",
      "Presentation software",
      "Collaborative editing",
      "Chart and table creation",
    ],
  },
  {
    name: "Google Sites",
    key: "google-sites",
    icon: GoogleSites,
    description: "Create and publish a website using Google Sites.",
    url: "https://site.new",
    tags: [
      "collaboration",
      "project management",
      "communication",
      "document storage",
      "team organization",
      "event planning",
      "task management",
      "file sharing",
      "intranet",
    ],
  },
  {
    name: "Google Jamboard",
    key: "google-jamboard",
    icon: <SiJamboard size={iconSize} color="#F37C20" />,
    description: "Create a new Jamboard with Google.",
    url: "https://jam.new",
    tags: [
      "ideas",
      "board",
      "brainstorming",
      "Collaboration",
      "Virtual whiteboard",
      "Online meetings",
      "Remote work",
      "Project management",
      "Team planning",
    ],
  },
  {
    name: "Google AppScript",
    key: "google-appScript",
    icon: GoogleAppScript,
    description:
      "Create and share new editor functions using Google App Script.",
    url: "https://script.new",
    tags: ["code", "scripting", "automation"],
  },
  {
    name: "Bitly",
    key: "bitly",
    icon: <SiBitly size={iconSize} color="#EE6123" />,
    description: "Create memorable, short links to your website with Bitly.",
    url: "https://bitly.new",
    tags: [
      "URL shortening",
      "online marketing",
      "link management",
      "social media",
      "analytics",
      "branding",
      "SEO",
    ],
  },
  {
    name: "BeFunky",
    key: "beFunky",
    icon: BeFunky,
    description: "Quickly edit, filter, and enhance your photos with BeFunky.",
    url: "https://befunky.new",
    tags: [
      "photo editing",
      "graphic design",
      "image manipulation",
      "collage maker",
      "photo filters",
      "text overlay",
      "sticker library",
      "artistic effects",
    ],
  },
  {
    name: "Proxy",
    key: "proxy",
    icon: <MdVpnLock size={iconSize} />,
    description: "Use a proxy server without having to connect to a VPN.",
    url: "https://vpn.new",
    tags: [
      "vpn",
      "proxy",
      "proxy server",
      "anonymous proxy",
      "reverse proxy",
      "HTTP proxy",
    ],
  },
  {
    name: "Medium",
    key: "medium",
    icon: <SiMedium size={iconSize} />,
    description: "Create a new story on Medium.",
    url: "https://story.new",
    tags: [
      "publishing",
      "writing",
      "journalism",
      "blogging",
      "media",
      "content creation",
      "creative writing",
      "non-fiction",
      "self-improvement",
      "technology",
    ],
  },
  {
    name: "Hashnode",
    key: "hashnode",
    icon: <SiHashnode size={iconSize} color="#2962FF" />,
    description: "Create a new developer blog post using hashnode.",
    url: "https://hn.new",
    tags: [
      "publishing",
      "writing",
      "journalism",
      "blogging",
      "media",
      "content creation",
      "creative writing",
      "non-fiction",
      "self-improvement",
      "technology",
    ],
  },
  {
    name: "Spotify",
    key: "spotify",
    icon: <SiSpotify size={iconSize} color="#1DB954" />,
    description: "Create a new Spotify playlist.",
    url: "https://playlist.new",
    tags: ["music", "song", "podcast"],
  },
  {
    name: "SurveyMonkey",
    key: "survey-monkey",
    icon: <SiSurveymonkey size={iconSize} color="#00BF6F" />,
    description: "Create a new survey using SurveyMonkey.",
    url: "https://surveymonkey.new",
    tags: [
      "survey",
      "quiz",
      "application form",
      "feedback form",
      "event registration",
      "order form",
      "subscription form",
      "membership form",
      "contact form",
      "job application form",
    ],
  },
  {
    name: "GitHub",
    key: "github",
    icon: <AiFillGithub size={iconSize} />,
    description: "Create a new GitHub repository.",
    url: "https://github.new",
    tags: [
      "code",
      "oss",
      "open source",
      "hosting",
      "Continuous Integration",
      "ci/cd",
      "github pages",
      "project management",
      "Dev",
    ],
  },
  {
    name: "GitHub Gist",
    key: "github-gist",
    icon: GitHubGist,
    description: "Create a new GitHub gist.",
    url: "https://gist.new",
    tags: ["code", "oss", "open source", "note", "Dev"],
  },
  {
    name: "Figma",
    key: "figma",
    icon: Figma,
    description: "Design and prototype using Figma's collaborative interface.",
    url: "https://figma.new",
    tags: [
      "ui",
      "ux",
      "design",
      "frontend",
      "graphic design",
      "web design",
      "Animation",
      "Prototyping",
    ],
  },
  {
    name: "CodePen",
    key: "codepen",
    icon: <AiOutlineCodepen size={iconSize} />,
    description:
      "Prototype your frontend code in CodePen's online development sandbox.",
    url: "https://pen.new",
    tags: ["code", "snippet"],
  },
  {
    name: "Codespace",
    key: "codespace",
    icon: Codespace,
    description: "Create a new code snippet on Codespace.",
    url: "https://snippet.new",
    tags: ["code", "snippet"],
  },
  {
    name: "React.js",
    key: "react-js",
    icon: <FaReact size={iconSize} color="#61DAFB" />,
    description: "Create a new React project online with CodeSandbox.",
    url: "https://react.new",
    tags: ["code", "snippet", "editor", "javascript"],
  },
  {
    name: "Vue.js",
    key: "vue-js",
    icon: VueJs,
    description: "Create a new vue.js project online with CodeSandbox.",
    url: "https://vue.new",
    tags: ["code", "snippet", "editor", "javascript"],
  },
  {
    name: "Angular.js",
    key: "angular-js",
    icon: AngularJs,
    description: "Create a new Angular project online with CodeSandbox.",
    url: "https://ng.new",
    tags: ["code", "snippet", "editor", "javascript"],
  },
  {
    name: "Node.js",
    key: "node-js",
    icon: <FaNode size={iconSize} color="#5C9553" />,
    description: "Create a new Node.js project online with CodeSandbox.",
    url: "https://nodejs.new",
    tags: ["code", "snippet", "editor", "javascript"],
  },
  {
    name: "Next.js",
    key: "next-js",
    icon: <SiNextdotjs size={iconSize} />,
    description: "Create a new Next.js project online with stackblitz.",
    url: "https://next.new",
    tags: ["code", "snippet", "editor", "javascript"],
  },
  {
    name: "JavaScript",
    key: "javascript",
    icon: JavaScript,
    description: "Create a new Javascript project online with CodeSandbox.",
    url: "https://js.new",
    tags: ["code", "snippet", "editor", "javascript"],
  },
  {
    name: "TypeScript",
    key: "typescript",
    icon: TypeScript,
    description: "Create a new Typescript project online with CodeSandbox.",
    url: "https://ts.new",
    tags: ["code", "snippet", "editor", "javascript"],
  },
  {
    name: "Vite",
    key: "vite",
    icon: Vite,
    description: "Create a new Vite.js project online with Stackblitz.",
    url: "https://vite.new",
    tags: ["code", "snippet", "editor", "javascript"],
  },
  {
    name: "Flutter",
    key: "flutter",
    icon: Flutter,
    description: "Create a new Flutter project online with dartpad.",
    url: "https://flutter.new",
    tags: ["code", "snippet", "editor"],
  },
  {
    name: "Ionic",
    key: "ionic",
    icon: <IoLogoIonic size={iconSize} color="#3880FF" />,
    description:
      "Create a high quality, cross-platform native and web app with Ionic.",
    url: "https://ionic.new",
    tags: ["code", "snippet", "editor"],
  },
  {
    name: ".NET",
    key: "dot-net",
    icon: <SiDotnet size={iconSize} color="#512BD4" />,
    description:
      "Create a .NET application in Microsoft's Try .NET environment.",
    url: "https://dotnet.new",
    tags: ["code", "snippet", "editor"],
  },
  {
    name: "Svelte",
    key: "svelte",
    icon: <SiSvelte size={iconSize} color="#FF3E00" />,
    description: "Create a new Svelte project online with CodeSandbox.",
    url: "https://svelte.new",
    tags: ["code", "snippet", "editor"],
  },
  {
    name: "Rust",
    key: "rust",
    icon: <FaRust size={iconSize} />,
    description: "Run a Rust Program.",
    url: "https://rust.new",
    tags: ["code", "snippet", "editor"],
  },
  {
    name: "CodeSandbox",
    key: "codeSandbox",
    icon: <AiOutlineCodeSandbox size={iconSize} />,
    description: "Create a new project online with CodeSandbox.",
    url: "https://csb.new",
    tags: ["code", "snippet", "editor"],
  },
  {
    name: "Glitch",
    key: "glitch",
    icon: <SiGlitch size={iconSize} color="#3333FF" />,
    description:
      "Create a full-stack app in your browser and collaborate live.",
    url: "https://glitch.new",
    tags: ["code", "snippet", "editor", "host"],
  },
  {
    name: "UUID",
    key: "uuid",
    icon: <TbBarcode size={iconSize} />,
    description: "Generate a new UUID.",
    url: "https://uuid.new",
  },
  {
    name: "Microsoft Excel",
    key: "microsoft-excel",
    icon: <SiMicrosoftexcel size={iconSize} color="#217346" />,
    description: "Create a spreadsheet using Excel.",
    url: "https://excel.new",
    tags: [
      "data analysis",
      "spreadsheets",
      "formulas",
      "charts",
      "graphs",
      "pivot tables",
      "macros",
      "VBA",
      "Excel functions",
      "financial modeling",
    ],
  },
  {
    name: "Microsoft PowerPoint",
    key: "microsoft-powerPoint",
    icon: <SiMicrosoftpowerpoint size={iconSize} color="#B7472A" />,
    description: "Create a new presentation using PowerPoint.",
    url: "https://powerpoint.new",
    tags: [
      "presentation",
      "slides",
      "graphics",
      "charts",
      "tables",
      "text",
      "animation",
      "transitions",
      "speaker notes",
    ],
  },
  {
    name: "Microsoft Word",
    key: "microsoft-word",
    icon: <SiMicrosoftword size={iconSize} color="#2B579A" />,
    description: "Create a new document using Word.",
    url: "https://word.new",
    tags: [
      "word processing",
      "document creation",
      "text editing",
      "formatting",
      "paragraph styling",
      "font management",
      "page layout",
      "tables",
      "graphics",
      "printing",
      "collaboration",
      "spell check",
      "grammar check",
      "mail merge",
      "templates",
    ],
  },
  {
    name: "Microsoft Visual Studio",
    key: "microsoft-visual-studio",
    icon: MicrosoftVisualStudio,
    description: "Create a new Visual Studio codespace for your project.",
    url: "https://env.new",
    tags: [
      "IDE",
      "Code Editor",
      "Debugging Tools",
      "Version Control",
      "Project Management",
      "Integrated Development Environment",
      "Software Development",
      "Application Development",
      "Programming Language Support",
      "Code Navigation",
    ],
  },
  {
    name: "Microsoft Teams",
    key: "microsoft-teams",
    icon: <SiMicrosoftteams size={iconSize} color="#6264A7" />,
    description: "Chat with your team using Microsoft Teams.",
    url: "https://teams.new",
    tags: ["Collaboration tools", "Video conferencing", "meeting", "messaging"],
  },
  {
    name: "Editor X",
    key: "editor-x",
    icon: EditorX,
    description: "Create a website using Editor X's online tool.",
    url: "https://editorx.new",
    tags: [],
  },
  {
    name: "Stackbit",
    key: "stackbit",
    icon: <SiStackbit size={iconSize} color="#207BEA" />,
    description: "Create a new Jamstack site.",
    url: "https://jamstack.new",
    tags: [
      "content management system",
      "static site generator",
      "headless CMS",
      "JAMstack",
      "modern web development",
      "web design",
      "data management",
      "digital marketing",
      "content marketing",
      "SEO",
    ],
  },
  {
    name: "Tailwind",
    key: "tailwind",
    icon: <SiTailwindcss size={iconSize} color="#06B6D4" />,
    description: "Create a new Tailwind Play page.",
    url: "https://tailwindcss.new",
    tags: ["utilities", "css", "frontend", "editor"],
  },
  {
    name: "Vercel",
    key: "vercel",
    icon: <SiVercel size={iconSize} />,
    description: "Create a new project in Vercel for preview and deployment.",
    url: "https://deploy.new",
    tags: [
      "deployment",
      "serverless",
      "cloud computing",
      "web hosting",
      "continuous integration",
      "continuous delivery",
    ],
  },
  {
    name: "Docusaurus",
    key: "docusaurus",
    icon: Docusaurus,
    description: "Create a new docusaurus project in your browser.",
    url: "https://docusaurus.new",
    tags: [
      "Documentation",
      "docs",
      "guides",
      "tutorials",
      "help",
      "support",
      "faq",
    ],
  },
  {
    name: "PDF Compress",
    key: "pdf-compress",
    icon: <SiAdobeacrobatreader size={iconSize} color="#EC1C24" />,
    description:
      "Compress PDF documents with simple drag and drop with Adobe Acrobat.",
    url: "https://compresspdf.new",
    tags: ["productivity"],
  },
  {
    name: "PDF Merge",
    key: "pdf-merge",
    icon: <SiAdobeacrobatreader size={iconSize} color="#EC1C24" />,
    description: "Combine PDFs into one file with Adobe.",
    url: "https://mergepdf.new",
    tags: ["productivity"],
  },
  {
    name: "PDF to Word",
    key: "pdf-to-word",
    icon: <SiAdobeacrobatreader size={iconSize} color="#EC1C24" />,
    description: "Convert PDFs to Word documents with Adobe.",
    url: "https://pdftoword.new",
    tags: ["productivity", "docs"],
  },
  {
    name: "JPG to PDF",
    key: "jpg-to-pdf",
    icon: <SiAdobeacrobatreader size={iconSize} color="#EC1C24" />,
    description: "Convert JPG images to PDF with Adobe Acrobat.",
    url: "https://jpgtopdf.new",
    tags: ["productivity", "image"],
  },
  {
    name: "Word to PDF",
    key: "word-to-pdf",
    icon: <SiAdobeacrobatreader size={iconSize} color="#EC1C24" />,
    description: "Convert Microsoft Word documents to PDF.",
    url: "https://wordtopdf.new",
    tags: ["productivity", "docs"],
  },
  {
    name: "Buffer",
    key: "buffer",
    icon: <SiBuffer size={iconSize} />,
    description: "Schedule and manage your social media posts.",
    url: "https://buffer.new",
    tags: [],
  },
  {
    name: "Email Signature",
    key: "email-signature",
    icon: <FaSignature size={iconSize} />,
    description:
      "Create a professional email signature in 30 seconds HoneyBook.",
    url: "https://emailsignature.new",
    tags: ["template", "productivity"],
  },
  {
    name: "Canva",
    key: "canva",
    icon: <SiCanva size={iconSize} color="#00C4CC" />,
    description: "Create a new Canva design.",
    url: "https://design.new",
    tags: [
      "Graphic Design",
      "Photography",
      "Illustration",
      "Branding",
      "Web Design",
      "Social Media Marketing",
      "Print Design",
      "Infographic Design",
    ],
  },
  {
    name: "Canva Menu",
    key: "canva-menu",
    icon: <SiCanva size={iconSize} color="#00C4CC" />,
    description:
      "Create an appetizing menu using customizable templates from Canva.",
    url: "https://menu.new",
    tags: [
      "Graphic Design",
      "Photography",
      "Illustration",
      "Branding",
      "Web Design",
      "Social Media Marketing",
      "Print Design",
      "Infographic Design",
    ],
  },
  {
    name: "Canva Resume",
    key: "canva-resume",
    icon: <SiCanva size={iconSize} color="#00C4CC" />,
    description:
      "Create a professional-looking resume using templates from Canva.",
    url: "https://resumes.new",
    tags: [
      "Resume",
      "CV",
      "Graphic Design",
      "Online Resume",
      "Job Search",
      "Career",
      "Professional Development",
      "Visual Resume",
      "Resume Templates",
    ],
  },
  {
    name: "Indeed",
    key: "indeed",
    icon: <SiIndeed size={iconSize} color="#003A9B" />,
    description: "Create your online resume with Indeed.",
    url: "https://profile.new",
    tags: [
      "Job Search",
      "Employment",
      "Resumes",
      "Recruiting",
      "Career Development",
      "Hiring",
      "Job Postings",
      "Human Resources",
    ],
  },
  {
    name: "Shopify",
    key: "shopify",
    icon: <SiShopify size={iconSize} color="#7AB55C" />,
    description: "Start a new online shop on Shopify.",
    url: "https://shopify.new",
    tags: [
      "E-Commerce",
      "Online Store",
      "Retail",
      "Inventory Management",
      "Point of Sale",
      "Payments",
      "Marketing",
      "Mobile App",
      "Analytics",
    ],
  },
  {
    name: "Business Name",
    key: "business-name",
    icon: <SiShopify size={iconSize} color="#7AB55C" />,
    description: "Designate your business name on Shopify.",
    url: "https://businessname.new",
    tags: [],
  },
  {
    name: "Business Card",
    key: "business-card",
    icon: <SiNamecheap size={iconSize} color="#DE3723" />,
    description: "Design personalized business cards with Namecheap.",
    url: "https://businesscard.new",
    tags: [],
  },
  {
    name: "Anchor",
    key: "anchor",
    icon: <SiAnchor size={iconSize} color="#5000B9" />,
    description: "Create a new podcast episode using Anchor.",
    url: "https://podcast.new",
    tags: [
      "Audio Editing",
      "Podcasting",
      "Radio",
      "Broadcasting",
      "Audio Recording",
      "Media Production",
      "Voice Over",
      "Music Production",
    ],
  },
  {
    name: "Personio",
    key: "personio",
    icon: Personio,
    description: "Track your candidate pipeline using Personio.",
    url: "https://candidate.new",
    tags: [
      "Human Resources",
      "Talent Management",
      "Recruiting",
      "Payroll",
      "Workforce Planning",
      "Time Tracking",
      "Performance Management",
      "Employee Engagement",
    ],
  },
  {
    name: "Wix",
    key: "wix",
    icon: <SiWix size={iconSize} color="#0C6EFC" />,
    description: "Build a new website using Wix.",
    url: "https://wix.new",
    tags: [
      "Web Design",
      "Website Builder",
      "E-Commerce",
      "Online Marketing",
      "SEO",
      "Small Business",
      "Hosting",
      "Cloud Services",
    ],
  },
  {
    name: "Adobe Spark",
    key: "adobe-spark",
    icon: AdobeSpark,
    description:
      "Design beautiful social media posts and more with Adobe Spark.",
    url: "https://create.new",
    tags: [
      "Graphic Design",
      "Branding",
      "Marketing",
      "Social Media",
      "Digital Content",
      "Visual Communications",
      "Creative Tools",
      "Web Design",
    ],
  },
  {
    name: "Logo",
    key: "logo",
    icon: AdobeSpark,
    description: "Create a new logo for your business with Adobe Spark.",
    url: "https://logo.new",
    tags: [
      "Graphic Design",
      "Branding",
      "Marketing",
      "Social Media",
      "Digital Content",
      "Visual Communications",
      "Creative Tools",
      "Web Design",
    ],
  },
  {
    name: "Photoshop",
    key: "photoshop",
    icon: <SiAdobephotoshop size={iconSize} color="#31A8FF" />,
    description: "Edit an image using Adobe Photoshop online.",
    url: "https://photo.new",
    tags: [
      "Graphic Design",
      "Photo Editing",
      "Digital Art",
      "Illustration",
      "Creative Suite",
      "Adobe",
      "Image Manipulation",
      "Design Tools",
    ],
  },
  {
    name: "Wordpress",
    key: "wordpress",
    icon: <SiWordpress size={iconSize} color="#21759B" />,
    description: "Create a new blog on wordpress.com.",
    url: "https://blog.new",
    tags: [
      "Content Management System",
      "Blogging Platform",
      "Website Development",
      "PHP",
      "Web Design",
      "SEO",
      "E-commerce",
      "Plugins",
    ],
  },
  {
    name: "Blog Post",
    key: "blog-post",
    icon: <SiWordpress size={iconSize} color="#21759B" />,
    description: "Create a new blog post on your Wordpress blog.",
    url: "https://post.new",
    tags: [
      "Content Management System",
      "Blogging Platform",
      "Website Development",
      "PHP",
      "Web Design",
      "SEO",
      "E-commerce",
      "Plugins",
    ],
  },
  {
    name: "Video Editor",
    key: "video-editor",
    icon: VideoEditor,
    description: "Edit your video online.",
    url: "https://recording.new",
    tags: [],
  },
  {
    name: "Board",
    key: "board",
    icon: <BiChalkboard size={iconSize} />,
    description: "Collaborate remotely on an online whiteboard.",
    url: "https://board.new",
    tags: [],
  },
  {
    name: "Asana",
    key: "asana",
    icon: <SiAsana size={iconSize} />,
    description: "Add a new task to your Asana project.",
    url: "https://asana.new",
    tags: [
      "Project Management",
      "Task Management",
      "Collaboration",
      "Productivity",
      "Workflow",
      "Agile Methodologies",
      "Team Communication",
      "Business Management",
    ],
  },
  {
    name: "Resume",
    key: "resume",
    icon: Resume,
    description:
      "Build a new resume with one of CV2You's customizable templates.",
    url: "https://resume.new",
    tags: [
      "Human Resources",
      "Talent Management",
      "Recruiting",
      "Payroll",
      "Workforce Planning",
      "Time Tracking",
      "Performance Management",
      "Employee Engagement",
    ],
  },
  {
    name: "InVision",
    key: "invision",
    icon: <SiInvision size={iconSize} color="#FF3366" />,
    description:
      "Collaborate on an online whiteboard using InVision's Freehand.",
    url: "https://freehand.new",
    tags: [
      "Design",
      "Prototyping",
      "UI/UX",
      "Collaboration",
      "Creative Tools",
      "Graphic Design",
      "Web Design",
      "Product Design",
    ],
  },
  {
    name: "Prezi",
    key: "prezi",
    icon: <SiPrezi size={iconSize} color="#3181FF" />,
    description: "Design beautiful presentations using Prezi.",
    url: "https://prezi.new",
    tags: [
      "presentation",
      "slides",
      "graphics",
      "charts",
      "tables",
      "text",
      "animation",
      "transitions",
      "speaker notes",
    ],
  },
  {
    name: "Text Editor",
    key: "text-editor",
    icon: <MdOutlineTextFields size={iconSize} />,
    description: "Quickly write a note in online text editor.",
    url: "https://text.new",
    tags: ["ide"],
  },
  {
    name: "Kahoot",
    key: "kahoot",
    icon: <SiKahoot size={iconSize} color="#46178F" />,
    description: "Create an online quiz using Kahoot.",
    url: "https://quiz.new",
    tags: [
      "survey",
      "quiz",
      "application form",
      "feedback form",
      "event registration",
      "order form",
      "subscription form",
      "membership form",
      "contact form",
      "job application form",
    ],
  },
  {
    name: "Dashlane",
    key: "dashlane",
    icon: <SiDashlane size={iconSize} color="#0E353D" />,
    description:
      "Keep your online accounts secure with Dashlane's password generator.",
    url: "https://password.new",
    tags: [
      "password manager",
      "security",
      "authentication",
      "personal finance",
      "online privacy",
    ],
  },
  {
    name: "Discord",
    key: "discord",
    icon: <SiDiscord size={iconSize} color="#5865F2" />,
    description:
      "Start a new Discord community where you can hang out and chat with friends.",
    url: "https://discord.new",
    tags: [
      "General",
      "Gaming",
      "Technology",
      "Entertainment",
      "Art",
      "Political",
      "Education",
      "Music",
      "Sports",
      "Fashion",
    ],
  },
  {
    name: "Test Data",
    key: "test-data",
    icon: <RiFileList3Line size={iconSize} />,
    description: "Generate test identities for testing purposes.",
    url: "https://id.new",
    tags: ["testing", "mocking"],
  },
  {
    name: "Diagram",
    key: "diagram",
    icon: <SiDiagramsdotnet size={iconSize} color="#F08705" />,
    description: "Create a flowchart diagram using Diagrams.net.",
    url: "https://diagram.new",
    tags: [
      "flowchart",
      "UML",
      "ERD",
      "organizational chart",
      "network diagram",
      "process map",
      "project management",
      "wireframe",
    ],
  },
  {
    name: "bit.io",
    key: "bit-io",
    icon: BitIo,
    description: "Easily query bit.io data repositories.",
    url: "https://query.new",
    tags: [],
  },
  {
    name: "Miro",
    key: "miro",
    icon: <SiMiro size={iconSize} />,
    description: "Create a wireframe for your project using Miro.",
    url: "https://wireframe.new",
    tags: [
      "Collaboration",
      "Virtual Whiteboard",
      "Project Management",
      "Design Tool",
      "Mind Mapping",
    ],
  },
  {
    name: "Matlab",
    key: "matlab",
    icon: Matlab,
    description: "Use MATLAB and Simulink through your web browser.",
    url: "https://matlab.new",
    tags: [
      "matrix operations",
      "plotting",
      "matrix manipulation",
      "data analysis",
      "mathematical modeling",
      "algorithm development",
      "simulation",
      "numerical computing",
      "statistics",
      "signal processing",
    ],
  },
  {
    name: "Railway",
    key: "railway",
    icon: <SiRailway size={iconSize} />,
    description: "Create a new Railway deployment in the cloud.",
    url: "https://dev.new",
    tags: [],
  },
  {
    name: "RunKit",
    key: "runkit",
    icon: <SiRunkit size={iconSize} color="#DB4792" />,
    description: "Prototype and launch your APIs using RunKit.",
    url: "https://api.new",
    tags: [
      "Javascript",
      "Node.js",
      "Online IDE",
      "Code Execution",
      "Collaboration",
      "API Development",
      "Data Visualization",
    ],
  },
  {
    name: "Notion",
    key: "notion",
    icon: <SiNotion size={iconSize} />,
    description:
      "Take notes, track your progress and organize project details.",
    url: "https://notion.new",
    tags: [
      "Productivity",
      "Task Management",
      "Collaboration",
      "Note-Taking",
      "Documentation",
      "Planning",
      "Organization",
    ],
  },
];