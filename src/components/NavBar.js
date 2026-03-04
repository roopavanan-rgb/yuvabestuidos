import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiSend } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

const MotionLink = motion(Link);

const NavBar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [captchaDone, setCaptchaDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const navLinks = ["/", "/about", "/work", "/career", "/contact", "/blogs"];

  useEffect(() => {
    if (isContactFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isContactFormOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaDone(true);
    setCaptchaToken(token);
  };
  const submitForm = async (e) => {
    e.preventDefault();

    if (!captchaDone) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          captchaToken,
        }),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);
      setTimeout(() => {
        setIsContactFormOpen(false);
        setSuccess(false);
        setCaptchaDone(false);
      }, 2500);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 w-full px-6 sm:px-12 md:px-16 lg:px-32 py-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white bg-opacity-50 shadow-lg backdrop-blur-md"
            : "bg-white bg-opacity-50"
        }`}
      >
        <div className="flex justify-between items-center">
          <MotionLink href="/" passHref>
            <Image
              src="/images/profile/logo.svg"
              alt="Logo"
              width={100}
              height={120}
              className="w-[225px] h-auto"
              priority={true}
            />
          </MotionLink>

          {/* Desktop Navigation (Now only visible on lg and above) */}
          <motion.nav
            className="hidden lg:flex space-x-4 bg-gray-200 bg-opacity-20 backdrop-blur-lg px-6 py-2 rounded-lg mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {navLinks.map((path, index) => {
              const isActive = router.pathname === path;
              return (
                <MotionLink
                  key={index}
                  href={path}
                  className={`relative flex items-center px-3 py-1.5 rounded-md text-sm transition-colors duration-200 ${
                    isActive ? "bg-gray-800 text-white" : "hover:bg-gray-300"
                  }`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  {isActive && (
                    <motion.span
                      className="w-2 h-2 bg-white rounded-full mr-2"
                      layoutId="dot"
                    />
                  )}
                  <span className="font-medium">
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </span>
                </MotionLink>
              );
            })}
          </motion.nav>

          {/* Contact Button */}
          <button
            onClick={() => setIsContactFormOpen(true)}
            className="hidden lg:inline-flex px-4 py-2 border bg-[#FFCA2D] border-[#5829C7] text-[#5829C7] rounded-lg hover:bg-[#5829C7] hover:text-white transition"
          >
            Book a Discovery Call
          </button>

          {/* Mobile Menu Toggle (sm to lg visible) */}
          <button
            className="lg:hidden text-2xl text-[#5829C7] ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mr-2 mt-4 flex flex-col items-center space-y-4 bg-gray-100 bg-opacity-90 backdrop-blur-md p-4 rounded-lg absolute right-0 top-16 w-64"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {navLinks.map((path, index) => {
              const isActive = router.pathname === path;
              return (
                <MotionLink
                  key={index}
                  href={path}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-base transition-colors duration-200 ${
                    isActive
                      ? "bg-[#FFCA2D]/80 text-black"
                      : "hover:bg-violet-300"
                  }`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-medium">
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </span>
                </MotionLink>
              );
            })}
          </motion.div>
        )}
      </header>

      {/* Contact Form Popup with Animation */}
      {isContactFormOpen && (
        <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setIsContactFormOpen(false)}
            >
              <AiOutlineClose size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Section with Illustration */}
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl font-medium text-[#371B34]">
                  Let&apos;s Connect
                </h1>
                <p className="text-2xl font-semibold font-secondary text-[#5829C7] mt-2">
                  We&apos;d love to hear from you!
                </p>
                <p className="text-lg text-[#757575] font-secondary font-semibold mt-2">
                  Got big goals? We’re here to help you hit them! Drop us a
                  message, and let’s work together to take your business to the
                  next level.
                </p>
                <Image
                  src="/images/profile/form.gif"
                  alt="Contact Illustration"
                  width={500}
                  height={500}
                  className="mb-4"
                />
              </div>

              {/* Right Section with Form */}
              <form
                className="space-y-4 p-8 w-full rounded-lg border-2 border-violet-200 rounded-bl-lg rounded-br-lg rounded-tl-lg bg-white shadow-xl opacity-l-75"
                onSubmit={submitForm}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Carter"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    required
                  ></textarea>
                </div>

                <ReCAPTCHA
                  sitekey="6Ldk_XUsAAAAAOEKKzOGmR5DoPYd0TxK2qwDb3tm"
                  onChange={handleCaptchaChange}
                />

                {loading && (
                  <p className="text-blue-600 text-sm text-center">
                    Sending your message...
                  </p>
                )}

                {/* Conditional Submit Button */}
                <div>
                  {captchaDone ? (
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full flex justify-between items-center border-2 border-violet-600 font-semibold py-3 rounded-lg transition
  ${
    loading
      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
      : "bg-transparent text-violet-800 hover:bg-violet-200"
  }`}
                    >
                      <span className="ml-4">
                        {loading ? "Sending..." : "Send"}
                      </span>

                      {loading ? (
                        <svg
                          className="animate-spin mr-4 h-5 w-5 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                      ) : (
                        <FiSend className="mr-4" />
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="w-full bg-gray-300 text-gray-600 py-3 rounded-lg cursor-not-allowed"
                      onClick={() => alert("Please complete the reCAPTCHA.")}
                    >
                      Send
                    </button>
                  )}
                </div>

                {/* Thank You Message */}
                {success && (
                  <p className="text-green-600 text-lg mt-4 text-center font-semibold">
                    Message sent successfully. We'll contact you soon!
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
