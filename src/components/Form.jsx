import React, {FormEvent, useRef} from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Button from "./Button.tsx";

const Contactform = () => {

    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_1numhhk', 'template_8yqjtfc', form.current, {
            publicKey: 'unzAHWAw8je65UAc6',
        })
      .then(
        () => {
            e.target.reset();
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
        );
    };


    return (

        <form ref={form} className='flex flex-col gap-10' onSubmit={sendEmail}>
            <div className='flex flex-row gap-10'>
                <div className='flex flex-col gap-3'>
                    <label className='flex flex-row'>First Name <div className='text-red'>*</div></label>
                    <input className='outline-none' type="text" name="first_name" placeholder="Your first name" />
                    <hr className='border-neutral-300'/>
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='flex flex-row'>Last Name <div className='text-red'>*</div></label>
                    <input className='outline-none' type="text" name="last_name" placeholder="Your last name"/>
                    <hr className='border-neutral-300'/>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                    <label className='flex flex-row'>Email <div className='text-red'>*</div></label>
                    <input className='outline-none' type="text" name="user_email" placeholder="Your email"/>
                    <hr className='border-neutral-300'/>
            </div>
            <div className='flex flex-col gap-3'>
                <label>Message</label>
                <textarea className='outline-none' rows="4" name="message" placeholder='Enter a message'/>
                <hr className='border-neutral-300'/>
            </div>
            <Button className = 'w-fit' label='Submit' type="submit"/>
        </form>
    );
}

export default Contactform;
