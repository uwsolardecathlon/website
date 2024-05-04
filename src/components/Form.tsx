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
      ref={form}
      className='flex flex-col gap-10'
      onSubmit={handleSubmit(sendEmail)}
    >
      <div className='lg:flex flex-row gap-10'>
        <div className='flex flex-col gap-3'>
          <label className='flex flex-row'>
            First Name <div className='text-red'>*</div>
          </label>
          <input
            {...register('first_name', {
              required: 'First name is required',
            })}
            className='outline-none'
            type='text'
            name='first_name'
            placeholder='Your first name'
          />
          <hr className='border-neutral-300' />
          <p className='text-red text-sm'>
            {errors.first_name?.message as string}
          </p>
        </div>
        <div className='flex flex-col gap-3'>
          <label className='flex flex-row'>
            Last Name <div className='text-red'>*</div>
          </label>
          <input
            {...register('last_name', {
              required: 'Last name is required',
            })}
            className='outline-none'
            type='text'
            name='last_name'
            placeholder='Your last name'
          />
          <hr className='border-neutral-300' />
          <p className='text-red text-sm'>
            {errors.last_name?.message as string}
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <label className='flex flex-row'>
          Email <div className='text-red'>*</div>
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
          className='outline-none'
          type='text'
          name='user_email'
          placeholder='Your email'
        />
        <hr className='border-neutral-300' />
        <p className='text-red text-sm'>
          {errors.user_email?.message as string}
        </p>
      </div>
      <div className='flex flex-col gap-3'>
        <label>Message</label>
        <textarea
          className='outline-none'
          rows={2}
          name='message'
          placeholder='Enter a message'
        />
        <hr className='border-neutral-300' />
      </div>
      <Button className='w-fit' label='Submit' type='submit' />
    </form>
  );
};

export default Form;
