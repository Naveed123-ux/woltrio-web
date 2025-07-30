import Layouts from "@layouts/Layouts";
import React from "react";
import PageBanner from "@components/PageBanner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const JobForm = () => {
  const skillLevels = [
    { value: "1", label: "I do not have experience with this (1)" },
    { value: "2", label: "I know basic concepts only (2)" },
    { value: "3", label: "I have good knowledge to get the job done (3)" },
    { value: "4", label: "I have solid experience (4)" },
    { value: "5", label: "I can do anything anyone asks! (5)" },
  ];

  const submitFormData = async (formData) => {
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
    console.log("Submitting form data:", formData);
    try {
      const response = await axios.post(
        "https://actions-beta.vercel.app/api/submit-job-application",
        formData, // Send FormData directly, not wrapped in an object
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );

      // Axios automatically parses JSON, so we access response.data
      return response.data;
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle axios error response
      if (error.response) {
        throw new Error(error.response.data.message || "Server error");
      } else if (error.request) {
        throw new Error("Network error - please check your connection");
      } else {
        throw new Error("Something went wrong");
      }
    }
  };

  return (
    <Layouts>
      <div className="container my-5">
        <div className="row justify-content-center mt-2">
          <div className="col-12 col-lg-8">
            <div className="card-body p-4 p-md-5">
              <p className="text-muted fs-2 text-center fw-semibold mb-4 mt-5 text-set-center">
                Thank you for your interest in WOLTRIO
              </p>
              <p className="small text-set-center text-muted mb-4">
                Below are a few questions about yourself and your professional
                experience. Please answer them carefully.
              </p>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  experience: "",
                  cssLevel: "",
                  javascriptLevel: "",
                  nodeLevel: "",
                  reactLevel: "",
                  cv: null,
                }}
                validate={(values) => {
                  const errors = {};

                  // First Name validation
                  if (!values.firstName) {
                    errors.firstName = "First name is required";
                  } else if (values.firstName.length < 2) {
                    errors.firstName =
                      "First name must be at least 2 characters";
                  }

                  // Last Name validation
                  if (!values.lastName) {
                    errors.lastName = "Last name is required";
                  } else if (values.lastName.length < 2) {
                    errors.lastName = "Last name must be at least 2 characters";
                  }

                  // Email validation
                  if (!values.email) {
                    errors.email = "Email is required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }

                  // Experience validation
                  if (!values.experience) {
                    errors.experience = "Experience is required";
                  } else if (
                    !/^\d+\s*(years?|months?)?$/i.test(values.experience)
                  ) {
                    errors.experience =
                      "Please enter experience in format: '2 years' or '3 months'";
                  }

                  // Skill level validations
                  if (!values.cssLevel) {
                    errors.cssLevel = "Please select CSS skill level";
                  }
                  if (!values.javascriptLevel) {
                    errors.javascriptLevel =
                      "Please select JavaScript skill level";
                  }
                  if (!values.nodeLevel) {
                    errors.nodeLevel = "Please select Node skill level";
                  }
                  if (!values.reactLevel) {
                    errors.reactLevel = "Please select React skill level";
                  }

                  // CV validation
                  if (!values.cv) {
                    errors.cv = "CV upload is required";
                  } else if (
                    ![
                      "application/pdf",
                      "application/msword",
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    ].includes(values.cv.type)
                  ) {
                    errors.cv = "Please upload a PDF, DOC, or DOCX file";
                  } else if (values.cv.size > 5 * 1024 * 1024) {
                    errors.cv = "File size must be less than 5MB";
                  }

                  return errors;
                }}
                onSubmit={async (
                  values,
                  { setSubmitting, resetForm, setStatus }
                ) => {
                  try {
                    setStatus(null);
                    console.log("Form values:", values);

                    // Create FormData for file upload
                    const formData = new FormData();
                    formData.append("firstName", values.firstName);
                    formData.append("lastName", values.lastName);
                    formData.append("email", values.email);
                    formData.append("experience", values.experience);
                    formData.append("cssLevel", values.cssLevel);
                    formData.append("javascriptLevel", values.javascriptLevel);
                    formData.append("nodeLevel", values.nodeLevel);
                    formData.append("reactLevel", values.reactLevel);
                    formData.append("cv", values.cv);

                    // Debug: Log FormData contents
                    console.log("FormData contents:");
                    for (let pair of formData.entries()) {
                      console.log(pair[0] + ": " + pair[1]);
                    }

                    const result = await submitFormData(formData);
                    console.log("Submission result:", result);

                    setStatus({
                      type: "success",
                      message:
                        result.message || "Application submitted successfully!",
                    });
                    resetForm();
                  } catch (error) {
                    console.error("Submission error:", error);
                    setStatus({
                      type: "error",
                      message:
                        error.message ||
                        "Failed to submit application. Please try again.",
                    });
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ setFieldValue, isSubmitting, values, touched, status }) => (
                  <Form className="border border-2 p-5 rounded-3 mt-5">
                    {status && (
                      <div
                        className={`alert ${
                          status.type === "success"
                            ? "alert-success"
                            : "alert-danger"
                        } mb-4`}
                      >
                        {status.message}
                      </div>
                    )}

                    <div className="row mb-4">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label htmlFor="firstName" className="form-label">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <Field
                          type="text"
                          className="form-control job-form-input"
                          id="firstName"
                          name="firstName"
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-danger small"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">
                          Last Name <span className="text-danger">*</span>
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-danger small"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <Field
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="experience" className="form-label">
                        Relevant Experience to Job Opening{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="experience"
                        name="experience"
                        placeholder="Ex: 2 years, 3 months"
                      />
                      <ErrorMessage
                        name="experience"
                        component="div"
                        className="text-danger small"
                      />
                    </div>

                    <div className="mb-4">
                      <h5 className="mb-3">Self Assessment</h5>
                      <p className="text-muted small">
                        Please rate yourself on a scale of 1 to 5 in the
                        skills/tools below:
                      </p>

                      <div className="mb-4">
                        <label className="form-label mb-3 form-label-bold">
                          CSS <span className="text-danger">*</span>
                        </label>
                        {skillLevels.map((level) => (
                          <div
                            className="form-check form-check-1"
                            key={`css-${level.value}`}
                          >
                            <Field
                              className="form-check-2"
                              type="radio"
                              name="cssLevel"
                              id={`css-${level.value}`}
                              value={level.value}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`css-${level.value}`}
                            >
                              {level.label}
                            </label>
                          </div>
                        ))}
                        <ErrorMessage
                          name="cssLevel"
                          component="div"
                          className="text-danger small"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label form-label-bold">
                          JavaScript <span className="text-danger">*</span>
                        </label>
                        {skillLevels.map((level) => (
                          <div
                            className="form-check form-check-1"
                            key={`js-${level.value}`}
                          >
                            <Field
                              className="form-check-2"
                              type="radio"
                              name="javascriptLevel"
                              id={`js-${level.value}`}
                              value={level.value}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`js-${level.value}`}
                            >
                              {level.label}
                            </label>
                          </div>
                        ))}
                        <ErrorMessage
                          name="javascriptLevel"
                          component="div"
                          className="text-danger small"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label form-label-bold">
                          NODE <span className="text-danger">*</span>
                        </label>
                        {skillLevels.map((level) => (
                          <div
                            className="form-check form-check-1"
                            key={`node-${level.value}`}
                          >
                            <Field
                              className="form-check-2"
                              type="radio"
                              name="nodeLevel"
                              id={`node-${level.value}`}
                              value={level.value}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`node-${level.value}`}
                            >
                              {level.label}
                            </label>
                          </div>
                        ))}
                        <ErrorMessage
                          name="nodeLevel"
                          component="div"
                          className="text-danger small"
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label form-label-bold">
                          REACT <span className="text-danger">*</span>
                        </label>
                        {skillLevels.map((level) => (
                          <div
                            className="form-check form-check-1"
                            key={`react-${level.value}`}
                          >
                            <Field
                              className="form-check-2"
                              type="radio"
                              name="reactLevel"
                              id={`react-${level.value}`}
                              value={level.value}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`react-${level.value}`}
                            >
                              {level.label}
                            </label>
                          </div>
                        ))}
                        <ErrorMessage
                          name="reactLevel"
                          component="div"
                          className="text-danger small"
                        />
                      </div>

                      <div className="custom-upload-wrapper">
                        <label htmlFor="cv" className="upload-title">
                          Upload CV <span className="required">*</span>
                        </label>

                        <div className="upload-box">
                          <input
                            type="file"
                            id="cv"
                            name="cv"
                            accept=".pdf,.doc,.docx"
                            className="upload-input"
                            onChange={(event) => {
                              const file = event.currentTarget.files[0];
                              console.log("Selected File:", file);
                              setFieldValue("cv", file || null);
                            }}
                          />

                          <label htmlFor="cv" className="upload-btn">
                            Select File
                          </label>

                          <span className="file-name">
                            {values.cv ? values.cv.name : "No file selected"}
                          </span>
                        </div>

                        <ErrorMessage
                          name="cv"
                          component="div"
                          className="upload-error"
                        />

                        <p className="upload-note">
                          Accepted: .pdf, .doc, .docx | Max: 5MB
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="button-designing-openings-details"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default JobForm;
