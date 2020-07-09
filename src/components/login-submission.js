import React from 'react';
import Spinner from "./Spinner";

class Login extends React.Component {
  state = {
    loading: false,
    error: null,
    authData: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {email, password} = event.target.elements;

    const data = {
      email: email.value,
      password: password.value,
    };

    this.setState({loading: true});
    const endpoint = 'https://reqres.in/api/login';
    window.fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if(res.ok){
          return data;
        }else{
          return Promise.reject(data);
        }
      })
      .then(response => {
        this.setState({error: null, loading: false, authData: response});
      })
      .catch(response => {
        this.setState({error: {message: response.error}, loading: false, authData: null})
      });
  };

  render() {
    const {loading, error, authData} = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="col-md-6">
        <div className="form-group">
          <label htmlFor="email-field">Email</label>
          <input id="email-field" name="email" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password-field">Password</label>
          <input id="password-field" name="password" type="password" className="form-control" />
        </div>
        {error && (
          <p className="alert alert-danger" role="alert"> Error: {error.message}</p>
        )}
        {authData && (
          <div>
            <p className="alert alert-success">login successful</p>
            {JSON.stringify(authData, null, 2)}
          </div>
        )}
        <div>
          {loading ? <Spinner/> : <button type="submit" className="btn btn-primary">Submit</button>}
        </div>
      </form>
    )
  }
}

export default Login;

/**
 * valid email: eve.holt@reqres.in
 */
