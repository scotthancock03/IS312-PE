import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = ({ name, email, password }) => {
    const cleanName = (name ?? '').trim();
    const cleanEmail = (email ?? '').trim();
    const rawPassword = password ?? '';

    let emailError = '';
    if (!cleanEmail) {
      emailError = 'Email cannot be blank.';
    } else if (!cleanEmail.includes('@')) {
      emailError = 'Email must contain an @ symbol.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      emailError = 'Email must include a domain (e.g., example.com).';
    }

    return {
      name: !cleanName
        ? 'Name cannot be blank.'
        : cleanName.length < 3
        ? 'Name must be at least 3 characters.'
        : '',
      email: emailError,
      password:
        rawPassword.length < 8
          ? 'Password must be at least 8 characters.'
          : !/\d/.test(rawPassword)
          ? 'Password needs at least one number.'
          : '',
    };
  };

  const handleChange = (e) => {
    const next = { ...form, [e.target.name]: e.target.value };
    setForm(next);
    setErrors(validate(next));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    const ok = !nextErrors.name && !nextErrors.email && !nextErrors.password;
    setSubmitted(ok);
    if (ok) setForm({ name: '', email: '', password: '' });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Create Account</h2>

      <label>Name:</label>
      <input name="name" value={form.name} onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}

      <label>Email:</label>
      <input name="email" value={form.email} onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Password:</label>
      <input name="password" type="password" value={form.password} onChange={handleChange} />
      {errors.password && <p className="error">{errors.password}</p>}

      <button type="submit">Submit</button>
      {submitted && <div className="success">Account created successfully!</div>}
    </form>
  );
}

export default App;