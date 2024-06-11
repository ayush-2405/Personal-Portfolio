const logotext = "</>";
const meta = {
    title: "Ayush Singh",
    description: "I’m Ayush Singh, ",
};

const introdata = {
    title: "I'm Ayush Singh",
    animated: {
        first: "Developer",
        second: "Finance Enthusiast",
        third: "ML Enthusiast",
        fourth: "Data Analyst"
    },
    description: "Hi, I'm Ayush Singh, a pre-final year student pursuing a Bachelor's of Engineering in Electronics and Communication Engineering at BITS Pilani, Pilani Campus. I have a diverse set of interests that span across Finance, Trading, Machine Learning, and Web Development, which drives my passion for continuous learning and innovation.",
    // your_img_url: 'https://www.pngitem.com/pimgs/m/390-3900265_eagerprogrammer-logo-programming-code-vector-png-transparent-png.png',
};

const dataabout = {
    // title: "abit about my self",
    aboutme: "Hey, I'm Ayush Singh, a pre-final year Electronics and Communication Engineering student at BITS Pilani. My passion for Finance, Trading, Machine Learning, and Web Development fuels my drive for continuous learning and innovation. I've built a solid engineering foundation while delving into financial markets and advanced tech. My project experiences have sharpened my programming and data analysis skills. Beyond tech, I'm a bookworm who loves gaining new insights and a biking enthusiast who enjoys refreshing rides. I'm excited to bring my skills to real-world challenges, collaborate with like-minded folks, and make a meaningful impact. Let's connect and explore opportunities in Finance, Trading, Machine Learning, Web Development, and beyond!",
};
const worktimeline = [{
        jobtitle: "Product Analyst Intern",
        where: "Carscan",
        date: "2024",
    },
    // {
    //     jobtitle: "Designer of week",
    //     where: "Jamalya",
    //     date: "2019",
    // },
    // {
    //     jobtitle: "Designer of week",
    //     where: "ALquds",
    //     date: "2019",
    // },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Finance",
        value: 85,
    },
    {
        name: "Data Analysis",
        value: 80,
    },
    {
        name: "React.js",
        value: 60,
    },
    {
        name: "C++",
        value: 60,
    },
];

// const services = [{
//         title: "Web Development",
//         description: "Web app development in React.js with SCSS/Tailwind CSS.",
//     },
//     {
//         title: "Data Analytics, Insights and Visualiztions",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Content Designing",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
// ];

const dataportfolio = [{
        img: "https://wmo.int/sites/default/files/styles/featured_image_x1_768x512/public/2023-12/thumbnails_5.jpg?h=d1cb525d&itok=aZ4qUGTc",
        description: "A simple, visually appealing and responsive Weather Application using React.js and API calls",
        link: "https://weather-app-cyan-seven-17.vercel.app/",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8VL0Ujeyv1fcCL971hj994MZBOSFaFyUbg&s",
        description: "Developed an interactive Drum Kit using HTML, CSS, and JavaScript, enabling users to play drum sounds via clicks or keyboard keys.",
        link: "https://ayush-2405.github.io/DrumKit/",
    },
    {
        img: "https://assets-global.website-files.com/606a802fcaa89bc357508cad/61701b4e166c837543d8f0ce_2_How%20To%20a%20Create%20Personal%20Portfolio%20Website.png",
        description: "Created a Personal Portfolio website using HTML, CSS, and JavaScript to showcase projects and skills. Designed a responsive and visually appealing layout, emphasizing user experience and accessibility.",
        link: "https://ayush-2405.github.io/MyPortfolio/",
    },
    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    {
        img: "https://help.apple.com/assets/656FB92B5073D2DECA0862BB/656FB92CF0F7AD2F770901D2/en_US/c34b1b0e87e731a83161d9bb21345afc.png",
        description: "Developed a Notes App using React.js and CSS, featuring real-time note creation and deletion with search feature.",
        link: "https://note-it-sepia.vercel.app/",
    },

    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    {
        img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_Inventory_Management.jpg",
        description: "This project is a simple Inventory Management System built using Python and Tkinter. It allows users to manage inventory items, including adding, updating, and deleting items, as well as exporting the inventory data to a CSV file.",
        link: "https://github.com/ayush-2405/Inventory-Management-Application",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIoBff7KSpwSsYdrz9hvjHHam39oJl8hfBg&s",
        description: "Conducted Exploratory Data Analysis (EDA) on Amazon India sales data using NumPy and Pandas for data manipulation. Utilized Seaborn and Matplotlib for data visualization.",
        link: "https://github.com/ayush-2405/Amazon-Sales-EDA",
    },
    {
        img: "https://www.investopedia.com/thmb/ASStR21rMu9-9_nj1x07H83zbUs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-stock-market-data-on-digital-display-1058454392-c48e2501742f4c21ad57c25d6a087bd0.jpg",
        description: "Built a Stock Market Prediction model using Python and PyTorch, with data manipulation and visualization handled by NumPy, Pandas and Matplotlib.",
        link: "https://github.com/ayush-2405/Stock-Market-Prediction",
    },
    {
        img: "https://miro.medium.com/v2/resize:fit:1081/1*1wVvuJUuCTDMg--uT8g3ig.png",
        description: "Developed a Sudoku Solver using Python and PyTorch for deep learning, with NumPy for computations and OpenCV for image processing. The application detects, extracts, and solves Sudoku puzzles from images",
        link: "https://github.com/ayush-2405/Sudoku_Solver",
    },
];

const contactConfig = {
    YOUR_EMAIL: "23ayushsingh05@gmail.com",
    YOUR_FONE: "6306808649",
    YOUR_SERVICE_ID: "service_odg7lct",
    YOUR_TEMPLATE_ID: "template_d6jxj2j",
    YOUR_USER_ID: "9Eb3pY6ButD1WtvLI",
};

const socialprofils = {
    github: "https://github.com/ayush-2405",
    facebook: "https://www.facebook.com/AyUsH.2053?mibextid=ZbWKwL",
    linkedin: "https://www.linkedin.com/in/ayush-singh-558174216/",
    twitter: "https://x.com/_IamAyushSingh?t=emW95xVq3JrOUQMBawnqcA&s=09",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};