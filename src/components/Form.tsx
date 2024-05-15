import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Button from './Button.tsx';
import { twMerge } from 'tailwind-merge';

const Form = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLFormElement>) => {
  const form = useRef(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'all' });
  const sendEmail = () => {
    const hiddenInput = (document.getElementById('hidden-input') as HTMLInputElement);
    if (hiddenInput.value !== "") {
      return;
    }
    if (form && form.current) {
      emailjs
        .sendForm('service_xo4kyyj', 'template_f8nqtih', form.current, {
          publicKey: 'bvQjEGLWtZlUVxJF9',
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
      className={twMerge('flex flex-col gap-10', className)}
      onSubmit={handleSubmit(sendEmail)}
      {...rest}
    >
      <input id='hidden-input' className='hidden'></input>
      <div className='flex md:flex-row flex-col gap-10'>
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
      <Button className='w-fit lg:self-start self-center' label='Submit' type='submit' />
    </form>
  );
};

export default Form;
