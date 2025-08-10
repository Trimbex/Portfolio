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
    year: "Apr. 2023 – Apr. 2025",
    title: "Information Technology Support Specialist",
    organization: "George Brown College",
    location: "Toronto, ON",
    description: `Provided Tier 1/2 support for 1,000+ students and staff, maintaining campus-wide Windows/macOS systems and networked devices. Achieved a 95% satisfaction rate by resolving complex technical issues and automating health checks, reducing printer downtime by 30%. Managed asset tracking, software deployment, and IT documentation to optimize workflow efficiency.`,
    type: "experience"
  },
  {
    id: 3,
    year: "2022 - 2025",
    title: "Advanced Diploma in Computer Programming & Analysis",
    organization: "George Brown College",
    description: "Focused on full stack development, AI, cloud computing, and mobile app development. Built multiple academic and personal projects using modern technologies.",
    type: "education"
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
              <h3 className="text-xl font-semibold mt-8 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Certifications</h3>
              <div className="flex flex-col gap-4">
                <a href="https://www.coursera.org/account/accomplishments/specialization/LI5Q0UI157UD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google Data Analytics" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">Google Data Analytics Professional Certificate</div>
                    <div className="text-xs text-muted-foreground">Data Analytics Focus</div>
                  </div>
                </a>
                <a href="https://www.credly.com/badges/6366a28e-790a-4f83-9825-308fd4b1ed07/public_url" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition">
                  <img src="https://www.google.com/imgres?q=ibm%20logo%20svg&imgurl=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Ffree-ibm-logo-icon-download-in-svg-png-gif-file-formats--brand-company-brands-pack-logos-icons-2284974.png&imgrefurl=https%3A%2F%2Ficonscout.com%2Ffree-icon%2Fibm-2752157_2284974&docid=LhVFGlKx0-DrXM&tbnid=yEIptWpnccv7WM&vet=12ahUKEwiDv_eH3LeOAxXflIkEHe-TEnYQM3oECG8QAA..i&w=256&h=256&hcb=2&ved=2ahUKEwiDv_eH3LeOAxXflIkEHe-TEnYQM3oECG8QAA" alt="IBM Data Science" className="w-8 h-8" />
                  <div>
                    <div className="font-semibold text-blue-400">IBM Data Science Professional Certificate</div>
                    <div className="text-xs text-muted-foreground">Data Science Focus</div>
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
                        <div className="w-10 h-10 rounded-md border border-dashed border-blue-500/30 bg-black/20 flex items-center justify-center overflow-hidden">
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
