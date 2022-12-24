import { Link } from 'react-router-dom';
import { useState } from 'react';

const ResetPassword = () => {
  const pass = JSON.stringify(localStorage.getItem('password'));
  const [newPassword, setnewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const password = JSON.parse(localStorage.getItem('password'));
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('password', password);
  };
  return (
    <div style={{ margin: '50px 50px 50px 50px' }}>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label>Current Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter current password"
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="enter new password"
            onChange={(e) => setnewPassword(e.target.value)}
          />
        </div>
        <Link type="submit" className="btn btn-primary" to="/dashboard">
          Submit
        </Link>{' '}
        <Link className="btn btn-secondary" to="/dashboard">
          Cancel
        </Link>
      </form>
    </div>
  );
};
export default ResetPassword;
