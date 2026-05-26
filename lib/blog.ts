export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  /** Strings starting with "## " are rendered as H2 headings */
  body: string[];
  cta?: { text: string; href: string };
};

export const posts: Post[] = [
  {
    slug: "teaching-ai-on-chalkboards",
    title: "Teaching AI on Chalkboards: Inside Nigeria's Digital Divide",
    excerpt: "What it looks like when schools still draw computer screens on blackboards — and how Canann is putting real devices in those classrooms.",
    date: "February 25, 2026",
    category: "Digital Access",
    image: "/MEM_0667.jpg",
    readTime: "4 min read",
    body: [
      "## The State of Computer Education in Nigerian Schools",
      "Walk into a typical secondary school in rural Cross River State and you'll find a classroom labelled 'Computer Science.' Inside: rows of desks, a blackboard, and chalk drawings of keyboards. This is how millions of Nigerian students are learning to 'use' computers — without ever touching one.",
      "Canann has been inside those classrooms. We've seen teachers doing their best with what they have, sketching pixels and cursor arrows on dusty boards. And we've seen the faces of students who have never opened a browser, never loaded a file, never typed their own name on a screen.",
      "The gap is not a knowledge gap — it's a resource gap. Teachers know what computers do. Students are hungry to learn. What's missing is access: real devices, real software, real practice.",
      "## What Canann's Tech in School Programme Is Doing",
      "Over the past two years, Canann has deployed laptops and tablets to four secondary schools across Calabar. In each school, we set up structured learning environments, trained teachers in our offline digital curriculum, and distributed our Tech Journals — printed guides that walk students through digital fundamentals, AI basics, and internet literacy without requiring a live connection.",
      "The results speak for themselves. Students who had never touched a keyboard in Year 1 were writing basic code by Year 3. One student, Chidi, used a donated laptop to build his first webpage. He's now planning to study software engineering. His teacher described it as watching someone discover electricity.",
      "This is what Canann's Tech in School programme does. Not theory. Not chalkboards. Real devices, real skills, and a real shot at the digital economy.",
    ],
    cta: { text: "Fund Tech in School — Put Real Devices in Classrooms", href: "/causes" },
  },
  {
    slug: "offline-tech-journals",
    title: "How Our Offline Tech Journals Reach Where the Internet Can't",
    excerpt: "For remote communities with no connectivity, our printed resources bring digital education to the last mile — no signal required.",
    date: "February 25, 2026",
    category: "Offline Learning",
    image: "/7N4A2919.png",
    readTime: "3 min read",
    body: [
      "## The Connectivity Barrier to Digital Education in Nigeria",
      "Nigeria has over 30 million people living in areas with no reliable internet connection. For those communities, online learning platforms, YouTube tutorials, and even basic Google searches are inaccessible. The assumption that 'digital education = internet access' leaves an entire generation behind.",
      "Canann designed our Tech Journals specifically to break that assumption. The Journals are professionally printed, curriculum-aligned guides that teach digital literacy, computer fundamentals, and AI concepts — entirely offline. No WiFi required. No data charges. No device dependency for the learning itself.",
      "## What the Tech Journals Contain",
      "Each journal covers a structured four-module programme: computer basics, internet fundamentals (theory), AI concepts, and a practical project section. The project section is designed so students can practise on any available device — including shared school computers used in rotation.",
      "We've distributed over 2,000 journals across communities in Cross River, Akwa Ibom, and Lagos. Facilitators use the journals as lesson plans; students keep them as reference guides. In communities where books are scarce, the journals have become a lasting resource — passed between siblings, shared in youth groups, used by adults who want to upskill alongside their children.",
      "## Why Offline-First Is a Feature, Not a Compromise",
      "The offline-first approach isn't a compromise. It's a feature. It means our programmes are resilient — a power cut or network outage doesn't cancel a lesson. It means we can reach the truly last mile, not just the places with occasional 3G.",
    ],
    cta: { text: "Support Offline Digital Education — Donate to Canann", href: "/donate" },
  },
  {
    slug: "sponsoring-150000-african-builders",
    title: "The 150,000: Why We're Sponsoring a Generation of African Builders",
    excerpt: "Our flagship programme is sponsoring 150,000 professionals, innovators, and school graduates to build solutions for their own communities.",
    date: "March 10, 2026",
    category: "Sponsorship",
    image: "/IMG_9368.jpg",
    readTime: "5 min read",
    body: [
      "## Why Africa Needs 150,000 Trained Digital Builders",
      "150,000. It's a number that feels large — because it is. It's also a number that reflects the scale of the problem Canann is tackling. Africa has a talent surplus. What it lacks is structured pathways from potential to capability.",
      "The GroundUp Skills programme is our response to that gap. Our goal is to sponsor 150,000 professionals, innovators, and fresh secondary school graduates with the tools, skills, and networks they need to build solutions for their own communities — not move abroad, not wait for multinational employers, but build locally, solve locally, grow locally.",
      "## What the GroundUp Skills Sponsorship Covers",
      "The sponsorship covers digital literacy training, vocational skills coaching, entrepreneurship modules, and mentorship from working African professionals. It's not a short course. It's a complete pathway — from 'I have never used a computer' to 'I built something my community uses.'",
      "Why 150,000? Because economic transformation at community level requires critical mass. One trained builder changes a family. A hundred changes a neighbourhood. A hundred thousand starts to change a region. Our modelling — based on existing impact from similar programmes in West Africa — suggests that 150,000 trained, community-rooted builders is the threshold at which bottom-up economic change becomes self-sustaining.",
      "## How to Partner with GroundUp Skills",
      "Funding this requires partnerships with organisations, governments, and individuals who believe in African-led development. If you're a company with a CSR commitment to digital inclusion in Africa, GroundUp Skills is the most direct way to deliver it. Reach out via our contact page to explore how your organisation can sponsor a cohort.",
    ],
    cta: { text: "Fund the GroundUp Skills Programme", href: "/causes" },
  },
  {
    slug: "learner-to-builder-stories",
    title: "From Learner to Builder: Stories from Our Skills Programme",
    excerpt: "The moment a student realises they can build — not just consume — technology. Stories from the ground in Lagos and Cross River.",
    date: "March 5, 2026",
    category: "Skills Training",
    image: "/volunterr.jpg",
    readTime: "6 min read",
    body: [
      "## Adaeze: From Market Trader to Digital Service Provider",
      "Adaeze had never used a computer when she joined Canann's skills programme in Calabar. She was 24, working as a market trader, and had signed up because a neighbour told her Canann was offering free digital training. She came expecting to learn Microsoft Word.",
      "Three months later, she was building a simple inventory spreadsheet for her market stall. Six months in, she was teaching two other traders in her section how to use it. Now, she manages digital records for eight traders in her market — and charges a small monthly fee for the service. She calls it her 'second business.'",
      "Adaeze's story is not unusual in our programmes. Across Lagos and Cross River, we've documented dozens like it: people who came to learn, stayed to build, and ended up creating micro-enterprises from skills they developed in Canann training rooms.",
      "## Emmanuel: Freelance Income from a Standing Start",
      "Emmanuel, 19, from Lagos Island, came to our programme after dropping out of university due to fees. He had a phone but had never used a laptop. Within four months of joining the GroundUp Skills cohort, he had completed our full digital curriculum and was taking on freelance data entry contracts. By month six, he had earned enough to re-enrol in a part-time diploma course.",
      "## The Numbers Behind the Stories",
      "These are not anomalies. They are what happens when you give capable people access and structure. The talent has always been there. The infrastructure hadn't caught up. Canann is the bridge.",
      "Our 2025 cohort data shows that 68% of programme completers reported new economic activity within six months — either employment in a digital role, freelance income, or a new digital-enabled side business. That number is the reason we keep going.",
    ],
    cta: { text: "Support Skills Training — Donate or Partner with Canann", href: "/donate" },
  },
  {
    slug: "closing-ai-knowledge-gap-in-schools",
    title: "Why Curricula Can't Wait: Closing the AI Knowledge Gap in Schools",
    excerpt: "Nigerian schools are graduating students into a digital world without the tools to navigate it. Here's how we're filling the gap right now.",
    date: "February 26, 2026",
    category: "Education",
    image: "/m 115.jpg",
    readTime: "7 min read",
    body: [
      "## The AI Knowledge Gap in Nigeria's School Curriculum",
      "Nigeria's national curriculum includes a subject called 'Computer Studies.' In most schools, it's taught by a teacher who may have learned computing in the 1990s, with a syllabus that hasn't changed materially since then. Meanwhile, the world those students are graduating into is shaped by machine learning, generative AI, and algorithmic systems they've never been introduced to.",
      "The gap isn't a criticism of teachers — it's a systemic failure. Curricula update slowly. Teacher training moves even slower. The private sector moves at speed, and schools in underserved communities are left ten years behind.",
      "## How Canann's AI Literacy Programme Works",
      "Canann's AI literacy programme is designed to fill that gap right now — without waiting for a curriculum review. We work alongside existing teachers, not in replacement of them, delivering a structured AI foundations module that covers: what AI is, how it's trained, how it makes decisions, practical tools students can use today, and — critically — how to think critically about AI-generated content.",
      "We teach it in plain language. No maths prerequisites. No laptops required for the theory modules (they're in our offline journals). We use examples from everyday Nigerian life: AI in agriculture (crop disease detection), AI in healthcare (diagnostic tools), AI in finance (credit scoring), and AI in government (ID systems). The goal is comprehension and confidence — not engineering.",
      "## Results from Our 2025 School Cohorts",
      "In our 2025 school cohorts, 94% of students reported feeling 'more confident about technology' after the AI literacy module. 71% could correctly explain what machine learning is. And 43% said it changed what they wanted to study in the future — with 'technology' appearing as a future career choice for the first time in many students' responses.",
      "Curricula will catch up. But Nigerian students can't wait for that. Canann isn't waiting either.",
    ],
    cta: { text: "Bring AI Education to Nigerian Schools — Fund Tech in School", href: "/causes" },
  },
  {
    slug: "green-workforce-tech-for-africa",
    title: "Green Workforce: Building Tech Solutions That Actually Fit Africa",
    excerpt: "Sustainable, locally-rooted innovation isn't a trend — it's how we make sure the digital future benefits African communities, not just tech hubs.",
    date: "February 25, 2026",
    category: "Green Workforce",
    image: "/mission1.jpg",
    readTime: "4 min read",
    body: [
      "## Why Imported Technology Fails African Communities",
      "Most technology deployed in African communities was designed elsewhere. Not designed for the infrastructure realities of African grids. Not designed for low-bandwidth environments. Not localised for African languages, contexts, or use cases. Imported tools that solve Silicon Valley problems end up failing African users — or worse, being implemented anyway and simply not working.",
      "## How the Green Workforce Programme Trains African Innovators",
      "Canann's Green Workforce programme trains a different kind of builder. One who starts with the community's actual problems — not a product roadmap — and builds from there. Our innovators learn technology alongside sustainability thinking: How does this solution work without consistent electricity? How does it run on low-spec devices? How does it serve users who are semi-literate? What happens when connectivity drops?",
      "These questions aren't limitations. They're design constraints that produce better software, better systems, and better outcomes for African users. The most successful African tech solutions — from M-Pesa to Paystack — succeeded because they were built with African infrastructure in mind from the start.",
      "## Building for Africa, Not Importing From Somewhere Else",
      "Green Workforce participants learn this framing from day one. They build with the environment and the community in mind — not as an afterthought, but as the foundation. We cover everything from solar-compatible device design to offline-first software architecture to community co-design methods.",
      "Africa doesn't need technology that was designed for somewhere else. It needs builders who understand its context and can create for it. That's what Green Workforce is building — one innovator at a time.",
    ],
    cta: { text: "Support the Green Workforce Programme", href: "/causes" },
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
