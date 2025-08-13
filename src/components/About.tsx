import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award';
  logoSrc?: string;
  logoAlt?: string;
  organization?: string;
  organizationUrl?: string;
  location?: string;
  techStack?: Array<{ src: string; alt: string; url?: string }>;
  highlights?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "August 2025 – Present",
    title: "Machine Learning Intern",
    organization: "Elevvo Pathways",
    location: "Cairo, Egypt",
    logoSrc: "/elevvo.jpg",
    logoAlt: "Elevvo Pathways",
    description: ``,
    highlights: [
      "Customer Segmentation (Mall Customers): Scaled and clustered with K-Means/DBSCAN; optimal k=5 via silhouette. Identified high-spend segments and lifted CTR +12% in a hypothetical campaign; computed avg spend per cluster for personas.",
      "Forest Cover Classification (Covertype): XGBoost/Random Forest reached ~93% accuracy; elevation and distance features dominated importance. Confusion matrix analysis reduced misclassifications between similar conifers.",
      "Loan Approval Prediction: Addressed imbalance with SMOTE + threshold tuning, improving minority-class F1 by +27% at precision ≈ 0.81; delivered clearer risk stratification.",
      "Sales Forecasting (Walmart): Engineered time/seasonality features with time-aware CV; XGBoost delivered MAPE ≈ 8.7%, improving planning and stock alignment.",
    ],
    type: "experience",
    techStack: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", alt: "PyTorch" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "TensorFlow" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" }
    ]
  },
  {
    id: 2,
    year: "April 2024 – October 2024",
    title: "Generative AI Trainee",
    organization: "Digital Egypt Pioneers Initiative",
    location: "Cairo, Egypt",
    logoSrc: "/depi.png",
    logoAlt: "Digital Egypt Pioneers Initiative",
    description: ``,
    highlights: [
      "Completed the DEPI Generative AI Training, gaining hands-on experience in machine learning and deep learning techniques.",
      "Built and trained models using Python, NumPy, Pandas, scikit-learn, and TensorFlow/PyTorch.",
      "Explored foundational and advanced concepts in neural networks, including CNNs, RNNs, and transformers.",
      "Designed and implemented Generative AI models such as Variational Autoencoders (VAEs) and GANs for image generation and augmentation.",
      "Applied prompt engineering and experimented with large language models (LLMs) to solve real-world tasks.",
      "Contributed to building a mobile-friendly text-to-3D model generation system, integrating Generative AI with mobile deployment frameworks.",
    ],
    type: "education",
    techStack: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", url: "https://www.python.org/" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", alt: "NumPy", url: "https://numpy.org/" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", alt: "Pandas", url: "https://pandas.pydata.org/" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", alt: "scikit-learn", url: "https://scikit-learn.org/" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "TensorFlow", url: "https://www.tensorflow.org/" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", alt: "PyTorch", url: "https://pytorch.org/" },
      { src: "https://cdn.simpleicons.org/huggingface", alt: "Hugging Face", url: "https://huggingface.co/" },
      { src: "https://cdn.simpleicons.org/openai", alt: "OpenAI", url: "https://platform.openai.com/" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git", url: "https://git-scm.com/" }
    ]
  },
  {
    id: 3,
    year: "July 2024 – August 2024",
    title: "Front-End Engineer Trainee",
    organization: "Information Technology Institute",
    location: "Cairo, Egypt",
    logoSrc: "/ITI.png",
    logoAlt: "Information Technology Institute",
    description: ``,
    highlights: [
      "Built responsive and interactive web applications using HTML5, CSS3, JavaScript (ES6+), and React.js.",
      "Applied modern UI/UX principles to create user-friendly interfaces and accessible designs.",
      "Integrated external RESTful APIs and managed state with React Hooks and Context API.",
      "Developed a fully functional movie website using React, featuring real-time data fetching, search functionality, and dynamic routing.",
    ],
    type: "education",
    techStack: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React.js", url: "https://reactjs.org/" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "Bootstrap", url: "https://getbootstrap.com/" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma", url: "https://www.figma.com/" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git", url: "https://git-scm.com/" }
    ]
  },
  {
    id: 4,
    year: "January 2024 – February 2024",
    title: "Software Engineer Intern",
    organization: "CodeAlpha",
    location: "India",
    logoSrc: "/codealpha.jpg",
    logoAlt: "CodeAlpha",
    description: ``,
    highlights: [
      "Developed a comprehensive Hotel Management System in Java with room booking, customer management, and billing functionalities.",
      "Built a Student Grade Tracker application featuring grade calculation, student records management, and performance analytics.",
      "Created a Banking System with account management, transaction processing, balance tracking, and secure authentication features.",
      "Applied object-oriented programming principles including inheritance, polymorphism, and encapsulation in all projects.",
      "Implemented data persistence using file handling and basic database connectivity for reliable data storage.",
    ],
    type: "experience",
    techStack: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", url: "https://www.oracle.com/java/" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg", alt: "IntelliJ IDEA", url: "https://www.jetbrains.com/idea/" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git", url: "https://git-scm.com/" }
    ]
  }
];

