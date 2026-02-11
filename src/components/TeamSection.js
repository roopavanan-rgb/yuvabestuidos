import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Priya",
    role: "Head Of Digital Marketing",
    category: "Digital Marketing",
    imagePath: "/images/team/priya.webp",
  },
  {
    name: "Vicky",
    role: "UI/UX & Graphic Designer",
    category: "Digital Marketing",
    imagePath: "/images/team/vicky.webp",
  },
  {
    name: "Sagar",
    role: "UI/UX Designer & Web Developer",
    category: "Digital Marketing",
    imagePath: "/images/team/sagar.webp",
  },
  {
    name: "Logasundari",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/logasundari.webp",
  },
  {
    name: "Anjali",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/anjali.webp",
  },
  {
    name: "Hemapriya",
    role: "Copywriting and Branding",
    category: "Digital Marketing",
    imagePath: "/images/team/hema.webp",
  },
  {
    name: "Vanchi",
    role: "Video Editor & Motion Designer",
    category: "Digital Marketing",
    imagePath: "/images/team/vanchi.webp",
  },
  {
    name: "Roopan",
    role: "Jr. Front end Developer",
    category: "Digital Marketing",
    imagePath: "/images/team/roopan.webp",
  },
  {
    name: "Balaji",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/balaji.webp",
  },
  {
    name: "Jayant",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/jayant.webp",
  },
  {
    name: "Abiraj",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/abiraj.webp",
  },
  {
    name: "Bharathi",
    role: "Digital Marketing Associate",
    category: "Digital Marketing",
    imagePath: "/images/team/bharathi.webp",
  },
  {
    name: "Karthik",
    role: "Wordpress Developer",
    category: "Digital Marketing",
    imagePath: "/images/team/karthik.webp",
  },
  {
    name: "Yogesh",
    role: "UI/UX Designer",
    category: "Digital Marketing",
    imagePath: "/images/team/yogesh.webp",
  },
  {
    name: "Anupama",
    role: "AI/ML Mentor",
    category: "AI/ML",
    imagePath: "/images/team/anupama.webp",
  },

  {
    name: "Keerthana",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/keerthana.webp",
  },
  {
    name: "Dhanush",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/dhanush.webp",
  },
  {
    name: "Thamarai Kannan",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/thamaraikannan.webp",
  },

  {
    name: "Arun Kumar",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/arunkumar.webp",
  },
  {
    name: "Shri Jayaram",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/shri.webp",
  },
  {
    name: "Abinesh Kumar",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/abinesh.webp",
  },
  {
    name: "Hari Prasath",
    role: "AI/ML Developer",
    category: "AI/ML",
    imagePath: "/images/team/hariprasath.webp",
  },
  {
    name: "Bhuvana",
    role: "Market Research Lead",
    category: "Market Research",
    imagePath: "/images/team/bhuvana.webp",
  },
  {
    name: "Vasantharaj",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/vasanth.webp",
  },
  {
    name: "Abilash",
    role: "Market Research Lead",
    category: "Market Research",
    imagePath: "/images/team/abilash.webp",
  },
  {
    name: "Hariharan",
    role: "Market Research Lead",
    category: "Market Research",
    imagePath: "/images/team/hari.webp",
  },
  {
    name: "Shimalini",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/shimalini.webp",
  },
  {
    name: "Sharat Kumar",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/sharat.webp",
  },
  {
    name: "Poovendiran",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/poovendiran.webp",
  },
  {
    name: "Praveen",
    role: "Senior Market Researcher",
    category: "Market Research",
    imagePath: "/images/team/praveen.webp",
  },
  {
    name: "Manivel",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/manivel.webp",
  },
  {
    name: "Anishvathi",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/anishvathi.webp",
  },
  {
    name: "Vinodhini",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/vinodhini.webp",
  },
  {
    name: "Arthi",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/arthi.webp",
  },
  {
    name: "Sindhu",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/sindhu.webp",
  },
  {
    name: "Sarguru",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/guru.webp",
  },
  {
    name: "Rajeswari",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/raji.webp",
  },
  {
    name: "Velmurugan",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/velu.webp",
  },
  {
    name: "Valantina",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/valantina.webp",
  },
  {
    name: "Niraimathy",
    role: "Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/niraimathy.webp",
  },
  {
    name: "Selvi",
    role: "Financial Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/selvi.webp",
  },
  {
    name: "Vignesh",
    role: "Financial Market Research Analyst",
    category: "Market Research",
    imagePath: "/images/team/vignesh.webp",
  },
  {
    name: "Sundhranandhan",
    role: "Backend Developer",
    category: "Market Research",
    imagePath: "/images/team/sundhar.webp",
  },
  {
    name: "Kalaiarasi",
    role: "Data Engineer & Backend Developer",
    category: "Market Research",
    imagePath: "/images/team/kalai.webp",
  },
  {
    name: "Arjun",
    role: "Backend Developer",
    category: "Market Research",
    imagePath: "/images/team/arjun.webp",
  },
  {
    name: "Nagachandiran",
    role: "Data Engineer",
    category: "Market Research",
    imagePath: "/images/team/nagachandiran.webp",
  },
  {
    name: "Hariharan",
    role: "Data Engineer",
    category: "Market Research",
    imagePath: "/images/team/hariharan.webp",
  },
];

