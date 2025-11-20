import React from 'react'
import Title from './Title'
import { motion } from "motion/react"
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "d40232c6-9b24-45f2-8232-3e5598d2e982");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            toast.success("Form Submitted Successfully");
            event.target.reset();
        } else {
            toast.error("An Error Occured");
        }
    };

    return (
        <div
            id='contact' className='max-w-[1440px] mx-auto flex flex-col items-center max-sm:px-8 max-sm:pt-6 md:pt-15 xl:pt-25 sm:px-12 lg:px-24 xl:px-40 '>

            <Title heading="Contact" subheading="With Us" description="Ready to Make a Move? Let’s Build Your Future Together" />

            <form
                onSubmit={onSubmit}
                className='py-4 sm:pt-15 w-full flex flex-col items-center gap-6 sm:px-30'>
                <div className='flex gap-6 w-full  max-sm:flex-wrap'>
                    <div className='flex flex-col w-full gap-2'>
                        <label htmlFor="name">Name</label>
                        <input name="name" className='border border-gray-300 outline-0 px-4 py-3 rounded-md' id='name' type="text" placeholder='Enter your name' />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <label htmlFor="email">Email</label>
                        <input email="email" className='border border-gray-300 outline-0 px-4 py-3 rounded-md' id='email' type="email" placeholder='Enter your name' />
                    </div>
                </div>

                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className='border border-gray-300 outline-0 px-4 py-3 rounded-md' rows={8} id="message" placeholder='Message'></textarea>
                </div>

                <button type='submit' className='w-fit m-auto px-12 py-3 max-sm:px-8 max-sm:py-2 rounded-md text-white font-medium bg-[#3b82f6]' href="">Send Message</button>
            </form>

        </div>
    )
}

export default Contact