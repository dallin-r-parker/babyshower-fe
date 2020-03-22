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
        <Input name="fullname" label="Full Name" register={register} errors={errors} autofocus />
        <Input
          name="email"
          label="Email"
          errors={errors}
          validate={{ pattern: /^\S+@\S+$/i }}
          register={register}
        />
        <Input name="favStar" label="your favorite constellation" errors={errors} register={register} />
        <Input name="celebTwin" label="your celebrity looka-like" errors={errors} register={register} />
        <ErrorMessage error={errors} />
        <input type="submit" />
      </form>
    </>
  );
};
