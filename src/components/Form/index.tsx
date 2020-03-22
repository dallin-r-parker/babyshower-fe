import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'components/Input';
import { ErrorMessage } from 'components/ErrorMessage';

export const Form: React.FC = (): JSX.Element => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  //console.log(watch('fullname')); // you can watch individual input by pass the name of the input

  return (
    <>
      {/* <h2>RSVP</h2> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="fullname"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          errors={errors}
          autofocus
        />
        <Input
          name="email"
          label="Email"
          errors={errors}
          validate={{ pattern: /^\S+@\S+$/i }}
          register={register}
          placeholder="example@gmail.com"
        />
        <ErrorMessage error={errors} />
        <input type="submit" />
      </form>
    </>
  );
};
