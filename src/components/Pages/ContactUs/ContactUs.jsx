import React from 'react';
import lottieData from './lottie.json'
import Lottie from "lottie-react";

const ContactUs = () => {
    const handleForm = event => {
        event.preventDefault()
        const form = event.target;
        form.reset()
    }
    return (
        <div>
            <section className="rounded-md py-8">
                <div className="max-w-7xl mx-auto border-4 border-white px-4 py-2">

                    <div className="md:flex items-center text-white">
                        <div className='w-full md:w-2/3' data-aos="fade-up">
                            <h3 className="text-xl font-bold mb-2">Send us a Message</h3>
                            <form onClick={handleForm} className="">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name</label>
                                    <input className="border border-gray-300 rounded-md py-2 px-3 w-full" type="text" id="name" name="name" required />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2" htmlFor="email">Your Email</label>
                                    <input className="border border-gray-300 rounded-md py-2 px-3 w-full" type="email" id="email" name="email" required />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                                    <textarea className="border border-gray-300 rounded-md py-2 px-3 w-full h-32" id="message" name="message" required></textarea>
                                </div>
                                <button className="btn bg-orange-500 text-white font-semibold py-2 px-4 rounded-md" type='submit'>Send Message</button>
                            </form>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <Lottie animationData={lottieData} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;