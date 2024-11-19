import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full text-center bg-blue-800 text-white py-16">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 text-sm md:text-lg max-w-2xl mx-auto">
          We are here to help. Reach out to us through any of the methods below or fill
          out the contact form, and we will get back to you soon.
        </p>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl w-full mx-auto px-6 py-12 md:py-20">
        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div>
                <h2 className="font-semibold text-lg">Email Us</h2>
                <p className="text-sm text-gray-600">support@carbaazar.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <h2 className="font-semibold text-lg">Call Us</h2>
                <p className="text-sm text-gray-600">+1 234 567 890</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <h2 className="font-semibold text-lg">Office Address</h2>
                <p className="text-sm text-gray-600">123 Main Street, Karachi, Pakistan</p>
              </div>
            </div>
            <div className="w-full mt-4">
              <img
                src="https://tvkstudio.com/assets/images/caregif.gif"
                alt="Care GIF"
                width={800}
                height={450}
                className="rounded-lg border-4"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 shadow-lg rounded-lg border-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <form>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg text-sm bg-gray-50"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-lg text-sm bg-gray-50"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border rounded-lg text-sm bg-gray-50"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg text-sm bg-gray-50"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-3 mt-4 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
