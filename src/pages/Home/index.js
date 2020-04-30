import React from "react";

import { Link } from "react-router-dom";
import api from "../../services/api";
import { toastr } from "react-redux-toastr";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "./styles";

import Layout from "../_layouts/default";

import { updateUser } from "../../store/ducks/user";

export default function Perfil() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  return (
    <Layout>
      <Container>
        <div
          style={{
            textAlign: "center",
            fontSize: 36,
            fontWeight: 200,
            marginBottom: 20
          }}
        >
          Bem vindo!
        </div>
        <Link to="/paciente">
          <button className="btn1">Adicionar novo paciente</button>
        </Link>
        <button className="btn1">Atualizar senha</button>
        <br /> <br />
        <button type="button" className="logout">
          Logout
        </button>
      </Container>
    </Layout>
  );
}
