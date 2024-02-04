import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { sendContactForm } from "@/lib/api";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Please input email"),
  name: Yup.string().required("Please input name"),
  message: Yup.string().max(1000).required("Please input message"),
});

const initialValues = {
  email: "",
  name: "",
  message: "",
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="grid min-h-screen w-full lg:grid-cols-2 grid-cols-1 gap-16 py-16 px-4 md:px-8 2xl:px-16 place-content-center"
    >
      <div>
        <h1 className="bg-gradient-to-r from-green-400 to-lime-800 bg-clip-text md:text-6xl text-5xl font-extrabold uppercase tracking-widest text-transparent">
          Contact Me
        </h1>
        <h2 className="py-4 text-2xl font-bold">Get In Touch</h2>
        <p className="flex items-center gap-4 py-2 font-semibold">
          Email:
          <span
            className="cursor-pointer font-medium underline"
            onClick={() =>
              (window.location.href = "mailto:rohitbkanish8@gmail.com")
            }
          >
            rohitbkanish8@gmail.com
          </span>
        </p>
        <p className="flex items-center gap-4 py-2 font-semibold">
          Phone:
          <span className="font-medium">+91 8168779519</span>
        </p>
        <p className="pt-8 text-lg">
          Thank you for your interest in getting in touch with me. Whether you
          have inquiries, project proposals, or simply wish to establish a
          connection, I am eager to lend an ear. Please do not hesitate to
          complete the contact form with your information and message, and I
          will promptly respond to your inquiry. Your feedback holds great value
          to me, and I am excited about the prospect of collaborating with you
          and providing support tailored to your requirements.
        </p>
      </div>
      <div className="">
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log("hello", values);
            try {
              const res = await sendContactForm(values)
              console.log(res, 'res')
              if (res.status === 200) {
                toast.success("Email Sent Successfully")
              }
              else {
                toast.error('Something went wrong!')
              }
            } catch (err) {
              console.log(err, 'sdgj')
              toast.error('Something went wrong!')
            }
            resetForm();
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form
              onSubmit={handleSubmit}
              className="lg:mt-16 mt-4 flex flex-col gap-8 lg:p-8 p-0"
            >
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Name:</label>
                <Field
                  name="name"
                  placeholder="Enter Name"
                  className="xl:w-3/5 lg:w-5/6 md:w-4/5 sm:w-5/6 w-full rounded-md border border-slate-500 bg-transparent px-4 py-2 outline-none"
                />
                {errors.name && touched.name && (
                  <span className="px-4 text-red-500">{errors.name}</span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Email:</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  className="xl:w-3/5 lg:w-5/6 md:w-4/5 sm:w-5/6 w-full rounded-md border border-slate-500 bg-transparent px-4 py-2 outline-none"
                />
                {errors.email && touched.email && (
                  <span className="px-4 text-red-500">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold">Message:</label>
                <Field
                  name="message"
                  as="textarea"
                  rows={4}
                  placeholder="Enter Message"
                  className="xl:w-3/5 lg:w-5/6 md:w-4/5 sm:w-5/6 w-full rounded-md border border-slate-500 bg-transparent px-4 py-2 outline-none"
                />
                {errors.message && touched.message && (
                  <span className="px-4 text-red-500">{errors.message}</span>
                )}
              </div>
              <button className="duration-300 ease-in hover:scale-105 w-fit rounded-md bg-gradient-to-r from-green-400 to-lime-800 px-4 py-2 font-medium text-white">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
