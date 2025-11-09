// Define the Event type
export type Event = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  description: string;
};

// Event list constant
export const events: Event[] = [
  {
    image: "/images/event1.png",
    title: "Tech Innovation Summit 2025",
    slug: "tech-innovation-summit-2025",
    location: "San Francisco, USA",
    date: "March 12, 2025",
    time: "9:00 AM - 5:00 PM",
    description:
      "A global conference bringing together technology leaders and innovators to discuss the future of AI, cloud, and automation.",
  },
  {
    image: "/images/event2.png",
    title: "Design Thinking Workshop",
    slug: "design-thinking-workshop",
    location: "Berlin, Germany",
    date: "April 8, 2025",
    time: "10:00 AM - 4:00 PM",
    description:
      "A hands-on workshop exploring modern design thinking techniques and user-centered innovation processes.",
  },
  {
    image: "/images/event3.png",
    title: "SaaS Growth Conference",
    slug: "saas-growth-conference",
    location: "Toronto, Canada",
    date: "May 22, 2025",
    time: "8:30 AM - 6:00 PM",
    description:
      "Join top SaaS founders and marketers to learn effective growth strategies, funding insights, and scaling techniques.",
  },
  {
    image: "/images/event4.png",
    title: "Global Startup Meetup",
    slug: "global-startup-meetup",
    location: "Singapore",
    date: "June 15, 2025",
    time: "1:00 PM - 7:00 PM",
    description:
      "A networking event connecting early-stage startups with investors, mentors, and fellow entrepreneurs.",
  },
  {
    image: "/images/event5.png",
    title: "AI & Robotics Expo",
    slug: "ai-robotics-expo",
    location: "Tokyo, Japan",
    date: "July 19, 2025",
    time: "9:30 AM - 5:30 PM",
    description:
      "Discover cutting-edge advancements in robotics and AI technology from leading research institutes and global companies.",
  },
  {
    image: "/images/event6.png",
    title: "Future of Web Development Summit",
    slug: "future-of-web-dev-summit",
    location: "London, UK",
    date: "September 10, 2025",
    time: "10:00 AM - 6:00 PM",
    description:
      "An in-depth summit exploring trends in web technologies, frameworks, and developer tools shaping the next generation of the web.",
  },
];
