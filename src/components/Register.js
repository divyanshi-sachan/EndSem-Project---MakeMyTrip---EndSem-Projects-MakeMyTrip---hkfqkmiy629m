
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = formData;

//     const payload = {
//       name,
//       email,
//       password,
//       appType: "bookingportals",
//     };

//     try {
//       const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'projectId': 'YOUR_PROJECT_ID', 
//         },
//         body: JSON.stringify(payload),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert('Registered successfully!');
//         console.log('Success:', result);
//       } else {
//         alert('Registration failed: ' + result.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   const handleLogin = () => {
//     window.location.href = '/home';
//   };

//   const styles = {
//     container: {
//       position: 'relative',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       flexDirection: 'column',
//       backgroundColor: '#c4c4f5', // Dark background color
//       color: '#ffffff', // Text color
//     },
//     formContainer: {
//       width: '300px',
//       textAlign: 'center',
//       backgroundColor: '#4a5568', // Darker background color for the form
//       padding: '20px',
//       borderRadius: '8px', // Border radius
//       boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Box shadow for elevation
//     },
//     form: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     input: {
//       padding: '12px',
//       margin: '10px 0',
//       fontSize: '16px',
//       border: '1px solid #718096', // Border around the input boxes
//       borderRadius: '4px', // Border radius
//       backgroundColor: '#2d3748', // Darker background color for input boxes
//       color: '#ffffff', // Text color
//       transition: 'border-color 0.3s ease-in-out',
//       outline: 'none',
//     },
//     button: {
//       padding: '12px', 
//       margin: '10px 0',
//       fontSize: '16px',
//       backgroundColor: '#2d3748',
//       color: '#ffffff', // Button text color
//       border: 'none',
//       borderRadius: '4px', // Border radius for button
//       cursor: 'pointer',
//       transition: 'background-color 0.3s ease-in-out',
//     },
//     loginButton: {
//       position: 'absolute',
//       top: '10px',
//       right: '10px',
//       padding: '12px', 
//       fontSize: '16px',
//       backgroundColor: 'blue',
//       color: '#ffffff', // Button text color
//       border: 'none',
//       borderRadius: '4px', // Border radius for button
//       cursor: 'pointer',
//       transition: 'background-color 0.3s ease-in-out',
//     },
//     link: {
//       color: 'blue',
//       textDecoration: 'none',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         <h1 style={{ color: '#ffffff' }}>Create an Account</h1>
//         <form style={styles.form} onSubmit={handleSubmit}>
//           <input 
//             type="text" 
//             name="name" 
//             value={formData.name} 
//             onChange={handleChange} 
//             placeholder="Your Name" 
//             style={styles.input} 
//             required 
//           />
//           <input 
//             type="email" 
//             name="email" 
//             value={formData.email} 
//             onChange={handleChange} 
//             placeholder="Email Address" 
//             style={styles.input} 
//             required 
//           />
//           <input 
//             type="password" 
//             name="password" 
//             value={formData.password} 
//             onChange={handleChange} 
//             placeholder="Password" 
//             style={styles.input} 
//             required 
//           />
//           <button type="submit" style={styles.button}>Register</button>
//         </form>
//         <p style={{ color: '#ffffff' }}>Already have an account? <Link to="/" style={styles.link}>Sign in</Link></p>
//       </div>
//       <button style={styles.loginButton} onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    const payload = {
      name,
      email,
      password,
      appType: "bookingportals",
    };

    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
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
        alert('Registered successfully!');
        console.log('Success:', result);
      } else {
        alert('Registration failed: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleLogin = () => {
    window.location.href = '/home';
  };

  const styles = {
    container: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      backgroundColor: '#c4c4f5', // Dark background color
      color: '#ffffff', // Text color
    },
    logo: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      width: '100px',
      height: 'auto',
    },
    formContainer: {
      width: '300px',
      textAlign: 'center',
      backgroundColor: '#4a5568', // Darker background color for the form
      padding: '20px',
      borderRadius: '8px', // Border radius
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Box shadow for elevation
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '12px',
      margin: '10px 0',
      fontSize: '16px',
      border: '1px solid #718096', // Border around the input boxes
      borderRadius: '4px', // Border radius
      backgroundColor: '#2d3748', // Darker background color for input boxes
      color: '#ffffff', // Text color
      transition: 'border-color 0.3s ease-in-out',
      outline: 'none',
    },
    button: {
      padding: '12px', 
      margin: '10px 0',
      fontSize: '16px',
      backgroundColor: '#2d3748',
      color: '#ffffff', // Button text color
      border: 'none',
      borderRadius: '4px', // Border radius for button
      cursor: 'pointer',
      transition: 'background-color 0.3s ease-in-out',
    },
    loginButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      padding: '12px', 
      fontSize: '16px',
      backgroundColor: 'blue',
      color: '#ffffff', // Button text color
      border: 'none',
      borderRadius: '4px', // Border radius for button
      cursor: 'pointer',
      transition: 'background-color 0.3s ease-in-out',
    },
    link: {
      color: 'blue',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <img src="https://mir-s3-cdn-cf.behance.net/projects/404/3f767b75871141.Y3JvcCw4MDgsNjMyLDAsMA.png" alt="Logo" style={styles.logo} />
      <div style={styles.formContainer}>
        <h1 style={{ color: '#ffffff' }}>Create an Account</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Your Name" 
            style={styles.input} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email Address" 
            style={styles.input} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="Password" 
            style={styles.input} 
            required 
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>
        <p style={{ color: '#ffffff' }}>Already have an account? <Link to="/" style={styles.link}>Sign in</Link></p>
      </div>
      <button style={styles.loginButton} onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Register;

