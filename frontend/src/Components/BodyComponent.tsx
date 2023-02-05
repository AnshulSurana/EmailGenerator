import React, { useState } from 'react';

import * as Styles from '../Styles/BodyStyles';
import useEmail from '../Hooks/useEmail';
import * as CONSTANTS from '../constants';

const Background = () => (
  <Styles.ScreenBackground>
    <Styles.PolynomialOne />
    <Styles.PolynomialTwo />
    <Styles.PolynomialThree />
    <Styles.PolynomialFour />
  </Styles.ScreenBackground>
);

const BodyComponent: React.FC = () => {
  const FULL_NAME = 'fullName';
  const DOMAIN = 'domain';

  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [validationError, setValidationError] = useState({
    [FULL_NAME]: '',
    [DOMAIN]: '',
  });

  const {
    getAPIData, emailData, emailError, loading, reset,
  } = useEmail();

  const validateField = (fieldName: string, value: string) => {
    if (!value) {
      return false;
    }
    switch (fieldName) {
      case FULL_NAME:
        return value.match(/^[a-zA-Z ]*/) !== null;
      case DOMAIN:
        return value.match(/^[A-Za-z0-9]+\.[A-Za-z]+$/) !== null;
      default:
        return false;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    reset();
    const fullName : string = event?.target.fullName?.value;
    const companyDomain : string = event?.target.domain?.value;
    const isNameValid : boolean = validateField(FULL_NAME, fullName);

    if (!isNameValid) {
      setValidationError(
        (prevState) => ({
          ...prevState,
          [FULL_NAME]: `${CONSTANTS.ENTER_VALID} ${FULL_NAME}`,
        }),
      );
    } else {
      setValidationError(
        (prevState) => ({
          ...prevState,
          [FULL_NAME]: '',
        }),
      );
    }

    const isDomainValid : boolean = validateField(DOMAIN, companyDomain);
    if (!isDomainValid) {
      setValidationError(
        (prevState) => ({
          ...prevState,
          [DOMAIN]: `${CONSTANTS.ENTER_VALID} ${DOMAIN}`,
        }),
      );
    } else {
      setValidationError(
        (prevState) => ({
          ...prevState,
          [DOMAIN]: '',
        }),
      );
    }

    if (isNameValid && isDomainValid) {
      getAPIData(fullName, companyDomain);
    }
  };

  const onInputChange = (e, fieldName) => {
    if (fieldName === FULL_NAME) {
      setName(e.target.value);
    } else {
      setDomain(e.target.value);
    }
  };

  return (
    <Styles.StyleComponent>
      <Styles.FlexContainerParent>
        <Styles.FlexComponentContainer>
          <Styles.FlexItemForm>
            <Styles.FormComponent onSubmit={handleSubmit}>
              <Styles.FormHeader>
                {CONSTANTS.EMAIL}
                {' '}
                <span>{CONSTANTS.GUESSER}</span>
              </Styles.FormHeader>
              <p>{CONSTANTS.GENERATE_EMAILS}</p>
              <Styles.FormLabel>
                {CONSTANTS.FULLNAME}
                <Styles.FormInput
                  type="text"
                  value={name}
                  name={FULL_NAME}
                  onChange={(e) => onInputChange(e, FULL_NAME)}
                />
                {validationError?.fullName
                    && <Styles.ErrorLine>{[validationError.fullName]}</Styles.ErrorLine>}
              </Styles.FormLabel>
              <Styles.FormLabel>
                {CONSTANTS.DOMAIN}
                <Styles.FormInput
                  type="text"
                  value={domain}
                  name={DOMAIN}
                  onChange={(e) => onInputChange(e, DOMAIN)}
                />
                {validationError?.domain
                    && <Styles.ErrorLine>{[validationError.domain]}</Styles.ErrorLine>}
              </Styles.FormLabel>
              <Styles.FormButtonComponent type="submit">{CONSTANTS.GENERATE}</Styles.FormButtonComponent>
            </Styles.FormComponent>
          </Styles.FlexItemForm>
          <Styles.FlexItem>
            <Styles.Output>
              {CONSTANTS.RESULT}
              <br />
              {emailError && <Styles.ErrorComponent>{emailError}</Styles.ErrorComponent>}
              <Styles.Fade out={loading}>{emailData?.email}</Styles.Fade>
            </Styles.Output>
          </Styles.FlexItem>
        </Styles.FlexComponentContainer>
        <Background />
      </Styles.FlexContainerParent>
    </Styles.StyleComponent>
  );
};

export default BodyComponent;
