import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'components/Input';
import { ErrorMessage } from 'components/ErrorMessage';
import { Button } from 'components/Button';
import { setData } from 'service/firebase/db';
import { CursiveStyle } from 'components/Heading';

export const Form: React.FC = (): JSX.Element => {
  const { register, handleSubmit, errors, setError } = useForm();
  const [state, setState] = useState(false);
  const onSubmit = (data: any) => {
    setData(data, setError);
    setState(true);
  }; // your form submit function which will invoke after successful validation

  return (
    <>
      {!state ? (
        <>
          <CursiveStyle>RSVP</CursiveStyle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="fullname" label="Full Name" register={register} errors={errors} autofocus />
            <Input
              name="email"
              label="Email"
              errors={errors}
              validate={{ pattern: /^\S+@\S+$/i }} //should add better pattern func
              register={register}
            />
            <Input name="favStar" label="your favorite constellation" errors={errors} register={register} />
            <Input name="celebTwin" label="your celebrity look-alike" errors={errors} register={register} />
            <ErrorMessage error={errors} />
            <Button type="submit" h="15px" w="100px" bgc="white" color="roseGold" />
          </form>
          <h4 style={{ paddingTop: `10px` }}>
            <span>&#42;</span>Submit this form and be on the lookout for an instruction/confirmation email
            within the next few days.{' '}
          </h4>
        </>
      ) : (
        <>
          <h1 style={{ color: 'white', textAlign: 'center' }}>
            Thank you! Be on the look out for details via email
          </h1>
        </>
      )}
    </>
  );
};
