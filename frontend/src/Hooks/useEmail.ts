import { useState } from 'react';
import { getEmailDetails, Emails } from '../Services/emailGenerator';

const useEmail = () => {
  const [emailData, setData] = useState<Emails>();
  const [emailError, setError] = useState<string>();

  const reset = () => {
    setData({ email: '' });
    setError('');
  };

  const getAPIData = async (name, domain) => {
    const { isOk, data, error } = await getEmailDetails(name, domain);
    console.log(data);
    if (isOk) setData(data);
    else setError(error);
  };

  return {
    emailData,
    emailError,
    loading: !emailData && !emailError,
    getAPIData,
    reset,
  };
};

export default useEmail;
