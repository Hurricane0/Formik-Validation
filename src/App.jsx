import React from "react";
import "./styles.css";
import Error from "./components/Error";
import { Formik } from "formik";
import * as Yup from "yup";
import cn from "classnames";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(1, "Must have a character")
        .max(255, "Must be shorter than 255")
        .required("Name is required"),
    email: Yup.string()
        .email("Must be a valid email adress")
        .max(255, "Must be shorter than 255")
        .required("Email is required")
});

export default function App() {
    return (
        <div className="container">
            <div>
                <Formik
                    initialValues={{ name: "", email: "" }}
                    validationSchema={validationSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur
                    }) => (
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={cn("form-control", {
                                        "is-invalid":
                                            touched.name && errors.name,
                                        "is-valid": touched.name
                                    })}
                                />
                                <Error
                                    touched={touched.name}
                                    error={errors.name}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={cn("form-control", {
                                        "is-invalid":
                                            touched.email && errors.email,
                                        "is-valid":
                                            touched.email && !errors.email
                                    })}
                                />
                                <Error
                                    touched={touched.email}
                                    error={errors.email}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
