import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { volkhov } from "../fonts";

export default function Rentals() {
  return (
    <div
      id="contact"
      className="bg-[#14213D] flex flex-col items-center px-[13px] py-8 md:py-[40px] 2xl:py-[76px] 2xl:px-[318px] relatve"
    >
      <h1
        className={`text-[30px] lg:text-[50px] text-white ${volkhov.className} font-bold lg:leading-[65.5px] mb-[20px] lg:mb-[62px] text-center`}
      >
        Get in Touch
      </h1>

      <ContactForm />
    </div>
  );
}

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-[#14213D]">
      {/* Left Section: Contact Details */}
      <div className="text-white space-y-6 p-6 md:grid md:grid-cols-2 gap-5 lg:block 2xl:w-[30%]">
        <div className="flex items-center gap-3">
          <div className="h-[35px] w-[35px] flex items-center justify-center rounded-full bg-[#FCBC11]">
            <FaMapMarkerAlt className="text-white-400" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Location</h3>
            <p className="text-sm">Abuakwa-Kumasi, near Baptist University</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-[35px] w-[35px] flex  items-center justify-center rounded-full bg-[#FCBC11]">
            <FaPhoneAlt className="text-white-400" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-sm"> +233543839253/+233242280826</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-[35px] w-[35px] flex items-center justify-center rounded-full bg-[#FCBC11]">
            <FaEnvelope className="text-white-400" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-sm">info@ecc.com</p>
          </div>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="bg-white rounded-xl p-8 shadow-lg  lg:max-w-lg">
        <h2 className="text-center text-xl ${poppins.className} font-bold text-[#14213D] mb-[41px]">
          Send a Message
        </h2>

        <form
          action="https://formspree.io/f/myzkrbky"
          method="POST"
          className="space-y-4"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="lg:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="lg:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <textarea
            name="message"
            placeholder="How Can We Help You"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-[147px]"
            required
          ></textarea>

          {/* Hidden field for spam filtering */}
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <button
            type="submit"
            className="w-full bg-[#14213D] text-white py-3 rounded-[36px] capitalize font-semibold text-lg hover:bg-[#0f1a2b] transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