const COLLAPSED_MAX_HEIGHT_PX = 224; // ~ h-56

const About = () => {
  const [expandedById, setExpandedById] = useState<Record<number, boolean>>({});
  const [needsCollapseById, setNeedsCollapseById] = useState<Record<number, boolean>>({});
  const [maxHeightById, setMaxHeightById] = useState<Record<number, number | 'auto'>>({});
  const contentRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    const nextNeeds: Record<number, boolean> = {};
    for (const item of timelineData) {
      const el = contentRefs.current.get(item.id);
      if (el) {
        nextNeeds[item.id] = el.scrollHeight > COLLAPSED_MAX_HEIGHT_PX + 4;
      }
    }
    setNeedsCollapseById(nextNeeds);
  }, []);
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm a <span className="font-semibold text-blue-400">full stack engineer</span> who specializes in building intelligent, AI-powered applications that solve complex problems.
              </p>
              <p className="text-muted-foreground mb-4">
                With expertise spanning both <span className="font-semibold text-blue-400">frontend and backend development</span>, I focus on creating seamless user experiences backed by robust, scalable architectures.
              </p>
              <p className="text-muted-foreground">
                Currently, I'm exploring the potential of <span className="font-semibold text-blue-400">AI agents</span> to automate workflows and enhance software capabilities.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Education</h3>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20">
                  <img src="https://eng.asu.edu.eg/public/ext/images/logo-white.png" alt="Ain Shams University" className="w-10 h-10 object-contain rounded" />
                  <div>
                    <div className="font-semibold text-blue-400">Ain Shams University</div>
                    <div className="text-sm text-muted-foreground">Faculty of Engineering</div>
                    <div className="text-xs text-muted-foreground">Computer Engineering & Software Systems • 2021 - Present</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20">
                  <img src="https://uelresearch.com/wp-content/uploads/2015/02/cropped-uel-logo-2010_rgb2.png" alt="University of East London" className="w-10 h-10 object-cover rounded" />
                  <div>
                    <div className="font-semibold text-blue-400">University of East London</div>
                    <div className="text-sm text-muted-foreground">Faculty of Engineering</div>
                    <div className="text-xs text-muted-foreground">Computer Science (Dual Degree) • 2022 - Present</div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Certifications</h3>
              <div className="flex flex-col gap-4">
                <a href="https://www.coursera.org/account/accomplishments/professional-cert/OP8V0FHK62E5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://static.cdnlogo.com/logos/i/92/ibm.svg" alt="IBM AI Engineering Professional" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">IBM AI Engineering Professional</div>
                    <div className="text-xs text-muted-foreground">AI/ML Focus</div>
                  </div>
                </a>
                <a href="https://www.coursera.org/account/accomplishments/professional-cert/O2X1IRNUCOD2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://static.cdnlogo.com/logos/m/35/meta-platforms.svg" alt="Meta Front End Developer Professional" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">Meta Front End Engineer Professional</div>
                    <div className="text-xs text-muted-foreground">Web Dev Focus</div>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>
            
            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <div key={item.id} className="relative pl-16 flex items-start group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all w-full">
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <div className="text-sm font-medium text-muted-foreground">
                          {item.year}
                        </div>
                        <div className="w-12 h-12 rounded-md bg-black/20 flex items-center justify-center overflow-hidden">
                          {item.logoSrc ? (
                            <img
                              src={item.logoSrc}
                              alt={item.logoAlt ?? 'Company logo'}
                              className="w-full h-full object-contain p-1"
                            />
                          ) : (
                            <span className="text-[10px] text-muted-foreground">Logo</span>
                          )}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{item.title}</h3>
                      {(item.organization || item.location) && (
                        <div className="mb-2 text-sm text-muted-foreground">
                          {item.organization ? (
                            item.organizationUrl ? (
                              <a
                                href={item.organizationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                              >
                                {item.organization}
                              </a>
                            ) : (
                              <span>{item.organization}</span>
                            )
                          ) : null}
                          {item.organization && item.location ? <span> • </span> : null}
                          {item.location ? <span>{item.location}</span> : null}
                        </div>
                      )}
                      {/* Collapsible content starts */}
                      <div
                        ref={(el) => {
                          if (el) {
                            contentRefs.current.set(item.id, el);
                          } else {
                            contentRefs.current.delete(item.id);
                          }
                        }}
                        style={{
                          maxHeight: expandedById[item.id]
                            ? maxHeightById[item.id] === 'auto'
                              ? 'none'
                              : `${maxHeightById[item.id] ?? COLLAPSED_MAX_HEIGHT_PX}px`
                            : `${COLLAPSED_MAX_HEIGHT_PX}px`,
                        }}
                        className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
                        onTransitionEnd={(e) => {
                          if (e.propertyName === 'max-height' && expandedById[item.id]) {
                            setMaxHeightById((prev) => ({ ...prev, [item.id]: 'auto' }));
                          }
                        }}
                      >
                      {item.techStack && item.techStack.length > 0 && (
                        <div className="mt-2 mb-2 flex flex-wrap items-center gap-2">
                          {item.techStack.map((tech, index) => (
                            <a
                              key={`${item.id}-tech-${index}`}
                              href={tech.url ?? '#'}
                              target={tech.url ? "_blank" : undefined}
                              rel={tech.url ? "noopener noreferrer" : undefined}
                              className="group"
                              aria-label={tech.alt}
                            >
                              <div className="w-6 h-6 rounded-sm bg-black/20 border border-muted/40 flex items-center justify-center overflow-hidden group-hover:border-blue-500/40 transition">
                                <img src={tech.src} alt={tech.alt} className="w-full h-full object-contain" />
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="mt-2 mb-1 list-disc marker:text-purple-500 pl-5 space-y-1 text-base text-muted-foreground">
                          {item.highlights.map((point, i) => (
                            <li key={`${item.id}-hl-${i}`}>{point}</li>
                          ))}
                        </ul>
                      )}
                      {item.description && item.description.trim().length > 0 && (
                        <p className="text-sm text-muted-foreground whitespace-pre-line">
                          {item.description}
                        </p>
                      )}

                      {!expandedById[item.id] && needsCollapseById[item.id] && (
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent flex items-end justify-center">
                          <div className="relative mb-2 pointer-events-auto">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-10 bg-gradient-to-t from-purple-600/30 to-transparent rounded-t-full blur-md" />
                            <Button
                              size="sm"
                              className="relative z-10 rounded-full px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow hover:opacity-90"
                              onClick={() => {
                                const el = contentRefs.current.get(item.id);
                                if (el) {
                                  // Set target height to scrollHeight for smooth expansion
                                  setMaxHeightById((prev) => ({ ...prev, [item.id]: el.scrollHeight }));
                                }
                                setExpandedById((prev) => ({ ...prev, [item.id]: true }));
                              }}
                            >
                              See more
                            </Button>
                          </div>
                        </div>
                      )}
                      </div>
                      {/* Collapsible content ends */}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
