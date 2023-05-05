import BlogImage from "./assets/images/service.jpg";
import BlogImage2 from "./assets/images/service2.jpg";
import BlogImage3 from "./assets/images/service3.jpg";
import { person1 as AuthorImage } from "./assets/images/people/index";
import {
  person1,
  person2,
  person3,
  person4,
  person5,
} from "@/assets/images/people";
import Image1 from "./assets/images/hero-card1.png";
import Image2 from "./assets/images/hero-card2.png";
import Image3 from "./assets/images/hero-card3.png";
import Image4 from "./assets/images/hero-card4.png";

// SERVICES DATA
export const servicesData = [
  {
    url: "/service/1",
    id: 1,
    image: Image1,
    features: [
      "Configuration Management",
      "Continuous integration and delivery (CI/CD)",
      "Monitoring and alerting",
      "Containerization",
      "Version control",
    ],

    title: "DevOps Service",
    mainDescription:
      " Take your DevOps projects to the next level with Cloud Nepalaya. We are dedicated to providing you with reliable DevOps solutions that can help you maximize your efficiency and productivity by making it easy to create, deploy, and manage custom software solutions with our full-service Dev ops service. By adopting DevOps methodologies and leveraging DevOps services, your organization can achieve greater agility, scalability, and efficiency in its software development and operations processes.",
    subDescriptions: [
      "With DevOps services, your organizations can benefit from faster release cycles, improved code quality, and greater agility in responding to changing business requirements and also reduce the risk of downtime and other issues, by ensuring that software is thoroughly tested and deployed in a consistent and reliable manner. At our company, we offer a range of DevOps services to help organizations achieve their software development goals, from planning and strategy to implementation and ongoing support. Our team of experts has the skills and experience needed to deliver customized DevOps solutions that meet the unique needs of each organization, ensuring that they can achieve their goals and stay ahead of the competition.",
      "",
    ],
    faqs: [
      {
        question: "What are the benefits of DevOps?",
        answer:
          "DevOps offers several benefits, including faster time to market, improved collaboration between teams, increased efficiency and productivity, and better quality software.",
      },
      {
        question: "What tools are commonly used in DevOps?",
        answer:
          "There are many tools used in DevOps, including Git, Jenkins, Docker, Kubernetes, Ansible, and many others.",
      },

      {
        question: "	How ,can DevOps benefit my organization?",
        answer:
          " DevOps can benefit organizations by improving collaboration between teams, increasing efficiency and productivity, and enabling faster time to market for new products and features. Additionally, DevOps can help improve software quality and reliability, reduce costs, and improve customer satisfaction.",
      },
      {
        question: "	What are the key components of a DevOps pipeline?",
        answer:
          "The key components of a DevOps pipeline include source code management, continuous integration, continuous delivery, and continuous deployment.",
      },
    ],
  },
  {
    url: "/service/2",
    id: 2,
    image: Image2,
    features: [
      "Functional Testing",
      "Performance Testing",
      "Security Testing",
      "Regression Testing",
      "Automation Testing",
    ],
    title: "QA Services",
    mainDescription:
      "Quality is key to any successful product. Cloud Nepalaya offers comprehensive QA testing services that can help you ensure quality assurance in all your projects. Let us help you reach peak performance in your products with the advanced QA solutions we offer. Get the highest quality assurance for your product with us. The goal is to ensure that your software products are of the highest quality and meet the needs of your customers. We use the latest technologies to provide timely and accurate solutions that meet your specific needs. By leveraging our QA services, our clients can improve the quality, reliability, and performance of their software products and ensure that they meet the needs of their customers.",
    subDescriptions: [
      " At our company, we offer a range of QA services to help organizations ensure that their applications meet the highest standards of quality. Our team of experts has the skills and experience needed to deliver customized QA solutions that meet the unique needs of each organization, ensuring that their applications are thoroughly tested and ready for deployment.",
    ],
    faqs: [
      {
        question: "	What are the benefits of QA?",
        answer:
          "QA offers several benefits, including improved product quality, increased customer satisfaction, reduced costs, and improved efficiency and productivity.",
      },
      {
        question: "	What are the key components of a QA process?",
        answer:
          "The key components of a QA process include planning, designing test cases, executing tests, reporting defects, and retesting after defects have been fixed.",
      },
      {
        question: "	What types of testing are involved in QA?",
        answer:
          "There are several types of testing involved in QA, including functional testing, performance testing, security testing, usability testing, and compatibility testing.",
      },
      {
        question: "	How can QA benefit my organization?",
        answer:
          "QA can benefit organizations by improving product quality, increasing customer satisfaction, reducing costs, and improving efficiency and productivity. Additionally, QA can help organizations identify and fix issues early in the development process, reducing the risk of costly errors and delays",
      },
    ],
  },
  {
    url: "/service/3",
    image: Image3,
    id: 3,
    title: "Software Development",
    mainDescription:
      "We understand the importance of having software that works! Software development services are crucial for businesses that need to develop customized software solutions to meet their specific needs and requirements. Our software development solutions are designed to give you a competitive edge in today's market. From custom-built applications to website development, we have everything to help you make a lasting impression on your customers",
    subDescriptions: [
      "We offer a range of software development services to help organizations build custom software solutions that meet their specific needs. Our team of experts has the skills and experience needed to deliver high-quality software solutions, using the latest development methodologies and technologies. We begin by working closely with our clients to understand their requirements and identify the best approach for their software development project",
    ],
    features: [
      "Requirement",
      "Planning",
      "Designing",
      "Development",
      "Testing",
      "Deployment",
      "Testing",
    ],
    faqs: [
      {
        question: "What kind of software development services do you offer?",
        answer:
          "We offer a range of software development services, including custom software development, mobile app development, web development, software testing and quality assurance, and software maintenance and support.",
      },
      {
        question:
          "How do you ensure the quality of your software development services?",
        answer:
          "We have a dedicated team of software testers who work closely with our developers to ensure that our software is of the highest quality. We also follow best practices such as code reviews, automated testing, and continuous integration to ensure that our software meets the highest standards.",
      },
      {
        question: "How long does it take to develop custom software?",
        answer:
          "The time it takes to develop custom software depends on the complexity of the project and the specific requirements of the client. We work closely with our clients to establish clear project timelines and milestones to ensure that we deliver high-quality software on time and within budget.",
      },
      {
        question: "Do you provide ongoing software maintenance and support?",
        answer:
          "Yes, we provide ongoing software maintenance and support to ensure that our client’s software continues to function properly over time. We offer various maintenance plans to suit our client’s needs and budgets.",
      },
      {
        question: "How much does custom software development cost?",
        answer:
          "The cost of custom software development varies depending on the complexity of the project, the technologies used, and other factors. We provide our clients with transparent pricing and work closely with them to establish clear project budgets.",
      },
    ],
  },

  {
    url: "/service/4",
    image: Image4,
    id: 4,
    title: "Digital Marketing",
    features: [
      "	Pay Per Click (PPC)",
      " Advertising",
      "	Content Marketing",
      "	Social Media Marketing",
      "	SEO",
    ],
    mainDescription:
      "Grow your business faster with Cloud Nepalaya's digital marketing solutions. Our team of experienced professionals is here to help you create powerful campaigns that can help you reach new heights in online success. Search engine optimization (SEO), social media marketing, pay-per-click (PPC) advertising, email marketing, and content marketing are just a few of the digital marketing services we provide. We can provide you with the most recent digital marketing strategies and efficient content development methods to help you stand out from the crowd. Whether they are individuals or businesses, we make sure that our clients receive what they require. Let us be your guide through the ever-changing digital world. Tap into our expertise today and supercharge your business presence online with digital marketing!",
    subDescriptions: [
      "Our business provides a variety of digital marketing services to support companies in increasing their online exposure, attracting visitors to their websites, and turning leads into consumers. Our team of professionals has the knowledge and expertise necessary to create and implement specialized digital marketing plans that are tailored to the particular requirements of each organization.",
    ],
    faqs: [
      {
        question: "What are the benefits of digital marketing? ",
        answer:
          " Digital marketing offers numerous benefits, including increased brand visibility, the ability to target specific audiences, cost-effectiveness, real-time data and insights, and the ability to measure and adjust campaigns in realtime.",
      },
      {
        question: "What are some common digital marketing channels? ",
        answer:
          "Some common digital marketing channels include social media platforms such as Facebook, Twitter, and LinkedIn, search engines like Google and Bing, email marketing, mobile apps, display advertising, and content marketing through blogs, videos, and other mediums.",
      },
      {
        question: "What is PPC advertising? ",
        answer:
          " PPC advertising stands for pay-per-click advertising, which is a type of digital advertising where advertisers pay each time a user clicks on one of their ads. This can include ads displayed on search engine results pages (SERPs) or on social media platforms like Facebook.",
      },
      {
        question:
          "How do you measure the success of a digital marketing campaign? ",
        answer:
          "The success of a digital marketing campaign can be measured in a variety of ways, depending on the goals of the campaign. Some common metrics include website traffic, engagement rates, conversion rates, click-through rates, and return on investment (ROI).",
      },
    ],
  },
  {
    url: "/service/5",
    image: Image4,
    id: 5,
    title: "Cloud Hosting",
    features: [
      "Public Cloud Hosting",
      "Private Cloud Hosting",
      "Hybrid Cloud Hosting",
      "Multi-Cloud Hosting",
      "Managed Cloud Hosting",
    ],

    mainDescription:
      "Our cloud hosting services offer a range of features, including automatic scaling, load balancing, and high availability, to ensure that businesses can easily manage their IT infrastructure and focus on their core operations. Cloud Nepalaya provides high-performance cloud hosting services at an affordable price. Our services are optimized for speed and reliability, so you can get your web projects off the ground quickly. Whether it's a small business or a large enterprise, our cloud hosting services can help businesses achieve their goals and stay competitive in today's rapidly evolving digital landscape.",
    subDescriptions: [
      "We offer a range of cloud hosting options, including shared hosting, dedicated hosting, and virtual private server (VPS) hosting, each of which is designed to meet the unique needs of different businesses. Our cloud hosting solutions are backed by industry-leading security and reliability features, ensuring that our client’s websites and applications are always available and secure.",
    ],
    faqs: [
      {
        question: "What is cloud hosting? ",
        answer:
          "Cloud hosting refers to the practice of hosting websites, applications, and other services on virtual servers that are accessed over the Internet. This allows for greater scalability, flexibility, and reliability compared to traditional hosting methods.",
      },
      {
        question: "What are the benefits of cloud hosting? ",
        answer:
          "Cloud hosting offers numerous benefits, including greater scalability, flexibility, and reliability compared to traditional hosting methods. It also allows for easier management of resources and can often be more cost-effective.",
      },
      {
        question: "What is scalability in cloud hosting? ",
        answer:
          "Scalability in cloud hosting refers to the ability to easily adjust the amount of computing resources allocated to a particular service in response to changes in demand. This allows for greater flexibility and cost savings compared to traditional hosting methods.",
      },
      {
        question: "What is load balancing in cloud hosting? ",
        answer:
          "Load balancing in cloud hosting involves distributing incoming traffic across multiple virtual servers in order to optimize performance and ensure that no single server becomes overloaded. This helps to ensure greater reliability and availability of hosted services.",
      },
      {
        question: "What are some best practices for cloud hosting ",
        answer:
          "Some best practices for cloud hosting include monitoring and optimizing resource usage, implementing security measures such as firewalls and encryption, regularly backing up data and applications, and staying up-to-date with industry trends and} changes.",
      },
    ],
  },
  {
    url: "/service/6",
    features: [
      "Technical Support",
      "Security Support",
      "Migration Support",
      "Consulting Services",
      "Managed Services",
    ],
    image: Image3,
    id: 6,
    title: "Cloud Support",
    mainDescription:
      "To help companies get the most out of their cloud investments, we provide a variety of support services, such as proactive monitoring, troubleshooting, and optimization. Our team of experts provides support and guidance to help businesses migrate their applications and data to the cloud and manage them effectively. With unlimited access and reliability, Cloud Nepalaya’s cloud service offers the confidence and security you need for your business operations. No more worrying about slow response times or server breakdowns, get 24/7 support, backed by our expertise and industry-leading technology. Your data is safe with us!",
    subDescriptions: [
      " In addition to our cloud hosting services, we also offer a range of cloud management and support services to help businesses manage their cloud environments and optimize their performance. Our team of cloud experts has the skills and experience needed to help businesses maximize the benefits of cloud hosting, delivering exceptional service and support every step of the way.",
    ],
    faqs: [
      {
        question: "What is cloud support? ",
        answer:
          "Cloud support refers to the services and resources provided to customers using cloud services to help them manage, troubleshoot, and optimize their cloud environment.",
      },
      {
        question: "What are the benefits of cloud support services? ",
        answer:
          "The benefits of cloud support services include access to technical expertise and resources, improved performance and reliability of cloud infrastructure, better security, and compliance, reduced downtime and faster issue resolution, and cost savings through optimized resource utilization.",
      },
      {
        question: "How to choose a cloud support provider? ",
        answer:
          "When choosing a cloud support provider, it is important to consider factors such as the provider's expertise and experience in managing cloud infrastructure, the availability and responsiveness of their support team, the range of services offered, the provider's security and compliance standards, and the cost and flexibility of their pricing models.",
      },
      {
        question: "What are some best practices for cloud support? ",
        answer:
          "Some best practices for cloud support include regularly monitoring and optimizing cloud infrastructure performance, implementing robust security and compliance measures, establishing clear service level agreements (SLAs) and response time objectives (RTOs), maintaining comprehensive documentation, and staying up-to-date with industry trends and changes.",
      },
    ],
  },
];

