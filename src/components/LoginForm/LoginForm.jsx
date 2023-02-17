import { nanoid } from "nanoid";
import s from '../ContactForm/contactForm.module.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/auth.operation";


export const LoginForm =()=> {
    const dispatch=useDispatch();    

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
    // const userName = name.value;
    const userEmail = email.value;
    const userPassword = password.value;

    // Notiflix.Notify.init({
    //   position: 'center-top',
    // });

    // if (contacts.find(contact => contact.name === contactName)) {
    //   Notiflix.Notify.info(`${contactName} is already in contacts`);
    //   setName('');
    //   return;
    // } else {
      
      dispatch(logIn({email: userEmail, password: userPassword}));      
      setEmail('');
      setPassword('');
      // form.reset();
//     }
  };




    return (<form onSubmit={handleOnSubmit} className={s.form}>
          
        <label htmlFor={emailInputId}>Email</label>
        <input
          className={s.input}
          id={emailInputId}
          type="email"
          name="email"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Password must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={password}
          onChange={handleChange}
        />
  
        <button className={s.btnAddContact} type="submit">
          LogIn
        </button>
      </form>)
}

