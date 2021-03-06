/* eslint-disable */
export const validateForm = values => {
  let errors = {};
  if (values.body === '') {
    errors.body = 'Please enter a answer';
  } else if (values.body.length > 1000) {
    errors.body = 'That is too long of an answer';
  }
  if (values.name === '') {
    errors.name = 'Please enter a nickname';
  } else if (values.name.length > 60) {
    errors.name = 'Sorry that is too long';
  }
  if (values.email === '') {
    errors.email = 'Please enter a email';
  } else if (!/^(.+)@(.+)$/i.test(values.email)) {
    errors.email = 'Please enter a email format';
  }
  return errors;
}