// BLOGS DATA
export const blogs = [
  {
    slug: {
      current: 1,
    },
    mainImage: BlogImage,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 2,
    },
    mainImage: BlogImage2,
    author: {
      name: "hello Nepal",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 3,
    },
    mainImage: BlogImage3,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 4,
    },
    mainImage: BlogImage2,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },

  {
    slug: {
      current: 5,
    },
    mainImage: BlogImage,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 6,
    },
    mainImage: BlogImage,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 7,
    },
    mainImage: BlogImage,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
  {
    slug: {
      current: 8,
    },
    mainImage: BlogImage,
    author: {
      name: "john Doe",
      image: AuthorImage,
      alt: "author image",
    },
    title:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    publishedAt: "October 21, 2022",
    createdAt: "October 21, 2022",
  },
];

// FAQ DATA
export const faqData = [
  {
    question: "What are the benefits of using cloud services?",
    answer:
      "Cloud services offer many benefits, including cost savings, scalability, flexibility, reliability, security, and access to advanced technology.",
  },
  {
    question: "What types of cloud services are available?",
    answer:
      "Cloud services can be divided into three main categories: Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS). Each category offers different levels of control and customization.",
  },
  {
    question: "How do I migrate my applications to the cloud?",
    answer:
      "Migrating applications to the cloud can be complex, and the process will depend on the specific application and cloud service provider. It's important to plan the migration carefully and to consider factors such as compatibility, security, and performance.",
  },
  {
    question: "How do I ensure the security of my data in the cloud?",
    answer:
      "The cost of using cloud services will depend on factors such as the type and amount of services you use, the pricing model of the provider, and any additional fees or charges. It's important to carefully review the pricing and terms of service before signing up for a cloud service.",
  },
  {
    question: "What is the cost of using cloud services?",
    answer:
      "The cost of using cloud services will depend on factors such as the type and amount of services you use, the pricing model of the provider, and any additional fees or charges. It's important to carefully review the pricing and terms of service before signing up for a cloud service.",
  },
];

