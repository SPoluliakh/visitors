import { ChangeEvent, useState } from 'react';

interface Props {
  lab: string;
  type: string;
}

export const CustomInput = ({ lab, type }: Props) => {
  const [value, setValue] = useState('');

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setValue(value);
  };
  return (
    <label>
      {lab}
      <input
        name={lab}
        type={type}
        value={value}
        onChange={handleInputChange}
        autoComplete="off"
      />
    </label>
  );
};
