import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Register = () => {
  const [name, setName] = useState("Ryan");
  const [email, setEmail] = useState("ryan@gmail.com");
  const [password, setPassword] = useState("rrrrrr");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      const { data } = await axios.post(`http://localhost:8002/api/register`, {
        name,
        email,
        password,
      });
      // console.log("REGISTER RESPONSE", data);
      toast("Registration successful. Please login.");
    } catch (err) {
      toast(err.response.data);
    }
  };
  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Register</h1>

      <div className="container col-md-4 offset-md-4 pb-5">
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label for="formGroupExampleInput">name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="name"  value={name}
            onChange={(e) => setName(e.target.value)}/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="email"  value={email}
            onChange={(e) => setEmail(e.target.value)}/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Password</label>
    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="password"  value={password}
            onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-block btn-primary mt-4">
            Submit
          </button>
</form>
      </div>
    </>
  );
};

export default Register;
