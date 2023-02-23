import { useState } from "react";

type DefaultUseInput = {
  [key: string]: any;
};

type ReturnUseInput = [
  any,
  (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void,
  (values: any) => void
];

const useInput = (initialValue: DefaultUseInput): ReturnUseInput => {
  const [value, setValue] = useState(initialValue);

  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  return [value, onChange, setValue];
};

export default useInput;
