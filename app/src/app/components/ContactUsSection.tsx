"use client";

import React, { useState } from "react";

import CheckmarkAnimation from "./CheckMarkAnimation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./Dialog";

// Type assertion for gtag - only on client side
const gtag =
  typeof window !== "undefined"
    ? ((window as any).gtag as (
        command: string,
        eventName: string,
        parameters?: any
      ) => void)
    : null;

interface FormValues {
  firstname: string;
  lastname: string;
  email: string;
  company: string;
  message: string;
}

const ContactUsSection = () => {
  const [status, setStatus] = useState<string>("");
  const [values, setValues] = useState<FormValues>({
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    message: "",
  });
  const [empty, setEmpty] = useState(false);
  const [modal, setModal] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      values.firstname === "" ||
      values.lastname === "" ||
      values.email === "" ||
      values.company === "" ||
      values.message === ""
    ) {
      setEmpty(true);
      setStatus("Fill in all the details!");
      return;
    }

    const formData = new FormData(event.currentTarget);

    const response = await fetch("https://formspree.io/f/manjdknj", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok)
      return setStatus("Oops! There was a problem submitting your form.");

    if (gtag) {
      gtag("event", "conversion_event_submit_lead_form", {
        event_timeout: 2000,
      });
    }

    setModal(true);
    setStatus("");
    setEmpty(false);
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section
      id="contact-us"
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-16 text-center">
          <span className="mb-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 text-sm font-medium text-white">
            Get In Touch
          </span>
          <h2 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
            Ready to Transform
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
            Let&apos;s discuss how our technology solutions can help you achieve
            your business goals and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="mb-6 text-2xl font-bold text-white">
              Send us a message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Dialog open={modal} onOpenChange={setModal}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <div className="-mt-4 flex w-full flex-col items-center justify-start gap-2 text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                        <div className="min-h-20">
                          <CheckmarkAnimation />
                        </div>
                        <p>Form Submitted Successfully</p>
                      </div>
                    </DialogTitle>
                    <DialogDescription>
                      Thank you for reaching out. We will get back to you soon!
                    </DialogDescription>
                  </DialogHeader>
                  <DialogClose
                    className="mt-2 transform rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-lg font-semibold text-white shadow-lg outline-0 transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-cyan-600 hover:shadow-blue-500/25"
                    onClick={() => setModal(false)}
                  >
                    Confirm
                  </DialogClose>
                </DialogContent>
              </Dialog>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className={`w-full rounded-lg border bg-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      empty && values.firstname === ""
                        ? "!border-[#D32F2F]"
                        : "border-white/20"
                    }`}
                    placeholder="John"
                    value={values.firstname}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        firstname: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    className={`w-full rounded-lg border bg-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      empty && values.lastname === ""
                        ? "!border-[#D32F2F]"
                        : "border-white/20"
                    }`}
                    placeholder="Doe"
                    value={values.lastname}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        lastname: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className={`w-full rounded-lg border bg-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    empty && values.email === ""
                      ? "!border-[#D32F2F]"
                      : "border-white/20"
                  }`}
                  placeholder="john@company.com"
                  value={values.email}
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className={`w-full rounded-lg border bg-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    empty && values.company === ""
                      ? "!border-[#D32F2F]"
                      : "border-white/20"
                  }`}
                  placeholder="Your Company"
                  value={values.company}
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      company: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className={`w-full resize-none rounded-lg border bg-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    empty && values.firstname === ""
                      ? "!border-[#D32F2F]"
                      : "border-white/20"
                  }`}
                  placeholder="Tell us about your project and how we can help..."
                  value={values.message}
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full transform rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-cyan-600 hover:shadow-blue-500/25"
              >
                Send Message
              </button>
              {status && <p className="w-full text-[#D32F2F]">{status}</p>}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-2xl font-bold text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/20">
                    <span className="text-xl text-cyan-400">📧</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">Email Us</h4>
                    <p className="text-gray-300">
                      john.avranidis@lodexar.com
                      <br />
                      sofia.avranidi@lodexar.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
