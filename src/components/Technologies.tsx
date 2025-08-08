import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const techGroups = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', docs: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', docs: 'https://www.typescriptlang.org/docs/' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', docs: 'https://docs.python.org/3/' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', docs: 'https://docs.oracle.com/en/java/' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', docs: 'https://isocpp.org/std/the-standard' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', docs: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', docs: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', docs: 'https://developer.mozilla.org/docs/Web/CSS' },
      { name: 'Verilog', icon: 'https://www.svgrepo.com/show/374042/verilog.svg', docs: 'https://www.chipverify.com/verilog/verilog-tutorial' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', docs: 'https://react.dev/' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', docs: 'https://nextjs.org/docs' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', docs: 'https://angular.io/docs' },
      { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', docs: 'https://tailwindcss.com/docs' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', docs: 'https://redux.js.org/' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', docs: 'https://getbootstrap.com/' },
      { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', docs: 'https://mui.com/' },
      { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', docs: 'https://api.jquery.com/' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', docs: 'https://nodejs.org/en/docs' },
      { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/ffffff', docs: 'https://expressjs.com/' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', docs: 'https://docs.djangoproject.com/' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', docs: 'https://fastapi.tiangolo.com/' },
      { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', docs: 'https://graphql.org/learn/' },
      { name: 'REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original-wordmark.svg', docs: 'https://restfulapi.net/' },
      { name: 'Supabase', icon: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4', docs: 'https://supabase.com/docs' },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', docs: 'https://www.mongodb.com/docs/' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', docs: 'https://www.postgresql.org/docs/' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', docs: 'https://dev.mysql.com/doc/' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', docs: 'https://www.sqlite.org/docs.html' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', docs: 'https://redis.io/docs/' },
      { name: 'Supabase', icon: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4', docs: 'https://supabase.com/docs' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', docs: 'https://firebase.google.com/docs' },
      { name: 'Microsoft SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', docs: 'https://learn.microsoft.com/sql/' },
    ],
  },
  // AI/ML split
  {
    label: 'AI Frameworks',
    items: [
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', docs: 'https://pytorch.org/docs/stable/index.html' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', docs: 'https://www.tensorflow.org/learn' },
      { name: 'scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', docs: 'https://scikit-learn.org/stable/' },
    ],
  },
  {
    label: 'Data & CV',
    items: [
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', docs: 'https://pandas.pydata.org/docs/' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', docs: 'https://numpy.org/doc/' },
      { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', docs: 'https://docs.opencv.org/' },
    ],
  },
  {
    label: 'LLM & RAG',
    items: [
      { name: 'Hugging Face', icon: 'https://avatars.githubusercontent.com/u/25720743?s=200&v=4', docs: 'https://huggingface.co/docs' },
      { name: 'LangChain', icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4', docs: 'https://python.langchain.com/docs/' },
      { name: 'LlamaIndex', icon: 'https://avatars.githubusercontent.com/u/124794309?s=200&v=4', docs: 'https://docs.llamaindex.ai/' },
    ],
  },
  {
    label: 'MLOps',
    items: [
      { name: 'MLflow', icon: 'https://avatars.githubusercontent.com/u/44920056?s=200&v=4', docs: 'https://mlflow.org/docs/latest/index.html' },
    ],
  },
  // Cloud/DevOps split
  {
    label: 'Cloud Providers',
    items: [
      { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', docs: 'https://docs.aws.amazon.com/' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', docs: 'https://docs.microsoft.com/en-us/azure/' },
      { name: 'Google Cloud (GCP)', icon: 'https://cdn.simpleicons.org/googlecloud/ffffff', docs: 'https://cloud.google.com/docs' },
    ],
  },
  {
    label: 'Containers & CI/CD',
    items: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', docs: 'https://docs.docker.com/' },
      { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', docs: 'https://www.jenkins.io/doc/' },
    ],
  },
  {
    label: 'Platforms & Hosting',
    items: [
      { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png', docs: 'https://vercel.com/docs' },
      { name: 'Netlify', icon: 'https://www.netlify.com/v3/img/components/logomark.png', docs: 'https://docs.netlify.com/' },
    ],
  },
  {
    label: 'Ops Tools',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', docs: 'https://git-scm.com/doc' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', docs: 'https://www.kernel.org/doc/html/latest/' },
    ],
  },
  {
    label: 'Testing',
    items: [
      { name: 'JUnit', icon: 'https://cdn.simpleicons.org/junit5/25A162', docs: 'https://junit.org/junit5/docs/current/user-guide/' },
      { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg', docs: 'https://www.selenium.dev/documentation/' },
      { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', docs: 'https://jestjs.io/docs/getting-started' },
      { name: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-plain.svg', docs: 'https://docs.cypress.io/' },
      { name: 'Playwright', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg', docs: 'https://playwright.dev/docs/intro' },
      { name: 'PyTest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg', docs: 'https://docs.pytest.org/en/stable/' },
    ],
  },
  {
    label: 'IDEs',
    items: [
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', docs: 'https://code.visualstudio.com/docs' },
      { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg', docs: 'https://learn.microsoft.com/visualstudio/' },
      { name: 'IntelliJ IDEA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg', docs: 'https://www.jetbrains.com/help/idea/meet-intellij-idea.html' },
      { name: 'Eclipse', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg', docs: 'https://help.eclipse.org/' },
      { name: 'Jupyter Notebook', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', docs: 'https://docs.jupyter.org/en/latest/' },
    ],
  },
  {
    label: 'AI Assistants',
    items: [
      { name: 'ChatGPT', icon: 'https://cdn.simpleicons.org/openai/ffffff', docs: 'https://platform.openai.com/' },
      { name: 'Gemini', icon: 'https://cdn.simpleicons.org/googlegemini/ffffff', docs: 'https://ai.google.dev/gemini-api/docs' },
      { name: 'Claude', icon: 'https://cdn.simpleicons.org/anthropic/ffffff', docs: 'https://docs.anthropic.com/' },
      { name: 'Cursor', icon: 'https://www.cursor.com/favicon.ico', docs: 'https://www.cursor.com/' },
      { name: 'DeepSeek', icon: 'https://www.deepseek.com/favicon.ico', docs: 'https://www.deepseek.com/' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

// Tabs and the group labels they display
const TAB_DEFINITIONS: { key: string; label: string; groups: string[] }[] = [
  {
    key: 'core',
    label: 'Core',
    groups: ['Languages', 'Frontend', 'Backend', 'Database'],
  },
  {
    key: 'ai',
    label: 'AI / ML',
    groups: ['AI Frameworks', 'Data & CV', 'LLM & RAG', 'MLOps'],
  },
  {
    key: 'cloud',
    label: 'Cloud & DevOps',
    groups: ['Cloud Providers', 'Containers & CI/CD', 'Platforms & Hosting', 'Ops Tools'],
  },
  {
    key: 'tooling',
    label: 'Tooling',
    groups: ['Testing', 'IDEs', 'AI Assistants'],
  },
];

const Technologies = () => {
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = React.useState<string>('core');

  const handleImageError = (techName: string) => {
    setImageErrors(prev => ({ ...prev, [techName]: true }));
  };

  const currentTab = TAB_DEFINITIONS.find((t) => t.key === activeTab) ?? TAB_DEFINITIONS[0];
  const visibleGroups = techGroups.filter((group) => currentTab.groups.includes(group.label));

  const gridColsClass = visibleGroups.length >= 8
    ? 'lg:grid-cols-8'
    : visibleGroups.length >= 6
      ? 'lg:grid-cols-6'
      : visibleGroups.length >= 4
        ? 'lg:grid-cols-4'
        : 'lg:grid-cols-3';

  return (
    <section id="technologies" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          Technologies I Work With
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Cutting-edge tools and frameworks for building the future
        </p>
      </motion.div>
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {TAB_DEFINITIONS.map((tab) => (
          <Button
            key={tab.key}
            variant={activeTab === tab.key ? 'default' : 'outline'}
            className={activeTab === tab.key ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-blue-500/30 text-blue-400 hover:bg-blue-900/20'}
            onClick={() => setActiveTab(tab.key)}
            aria-pressed={activeTab === tab.key}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className={`w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 ${gridColsClass} gap-y-16 gap-x-12`}>
        {visibleGroups.map((group) => (
          <div key={group.label} className="flex flex-col items-center h-full">
            <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              {group.label}
            </h3>
            <motion.div
              className="grid grid-cols-2 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {group.items.map((tech) => (
                <motion.a
                  key={tech.name}
                  href={tech.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group no-underline"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="relative p-2 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.08)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                    {!imageErrors[tech.name] ? (
                      <motion.img 
                        src={tech.icon} 
                        alt={tech.name} 
                        loading="lazy"
                        className="w-10 h-10 object-contain relative z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        onError={() => handleImageError(tech.name)}
                      />
                    ) : (
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-blue-500/40 rounded-lg bg-black/30 text-blue-400 font-bold text-lg z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300">
                        {tech.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <motion.span 
                    className="mt-1 text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-300 text-center w-24 truncate h-5"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Technologies;
