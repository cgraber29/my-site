/**
 * ═══════════════════════════════════════════════════════════════════════
 *  YOUR PROFILE — this is the main file you edit. (The other one is
 *  src/theme.ts, where you pick your look.)
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Everything here flows automatically to:
 *   - /api/whoami and /api/profile  (what the course platform reads)
 *   - your home page and /about     (what humans read)
 *
 * Because both pages and APIs read from THIS one object, they can never
 * disagree, and "pages match the API" is one of the graded checks.
 *
 * Fill in every field, replace the placeholder photo, and you're done.
 */

export const profile = {
  /** Your name as you want it to appear everywhere. */
  displayName: "Cameron Graber",

  /** Your UD email — must match the one you signed into the course with. */
  email: "cgraber@udel.edu",

  /** Where you're from. Shows on your roster card and /about. */
  hometown: "Landenberg, Pennsylvania",

  /**
   * 2 to 4 fun facts (the grader checks the count!). Real ones: they're
   * how classmates find something to say hello about.
   */
  funFacts: [
    "My birthday is on a leap day, technically only 5 years old.",
    "I love to travel and am going to Fiji and New Zealand in December with my family.",
  ],

  /** One decision you're proud of, in a sentence. */
  decisionImProudOf:
    "I recently just accepted a job offer with CSC Global, in Digital Brand Services and it's my first full-time job after completing undergraduate.",

  /**
   * Your photo. Replace public/photo.svg with a real photo of you
   * (e.g. put photo.jpg in the public/ folder and change this to "/photo.jpg").
   * It must be a real image file: the grader fetches it and checks.
   */
  photoPath: "/IMG_9835.jpeg",

  /**
   * Who can see your roster card:
   *   "class"          — your classmates and the professor (recommended)
   *   "professor-only" — just the professor
   */
  rosterVisibility: "class" as "class" | "professor-only",

  /** A one-line tagline for your home page. Make it yours. */
  tagline: "Turning data into insights and ideas into action.",

  /**
   * A short bio for your home page: two or three sentences, written like
   * a person, not a resume. What are you studying? What do you care about?
   */
  bio: "I graduated from the University of Delaware in May 2026 with a degree in Business Analytics and am currently continuing my education as a graduate student. I recently started my career at CSC Global in Digital Brand Services, where I'm excited to develop my professional skills and gain hands-on experience. Outside of work and school, I enjoy traveling, spending time with friends, and exploring new places.",

  /**
   * Your GitHub repo URL. The course platform reads this from /api/health to
   * verify you have ≥ 5 commits spread over days (not one bulk dump).
   * Example: "https://github.com/your-username/your-repo"
   */
  repoUrl: "https://github.com/cgraber29/my-site",
};
