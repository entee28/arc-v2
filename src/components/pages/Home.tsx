import { Link } from "react-router-dom";
import AvailablePets from "../AvailablePets";
import { useEffect, useRef } from "react";
import { gsap, Expo } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  const el = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    document.title = "ARC Pet Rescue";

    tl.current = gsap
      .timeline()
      .from(q(".hero"), {
        duration: 0.8,
        opacity: 1,
        scale: 1.2,
      })
      .to(q(".hero-container"), {
        duration: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      })
      .to(q(".about-container"), {
        duration: 1.5,
        opacity: 1,
      });

    gsap.from(q(".info-content"), {
      duration: 4,
      opacity: 0,
      ease: Expo.easeOut,
      stagger: 0.5,
      scrollTrigger: {
        trigger: q(".info-content"),
        start: "top center",
      },
    });
  });

  return (
    <div ref={el}>
      <div className="hero w-full h-hero bg-hero bg-no-repeat bg-center bg-cover opacity-80 px-5">
        <div className="hero-container max-w-screen-xl h-full mx-auto my-0 flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-4xl font-bold md:text-5xl text-center text-white mb-6 tracking-wide">
            Welcome to ARC Pet Rescue, HCMC
          </h2>
          <p className="text-white text-xl text-center md:text-2xl mb-8">
            We rescue cats and dogs in need. And we need your help!
          </p>
          <Link to="/adoption">
            <button className="rounded-full transition-colors duration-200 bg-red-600 hover:bg-red-400 w-fit py-3 px-6 text-white">
              Adopt One
            </button>
          </Link>
        </div>
      </div>

      <div className="about w-full h-auto px-5 py-12">
        <div className="about-container max-w-screen-xl mx-auto opacity-0">
          <h2 className="text-4xl text-gray-400 font-bold">Who Are We?</h2>
          <div className="w-8 h-[3px] bg-gray-600 mt-1 mb-6 ml-1"></div>
          <p className="text-lg">
            We are a small group of people working hard to provide support in
            Saigon. Our mission is to initiate and facilitate care, advocacy and
            awareness for animals in need.
          </p>
          <p className="text-lg mt-2">
            We regularly conduct classes for neo-natal kitten care as this is a
            constant need within the community. If you'd like to attend one
            please get in touch for future dates. Also we need people with
            skills that can help us in a multitude of areas. Marketing, website
            design, taking care of our cat house, fundraising events and more.
            No matter what small thing you can do it will all add up to more
            animals getting a real chance at life. Reach out! Join our ARC Army.
          </p>
          <Link to="/contact">
            <button className="mt-5 rounded-full transition-colors duration-300 border-red-400 border-2 text-black hover:text-white ease-in-out hover:bg-red-400 w-40 py-3 px-6">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full h-auto bg-donate bg-no-repeat bg-center bg-cover overlay-dark px-5 py-12">
        <div className="max-w-screen-xl h-full mx-auto my-0 flex flex-col justify-center">
          <h2 className="text-4xl text-white mb-5 font-bold">
            We Need Your Help!
          </h2>
          <p className="text-white text-lg mb-6">
            Our funds are currently depleted. All charities are struggling. The
            pandemic has effected fundraising and the economic climate but there
            are so many animals that still need our help. Please if you can
            donate or volunteer with us! We need all the help we can get!
          </p>
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.paypal.com%2Fdonate%2F%3Fhosted_button_id%3DT4PYT4GF3ZTYW%26fbclid%3DIwAR1G6w77nhVID_YI545-Re20pJv2F1vKgV7CIdkbpp_CgLLa1R2MTdR6c-4&h=AT1R2VWKbJ0V4MjYWe9W2S_DJFgFDdO4ZYs-tntPYtv9fjKX8BGBAREMb9qhGuCR4D-4MAAjHRT-9fem3BBCv1chZadkooSn70VndS-h0aTeK3SQ7nVCutSTRQbFu1Y98gAS"
            target="_blank"
            rel="noreferrer"
          >
            <button className="rounded-full transition-colors duration-200 bg-red-600 hover:bg-red-400 w-fit py-3 px-6 text-white">
              Donate
            </button>
          </a>
        </div>
      </div>

      <div className="available-pet">
        <AvailablePets />
      </div>

      <div className="info w-full h-auto py-12 px-5">
        <div className="info-container max-w-screen-xl w-full mx-auto flex flex-col items-center">
          <h2 className="text-3xl text-center font-bold">
            Interested in supporting us?
          </h2>
          <div className="info-body flex flex-col px-8 lg:p-0 lg:flex-row justify-center w-full mt-10">
            <div className="info-content text-left lg:text-center grow-[1] basis-0 py-4">
              <h3 className="text-2xl text-blue-600 my-3">Volunteer Form</h3>
              <p className="mt-3 mb-6 leading-6 text-md lg:text-sm">
                Do you want to join our team? Do you have a passion for working
                with animals? Want to help us on certain field? Found out more
                about our volunteer program and join us.&nbsp;
                <a
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-700 transition-colors duration-300 ease-in-out inline-block lg:hidden"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSebduzjN2n1dLneiLlouveBYuFazNU6QvTH1Zf8yFvhUEEEUA/formResponse"
                  target="_blank"
                >
                  Learn More
                </a>
              </p>
              <a
                rel="noreferrer"
                className="hidden lg:inline-block"
                href="https://docs.google.com/forms/d/e/1FAIpQLSebduzjN2n1dLneiLlouveBYuFazNU6QvTH1Zf8yFvhUEEEUA/formResponse"
                target="_blank"
              >
                <button className="rounded-full border-2 border-blue-400 text-blue-600 py-2 px-8 hover:bg-blue-400 hover:text-white transition-colors duration-200">
                  Learn More
                </button>
              </a>
            </div>
            <div className="info-content text-left lg:text-center grow-[1] basis-0 py-4">
              <h3 className="text-2xl text-blue-600 my-3">Foster Form</h3>
              <p className="mt-3 mb-6 leading-6 text-md lg:text-sm">
                Do you want to help us by giving temporary shelter to our
                animals? Do you love animals but don't stay for long in Vietnam?
                Then join our foster program.&nbsp;
                <a
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-700 transition-colors duration-300 ease-in-out inline-block lg:hidden"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSebduzjN2n1dLneiLlouveBYuFazNU6QvTH1Zf8yFvhUEEEUA/formResponse"
                  target="_blank"
                >
                  Learn More
                </a>
              </p>
              <a
                rel="noreferrer"
                className="hidden lg:inline-block"
                href="https://docs.google.com/forms/d/e/1FAIpQLSebduzjN2n1dLneiLlouveBYuFazNU6QvTH1Zf8yFvhUEEEUA/formResponse"
                target="_blank"
              >
                <button className="rounded-full border-2 border-blue-400 text-blue-600 py-2 px-8 hover:bg-blue-400 hover:text-white transition-colors duration-200">
                  Learn More
                </button>
              </a>
            </div>
            <div className="info-content text-left lg:text-center grow-[1] basis-0 py-4">
              <h3 className="text-2xl text-blue-600 my-3">Adoption Form</h3>
              <p className="mt-3 mb-6 leading-6 text-md lg:text-sm">
                Interested in giving a forever home to our animals?&nbsp;
                <a
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-700 transition-colors duration-300 ease-in-out inline-block lg:hidden"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeY2OYrPOrANjZbzRDzw3WNqylewD9ihabSqYMSHgenvFEF1w/formResponse"
                  target="_blank"
                >
                  Learn More
                </a>
              </p>
              <a
                rel="noreferrer"
                className="hidden lg:inline-block"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeY2OYrPOrANjZbzRDzw3WNqylewD9ihabSqYMSHgenvFEF1w/formResponse"
                target="_blank"
              >
                <button className="rounded-full border-2 border-blue-400 text-blue-600 py-2 px-8 hover:bg-blue-400 hover:text-white transition-colors duration-200">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
