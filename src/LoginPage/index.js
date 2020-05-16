import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { authenticationService } from '@/_services';

function LoginPage(props){
    if (authenticationService.currentUserValue) { 
        props.history.push('/');
    }
    return (
        <div>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string().required('Username is required'),
                    password: Yup.string().required('Password is required')
                })}
                onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
                    setStatus();
                    authenticationService.login(username, password)
                        .then(
                            user => {
                                const { from } = props.location.state || { from: { pathname: "/" } };
                                props.history.push(from);
                            },
                            error => {
                                setSubmitting(false);
                                setStatus(error);
                            }
                        );
                }}
                render={({ errors, status, touched, isSubmitting }) => (
                    <div className="login-form">
                    <Form>
                        <div className="input-field">
                            <label htmlFor="username">Username</label>
                            <Field name="username" type="text" className={'' + (errors.username && touched.username ? ' is-invalid' : '')} />
                            <ErrorMessage name="username" component="div" className="" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="" />
                        </div>
                        {isSubmitting &&
                                <div className="spinner">
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                </div>
                            }
                        <div className="submit-button-wrapper">
                            <button type="submit" className="submit-buttom" disabled={isSubmitting}>Login</button>
                        </div>
                        {status &&
                            <div className=''>{status}</div>
                        }
                    </Form>
                    </div>
                )}
            />
        </div>
    )
}
// class LoginPage extends React.Component {
//     constructor(props) {
//         super(props);
//         if (authenticationService.currentUserValue) { 
//             this.props.history.push('/');
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <Formik
//                     initialValues={{
//                         username: '',
//                         password: ''
//                     }}
//                     validationSchema={Yup.object().shape({
//                         username: Yup.string().required('Username is required'),
//                         password: Yup.string().required('Password is required')
//                     })}
//                     onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
//                         setStatus();
//                         authenticationService.login(username, password)
//                             .then(
//                                 user => {
//                                     const { from } = this.props.location.state || { from: { pathname: "/" } };
//                                     this.props.history.push(from);
//                                 },
//                                 error => {
//                                     setSubmitting(false);
//                                     setStatus(error);
//                                 }
//                             );
//                     }}
//                     render={({ errors, status, touched, isSubmitting }) => (
//                         <div className="login-form">
//                         <Form>
//                             <div className="input-field">
//                                 <label htmlFor="username">Username</label>
//                                 <Field name="username" type="text" className={'' + (errors.username && touched.username ? ' is-invalid' : '')} />
//                                 <ErrorMessage name="username" component="div" className="" />
//                             </div>
//                             <div className="input-field">
//                                 <label htmlFor="password">Password</label>
//                                 <Field name="password" type="password" className={'' + (errors.password && touched.password ? ' is-invalid' : '')} />
//                                 <ErrorMessage name="password" component="div" className="" />
//                             </div>
//                             {isSubmitting &&
//                                     <div className="spinner">
//                                         <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
//                                     </div>
//                                 }
//                             <div className="submit-button-wrapper">
//                                 <button type="submit" className="submit-buttom" disabled={isSubmitting}>Login</button>
//                             </div>
//                             {status &&
//                                 <div className=''>{status}</div>
//                             }
//                         </Form>
//                         </div>
//                     )}
//                 />
//             </div>
//         )
//     }
// }

export { LoginPage }; 