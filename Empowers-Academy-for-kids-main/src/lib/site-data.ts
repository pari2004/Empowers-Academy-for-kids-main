// All landing-page copy lives here so sections stay presentational.
// Copy is used verbatim from the build brief — do not invent new claims/stats.

export const CONTACT = {
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@empowersacademy.in",
  emailHref: "mailto:hello@empowersacademy.in",
  address:
    "BMTC Complex, Old Madiwala, Kuvempu Nagar, Stage 2, BTM Layout, Bengaluru, Karnataka 560068",
  hours: [
    "Mon–Fri 9:00 AM–8:00 PM",
    "Sat 9:00 AM–6:00 PM",
    "Sun 9:00 AM–5:00 PM",
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/empowers-academy" },
    { label: "YouTube", href: "https://www.youtube.com/@EmpowersAcademy" },
    { label: "Instagram", href: "https://www.instagram.com/empowers_academy" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61577413503422" },
  ],
  mapEmbed:
    "https://maps.google.com/maps?q=BTM%20Layout%20Bengaluru%20Karnataka%20560068&t=&z=14&ie=UTF8&iwloc=&output=embed",
};

export const NAV_LINKS = [
  { label: "PROGRAMS", href: "#programs" },
  { label: "THE GUARANTEE", href: "#guarantee" },
  { label: "TRAINERS", href: "#mentors" },
  { label: "CONTACT", href: "#contact" },
];

export const HERO = {
  headline: "Get a Better Offer in 180 Days. Or Your Money Back. In Writing.",
  subhead:
    "Live, mentor-led AI programs for experienced professionals, career switchers, and non-tech backgrounds alike. Backed by a signed legal guarantee before you pay a rupee.",
};

export const PARTNERS = [
  "Google", "Microsoft", "Amazon", "Meta", "Infosys", "TCS", "Wipro",
  "Accenture", "Deloitte", "IBM", "Capgemini", "HCL", "Tech Mahindra",
  "Cognizant", "Oracle", "SAP", "Flipkart", "Swiggy", "Zomato", "PhonePe",
];

export const WHY_CARDS = [
  {
    title: "180-Day Better-Offer Guarantee",
    body:
      "If you don't land a better offer within 180 days of starting, you get a full refund — backed by a signed legal agreement executed before you pay anything.",
    loud: true,
  },
  {
    title: "Live, Small-Batch Cohorts",
    body:
      "Roughly 8–10 learners per batch, live online and mentor-led. Not a pre-recorded video library.",
    loud: false,
  },
  {
    title: "Curriculum That Moves With the Market",
    body:
      "Revised on a rolling basis to track real shifts in AI, not a static syllabus frozen in time.",
    loud: false,
  },
  {
    title: "Built for Real Professionals",
    body:
      "Open to experienced professionals, non-tech backgrounds, and freshers alike — not just engineers.",
    loud: false,
  },
];

export type Program = {
  tag: string;
  title: string;
  goal: string;
  eligibility?: string;
  format: string;
  stack: string[];
  curriculum: string[];
  mentors: string;
};

export const PROGRAMS: Program[] = [
  {
    tag: "AI & ML",
    title: "AI & ML Professional Program",
    goal: "Become a production-ready AI & Machine Learning engineer.",
    eligibility: "Beginner-friendly, no prior coding experience required.",
    format: "6 months · live online · mentor-led · ~8–10 learners/cohort",
    stack: [
      "Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch",
      "FastAPI", "Git/GitHub", "VS Code", "SQL",
    ],
    curriculum: [
      "Python programming from the ground up",
      "Data analysis and preprocessing with NumPy and Pandas",
      "Building and evaluating traditional ML and deep learning architectures",
      "API development with FastAPI and version control with Git/GitHub",
      "Enterprise-grade AI apps and the production model lifecycle",
    ],
    mentors: "Ms. Aishwarya U (AI/ML Foundation)",
  },
  {
    tag: "GENERATIVE + AGENTIC AI",
    title: "PG Executive Agentic AI & Generative AI",
    goal: "Master autonomous AI agents and Generative AI systems at an executive level.",
    format: "6 months · live online · mentor-led · ~8–10 learners/cohort",
    stack: [
      "Generative AI", "Agentic AI", "LLM Engineering", "Prompt Engineering",
      "RAG Systems", "Vector Databases", "Multi-Agent Orchestration", "MLOps",
      "Python", "Deep Learning",
    ],
    curriculum: [
      "Building applications on top of large language models (LLMs)",
      "Creating autonomous, goal-oriented AI agents",
      "Designing and integrating Retrieval-Augmented Generation (RAG) systems",
      "Working with vector databases for real-time semantic search",
      "Orchestrating multi-agent frameworks for complex workflows",
      "Building MLOps pipelines to monitor and manage production AI models",
    ],
    mentors: "Mr. Gowrish H B (Agentic AI), Ms. Shruthi M G (LLMs)",
  },
  {
    tag: "FORWARD DEPLOYED",
    title: "Forward Deployed Engineering Program",
    goal: "Become the kind of engineer enterprises embed directly to ship AI in the field.",
    eligibility: "Beginner-friendly, no prior coding experience required.",
    format: "6 months · live online · mentor-led · ~8–10 learners/cohort",
    stack: [
      "Full-Stack", "System Design", "Cloud Deployment", "RAG", "LLM Apps",
      "Security", "Observability", "Multi-Cloud",
    ],
    curriculum: [
      "Engineering & product thinking — full-stack, system design, cloud, prototyping, customer discovery",
      "Advanced AI integration — RAG, LLM applications, AI product engineering",
      "Production & security — security fundamentals, observability, monitoring, multi-cloud deployment",
      "Turning enterprise business problems into working prototypes",
      "Maintaining application security and monitoring in production",
    ],
    mentors: "Mr. Sagar (Forward Deployed Engineering)",
  },
];

export const JOURNEY = [
  { title: "Enrollment & Orientation", body: "Current-role assessment, personalized target-offer mapping, legal guarantee agreement signed." },
  { title: "Live Sessions", body: "Cohort-based, expert-led, live Q&A, code-alongs." },
  { title: "Weekly Assignments", body: "Graded, with direct mentor feedback." },
  { title: "Applied Projects", body: "Built around your own industry/domain where possible." },
  { title: "Portfolio Building", body: "GitHub profile, project showcase, case studies." },
  { title: "Positioning", body: "Resume, LinkedIn, and personal brand rebuilt around your new AI-relevant skill set." },
  { title: "Interview Support", body: "Mock technical, system-design, and behavioral rounds until a better offer is secured." },
];

export const GUARANTEE_STEPS = [
  { title: "Sign the Agreement", body: "Before you pay anything, you sign a legal agreement laying out the exact guarantee terms." },
  { title: "Complete the Program", body: "Attend your live cohort, finish the applied projects, and work with your mentors." },
  { title: "Get Placement Support", body: "Use the full 180-day window for resume positioning, mock interviews, and introductions to hiring partners." },
  { title: "Land a Better Offer", body: "The expected outcome for participants who engage fully with the process." },
  { title: "If Not — Claim Your Refund", body: "If you don't have a better offer than the one you started with, within 180 days, you get a full refund, exactly as agreed in writing before you paid." },
];

export const ALUMNI = [
  { name: "Arjun Mehta", prior: "Senior Software Engineer", role: "ML Engineer", company: "Google" },
  { name: "Priya Sharma", prior: "Business Analyst", role: "Data Scientist", company: "Microsoft" },
  { name: "Vikram Patel", prior: "Backend Developer", role: "AI Engineer", company: "Amazon" },
  { name: "Sneha Reddy", prior: "Software Developer", role: "GenAI Developer", company: "Flipkart" },
  { name: "Rahul Verma", prior: "Junior Analyst", role: "Senior Data Analyst", company: "Deloitte" },
  { name: "Anita Desai", prior: "Research Associate", role: "AI Researcher", company: "IBM" },
  { name: "Karan Singh", prior: "Software Engineer", role: "NLP Engineer", company: "Meta" },
  { name: "Neha Gupta", prior: "DevOps Engineer", role: "MLOps Engineer", company: "Oracle" },
  { name: "Siddharth Rao", prior: "Management Consultant", role: "AI Consultant", company: "Accenture" },
  { name: "Kavya Iyer", prior: "Backend Engineer", role: "Data Engineer", company: "Swiggy" },
  { name: "Rohan Das", prior: "Systems Engineer", role: "Robotics Engineer", company: "TCS" },
  { name: "Meera Nair", prior: "Product Manager", role: "AI Product Manager", company: "Zomato" },
];

export const STATS = [
  { value: "5000+", label: "PROFESSIONALS TRAINED" },
  { value: "50+", label: "EXPERT TRAINERS" },
  { value: "200+", label: "HIRING PARTNER COMPANIES" },
  { value: "4.9/5", label: "CLIENT RATING" },
];

export const TESTIMONIALS = [
  { name: "Arjun Mehta", role: "ML Engineer @ Google", quote: "I moved from a senior software role into ML engineering at Google. The guarantee meant there was no risk in trying — I just had to commit to the work." },
  { name: "Priya Sharma", role: "Data Scientist @ Microsoft", quote: "Coming from a business analyst background, I wasn't sure AI was reachable for me. The mentors met me where I was and built up from there." },
  { name: "Vikram Patel", role: "AI Engineer @ Amazon", quote: "Going from backend development to AI engineering felt like a big jump. Having it in writing that I'd either land a better offer or get my money back made the decision easy." },
  { name: "Sneha Reddy", role: "GenAI Developer @ Flipkart", quote: "The agentic AI coursework was hands-on from week one — not just theory. That's what carried into my interviews." },
  { name: "Neha Gupta", role: "MLOps Engineer @ Oracle", quote: "I came in as a DevOps engineer. Learning how to run MLOps pipelines was the exact bridge I needed into AI." },
  { name: "Meera Nair", role: "AI Product Manager @ Zomato", quote: "I didn't want to become an engineer — I wanted to understand AI deeply enough to lead it. This program gave me exactly that balance." },
];

export type Mentor = {
  name: string;
  focus: string;
  photo?: string;
  initials: string;
};

export const MENTORS: Mentor[] = [
  { name: "Mr. Gowrish H B", focus: "Agentic AI", photo: "/mentors/gowrish.png", initials: "GH" },
  { name: "Ms. Shruthi M G", focus: "LLMs", photo: "/mentors/shruthi.png", initials: "SM" },
  { name: "Ms. Aishwarya U", focus: "AI/ML Foundation", photo: "/mentors/aishwarya.png", initials: "AU" },
  { name: "Mr. Sagar", focus: "Forward Deployed Engineering", initials: "SG" },
  { name: "Mr. Parikshith T T", focus: "Backend Development", photo: "/mentors/parikshith.png", initials: "PT" },
  { name: "Mr. Padmesh", focus: "DevOps", photo: "/mentors/padmesh.png", initials: "PD" },
];

export const COMMUNITY = [
  "Lifetime access to the alumni community after your 180-day window ends",
  "Ongoing access to updated curriculum as the AI landscape shifts",
  "Alumni meetups and networking sessions",
  "Direct introductions to hiring partners through the alumni referral network",
  "Continued access to mentors for career questions, even after placement",
];

export const FOOTER_COLUMNS = {
  programs: [
    "AI & ML Professional Program",
    "PG Executive Agentic AI & Generative AI",
    "Forward Deployed Engineering Program",
  ],
  company: ["Why Empowers", "Trainers", "The Guarantee", "Contact"],
  resources: [
    "How to Build a RAG Pipeline with LangChain and Pinecone",
    "The Ultimate AI Engineer Interview Playbook",
    "Structuring Your Resume to Beat ATS Systems in Tech",
  ],
};
