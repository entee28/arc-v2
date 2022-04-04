import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ContactForm = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const encode = (data: object) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent((data as any)[key])
    )
    .join("&");
};

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | ARC";
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: ContactForm) => {
    // // Headers
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }

    // // Request body
    // const body = JSON.stringify(data);

    // axios.post('/api/contacts', body, config)
    //     .then(alert('Form submitted!'));

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    })
      .then(() => {
        alert("Your form is sent!");
        navigate("/");
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className="w-full h-auto bg-donate bg-no-repeat bg-center bg-cover overlay-dark px-5 py-12">
        <div className="max-w-screen-xl h-full mx-auto my-0 flex flex-col justify-center">
          <h2 className="text-4xl text-white font-bold">Contact</h2>
        </div>
      </div>

      <div className="w-full h-auto mt-20 mb-12 flex flex-col items-center">
        <h3 className="text-5xl mb-6 font-bold">Get in touch</h3>
        <p className="text-lg text-center">
          Have a message for us? We've got you.
        </p>
        <button
          className="border-2 px-6 py-2 border-black mt-8 hover:bg-black hover:text-white transition-colors
                    duration-300 ease-out uppercase rounded-md font-bold"
        >
          Email us
        </button>

        <form
          className="form-flex lg:w-[80%] w-[90%]"
          //@ts-ignore
          onSubmit={handleSubmit(onSubmit)}
          name="contact"
        >
          <input type="hidden" name="contact" value="contact" />
          <div className="input-row">
            <label htmlFor="name" className="input">
              <input
                type="text"
                className="input__field"
                placeholder=" "
                //@ts-ignore
                name="name"
                id="name"
                {...register("name", {
                  required: true,
                  pattern: /\p{L}+/u,
                })}
              />
              <span className="input__label">Name</span>
            </label>
            {errors?.name?.type === "required" && (
              <p className="error">This field is required</p>
            )}
            {errors?.name?.type === "pattern" && (
              <p className="error">Alphabetical characters only</p>
            )}
          </div>

          <div className="input-row">
            <label htmlFor="email" className="input">
              <input
                className="input__field"
                placeholder=" "
                //@ts-ignore
                name="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              <span className="input__label">Email</span>
            </label>
            {errors?.email?.type === "required" && (
              <p className="error">This field is required</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className="error">Invalid email</p>
            )}
          </div>

          <div className="input-row">
            <label htmlFor="subject" className="input">
              <input
                type="text"
                className="input__field"
                placeholder=" "
                //@ts-ignore
                name="subject"
                id="subject"
                {...register("subject")}
              />
              <span className="input__label">Subject</span>
            </label>
          </div>

          <div className="input-row">
            <label htmlFor="message" className="input">
              <textarea
                className="input__field"
                placeholder=" "
                //@ts-ignore
                name="subject"
                id="subject"
                {...register("message", {
                  required: true,
                })}
              />
              <span className="input__label">Message</span>
            </label>
            {errors?.message?.type === "required" && (
              <p className="error">This field is required</p>
            )}
          </div>

          <button
            className="border-2 p-3 border-black mt-8 hover:bg-black hover:text-white transition-colors
                    duration-300 ease-out uppercase rounded-md font-bold"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