// PRICING DATA

export const pricingData = [
  {
    discount: -10,
    title: "DataCenter Plan",
    image: "https://vpn1.netlify.app/static/media/server.34df6eba.png",
    price: 399.99,
    frequency: "Per Month",
    features: [
      "250GB Bandwidth",
      "08 Email Account",
      "Unlimited Database",
      "10GB Free Disk",
      "24/7 Support",
    ],
  },
  {
    discount: -10,
    title: "RESIDENTIAL PLAN",
    image: "https://vpn1.netlify.app/static/media/server.34df6eba.png",
    price: 599.99,
    frequency: "Per Month",
    features: [
      "250GB Bandwidth",
      "08 Email Account",
      "Unlimited Database",
      "10GB Free Disk",
      "24/7 Support",
    ],
  },
  {
    discount: -10,
    title: "RESELLER PLAN",
    image: "https://vpn1.netlify.app/static/media/server.34df6eba.png",
    price: 799.99,
    frequency: "Per Month",
    features: [
      "250GB Bandwidth",
      "08 Email Account",
      "Unlimited Database",
      "10GB Free Disk",
      "24/7 Support",
    ],
  },
];

// FEATURES DATA

export const featuresData = [
  {
    image: Image1,
    title: "	Providing Expansion or Consolidation",
    description:
      "Cloud Nepalaya allows businesses to expand or consolidate their operations with a seamless process that’s backed by best-in-class networking and support.",
  },
  {
    image: Image2,
    title: "	Best Networking & Support",
    description:
      "Our wide range of features comes with the highest level of support and networking, so you can rest assured that your business is in good hands.",
  },
  {
    image: Image3,
    title: "3.	Affordable Pricing Package",
    description:
      "We offer flexible pricing packages to suit any business, so you can take advantage of our services. Cloud Nepalaya offers a range of pricing options, including pay-as-you-go pricing, reserved instances, and spot instances.",
  },
];

