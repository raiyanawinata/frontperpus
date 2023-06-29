import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

export default function Login(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Cek username dan password
    if (username === 'admin' && password === 'adminperpustakaan') {
      // Login berhasil, arahkan ke halaman data-pinjam
      navigate('/data-peminjaman');
    } else {
      // Login gagal, tampilkan pesan error
      setError('Username or password is incorrect');
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
