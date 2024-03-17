const cardContent = [
  {
    id: 1,
    img: "https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg",
    heading: "ABC",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolore officia nemo fuga sapiente omnis.'
  },
  {
    id: 2,
    img: "https://example.com/image2.jpg",
    heading: "DEF",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolore officia nemo fuga sapiente omnis.'
  },
  {
    id: 3,
    img: "https://example.com/image3.jpg",
    heading: "GHI",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolore officia nemo fuga sapiente omnis.'
  },
  {
    id: 4,
    img: "https://example.com/image4.jpg",
    heading: "JKL",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dolore officia nemo fuga sapiente omnis.'
  }
];


 
  const jobData = [
    {
      id: 1,
      title: "Software Engineer",
      img: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Develop scalable web applications using modern technologies for optimal user experience.",
      companyName: "Barclays",
      rating: (Math.random() * (5 - 3) + 3).toFixed(2),
      views: Math.floor(Math.random() * 1000) + 1,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
      href: "https://example.com/software-engineer",
      content: "We are looking for a talented software engineer to join our team and help build innovative web applications.",
    },
    {
      id: 2,
      title: "Data Analyst",
      img: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Analyze large datasets to extract valuable insights and support data-driven decision-making.",
      companyName: "DataWorks",
      rating: (Math.random() * (5 - 3) + 3).toFixed(2),
      views: Math.floor(Math.random() * 1000) + 1,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
      href: "https://example.com/data-analyst",
      content: "Join our data analytics team and help us analyze complex datasets to drive business growth.",
    },
    {
      id: 3,
      title: "Graphic Designer",
      img: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Create visually appealing designs for digital and print media to enhance brand identity.",
      companyName: "DesignHub",
      rating: (Math.random() * (5 - 3) + 3).toFixed(2),
      views: Math.floor(Math.random() * 1000) + 1,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=3",
      href: "https://example.com/graphic-designer",
      content: "Are you a creative designer passionate about crafting beautiful visual experiences? Join our design team!",
    },
    {
      id: 4,
      title: "Marketing Specialist",
      img: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Plan and execute marketing campaigns to drive brand awareness and customer engagement.",
      companyName: "MarketBoost",
      rating: (Math.random() * (5 - 3) + 3).toFixed(2),
      views: Math.floor(Math.random() * 1000) + 1,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=4",
      href: "https://example.com/marketing-specialist",
      content: "Join our dynamic marketing team and play a key role in promoting our products and services.",
    },
    {
      id: 5,
      title: "Customer Support Representative",
      img: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Provide exceptional customer service through various channels to resolve inquiries and issues.",
      companyName: "HelpDesk Inc.",
      rating: (Math.random() * (5 - 3) + 3).toFixed(2),
      views: Math.floor(Math.random() * 1000) + 1,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=5",
      href: "https://example.com/customer-support-representative",
      content: "Join our customer support team and make a difference by helping our customers with their needs.",
    },
    {
      id: 6,
      title: "Financial Analyst",
      img: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Analyze financial data to support strategic decision-making and optimize business performance.",
      companyName: "FinanceWise",
      rating: (Math.random() * (5 - 3) + 3).toFixed(2),
      views: Math.floor(Math.random() * 1000) + 1,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=6",
      href: "https://example.com/financial-analyst",
      content: "Join our finance team and help drive financial success through data-driven analysis and insights.",
    },
    {
      id: 7,
      title: "Content Writer",
      img: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Produce high-quality content for websites and marketing materials to engage and inform audiences.",
      companyName: "ContentMasters",
      rating: (Math.random() * (5 - 3) + 3).toFixed(2),
      views: Math.floor(Math.random() * 1000) + 1,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=7",
      href: "https://example.com/content-writer",
      content: "Are you passionate about storytelling? Join our content team and create compelling narratives.",
    },
    {
      id: 8,
      title: "Product Manager",
      img: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Manage product development lifecycle from ideation to launch, ensuring alignment with business goals.",
      companyName: "ProductForge",
      rating: (Math.random() * (5 - 3) + 3).toFixed(2),
      views: Math.floor(Math.random() * 1000) + 1,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
      href: "https://example.com/product-manager",
      content: "Join our product team and lead the development of innovative products that solve real-world problems.",
    },
    {
      id: 9,
      title: "UX/UI Designer",
      img: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Design intuitive user interfaces and engaging user experiences to enhance product usability.",
      companyName: "UX Innovations",
      rating: (Math.random() * (5 - 3) + 3).toFixed(2),
      views: Math.floor(Math.random() * 1000) + 1,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=9",
      href: "https://example.com/ux-ui-designer",
      content: "Join our design team and shape the future of our digital products with user-centered design principles.",
    },
    {
      id: 10,
      title: "HR Manager",
      img: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Oversee all aspects of human resources management, including recruitment, training, and employee relations.",
      companyName: "HR Solutions Inc.",
      rating: (Math.random() * (5 - 3) + 3).toFixed(2),
      views: Math.floor(Math.random() * 1000) + 1,
      avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=10",
      href: "https://example.com/hr-manager",
      content: "Join our HR team and play a key role in building and maintaining a positive and productive work environment.",
    },
  
  
  // Add more job objects as needed
];

export { cardContent, jobData };
