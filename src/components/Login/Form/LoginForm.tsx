import React from 'react';
interface IHandleChangeProps {
  inputName: 'email' | 'password';
  newValue: string;
}
const LoginForm = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handlechangeEmail = (email: string): void => {
    // Make validations

    setEmail(email);
  };

  const handlechangePassword = (pwd: string): void => {
    // Make validations

    setPassword(pwd);
  };
  const handleChange = ({ newValue, inputName }: IHandleChangeProps): void => {
    if (!newValue || !inputName) return;
    const inputs = {
      email: handlechangeEmail,
      password: handlechangePassword,
    };

    inputs[inputName](newValue);
  };
  return (
    <section>
      <form>
        <div>
          <label htmlFor="loginEmail">E-mail</label>
          <input
            type="email"
            name="email"
            id="loginEmail"
            aria-label="loginEmail"
            onChange={(e) =>
              handleChange({ newValue: e.target.value, inputName: 'email' })
            }
            value={email}
          />
        </div>
        <div>
          <label htmlFor="loginPwd">Senha</label>
          <input
            type="password"
            name="password"
            id="loginPwd"
            aria-label="loginPwd"
            onChange={(e) =>
              handleChange({ newValue: e.target.value, inputName: 'password' })
            }
            value={password}
          />
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
