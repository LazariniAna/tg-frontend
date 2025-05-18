import { createSlice } from "@reduxjs/toolkit";
import { MenuState } from "@/utils/types";

const initialState: MenuState = {
  visible: false,
  open: false,
  itensMenu: [
    {
      title: "Início",
      icon: '',
      url: "/",
      isDisabled: false
    },
    {
      title: "Sobre",
      icon: 'scribble.svg',
      childrens: [
        { title: "Sobre a escola", url: "/sobre" },
        { title: "Calendário escolar", url: "/" },
      ],
      isDisabled: false
    },
    {
      title: "Visita",
      icon: 'chalkboard-user.svg',
      childrens: [
        { title: "Agendamentos", url: "/agendamentos", isDisabled: false },
        { title: "Agendar visitas", url: "/agendamentos/agendar/cadastro", isDisabled: false },
      ],
      isDisabled: false
    },
    {
      title: "Eventos",
      icon: 'chalkboard-user.svg',
      childrens: [
        { title: "Publicar eventos", url: "/conteudos/publicar-conteudo/cadastro", isDisabled: false, onlyAdm: true },
        { title: "Lista de eventos", url: "/conteudos", isDisabled: false, onlyAdm: true },
        { title: "Eventos", url: "/conteudos/publicados", isDisabled: false },
      ],
      isDisabled: false
    },
    {
      title: "Usuários",
      icon: 'users.svg',
      childrens: [
        { title: "Cadastrar novo usuário", url: "/usuarios/cadastro" },
        { title: "Usuários", url: "/usuarios" }
      ],
      isDisabled: false,
      onlyAdm: true
    },
  ]
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      return { ...state, open: !state.open };
    },
    changeVisible: (state, { payload }) => {
      return { ...state, visible: payload };
    },
  },
});

export const { toggleMenu, changeVisible } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
