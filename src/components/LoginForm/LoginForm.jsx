import { nanoid } from 'nanoid';
import s from '../ContactForm/contactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/auth.operation';
import Loader from 'components/Loader/loader';
import { selectIsLoading } from 'redux/auth/auth.selector';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = evt => {
    const { value, name } = evt.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { email, password } = form.elements;
    const userEmail = email.value;
    const userPassword = password.value;

    dispatch(logIn({ email: userEmail, password: userPassword }));
    setEmail('');
    setPassword('');
  };

  return isLoading ? (<Loader/>) :( 
    <form onSubmit={handleOnSubmit} className={s.form}>
      <label htmlFor={emailInputId}>Email</label>
      <input
        className={s.input}
        id={emailInputId}
        type="email"
        name="email"
        
        required
        value={email}
        onChange={handleChange}
      />
      <label htmlFor={passwordInputId}>Password</label>
      <input
        className={s.input}
        id={passwordInputId}
        //   type={isPass ? 'password' : 'text'}
        type="password"
        name="password"
        
        title="Password must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={password}
        onChange={handleChange}
      />

      <button className='btn btn-primary' type="submit">
        LogIn
      </button>
    </form>
  );
};
