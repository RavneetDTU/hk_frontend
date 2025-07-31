"use client";
import React from "react";
import Image from "next/image";
import DoctorImg1 from "@/assets/doctor-images/DoctorImg1.png";
import DoctorImg2 from "@/assets/doctor-images/DoctorImg2.png";
import DoctorImg3 from "@/assets/doctor-images/DoctorImg3.png";
import DoctorImg4 from "@/assets/doctor-images/DoctorImg4.png";     
import DoctorImg5 from "@/assets/doctor-images/DoctorImg5.png";
import DoctorImg6 from "@/assets/doctor-images/DoctorImg6.png";

const DoctorTeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "MUSKAN CHHABRA",
      title: "EX - MAX HOSPITAL",
      image: DoctorImg1,
    },
    {
      id: 2,
      name: "DR. ARPIT GUPTA",
      title: "MBBS, MD, FNIC MEDANTA",
      image: DoctorImg6, 
    },
    {
      id: 3,
      name: "PRATIKSHA YADAV",
      title: "EX - SAFDARJUNG HOSPITAL",
      image: DoctorImg5,
    },
    {
      id: 4,
      name: "JASPAL SINGH",
      title: "EX - CMC LUDHIANA",
      image: DoctorImg2,
    },
    {
      id: 5,
      name: "SHABANA NAZ",
      title: "BAPTIST HOSPITAL, BANGALORE",
      image: DoctorImg4,
    },
    {
      id: 6,
      name: "DR. SAKSHAM MITTAL",
      title: "EX - MAX HOSPITAL",
      image: DoctorImg3,
    }
  ];

  return (
    <section className="py-10 bg-[#F9F4F1] w-full">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Our Dedicated Team</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Passionate individuals working together<br />
            to bring innovation to life
          </p>
          <div className="w-24 h-1 bg-gray-300 mx-auto my-6"></div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center">
              {/* Team Member Image */}
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Team Member Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorTeamSection;