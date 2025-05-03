/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Amlan's Portfolio",
  description:
    "Robotics and AI engineer with a passion for developing intelligent systems that drive innovation in real-world environments",
  og: {
    title: "Amlan Sahoo's Portfolio",
    type: "website",
    url: "https://amlansahoo07.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Amlan Sahoo",
  logo_name: "Amlan Sahoo",
  nickname: "",
  // subTitle:
  //   "I'm currently pursuing a Master's in Robotics and AI at University College London (UCL), with a focus on robotic perception, \
  //   motion planning, and legged locomotion. Previously, I worked as a Software Developer at Publicis Sapient, where I built automation \
  //   and data-driven tools in an SRE setup. I'm passionate about building intelligent systems that can adapt to complex environments — \
  //   and I'm always open to exciting collaborations at the intersection of robotics, AI and entrepreneurship. Feel free to reach out \
  //   through the links below!",
  subTitle: `I'm currently pursuing a Master's in Robotics and AI at University College London (UCL), with a focus on robotic perception,
            motion planning, and legged locomotion. Previously, I worked as a Software Developer at Publicis Sapient, where I built automation
            and data-driven tools in an SRE setup. I'm passionate about building intelligent systems that can adapt to complex environments —
            and I'm always open to exciting collaborations at the intersection of robotics, AI and entrepreneurship. Feel free to reach out
            through the links below!`,
  resumeLink:
    "",
  portfolio_repository: "/projects",
  githubProfile: "https://github.com/amlansahoo07",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/amlansahoo07",
    fontAwesomeIcon: "fab fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amlansahoo07/",
    fontAwesomeIcon: "fab fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Email",
    link: "mailto:amlan.sahoo.24@ucl.ac.uk",
    fontAwesomeIcon: "fas fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/amlansahoo07",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Robotics & AI",
      fileName: "RoboticsImg",
      skills: [
        "⚡ Strong foundation in robot software architecture, motion planning, and control systems",
        "⚡ Experience in developing modular frameworks for perception, decision-making, and actuation",
        "⚡ Proficient with industry-standard tools and simulators for robotic development",
      ],
      softwareSkills: [
        {
          skillName: "ROS",
          fontAwesomeClassname: "devicon-ros",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Gazebo",
          fontAwesomeClassname: "devicon-gazebo",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "material-icon-theme:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "devicon:cplusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "devicon:matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Ubuntu",
          fontAwesomeClassname: "logos:ubuntu",
          style: {
            backgroundColor: "transparent",
          },
        },
        // {
        //   skillName: "Deeplearning",
        //   imageSrc: "deeplearning_ai_logo.png",
        // },
      ],
    },
    {
      title: "ML & Computer Vision",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Skilled in designing and training models for visual perception, forecasting, and classification tasks",
        "⚡ Comfortable with deep learning, CNNs, and spatiotemporal modelling for autonomous systems",
        "⚡ Experience in 3D perception and multi-senor fusion for robust perception tasks",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "devicon:pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SKLearn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "devicon:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "devicon:opencv",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "devicon:matplotlib",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
          },
        },
        // {
        //   skillName: "Deeplearning",
        //   imageSrc: "deeplearning_ai_logo.png",
        // },
      ],
    },
    {
      title: "Software Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed automation pipelines and SRE tooling to enhance system reliability and observability",
        "⚡ Experience working in production environments with CI/CD, logging, and monitoring",
        "⚡ Proficient in data-driven debugging, incident response, and workflow optimization",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "material-icon-theme:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "devicon:bash",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "devicon:sqldeveloper",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "devicon:jenkins",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "devicon:docker",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "devicon:kubernetes",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "material-icon-theme:gcp",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Dynatrace",
          fontAwesomeClassname: "devicon:dynatrace",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Splunk",
          fontAwesomeClassname: "logos:splunk",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Akamai",
          fontAwesomeClassname: "logos:akamai",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page

const educationText = {
  title: "Education Text",
  description: `From studying how simple logic gates work to building intelligent robots that 
  navigate the real world — my education has spanned across disciplines, giving me a unique blend 
  of hardware and software expertise.`
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University College London",
      subtitle: "MSc Robotics and Artificial Intelligence",
      logo_path: "ucl_logo.png",
      alt_name: "UCL",
      duration: "2024 - 2025",
      descriptions: [
        "⚡ Developed strong foundations in robotic perception, motion planning, control systems, and machine learning.",
        "⚡ Working on projects involving quadrupedal robots, adaptive locomotion, and real-time path planning in simulated environments.",
        "⚡ Actively exploring research and startup opportunities at the intersection of robotics, AI, and entrepreneurship.",
      ],
      website_link: "https://www.ucl.ac.uk/",
    },
    {
      title: "National Institute of Technology Rourkela",
      subtitle: "B.Tech. in Electronics and Communication Engineering (Minor in Computer Science)",
      logo_path: "nitr_logo.png",
      alt_name: "NITR",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Built a strong foundation in electronics, signal processing, and embedded systems, with a minor in Computer Science.",
        "⚡ Worked on a deep learning–based real-time intrusion detection system using computer vision, in collaboration with DRDO.",
        "⚡ Participated in interdisciplinary technical projects and competitions, strengthening my problem-solving and teamwork skills.",
      ],
      website_link: "https://www.nitrkl.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/a75a2893b4c9e4d5a0ee45fa6d3aea26",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/b18272f47f7cdaf0a5b84eb7f3706641",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/8c0d6726ebc9972f81118e25392f35f6",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    `Over the years, I've explored a range of roles across industry, research, and campus life — from working in a 
  high-paced software engineering environment to contributing to academic research and student wellbeing. I've held 
  roles that deepened my understanding of teamwork, leadership, and communication and each experience has shaped how 
  I approach challenges, collaborate with others, and build practical solutions with impact.`,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Industry Experience",
      work: true,
      experiences: [
        {
          title: "Associate Software Development Engineer L2",
          company: "Publicis Sapient",
          company_url: "https://www.publicissapient.com/",
          logo_path: "ps2_logo.png",
          duration: "June 2021 - Aug 2024",
          location: "Bengaluru, India",
          description:
            `Over three years, I helped design and deliver robust, scalable systems as part of the Site Reliability Engineering (SRE) team for 
          US-based retail client Academy Sports + Outdoors. From automating ops workflows and optimizing system health reports to solving inventory discrepancies 
          at scale, I worked at the intersection of data, automation, and system reliability. I also mentored interns, led cross-functional initiatives, 
          and championed tools and practices that reduced manual toil and improved uptime during critical business seasons.`,
          color: "#000000",
        },
        // {
        //   title: "Associate AI Engineer",
        //   company: "Legato Health Technology",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - Aug 2021",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // }
      ],
    },
    {
      title: "Research Experience",
      experiences: [
        {
          title: "Graduate Researcher",
          company: "UCL Robotics Lab",
          company_url: "https://www.ucl.ac.uk/robotics/",
          logo_path: "ucl_logo.png",
          duration: "Jan 2025 - Present",
          location: "London, UK",
          description:
            `Currently working on real-time motion planning for quadruped robots in collaboration with the Dynamic Legged Systems Lab at IIT, Italy. 
            My research focuses on integrating Model Predictive Path Integral (MPPI) control into a JAX-based MuJoCo simulation environment to enable 
            adaptive, non-periodic gait generation. I’m also exploring sampling-based optimization and hybrid control strategies to push the boundaries 
            of agile, terrain-aware locomotion.`,
          color: "#000000",
        },
        {
          title: "Undergraduate Researcher",
          company: "ISDR Lab, NIT Rourkela",
          company_url: "https://isdr.nitrkl.ac.in/",
          logo_path: "nitr_logo2.png",
          duration: "Apr 2020 - Mar 2021",
          location: "Rourkela, India",
          description:
            `Worked under Prof. S.K. Das on a collaborative research project in partnership with DRDO Chandipur, focused on real-time intrusion detection 
            using computer vision. We implemented and optimized deep learning models (RCNN and YOLO) for accurate object detection on live video feeds. 
            Our final system achieved over 90% box confidence scores and was integrated into a custom web app for real-time surveillance.`,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Assistant Marketing Manager Intern",
          company: "My Study Buddy",
          company_url: "https://www.linkedin.com/company/mystudybuddy/",
          logo_path: "msb_logo.png",
          duration: "June 2020 - July 2020",
          location: "Remote, India",
          description:
            `Led the creative charge on social media strategy and team coordination to scale brand outreach. I executed platform-specific campaigns across 
            Facebook, Twitter, LinkedIn, and WhatsApp, boosting visibility and engagement. My work with analytics helped us tailor content to platform 
            algorithms, and I was recognized as a top performer for driving campaign results.`,
          color: "#000000",
        },
        {
          title: "Data Analyst Intern",
          company: "Edulyt India Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/edulytindia/",
          logo_path: "edulyt_logo.png",
          duration: "May 2020 - Jun 2020",
          location: "Remote, India",
          description:
            `Worked on real-world loan approval data to build a predictive ML pipeline in Python. I developed and tuned a loan approval model using 
            scikit-learn, boosting ROC AUC performance to 76% through thoughtful feature engineering.`,
          color: "#ee3c26",
        },
        {
          title: "Embedded Systems Summer Trainee",
          company: "Wingfotech Pvt. Ltd. (Collaboration with Aakaar IIT Bombay)",
          company_url:
            "https://www.linkedin.com/company/wingfotech/",
          logo_path: "wingfotech_logo.png",
          duration: "May 2019 - June 2019",
          location: "Remote, India",
          description:
            `Completed a hands-on embedded systems and robotics training program. I designed a Smart Blind Stick prototype using Arduino and ultrasonic 
            sensors to detect obstacles and assist visually impaired users — my first practical step into real-world assistive tech design.`,
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Other Experiences",
      experiences: [
        {
          title: "Student Residence Adviser",
          company: "Support and Wellbeing Services (UCL)",
          company_url: "https://www.ucl.ac.uk/students/support-and-wellbeing-services",
          logo_path: "ssws_logo.png",
          duration: "Sep 2024 - Present",
          location: "London, UK",
          description:
            `Providing pastoral care to over 500 residents in UCL accommodation, I work to foster a safe, inclusive, and connected community. From 
            conflict resolution and welfare support to organizing cultural nights and workshops, I serve as a first point of contact for academic 
            and personal concerns for the residents, ensuring every student feels heard, supported, and at home.`,
          color: "#4285F4",
        },
        {
          title: "General Secretary (External Affairs)",
          company: "AASRA Social Service Club",
          company_url:
            "https://www.aasranitr.in/",
          logo_path: "aasra_logo.png",
          duration: "Jan 2018 - May 2021",
          location: "Rourkela, India",
          description:
            `As a core member of AASRA, the social service wing of NIT Rourkela, I led outreach efforts to uplift underprivileged children and communities 
            in the region. My role involved restructuring educational programs, managing partnerships with local NGOs, and launching awareness campaigns 
            around issues like malnutrition and child marriage. I facilitated access to skill-building programs for students and coordinated impactful 
            initiatives like the Diya Project, which created seasonal employment opportunities for women. One of my proudest contributions was organizing 
            a large-scale Science Fair for 150+ children, ensuring every detail from logistics to safety was handled with care.`,
          color: "#0C9D58",
        },
        {
          title: "Student Mentor",
          company: "Institute Counselling Service (NIT Rourkela)",
          company_url: "https://www.ics-nitrkl.in/",
          logo_path: "ics_logo.png",
          duration: "Apr 2020 - May 2021",
          location: "Rourkela, India",
          description:
            `Mentored six first-year students through their transition into university life. I offered tailored emotional support, academic guidance, and 
            helped them set goals and grow personally. By facilitating group sessions and building a tight-knit space for feedback and connection, I helped 
            foster a sense of belonging and resilience.`,
          color: "#D83B01",
        },
        {
          title: "Student Facilitator (Robotics)",
          company: "OpenCode NIT Rourkela",
          company_url: "https://www.linkedin.com/company/opencode-nit-rourkela/",
          logo_path: "opencode_logo.png",
          duration: "Feb 2018 - Mar 2020",
          location: "Rourkela, India",
          description:
            `As a facilitator for the Robotics stream at OpenCode, the official Open Source community of NIT Rourkela, I was responsible for driving student engagement 
            in open-source development through workshops, mentorship, and community-driven projects. I aided in conducting robotics-focused technical sessions to introduce 
            students to hands-on building and coding practices and helped manage club operations, contributed to organizing campus-wide hackathons, and 
            ensured smooth execution of events that strengthened the open-source culture on campus.`,
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page - Research, ML, Hackathon, Computer Vision, DL, etc.
const projectsHeader = {
  title: "Projects",
  description:
    `A curated collection of academic, research, and personal projects demonstrating my interest in intelligent
    systems and real-world problem solving. These projects reflect both individual and collaborative efforts,
    showcasing my skills in robotics, AI, and software development.`,
  avatar_image_path: "projects_image.svg",
};

// Projects Section
const projects = [
  {
    name: "3D Vision Benchmarking: Visual SLAM vs. SfM",
    description: `Evaluated ORB-SLAM2 and COLMAP for 3D reconstruction and tracking using self-recorded indoor and outdoor datasets. Focused on pose estimation accuracy, 
    reconstruction quality, and robustness under varied conditions. Developed a dense 3D reconstruction pipeline with sub-10cm detail preservation, enabling applications in 
    robotics, augmented reality, and heritage preservation. Demonstrated potential for high-fidelity digital archiving and virtual exploration.`,
    image: "3d_vision.png", 
    url: "https://github.com/amlansahoo07/3d-vision-benchmarking",
    languages: [
      { name: "ORB-SLAM2" },
      { name: "COLMAP" },
      { name: "EVO Toolkit" },
      { name: "C++" }
    ]
  },
  {
    name: "MPPI footstep planning for quadruped robots",
    description: "Real-time motion planning for quadruped robots using Model Predictive Path Integral (MPPI) control integrated into a JAX-based MuJoCo simulation environment to enable adaptive, terrain-aware locomotion.",
    image: "mppi_footstep.png", 
    url: "https://github.com/amlansahoo07/mppi-footstep",
    languages: [
      { name: "Python" },
      { name: "JAX" },
      { name: "MuJoCo" },
      { name: "ROS2" }
    ]
  },
  {
    name: "Pick-n-Place manipulation using Panda Robot",
    description: "Developed a pick-and-place manipulation system using the Panda robot in a simulated Gazebo environment, implementing advanced perception and motion planning algorithms to achieve precise object manipulation.",
    image: "pick_n_place.png", 
    url: "https://github.com/amlansahoo07/pick-n-place",
    languages: [
      { name: "C++" },
      { name: "ROS" },
      { name: "Gazebo" },
      { name: "MoveIt" },
      { name: "PCL" },
      { name: "OpenCV" }
    ]
  },
  {
    name: "Computer Vision for Drone Landing",
    description: "Developed computer vision and sensing algorithms to estimate the geometry, rotation, and motion of a suspended Astronomical Object (AO) model to aid in drone navigation and landing strategies in dynamic space exploration environments.",
    image: "drone-landing.png",
    url: "https://github.com/amlansahoo07/drone-landing",
    languages: [
      { name: "Python" },
      { name: "OpenCV" },
    ]
  },
  // {
  //   name: "Smart Blind Stick",
  //   description: "Designed and built a prototype assistive device for the visually impaired using Arduino, ultrasonic sensors and haptic feedback to detect obstacles and provide navigation assistance.",
  //   image: "blindstick.png", // Place this image in assets/images/projects/
  //   url: "https://github.com/amlansahoo07/smart-blind-stick",
  //   languages: [
  //     { name: "C++" },
  //     { name: "Arduino" },
  //     { name: "IoT" }
  //   ]
  // }
];

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  educationText,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  publicationsHeader,
  publications,
  contactPageData,
};
