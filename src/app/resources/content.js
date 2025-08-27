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

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
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
        name: 'X',
        icon: 'x',
        link: '',
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
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Detail-oriented professional with a strong foundation in Computer Science and Mathematics, complemented by a background in software development and analysis. I’ve consistently demonstrated adaptability and collaboration skills in diverse teams, bringing a blend of technical expertise, analytical proficiency, and a positive can-do attitude. With industry experience in software and hardware testing and performance optimization. I am passionate about driving solutions, ensuring high quality standards through continuous improvement.</>
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
                    <>Implemented and maintained test automation frameworks, significantly improving testing efficiency and effectiveness.</>,
                    <>Developed and executed comprehensive test plans to ensure the quality and reliability of device-integrated software and wireless protocols.</>,
                    <>Conducted rigorous performance, stability, and user acceptance testing on various products, both in lab and field environments, to identify and resolve potential defects.</>,
                    <>Collaborated closely with development teams and external vendors to drive defect reproduction, perform in-depth analysis, and ensure timely resolution of issues.</>,
                    <>Prepared detailed test reports documenting results, findings, and actionable recommendations to enhance product quality and performance.</>,
                    <>Utilized project management tools to meticulously track and manage issues, ensuring timely resolution and continuous improvement of software products.</>,    
                    <>Evaluated software readiness for production, providing critical sign-off for release based on rigorous quality assurance standards.</>,
                    <>Stayed current with industry trends, emerging technologies, and best practices in software testing, continuously enhancing technical knowledge and expertise.</>,
                    <>Collaborated with cross-functional teams to ensure alignment on quality objectives and successful product delivery.</>,
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
                name: 'Western Washington Univeristy',
                description: <>Studied Mathmatics and Software Engineering</>,
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Education',
        skills: [
            {
                title: 'Western Washington Univeristy',
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
    title: 'Writing about design and tech...',
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

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, projects, gallery };