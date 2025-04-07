export const socialLinks = [
    { href: "#", icon: "Facebook" },
    { href: "#", icon: "Twitter" },
    { href: "https://www.instagram.com/viacerta.abroad/profilecard/?igsh=ajg1eDZiZjhuZDZi", icon: "Instagram" },
    { href: "https://www.linkedin.com/company/viacerta/", icon: "Linkedin" }
  ];
  
  export const contactInfo = {
    phone: "+1 (234) 567-890",
    logo: "/viaCerta-logo.png",
    email: "support@viacerta.com"
  };
  
  export const supportLinks = [
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
    // { href: "#", text: "Careers" },
    // { href: "#", text: "Locate Us" },
    // { href: "#", text: "Scholarship" },
    { href: "/blogs", text: "Blogs" },
    { href: "/TermsAndCondition", text: "Terms of Use" },
    { href: "/privacy-policy", text: "Privacy Policy" },
  
  ];
  
  export const destinations = [
    { href: "/destinations/USA", text: "Study in USA" },
    { href: "/destinations/Germany", text: "Study in Germany" },
    { href: "/destinations/Canada", text: "Study in Canada" },
    { href: "/destinations/UK", text: "Study in UK" },
    { href: "/destinations/Australia", text: "Study in Australia" }
  ];
  
  export const mastersPrograms = [
    { href: "#", text: "MBA in Germany, IU" },
    { href: "#", text: "MIM in Germany, IU" },
    { href: "#", text: "MS in CS in Germany, IU" },
    { href: "#", text: "MS in Data Analytics in USA, Clark University" },
    { href: "#", text: "MS in Project Management in USA, Clark University" },
    { href: "#", text: "MS in IT in USA, Clark University" },
    { href: "#", text: "MS in Data Analytics & Visualization in USA, Yeshiva University" },
    { href: "#", text: "MS in Artificial Intelligence in USA, Yeshiva University" },
    { href: "#", text: "MS in Cybersecurity, Yeshiva University" }
  ];
  
  export const blogs = [
    {
      title: "Study Costs",
      links: ["Canada", "Ireland", "Germany", "Australia", "UK", "USA"].map(country => ({
        href: "#",
        text: `Cost of Studying in ${country}`
      }))
    },
    {
      title: "Living Costs",
      links: ["UK", "Australia", "Germany", "Ireland", "Canada", "Singapore", "Netherlands"].map(country => ({
        href: "#",
        text: `Cost of Living in ${country}`
      }))
    },
    {
      title: "Career Opportunities",
      links: ["Australia", "Germany", "After MS in Canada", "After MBA in Australia", "After MS in UK"].map(career => ({
        href: "#",
        text: `Career Opportunities ${career}`
      }))
    },
    {
      title: "IELTS Resources",
      links: [
        "Eligibility", "Registration", "Syllabus", "Academic vs General", "Band Score", "Writing Task 1",
        "Writing Task 2", "Slot Booking", "Band Score Chart", "Score for UK", "Score for USA", "Validity of Score",
        "Speaking Topics", "Reading Tips", "Prepare for IELTS at Home", "Preparation Books", "Types of IELTS Exam",
        "Exam Fee", "Exam Pattern", "Results", "Essay", "Cue Card", "Exam Dates"
      ].map(topic => ({ href: "#", text: `IELTS ${topic}` }))
    },
    {
      title: "Top Streams",
      links: [
        { href: "#", text: "Fashion Designing Courses in Australia" },
        { href: "#", text: "Accounting Courses in Canada" },
        { href: "#", text: "Management Courses in Canada" }
      ]
    }
  ];
  
  export const copyrightText = "© 2025 ViaCerta Abroad. All rights reserved.";
  