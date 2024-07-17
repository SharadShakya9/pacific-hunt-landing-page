export const categories = [];
for (let i = 1; i <= 40; i++) {
  categories.push({
    id: i,
    name: "Graphics Design",
    openpositions: 418,
    icon: (
      <svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="group-hover:fill-blue-1"
          width="68"
          height="68"
          rx="8"
          fill="#DEF3FF"
        />
        <path
          className="group-hover:fill-white"
          opacity="0.2"
          d="M42.9996 33.0007L40.2022 25.5411C40.1406 25.3768 40.0368 25.2316 39.9013 25.1201C39.7659 25.0086 39.6034 24.9347 39.4303 24.9059L21.9996 22.0007L24.9047 39.4315C24.9336 39.6045 25.0075 39.767 25.119 39.9025C25.2305 40.038 25.3757 40.1418 25.54 40.2034L32.9996 43.0007L42.9996 33.0007ZM30 32.5C30 32.0056 30.1466 31.5222 30.4213 31.1111C30.696 30.7 31.0865 30.3795 31.5433 30.1903C32.0001 30.0011 32.5028 29.9516 32.9877 30.048C33.4727 30.1445 33.9181 30.3826 34.2678 30.7322C34.6174 31.0819 34.8555 31.5273 34.952 32.0123C35.0484 32.4972 34.9989 32.9999 34.8097 33.4567C34.6205 33.9135 34.3 34.304 33.8889 34.5787C33.4778 34.8534 32.9945 35 32.5 35C32.1717 35 31.8466 34.9353 31.5433 34.8097C31.24 34.6841 30.9644 34.4999 30.7322 34.2678C30.5001 34.0356 30.3159 33.76 30.1903 33.4567C30.0647 33.1534 30 32.8283 30 32.5Z"
          fill="#01A3E0"
        />
        <path
          className="group-hover:stroke-white"
          d="M30 32.5C30 33.8807 31.1193 35 32.5 35C33.8807 35 35 33.8807 35 32.5C35 31.1193 33.8807 30 32.5 30C31.1193 30 30 31.1193 30 32.5Z"
          stroke="#01A3E0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="group-hover:stroke-white"
          d="M21.9996 22.0007L30.7322 30.7322"
          stroke="#01A3E0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="group-hover:stroke-white"
          d="M21.9996 22.0007L24.9048 39.4314C24.9336 39.6045 25.0075 39.767 25.119 39.9025C25.2305 40.038 25.3757 40.1418 25.54 40.2034L32.9996 43.0007L42.9996 33.0007L40.2023 25.5411C40.1407 25.3768 40.0369 25.2316 39.9014 25.1201C39.7659 25.0086 39.6034 24.9347 39.4303 24.9059L21.9996 22.0007Z"
          stroke="#01A3E0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="group-hover:stroke-white"
          d="M32.9995 43.0007L36.2924 46.2936C36.3853 46.3865 36.4955 46.4601 36.6169 46.5104C36.7382 46.5607 36.8682 46.5865 36.9995 46.5865C37.1309 46.5865 37.2609 46.5607 37.3822 46.5104C37.5035 46.4601 37.6138 46.3865 37.7066 46.2936L46.2924 37.7078C46.48 37.5203 46.5853 37.2659 46.5853 37.0007C46.5853 36.7355 46.48 36.4812 46.2924 36.2936L42.9995 33.0007"
          stroke="#01A3E0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  });
}

export const openings = [];
for (let i = 1; i <= 20; i++) {
  openings.push({
    key: i,
    name: "Deep Learning Engineer",
    logo: '/tesla.png',
    address: "Sydney, Australia",
    expirydays: 25,
    type: ["Remote", "Entry Level", "Full Time"],
    salary: "50K -80K AUD (Yearly)",
    company: "Tesla Inc.",
  });
}

export const companies = []
for (let i = 1; i <= 10; i++) {
  companies.push({
    key: i,
    name: "Google",
    logo: '/google.png',
    address: 'Perth Australia',
    jobsavailable: 50,
    description: ["Information Technology", "Fintech"],
  })
}

export const testimonials = []
for (let i = 1; i <= 13; i++) {
  testimonials.push({
    key: i,
    comment : "This job portal has been instrumental in advancing my career. The  interface is intuitive, making it easy to navigate through job listings  and application processes. I've received numerous interview requests and job offers through this portal. I highly recommend it to anyone seeking new  career opportunities.",
    clientname: "Amanda Bell",
    clienttitle: "Product Designer",
    profilepic: "/pfp.png"
  })
}