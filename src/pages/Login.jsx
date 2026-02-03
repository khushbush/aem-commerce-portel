import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { loginUser } from "../services/authService";


export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  // const handleLogin = async() =>{
  //   try{

  //     const user = await loginUser({email}, {password});
  //     login(user);
  //     navigate("/dashboard")

  //   }catch(err){
  //     alert('invalid login');

  //   }
  // };

  const handleSubmit = async (e) =>{
     e.preventDefault();
     if(!email || !password){
      alert("Please enter email and password");
      return;
     }

      try{

      const user = await loginUser(email, password);
      login(user);
      navigate("/dashboard")

    }catch(err){
      alert('invalid login');

    }
     console.log("Form values:", email, password);
  };

  return (
    <div className="page-center">
      <div className="card">
        <h2>Login</h2>
          <input type = "email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} 
           style={{ display: "block", width: "100%", marginBottom: "12px", padding: "8px" }}
          />
          <form onSubmit={handleSubmit}>
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "12px", padding: "8px" }}
      />

        <button className="btn">
          Login
        </button>
        </form>
      </div>
    </div>
  );
}
