import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nanvbar/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Cursor from "@/components/cursor";
import { i18n } from "@/i18n.config";

export const metadata: Metadata = {
  title: {
    default: "Abhishek Kumar | KMaar | Devfolio | Portfolio",
    template: "%s - KMaar",
  },
  description:
    "Abhishek Kumar a Full Stack Developer who creates cutting-edge web applications using Next.js, React, Node.js, and JavaScript. His portfolio showcases his skills in both frontend and backend development, as well as his passion for solving real-world problems with innovative solutions. Whether it is building a dynamic e-commerce website, a user-friendly blog platform, or a responsive landing page, Abhishek delivers high-quality results that meet the needs of his clients and users. Explore his portfolio to learn more about his projects, experience, and vision for the future of web development.",
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "w3roI87t-dIyKe7ReAdSWUVpWCe7K1pP_EXUidsZ3xI",
    me: "KMaar",
  },
  keywords: [
    "Abhishek KMaar",
    "Abhishek Kumar",
    "Abhishek Kumar KMaar",
    "Abhishek KMaar Devfolio",
    "Abhishek KMaar Portfolio",
    "Abhishek Portfolio",
    "Abhishek Devfolio",
    "Agile Development",
    "API Development",
    "Backend Programming",
    "Backend Scalability",
    "Backend Security",
    "Blogging Platforms",
    "Clean Code",
    "Code Documentation",
    "Code Optimization",
    "Code Refactoring",
    "Continuous Delivery",
    "Continuous Integration (CI)",
    "Conversion Rate Optimization (CRO)",
    "Creative Developer",
    "CSS Preprocessors",
    "Database Management",
    "Debugging",
    "Design Patterns",
    "Digital Portfolio",
    "E-commerce Development",
    "Express.js",
    "Frontend Components",
    "Frontend Developer",
    "Frontend Frameworks",
    "Frontend Performance",
    "Full Stack Developer",
    "Full stack JavaScript developer",
    "Full stack React developer",
    "Full stack Node.js developer",
    "Full stack web developer",
    "Full stack API developer",
    "GraphQL",
    "Headless CMS",
    "HTML/CSS",
    "Interaction Design",
    "JavaScript",
    "JavaScript Frameworks",
    "KMaar",
    "KMaar Portfolio",
    "KMaar Devfolio",
    "Kumar",
    "kamar",
    "Landing Page Optimization",
    "Microservices",
    "Mobile-Friendly Design",
    "Node.js",
    "Object-Oriented Programming (OOP)",
    "Online Identity",
    "Online Portfolio",
    "Online Presence",
    "Personal Branding",
    "Personal Website",
    "Portfolio",
    "Portfolio Presentation",
    "Portfolio Showcase",
    "Problem-Solving",
    "Progressive Web Apps (PWAs)",
    "React",
    "Responsive Design",
    "Responsive Web Design",
    "RESTful APIs",
    "Search Engine Optimization (SEO)",
    "Server-side Development",
    "Serverless Architecture",
    "Showcase Website",
    "Single-Page Applications (SPAs)",
    "Software Architecture",
    "Software Developer",
    "Software Development Life Cycle (SDLC)",
    "Software Engineer",
    "Software Quality Assurance",
    "State Management",
    "Static Site Generation (SSG)",
    "Tech Enthusiast",
    "Technology Showcase",
    "Test-Driven Development (TDD)",
    "TypeScript",
    "UI Libraries",
    "UI/UX Design",
    "Unit Testing",
    "User Experience",
    "User Interface",
    "Version Control Best Practices",
    "Web Analytics",
    "Web Applications",
    "Web Design",
    "Web Development",
  ],
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn( "bg-background dark:bg-page-gradient")}
      >
        <Cursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="KMaar-theme"
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