export default function TeamSection() {
  const digitalMarketingTeam = teamMembers.filter(
    (member) => member.category === "Digital Marketing"
  );
  const aiMlTeam = teamMembers.filter((member) => member.category === "AI/ML");
  const marketResearchTeam = teamMembers.filter(
    (member) => member.category === "Market Research"
  );

  // Slider settings for Digital Marketing
  const digitalSettings = {
    infinite: true,
    speed: 2000,
    cssEase: "ease-in-out",
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 464,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  const aiMlSettings = {
    ...digitalSettings,
    rtl: true,
  };

  const marketResearchSettings = {
    ...digitalSettings,
    rtl: false,
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-5xl font-medium text-gray-800">
          Our Incredible Team
        </h2>
        <p className="text-xl md:text-2xl font-secondary font-semibold text-[#3500F0] mt-2">
          Meet the creative minds, strategists, engineers, designers, and
          researchers who power Yuvabe Studios.
        </p>
      </div>

      {/* Digital Marketing Team Carousel */}
      <div className="relative w-full mb-12">
        <div className="absolute left-[-10px] top-[50%] w-[280px] h-[320px] transform -translate-y-1/2 bg-purple-300/50 border-violet-200 rounded-xl shadow-lg p-6 text-white font-medium text-4xl flex items-center justify-center z-20 backdrop-blur-lg border border-purple-200/50 hidden lg:flex">
          Digital <br />
          Marketing
        </div>

        <Slider {...digitalSettings} className="overflow-hidden">
          {digitalMarketingTeam.map((member, index) => (
            <div key={index} className="px-2 py-6">
              <div
                className="bg-white rounded-lg shadow-lg text-left flex flex-col justify-between"
                style={{ width: "208px", height: "312px" }}
              >
                <div className="rounded-t-lg overflow-hidden h-[70%]">
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    width={208}
                    height={218}
                    priority
                    className="object-cover h-full w-full"
                    quality={100}
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* AI/ML Team Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute right-[-10px] top-[50%] w-[280px] h-[320px] transform -translate-y-1/2 bg-[#F04E2733]/20 rounded-xl shadow-lg p-6 text-white font-medium text-4xl  items-center justify-center z-20 backdrop-blur-lg border border-orange-200/50 hidden lg:flex">
          AI/ML
        </div>

        <Slider {...aiMlSettings} className="overflow-hidden">
          {aiMlTeam.map((member, index) => (
            <div key={index} className="px-2 py-6">
              <div
                className="bg-white rounded-lg shadow-lg text-left flex flex-col justify-between"
                style={{ width: "208px", height: "312px" }}
              >
                <div className="rounded-t-lg overflow-hidden h-[70%]">
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    width={208}
                    height={218}
                    priority
                    className="object-cover h-full w-full"
                    quality={100}
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Market Research Team Carousel */}
      <div className="relative w-full mb-12 mt-12">
        <div className="absolute left-[-10px] top-[50%] w-[280px] h-[320px] transform -translate-y-1/2 bg-green-300/50 border-green-200 rounded-xl shadow-lg p-6 text-white font-medium text-4xl flex items-center justify-center z-20 backdrop-blur-lg border border-green-200/50 hidden lg:flex">
          Market <br />
          Research
        </div>

        <Slider {...marketResearchSettings} className="overflow-hidden">
          {marketResearchTeam.map((member, index) => (
            <div key={index} className="px-2 py-6">
              <div
                className="bg-white rounded-lg shadow-lg text-left flex flex-col justify-between"
                style={{ width: "208px", height: "312px" }}
              >
                <div className="rounded-t-lg overflow-hidden h-[70%]">
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    width={208}
                    height={218}
                    priority
                    className="object-cover h-full w-full"
                    quality={100}
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
