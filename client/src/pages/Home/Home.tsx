import { useContext } from "react";
import EventsList from "../../components/EventsList/EventsList";
import { AuthContext } from "../../contexts/AuthContext";

function Home() {

  const { user } = useContext(AuthContext);

  return (
    <div>
        <div>User: { user && user.email }</div>
        <EventsList />
    </div>
  )
}

export default Home