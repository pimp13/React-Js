import { useState } from "react";
import Navbar from "./components/Navbar";
import Contacts from "./components/contact/Contacts";

const App = () => {

  const [contacts, setContact] = useState([]);


  return (
    <>
      <Navbar />

      <div className="page-content">
        <div className="page-content-wrapper border">
          <Contacts contacts={contacts} />
        </div>
      </div>
    </>
  )
}

export default App;
