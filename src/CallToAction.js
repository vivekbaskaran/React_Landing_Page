import React from 'react'

export const CallToAction = () => {
  return (
    <section class="call-to-action text-white text-center" id="signup">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <h2 class="mb-4">Ready to get started? Sign up now!</h2>
                        {/*-- Signup form-*/
                        /*-- * * * * * * * * * * * * * * */
                        /*-- * * SB Forms Contact Form * *-*/
                        /*-- * * * * * * * * * * * * * * *-*/
                        /*-- This form is pre-integrated with SB Forms.-*/
                        /*-- To make this form functional, sign up at-*/
                        /*-- https://startbootstrap.com/solution/contact-forms-*/
                        /*-- to get an API token!-*/}
                        <form class="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                          {/*-- Email address input-*/}
                            <div class="row">
                                <div class="col">
                                    <input class="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                                    <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                                    <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                                </div>
                                <div class="col-auto"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                            </div>
                          {/*-- Submit success message-*/
                            /*---*/
                            /*-- This is what your users will see when the form-*/
                            /*-- has successfully submitted-*/}
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    <p>To activate this form, sign up at</p>
                                    <a class="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                          {/*-- Submit error message-*/
                            /*---*/
                            /*-- This is what your users will see when there is-*/
                            /*-- an error submitting the form-*/}
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}
