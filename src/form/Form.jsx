import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../form/FormStyle.css";

// Esquema de validación con Yup
const SignupSchema = Yup.object().shape({
  FullName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  phone: Yup.string()
    .min(7, "It must have 7 digits")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  zip: Yup.string()
    .min(5, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(5, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
});

export default function App() {
  const handleSubmit = async (values) => {
    console.log("Submitted values:", values);
    try {
      const response = await fetch("https://172.31.16.1:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          FullName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          zip: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="customForm formik">
            <Field
              id="FullName"
              name="FullName"
              type="text"
              placeholder="Name*"
            />
            {errors.FullName && touched.FullName && (
              <div style={{ color: "red" }}>{errors.FullName}</div>
            )}
            <div className="formikl">
              <Field
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone*"
              />
              {errors.phone && touched.phone && (
                <div style={{ color: "red" }}>{errors.phone}</div>
              )}
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email*"
              />
              {errors.email && touched.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>
            <Field
              id="address"
              name="address"
              type="text"
              placeholder="Address*"
            />
            {errors.address && touched.address && (
              <div style={{ color: "red" }}>{errors.address}</div>
            )}
            <Field 
            id="city" 
            name="city" 
            type="text" 
            placeholder="City*" 
            />
            {errors.city && touched.city && (
              <div style={{ color: "red" }}>{errors.city}</div>
            )}
            <Field 
            id="zip" 
            name="zip" 
            type="text" 
            placeholder="Zip*" 
            />
            {errors.zip && touched.zip && (
              <div style={{ color: "red" }}>{errors.zip}</div>
            )}
            <Field 
            id="message" 
            name="message" 
            type="text" 
            placeholder="Please describe what you are looking for*" 
            />
            {errors.message && touched.message && (
              <div style={{ color: "red" }}>{errors.message}</div>
            )}

            <button className="formButton" type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