// TESTIMONIALS DATA
export const TestimonialsData = [
  {
    ratings: 5,
    image: "https://vpn1.netlify.app/static/media/2.ed722c5a.jpg",
    name: "Jane",
    designation: "CEO of a software development company.",
    review:
      "Using Cloud Nepalaya has been a game-changer for our business. It has allowed us to quickly scale our infrastructure without having to worry about hardware limitations or maintenance.",
  },
  {
    ratings: 5,
    image: person3.src,
    name: "Tom",
    designation: "CTO of a financial services company",
    review:
      "We migrated to Cloud Nepalaya a few years ago and haven't looked back. The service has been reliable and the pricing is very competitive. The cloud support team has been very helpful in resolving any issues we have encountered.",
  },
  {
    ratings: 5,
    image: person4.src,
    name: "Mary",
    designation: "CTO of a startup ",
    review:
      "It has been a great solution for our startup. The pricing is very affordable, and the platform is easy to use. The customer support team has been very responsive whenever we have had any issues.",
  },
  {
    ratings: 5,
    image: person5.src,
    name: "Johan Smith",
    designation: "One of our clients",
    review:
      "It has been a great solution for our startup. The pricing is very affordable, and the platform is easy to use. The customer support team has been very responsive whenever we have had any issues.",
  },
  {
    ratings: 5,
    image: "https://vpn1.netlify.app/static/media/2.ed722c5a.jpg",
    name: "Johan Smith",
    designation: "One of our clients",
    review:
      "It has been a great solution for our startup. The pricing is very affordable, and the platform is easy to use. The customer support team has been very responsive whenever we have had any issues.",
  },
];
