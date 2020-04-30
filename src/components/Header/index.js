import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, Content, Profile } from "./styles";
import { Hidden } from "react-grid-system";

//import logo from "../../assets/logo_head.png";

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          LOGO
          <Hidden xs>
            <Link to="/dashboard">Dashboard</Link>
          </Hidden>
        </nav>
        <aside>
          <Profile>
            <Hidden xs>
              <div>
                <strong>{profile.nick}</strong>
                <Link to="/profile">Meu perfil</Link>
              </div>
            </Hidden>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
