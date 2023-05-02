export const Contact = () => {
  return (
    <div className="container py-16">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 md:pr-12">
          <h2 className="pb-10 underlineEffect">Let's have a chat</h2>
          <p className="mb-4">
            Are you interested in{" "}
            <span className="text-indigo-600">
              discussing potential opportunities
            </span>
            ? Whether you're looking for a good candidate to fill an open
            position, have a project in mind, or seeking a collaborative
            partnership, I would love to hear from you.{" "}
            <span className="font-semibold">
              Please feel free to reach out to me using the contact form or
              through my{" "}
              <a
                href="https://www.linkedin.com/in/raqueldpfeifle"
                className="text-indigo-500 hover:underline"
              >
                LinkedIn profile
              </a>
            </span>
            .
          </p>
          <p className="text-lg mb-8">
            You can also reach me by email at{" "}
            <a
              href="mailto:raquelpfeifle@gmail.com"
              className="text-indigo-500 hover:underline"
            >
              raquelpfeifle@gmail.com
            </a>
            .
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                id="subject"
                name="subject"
                placeholder="Subject"
                type="text"
                required
              />
            </div>
            <div className="mb-8">
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white semi-bold py-2 px-6 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
