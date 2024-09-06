import React, { useEffect, useState } from "react";
import HardSkills from "../../Sections/Dashboard/HardSkills";
import AboutText from "../../Sections/Dashboard/AboutText";
import Services from "../../Sections/Dashboard/Services";
import Experiences from "../../Sections/Dashboard/Experiences";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";
import User from "../../Sections/Dashboard/User";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(app), (user) => {
      if (!user || user.email != "pedrohenriquefsp90@gmail.com")
        navigate("/login");
      else setUser(user);
      return () => {
        unsubscribe();
      };
    });
  }, [user, setUser, navigate]);

  return (
    <div>
      <br />
      <br />
      <User user={user} />
      <br />
      <br />
      <HardSkills />
      <br />
      <br />
      <AboutText />
      <br />
      <br />
      <Services />
      <br />
      <br />
      <Experiences />
      <br />
      <br />
    </div>
  );
}
