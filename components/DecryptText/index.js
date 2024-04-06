import { useEffect } from 'react'
import PropTypes from 'prop-types'


import { useDencrypt } from "use-dencrypt-effect";

// const values = ["useDencrypt", "Customizable", "React Hook", "Text Effect"];

const DecryptText = ({
    values = ['Empty'],
    delay = 5000
}) => {
  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    let i = 1;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, delay);

    return () => clearInterval(action);
  }, []);

  return <>{result || values[0]}</>;
};

DecryptText.propTypes = {}

export default DecryptText