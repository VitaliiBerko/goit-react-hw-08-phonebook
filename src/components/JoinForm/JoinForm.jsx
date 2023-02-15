import { nanoid } from "nanoid";
import s from './contactForm.module.css';
const { useState } = require("react")
const { useDispatch } = require("react-redux")

export const JoinForm =()=> {
    const dispatch=useDispatch();

   

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = evt => {
    const { value, name } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

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
    const { name, email, password } = form.elements;
    const userName = name.value;
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
      
      dispatch(joinUser({ name: userName, email: userEmail, password: userPassword}));
      setName('');
      setEmail('');
      setPassword('');
//     }
  };




    return (<form onSubmit={handleOnSubmit} className={s.form}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          className={s.input}
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
  
        <label htmlFor={emailInputId}>Email</label>
        <input
          className={s.input}
          id={emailInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={email}
          onChange={handleChange}
        />
        <label htmlFor={passwordInputId}>Password</label>
        <input
          className={s.input}
          id={passwordInputId}
          type="password"
        //   type={isPass ? 'password' : 'text'}
          name="password"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Password must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={password}
          onChange={handleChange}
        />
  
        <button className={s.btnAddContact} type="submit">
          Join
        </button>
      </form>)
}
