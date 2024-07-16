import React, { useState } from 'react';
import { Formik } from 'formik';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login'

function App() {
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [isMinLength, setIsMinLength] = useState(false);
  const [password, setPassword] = useState("");

  const validatePassword = (password) => {
    setHasUppercase(/(?=.*[A-Z])/.test(password));
    setHasSpecialChar(/(?=.*[!@#$%^&*()_+\-=])/.test(password));
    setIsMinLength(password.length >= 8 && password.length <= 15);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Formik */}
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Email is Required';
              } else if (!values.password) {
                errors.password = 'Password is Required';
              } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=])(?=.[a-z0-9]).{4,15}$/.test(values.password)) {
                errors.password = 'Invalid password.';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.email && touched.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      onChange={(e) => {
                        handleChange(e);
                        setPassword(e.target.value);
                        validatePassword(e.target.value);
                      }}
                      onBlur={handleBlur}
                      value={values.password}
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.password && touched.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                    {password && (


                    <div className="text-sm">
                      <div className="flex flex-col space-y-1">
                        <div className={`flex items-center ${hasUppercase ? 'text-green-500' : 'text-red-500'}`}>
                          <input type="checkbox" checked={hasUppercase} readOnly  />
                          <span className="ml-2">Contains an uppercase letter</span>
                        </div>
                        <div className={`flex items-center ${hasSpecialChar ? 'text-green-500' : 'text-red-500'}`}>
                          <input type="checkbox" checked={hasSpecialChar} readOnly />
                          <span className="ml-2">Contains a special character</span>
                        </div>
                        <div className={`flex items-center ${isMinLength ? 'text-green-500' : 'text-red-500'}`}>
                          <input type="checkbox" checked={isMinLength} readOnly />
                          <span className="ml-2">8-15 characters long</span>
                        </div>
                      </div>
                    </div>
                    )}
                    

                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
                <LoginSocialGoogle
                  client_id={"374337733599-tdsahjfinov1cpmi39rvh5d04mu7qqdq.apps.googleusercontent.com"}
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  redirect_uri='https://plenty-planets-beam-42-118-51-2.loca.lt/account/login'
                  access_type = "offline"
                  onResolve={({ provider, data }) => {
                    console.log(data);
                    console.log(provider);
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
                >
                  <GoogleLoginButton />
                </LoginSocialGoogle>
              </form>
            )}
          </Formik>

          
        </div>
      </div>
    </>
  );
}

export default App;
