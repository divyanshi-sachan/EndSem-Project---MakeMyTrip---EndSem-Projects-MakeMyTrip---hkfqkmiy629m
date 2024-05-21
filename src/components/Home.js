
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
      appType: "bookingportals",
    };

    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'projectId': 'YOUR_PROJECT_ID', 
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Login successful!');
        console.log('Success:', result);
        localStorage.setItem('token', result.token); 
        navigate('/hotels'); 
      } else {
        alert('Login failed: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '20px',
      backgroundColor: '#c4c4f5', // Dark background color
    },
    logo: {
      width: '200px',
      height: 'auto',
      position: 'absolute',
      top: '10px',
      left: '10px',
    },
    formContainer: {
      width: '300px',
      textAlign: 'center',
      border: '2px solid #2d3748', // Border around the form
      borderRadius: '8px', // Border radius
      padding: '20px',
      backgroundColor: '#2d3748', // Darker background color
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '10px',
      margin: '10px 0',
      fontSize: '16px',
      border: '1px solid #718096', // Border around the input boxes
      borderRadius: '4px', // Border radius
      backgroundColor: '#4a5568', // Darker background color for input boxes
      color: 'white', // Text color
    },
    button: {
      padding: '10px', 
      margin: '10px 0',
      fontSize: '16px',
      backgroundColor: '#edaf98',
      color: '#ffffff', // Light text color
      border: 'none',
      cursor: 'pointer',
      borderRadius: '4px', // Border radius for button
    },
    link: {
      color: '#ffffff', // Light text color
      textDecoration: 'none',
    },
    heading: {
      color: '#ffffff', // White text color
    },
    paragraph: {
      color: '#ffffff', // White text color for paragraph
    },
    createAccountButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#3182ce', // Button background color
      color: '#ffffff', // Button text color
      border: 'none',
      borderRadius: '4px', // Border radius for button
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <img src="https://mir-s3-cdn-cf.behance.net/projects/404/3f767b75871141.Y3JvcCw4MDgsNjMyLDAsMA.png" alt="Logo" style={styles.logo} />
      <button style={styles.createAccountButton} onClick={handleRegisterClick}>Create Account</button>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Sign In</h1> {/* Updated text color */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email Address" 
            style={styles.input} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            style={styles.input} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={styles.button}>Sign In</button>
        </form>
        <p style={styles.paragraph}>Don't have an account? <Link to="/register" style={styles.link}>Register here</Link></p>
      </div>
    </div>
  );
};

export default Home;




