import { AuthContext } from "../auth/AuthContext";
import { useContext } from "react";
import { dashboardConfig } from "../utils/dashboardConfig";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  
  const {user} = useContext(AuthContext);
  const cards = dashboardConfig[user.gender] || [];
  const navigate = useNavigate();
  console.log(cards);
  return (
    <div >
        <h2>Welcome {user.name}</h2>
        <p>Gender : {user.gender}</p>

        <div className="grid">
          <h2> Your Preference</h2>

          {cards.map((card)=> (
            <div key = {card.id} className="card" style={{ cursor: "pointer" }} onClick={() => navigate(`/plp?category=${card.category}`)}>
              
               <p>{card.title}</p> 
            </div>
          ))}
        </div>
    </div>
  );
}
