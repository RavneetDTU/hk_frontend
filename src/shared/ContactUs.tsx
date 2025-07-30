import Image from "next/image";
import React from "react";
import ContactUsImage from "@/assets/home-page/contact-us-img.jpg";

const ContactUs = () => {
  const formFields = [
    {
      id: "firstName",
      label: "First Name",
      placeholder: "Jane Smith",
      type: "text",
      colSpan: "col-span-1",
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "test@gmail.com",
      type: "email",
      colSpan: "col-span-1",
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "+123 456 789",
      type: "tel",
      colSpan: "col-span-1",
    },
    {
      id: "country",
      label: "Country",
      placeholder: "United States",
      type: "text",
      colSpan: "col-span-1",
    },
    {
      id: "gender",
      label: "Gender",
      placeholder: "Enter Your gender",
      type: "text",
      colSpan: "col-span-2",
    },
    {
      id: "message",
      label: "Message",
      placeholder: "Enter your message",
      type: "textarea",
      colSpan: "col-span-2",
    },
  ];

  return (
    <section className="min-h-screen w-full py-8 bg-gray-50 bag-[#F9F4F1] flex items-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <div className="flex justify-center space-x-6 text-sm font-medium text-gray-500">
            <a href="#" className="text-indigo-700 hover:text-indigo-500">
              Contact Us
            </a>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Contact us to discuss your needs and ideas
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:flex-row h-[80vh] overflow-hidden">
          {/* Image Container */}
          <div className="w-full md:w-1/2 h-full relative">
            <Image
              src={ContactUsImage}
              alt="ContactUsBanner"
              fill
              className="object-cover rounded-lg"
              quality={90}
            />
          </div>

          {/* Form Container */}
          <div className="w-full md:w-1/2 bg-white p-6 md:p-8 overflow-y-auto rounded-lg  border border-gray-300 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h3>
            <div className="grid grid-cols-1 gap-6">
               
              {formFields.map((field) => (
                <div key={field.id} className={`${field.colSpan}`}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;