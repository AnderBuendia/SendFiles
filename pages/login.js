import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import authContext from '../context/auth/authContext';
import Alert from '../components/Alert';

const Login = () => {

    /* Get authContext */
    const AuthContext = useContext(authContext);
    const { message, authenticated, login } = AuthContext;

    const router = useRouter();

    useEffect(() => {
        if (authenticated) {
            router.push('/');
        }
    }, [authenticated]);

    /* Formik and Yup validation form */
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Format is not valid "example@example.com"')
                    .required('Email is required'),
            password: Yup.string().required('Password is required')
        }),
        onSubmit: values => {
            login(values);
        }
    });

    return ( 
        <Layout>
            <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
                <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">
                    Login Your Account
                </h2>
                { message && <Alert /> }
                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-lg">
                        <form 
                            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="mb-4">
                                <label 
                                    className="block text-black text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input 
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 
                                    text-gray-700 leading-tight focus:outline-none focus:shadow-online"
                                    id="email"
                                    placeholder="User email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                {formik.touched.email && formik.errors.email ? (
                                    <div className="my-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-3">
                                        <p>{formik.errors.email}</p>
                                    </div>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label 
                                    className="block text-black text-sm font-bold mb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input 
                                    type="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 
                                    text-gray-700 leading-tight focus:outline-none focus:shadow-online"
                                    id="password"
                                    placeholder="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                {formik.touched.password && formik.errors.password ? (
                                    <div className="my-2 bg-red-200 border-l-4 border-red-500 text-red-700 p-3">
                                        <p>{formik.errors.password}</p>
                                    </div>
                                ) : null}
                            </div>

                            <input 
                                type="submit"
                                className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
                                value="Login"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </Layout>  
    );
}
 
export default Login;