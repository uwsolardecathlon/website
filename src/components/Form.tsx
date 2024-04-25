import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Button from './Button.tsx';

const Form = () => {
  const form = useRef(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'all' });
  const sendEmail = () => {
    if (form && form.current) {
      emailjs
        .sendForm('service_1numhhk', 'template_8yqjtfc', form.current, {
          publicKey: 'unzAHWAw8je65UAc6',
        })
        .then(
          () => {
            reset();
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <form
      id='contact-form'
      ref={form}
      className='flex flex-col gap-10'
      onSubmit={handleSubmit(sendEmail)}
    >
      <div className='flex flex-row gap-10'>
        <div className='flex flex-col gap-3'>
          <label>
            First Name <span className='text-red'>*</span>
          </label>
          <input
            {...register('first_name', {
              required: 'First name is required',
            })}
            className='outline-none pb-3 pl-1 border-solid border-b border-b-neutral-300
            focus:border-b-primary-light focus:shadow-md shadow-primary-dark ease-in duration-200'
            type='text'
            name='first_name'
            placeholder='Your first name'
          />
          <p className='text-red text-sm'>
            {errors.first_name?.message as string}
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          <label>
            Last Name <span className='text-red'>*</span>
          </label>
          <input
            {...register('last_name', {
              required: 'Last name is required',
            })}
            className='outline-none pb-3 pl-1 border-solid border-b border-b-neutral-300
            focus:border-b-primary-light focus:shadow-md shadow-primary-dark ease-in duration-200'
            type='text'
            name='last_name'
            placeholder='Your last name'
          />
          <p className='text-red text-sm'>
            {errors.last_name?.message as string}
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <label>
          Email <span className='text-red'>*</span>
        </label>
        <input
          {...register('user_email', {
            required: 'Email is required',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Email must be valid',
            },
          })}
          className='outline-none pb-3 pl-1 border-solid border-b border-b-neutral-300
          focus:border-b-primary-light focus:shadow-md shadow-primary-dark ease-in duration-200'
          type='text'
          name='user_email'
          placeholder='Your email'
        />
        <p className='text-red text-sm'>
          {errors.user_email?.message as string}
        </p>
      </div>
      <div className='flex flex-col gap-3'>
        <label>Message</label>
        <textarea
          className='outline-none pb-3 border-solid border-b border-b-neutral-300
          focus:border-b-primary-light focus:shadow-md shadow-primary-dark ease-in duration-200'
          rows={4}
          name='message'
          placeholder='Enter a message'
        />
      </div>
      <Button className='w-fit' label='Submit' type='submit' />
    </form>
  );
};

export default Form;
