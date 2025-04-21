const jobTypes = [
    { id: 1, name: "Full Time", value: "full-time", results: 10 },
    { id: 2, name: "Part Time", value: "part-time", results: 5 },
    { id: 3, name: "Remote", value: "remote", results: 8 },
    { id: 4, name: "Internship", value: "internship", results: 4 },
  ];
  const jobCategories = [
    { id: 1, name: "Design", value: "design", results: 12 },
    { id: 2, name: "Marketing", value: "marketing", results: 8 },
    { id: 3, name: "Technology", value: "technology", results: 20 },
    { id: 4, name: "Finance", value: "finance", results: 5 },
  ];
  
  const jobLevels = [
    { id: 1, name: "Entry Level", value: "entry-level", results: 15 },
    { id: 2, name: "Mid Level", value: "mid-level", results: 10 },
    { id: 3, name: "Senior Level", value: "senior-level", results: 7 },
  ];
  
  const salaryRanges = [
    { id: 1, name: "10k-30k", value: "10k-30k", results: 6 },
    { id: 2, name: "30k-50k", value: "30k-50k", results: 10 },
    { id: 3, name: "50k-100k", value: "50k-100k", results: 8 },
    { id: 4, name: "100k-above", value: "100k-above", results: 3 },
  ];

  const jobPosts = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions Ltd.",
      location: "Karachi, Sindh",
      tags: [
        { label: "Full-Time", color: "success" },
        { label: "Technology", color: "warning" },
        { label: "Development", color: "indigo" }
      ],
      icon: {
        name: "FaReact",
        color: "blue-700",
        size: "text-6xl"
      },
      applyButton: {
        label: "Apply",
        color: "text-white",
        background: "bgLinearDark",
        width: "150px"
      }
    },
    {
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Lahore, Punjab",
      tags: [
        { label: "Part-Time", color: "yellow" },
        { label: "Design", color: "purple" },
        { label: "Creativity", color: "pink" }
      ],
      icon: {
        name: "FaPaintBrush",
        color: "red-500",
        size: "text-6xl"
      },
      applyButton: {
        label: "Apply",
        color: "text-white",
        background: "bgLinearDark",
        width: "150px"
      }
    },
    {
      title: "Backend Engineer",
      company: "CodeCraft Pvt Ltd.",
      location: "Islamabad, Federal Capital",
      tags: [
        { label: "Full-Time", color: "success" },
        { label: "Engineering", color: "teal" },
        { label: "Technology", color: "warning" }
      ],
      icon: {
        name: "FaNodeJs",
        color: "green-700",
        size: "text-6xl"
      },
      applyButton: {
        label: "Apply",
        color: "text-white",
        background: "bgLinearDark",
        width: "150px"
      }
    },
    {
      title: "Data Analyst",
      company: "Insight Analytics",
      location: "Rawalpindi, Punjab",
      tags: [
        { label: "Contract", color: "orange" },
        { label: "Data", color: "blue" },
        { label: "Analysis", color: "purple" }
      ],
      icon: {
        name: "FaChartLine",
        color: "blue-500",
        size: "text-6xl"
      },
      applyButton: {
        label: "Apply",
        color: "text-white",
        background: "bgLinearDark",
        width: "150px"
      }
    },
    {
      title: "DevOps Engineer",
      company: "CloudWorks",
      location: "Peshawar, Khyber Pakhtunkhwa",
      tags: [
        { label: "Full-Time", color: "success" },
        { label: "Cloud", color: "gray" },
        { label: "Automation", color: "indigo" }
      ],
      icon: {
        name: "FaCloud",
        color: "blue-800",
        size: "text-6xl"
      },
      applyButton: {
        label: "Apply",
        color: "text-white",
        background: "bgLinearDark",
        width: "150px"
      }
    }
  ];
  
  export {jobCategories,jobLevels,jobTypes,salaryRanges,jobPosts}