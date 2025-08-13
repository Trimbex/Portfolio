import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from 'lucide-react';

// Project categories
type ProjectCategory = 'All' | 'Web Development' | 'AI/ML' | 'Computer Vision' | 'Systems';

// Extended project interface - now supports multiple categories
interface ExtendedProject extends Project {
  categories: ProjectCategory[]; // Changed to array for multiple categories
}

// Sample projects data - Ordered by technical strength and complexity
const projectsData: ExtendedProject[] = [
  {
    id: 1,
    title: "Cloud Based Web Crawler",
    description: "A scalable cloud-based web crawler built with Python and AWS services. Features intelligent web scraping capabilities, distributed crawling across multiple instances, data extraction and processing pipelines, and automated storage solutions. The system utilizes AWS EC2 for compute resources, S3 for data storage, Lambda functions for serverless processing, and SQS for queue management. Built with Python libraries including BeautifulSoup, Scrapy, and Requests for robust web data extraction.",
    image: "/lovable-uploads/crawler.png",
    tags: ["Python", "AWS EC2", "AWS S3", "AWS Lambda", "SQS", "BeautifulSoup", "Scrapy", "Requests", "Pandas"],
    categories: ["Systems", "Web Development"],
    githubUrl: "https://github.com/Trimbex/Distributed-Web-Crawling-System"
  },
  {
    id: 2,
    title: "Funds Haven - Finance Management System",
    description: "A comprehensive personal finance management application built with Next.js 15, featuring multi-account tracking, smart transaction categorization, budget management with visual analytics, and secure authentication. The platform includes interactive charts, spending insights, recurring transaction automation, and real-time notifications. Built with TypeScript, PostgreSQL, Drizzle ORM, and modern UI components for a seamless financial management experience.",
    image: "/lovable-uploads/funds.png",
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Drizzle ORM", "NextAuth.js", "Tailwind CSS", "Chart.js", "shadcn/ui", "RESTful API"],
    categories: ["Web Development"],
    githubUrl: "https://github.com/Trimbex/funds-haven",
    status: "In Progress",
    statusColor: "",
    statusGlow: "in-progress"
  },
  {
    id: 3,
    title: "ShopEasy - Full-Stack E-commerce Platform",
    description: "Modern full-stack e-commerce solution built with Next.js 14 and Express.js. Features comprehensive user management, intuitive shopping experience with cart and wishlist functionality, admin dashboard with inventory control and analytics, coupon system with promotions, and customer reviews. Built with PostgreSQL via Prisma ORM, JWT authentication, Supabase cloud services, TailwindCSS styling, and Framer Motion animations for a complete online shopping experience.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Next.js 14", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "TailwindCSS", "Supabase", "Framer Motion", "Node.js"],
    categories: ["Web Development"],
    githubUrl: "https://github.com/Mohamed-Ahmed-Esmat/Ecommerce_Store"
  },
  {
    id: 4,
    title: "Real-Time Computer Vision Tic-Tac-Toe with AI",
    description: "An interactive Tic-Tac-Toe game combining computer vision and AI. Using OpenCV, it captures live video to detect grids drawn on any surface. Players place markers (X or O) which are recognized through image processing. A trained CNN model classifies markers and determines game state, while the AI opponent uses Minimax algorithm with alpha-beta pruning for optimal moves. This project demonstrates real-time integration of computer vision and AI algorithms.",
    image: "/lovable-uploads/tic.png",
    tags: ["Python", "OpenCV", "Computer Vision", "CNN", "TensorFlow", "Minimax Algorithm", "Image Processing", "AI", "Real-time Processing"],
    categories: ["Computer Vision", "AI/ML"],
    githubUrl: "https://github.com/ssalma2002/AI-Project"
  },
  {
    id: 5,
    title: "C Compiler Implementation",
    description: "Custom C compiler built from scratch implementing lexical analysis, parsing, and code generation. Written in Java with support for core language features and optimization passes.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["Java", "Compiler Design", "Lexical Analysis", "Parsing", "Code Generation", "Systems Programming"],
    categories: ["Systems"],
    githubUrl: "https://github.com/Trimbex/C-compiler-Lexer-and-Parser-"
  },
  {
    id: 6,
    title: "PeakShift - Gym Management System",
    description: "Comprehensive gym management desktop application built with C++ and WinForms. Features Microsoft SQL Server integration with advanced SQL queries, stored procedures, and triggers. Implements role-based access control for different user types (admin, trainers, members), complete ER diagram design, and database normalization. Manages memberships, workout plans, equipment tracking, and financial reporting with a robust Windows Forms interface.",
    image: "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["C++", "WinForms", "Microsoft SQL Server", "Database Design", "ER Diagrams", "Role-based Access", "Advanced SQL", "Desktop Application"],
    categories: ["Systems"],
    githubUrl: "https://github.com/Mohamed-Ahmed-Esmat/PeakShift-Database-Project"
  }
  // {
  //   id: 6,
  //   title: "YouTube Short VS Long Analyzer",
  //   description: "A comprehensive analytics platform that compares the performance, audience demographics, and engagement metrics of YouTube Shorts versus long-form videos. Features include side-by-side analytics, interactive charts, and actionable insights to help creators optimize their content strategy for both formats.",
  //   image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  //   tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "React Query", "React Router", "Framer Motion", "Recharts"],
  //   categories: ["Web Development"],
  //   demoUrl: "https://yt-analyzer-kappa.vercel.app/",
  //   githubUrl: "https://github.com/kalpsenghani/YT_Analyzer",
  //   status: "In Progress",
  //   statusColor: "",
  //   statusGlow: "in-progress"
  // }
  ,
  {
    id: 7,
    title: "Rainfall Prediction System",
    description: "Advanced machine learning system that predicts rainfall with 84.4% accuracy using Australian weather data. Compares 5 classification algorithms (SVM, Logistic Regression, Decision Tree, KNN, Linear Regression) with comprehensive evaluation metrics. Features data preprocessing, one-hot encoding, and performance analysis across multiple ML models.",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "scikit-learn", "Pandas", "NumPy", "Machine Learning", "Classification", "Data Analysis"],
    categories: ["AI/ML"],
    githubUrl: "https://github.com/Trimbex/IBM_RainFall_Prediction"
  },
  {
    id: 8,
    title: "Barcode Image Fixer",
    description: "An advanced image processing application that improves the accuracy and readability of distorted barcode images. The system applies thresholding for binary conversion, morphological operations (dilation and erosion) to repair gaps, Gaussian blur for noise reduction, frequency domain filtering for enhanced signal processing, and automatic rotation correction. Designed to enhance barcode recognition in real-world scenarios where images may be blurred, rotated, or contain noise, ensuring higher scanning accuracy and efficiency.",
    image: "/lovable-uploads/barcode.jpg",
    tags: ["Python", "OpenCV", "Image Processing", "Computer Vision", "Thresholding", "Morphological Operations", "Edge Detection", "Frequency Domain"],
    categories: ["Computer Vision"],
    githubUrl: "https://github.com/AhmedSalahz03/Barcode-11-Computer-Vision"
  },
  {
    id: 9,
    title: "DHCP Server",
    description: "This project implements a Dynamic Host Configuration Protocol (DHCP) server and client from scratch. The DHCP server dynamically assigns IP addresses and other network configuration parameters to devices on a network, allowing them to communicate efficiently.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "DHCP", "Network Programming", "Socket Programming", "IP Allocation", "Network Protocols", "Systems Programming"],
    categories: ["Systems"],
    githubUrl: "https://github.com/Trimbex/DHCP-Server"
  },
  {
    id: 10,
    title: "Concrete Cracks Classifier",
    description: "Computer vision model for detecting and classifying cracks in concrete structures. Uses CNN architecture with OpenCV for image preprocessing and TensorFlow for classification.",
    image: "https://images.unsplash.com/photo-1740440902076-e679dd7c8c29?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision"],
    categories: ["Computer Vision", "AI/ML"],
    githubUrl: "https://github.com/Trimbex/Concrete-Cracks-Classifier"
  },
  {
    id: 11,
    title: "Diabetes Classification Model",
    description: "This project aims to classify whether an individual is at risk of developing diabetes based on various health-related attributes. The dataset used includes information such as age, BMI, blood pressure, glucose levels, and insulin levels. We preprocess the data, analyze critical attributes, and apply machine learning models to predict diabetes risk.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "scikit-learn", "Pandas", "NumPy", "Machine Learning", "Healthcare"],
    categories: ["AI/ML"],
    githubUrl: "https://github.com/Mohamed-Ahmed-Esmat/Data-Mining-Project"
  },
  {
    id: 12,
    title: "Banking System",
    description: "Object-oriented banking system built in Java with Swing GUI. Simulates core banking operations including account management, transactions (deposit, withdraw, transfer), customer management, and loan processing with eligibility checks. Features comprehensive transaction logging, customer registration with duplicate prevention, configurable loan rates and terms, and personalized user interface. Includes extensive JUnit test suites for reliability and maintainable code architecture using ArrayList and HashMap data structures.",
    image: "https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Java", "Swing GUI", "JUnit Testing", "Object-Oriented Programming", "Banking Operations", "Data Structures", "Test Suites"],
    categories: ["Systems"],
    githubUrl: "https://github.com/Mohamed-Fadel222/Banking_System"
  }
  


];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [showMore, setShowMore] = useState(false);
  
  const categories: ProjectCategory[] = ['All', 'Web Development', 'AI/ML', 'Computer Vision', 'Systems'];
  
  // Filter projects based on selected category (now supports multiple categories per project)
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projectsData;
    }
    return projectsData.filter(project => project.categories.includes(selectedCategory));
  }, [selectedCategory]);
  
  // Show first 6 projects, or all if showMore is true
  const displayedProjects = useMemo(() => {
    return showMore ? filteredProjects : filteredProjects.slice(0, 6);
  }, [filteredProjects, showMore]);
  
  // Check if there are more projects to show
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => {
          const projectCount = category === 'All' 
            ? projectsData.length 
            : projectsData.filter(project => project.categories.includes(category)).length;
          
          return (
            <Button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowMore(false); // Reset show more when changing category
              }}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                  : "bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              }`}
            >
              {category}
              <span className="ml-2 text-xs opacity-70">({projectCount})</span>
            </Button>
          );
        })}
      </motion.div>
      
      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
      
      {/* Show More/Less Button */}
      {hasMoreProjects && (
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outline"
            className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            {showMore ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show Less Projects
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Show More Projects ({filteredProjects.length - 6} more)
              </>
            )}
          </Button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
