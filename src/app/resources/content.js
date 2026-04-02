import { InlineCode, SparkleFx} from "@/once-ui/components";

const person = {
    firstName: 'Xavier',
    lastName:  'Rodriguez',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'QA Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'America/Los_Angeles',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/XaviRB',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/xavier-rodriguez-a9120023b/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'xavier.rgz.bng@gmail.com',
    },
]


const home = {
    label: 'Welcome',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Engineer and Builder </>,
    subline: <>Hello, I am <SparkleFx speed="slow"count={100}><i><b>Xavier Rodriguez</b></i></SparkleFx> a <SparkleFx speed="slow"count={100}><i><b>QA Software Engineer</b></i></SparkleFx> at <InlineCode>Denali</InlineCode>, where I work <br/>with a talented team. <br/> <br/>A Proficient Engineer from Bellevue, Washington. Always striving to learn cutting-edge technologies and frameworks. I have the ability to build projects and collaborate with diverse teams. </>
}

const about = {
    label: 'About',
    title: ' About me ',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://calendar.app.google/YyiGja1uGTd8k4gA7'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Detail oriented professional with a strong foundation in Computer Science and Mathematics, complemented by a background in software development and analysis. I’ve consistently demonstrated adaptability and collaboration skills in diverse teams, bringing a blend of technical expertise, analytical proficiency, and a results driven mindset. With industry experience in software and hardware testing and performance optimization. I am passionate about driving solutions, ensuring high quality standards through continuous improvement.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Denali Advanced Integration',
                timeframe: 'Aug 2024 - Present',
                role: 'QA Software Engineer',
                achievements: [
                    <>Software QA Engineer embedded within T-Mobile's clients, responsible for ensuring the quality, reliability, and performance of device-integrated software and wireless protocol solutions across both manual and automated testing</>,
                    <>Supervise and collaborate with the robotic automation team, ensuring T-Mobile software validation on devices under automation by authoring test plans that ensure device functionality and client software integration</>,
                    <>Develop and execute comprehensive test plans ensuring the quality and reliability of device-integrated software and wireless protocols across client platforms including MI, MCM, CH, CM, MS, Adapt, and CDM</>,
                    <>Implement and maintain test automation frameworks using Python and RPA tools, significantly improving testing efficiency and reducing manual effort</>,
                    <>Perform rigorous performance, stability, and user acceptance testing across multiple devices in both lab and field environments to identify and resolve potential defects</>,
                    <>Validate REST API endpoints using Postman and verify Snowflake database entries to ensure data accuracy and compliance with established standards</>,
                    <>Create, manage, and track bugs and tickets in JIRA while coordinating with the T-Mobile manual QA team to provide software insight on client and OEM issues</>,
                    <>Prepare and present test reports documenting results, findings, and actionable recommendations to enhance product quality and performance</>,
                    <>Collaborate with cross-functional teams to align on quality objectives and support successful product delivery</>,
                    <><b>Skills:</b> <InlineCode>Test Automation</InlineCode> <InlineCode>Python</InlineCode> <InlineCode>PowerShell</InlineCode> <InlineCode>AWS</InlineCode> <InlineCode>JIRA</InlineCode> <InlineCode>Android Studio</InlineCode> <InlineCode>REST APIs</InlineCode> <InlineCode>SQL</InlineCode> <InlineCode>GitLab</InlineCode> <InlineCode>Postman</InlineCode> <InlineCode>Snowflake</InlineCode> <InlineCode>Firebase</InlineCode> <InlineCode>Robotic Process Automation (RPA)</InlineCode> <InlineCode>Google Cloud Platform (GCP)</InlineCode></>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                ]
            },
            {
                company: 'Kerry',
                timeframe: 'Apr 2024 - Aug 2024',
                role: 'QA Laboratory Technician',
                achievements: [
                    <>Created and executed test plans and test cases based on business and functional requirements, ensuring thorough testing of the product.</>,
                    <>Managed and documented hardware and software inventory, ensuring systems are up-to-date and secure.</>,
                    <>Maintained and archived all test documentation on SAP, ensuring accurate records of testing activities and results.</>,
                    <>Standardized, calibrated, and maintained laboratory equipment, and managed laboratory inventory and supply orders.</>,
                    <>Analyzed test results to identify trends, discrepancies, and areas for improvement, and took corrective actions to enhance product quality.</>

                ],
                images: [ ]
            },
            {
                company: 'Western Washington University',
                timeframe: 'Sep 2022 - Dec 2023',
                role: 'Web Developer',
                achievements: [
                    <>Developed and deployed database architecture using MySQL to optimize the performance and scalability of Drupal-based applications, which enhanced data handling and the retrieval process.</>,
                    <>Utilized Power BI to create interactive dashboards, providing valuable insights into web traffic and user behavior.</>,
                    <>Provided technical support and troubleshooting for web-based applications, ensuring optimal functionality and user satisfaction. Developed and maintained relationships with users to improve the software experience.</>,
                    <>Successfully implemented over 20 website features, leading to an increase in site traffic and user engagement by 65%.</>,
                    <>Developed over 15 server-side applications, enhancing website functionality and user experience.</>,
                    <>Efficiently managed multiple projects concurrently, meeting all deadlines and achieving the institute's goals and targets.</>

                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: false, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Western Washington University',
                description: <>Studied Mathematics and Computer Science</>,
                images: []
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Education',
        skills: [
            {
                title: 'Western Washington University',
                description: <><i>Bachelors of Science & Engineering: Mathematics / Computer Science</i><br/>
                        <ul>
                        <li><b>Relevant Coursework:</b></li>
                        <ul>
                            <li><b>Mathematical and Optimization:</b> Numerical Computation, Analysis of Algorithms, Linear Optimization, Statistics II</li>
                            <li><b>Data Structures and Systems:</b> Linear Data Structures, Data Structures, Computer Systems I</li>
                            <li><b>Programming and Design:</b> Computer Programming, Object Oriented Design</li>
                            <li><b>Security:</b> Cyber Defense</li>
                        </ul>
                        </ul>
                        </>,
                images: [
                    {
                        src: '/images/projects/project-01/wwuLogo.png',
                        alt: 'Western Washington University Logo',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/westerncampus.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    }
                ],
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Thoughts on Tech and Finance...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const projects = {
    label: 'projects',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const work = {
    label: 'Projects',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const skills = {
    categories: [
        {
            title: 'Programming Languages',
            items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'C#', 'C/C++', 'Swift', 'PowerShell', 'Racket']
        },
        {
            title: 'Web Technologies',
            items: ['HTML', 'CSS', 'XML', 'REST APIs', 'GraphQL', 'WebSocket', 'Microservices']
        },
        {
            title: 'Frameworks & Libraries',
            items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot', 'Flask', 'FastAPI', 'Blazor', 'ASP.NET Boilerplate', 'Java Swing']
        },
        {
            title: 'Technologies',
            items: ['Redis', 'RabbitMQ', 'Kafka', 'Kubernetes (GKE, EKS)', 'Docker', 'PostgreSQL', 'MongoDB', 'MongoDB Vector Search', 'DynamoDB', 'Firebase', 'MSSQL', 'AWS (S3, Lambda, EC2, Cognito)', 'GCP', 'Snowflake', 'OpenAI API', 'LangChain', 'AssemblyAI', 'Nginx', 'SAP', 'Power BI']
        },
        {
            title: 'Testing & QA',
            items: ['Test Automation', 'Selenium', 'RPA', 'Postman', 'JIRA', 'Test Planning', 'UAT', 'Android Studio', 'Twilio']
        },
        {
            title: 'Developer Tools',
            items: ['Git', 'GitHub Actions', 'GitLab', 'VS Code', 'Linux', 'Bash']
        },
        {
            title: 'Other Skills',
            items: ['Systems Architecture', 'Object-Oriented Programming', 'API Design', 'CI/CD', 'Agile Methodologies', 'Testing', 'Automation Testing', 'Design Patterns', 'Data Analysis', 'Cloud Security', 'Security (JWT, RBAC, Rate Limiting)']
        }
    ]
}

export { person, social, home, about, blog, work, projects, skills };
