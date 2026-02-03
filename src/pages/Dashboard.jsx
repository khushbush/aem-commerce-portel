import { AuthContext } from "../auth/AuthContext";
import { useContext } from "react";
import { dashboardConfig } from "../utils/dashboardConfig";

export default function Dashboard() {
  
  const {user} = useContext(AuthContext);
  const cards = dashboardConfig[user.role] || [];
  console.log(cards);
  return (
    <div >
        <h2>Welcome {user.name}</h2>
        <p>Role : {user.role}</p>

        <div className="grid">

          {cards.map((card)=> (
            <div key = {card.id} className="card">
              {card.title}

            </div>
          ))}
        </div>
      
    </div>
  );
}
