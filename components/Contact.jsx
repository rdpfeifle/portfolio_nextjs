import { useState, useEffect } from "react";

export const Contact = () => {
  // state variable to track the submission status
  const [submissionStatus, setSubmissionStatus] = useState(null);
  // state variable to track the form values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    /* 
    - Store the form data that will be collected.
    - Convert the collection of form elements into an array, then iterate through the array.
    - If the field does not have a name attribute, the function immediately returns and moves to the next field.
    - Otherwise, take the name of the field, use it as a property in the 'formData' object
    and set the value of that property to be the value the user entered in the input field.
    */

    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    try {
      // send the form data to the server
      await fetch("api/mail", {
        method: "post",
        body: JSON.stringify(formData),
      });
      // update the submission status on success
      setSubmissionStatus("success");
      // clear the form values
      setFormValues({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      // update the submission status on error
      setSubmissionStatus("error");
    }
  }

  /* 
  The use effect will run when the "submissionStatus" change
  - If the form submission was successful, a 4 seconds timeout is set
  - Then, the setSubmissionStatus will hide the submission status msg after the 4 seconds is over
  */

  useEffect(() => {
    let timer;

    if (submissionStatus) {
      timer = setTimeout(() => {
        setSubmissionStatus(null);
      }, 4000);
    }
    // cleanup function
    return () => clearTimeout(timer);
  }, [submissionStatus]);

  /* Function for the X button, called when the user clicks "X" to close the submission status message */
  function handleClose() {
    setSubmissionStatus(null);
  }

  return (
    <section id="contact" className="container max-md:py-6">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 md:pr-12">
          <h2 className="pb-10 underlineEffect">Let&apos;s have a chat</h2>
          <p className="mb-4">
            Are you interested in{" "}
            <span className="text-indigo-600">
              discussing potential opportunities
            </span>
            ? Whether you&apos;re looking for a good candidate to fill an open
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
          {/* Form goes here */}
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formValues.name}
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formValues.email}
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                name="subject"
                value={formValues.subject}
                placeholder="Subject"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-8">
              <textarea
                id="message"
                name="message"
                value={formValues.message}
                placeholder="Enter your message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                onChange={handleChange}
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
          {submissionStatus && (
            <div
              className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-4 rounded-lg font-bold text-white ${
                submissionStatus === "success" ? "bg-green-400" : "bg-red-400"
              }`}
            >
              {submissionStatus === "success" ? (
                <p className="mr-2">Form submitted successfully!</p>
              ) : (
                <p>Failed to submit the form. Please try again.</p>
              )}
              <button
                className="bg-transparent hover:bg-transparent absolute top-2 right-2 text-white"
                onClick={handleClose}
              >
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
