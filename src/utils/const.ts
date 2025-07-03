import { StylesConfig } from "react-select";
import { Contents } from "./types";

//Variável com os dados do usuário que está no local storage (verifico se é admin) - Usa pra privatizar
export const teacherSaved =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user_soberano') || '{}')
    : {};

export const customStyles: StylesConfig<any, true> = {
  control: (provided: any, state: any) => ({
    ...provided,
    width: '100%',
    margin: '0',
    padding: '0.1rem 0.5rem',
    border: '1px solid #202020',
    borderRadius: '0.375rem',
    boxShadow: 'none',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: 'quartenary',
      backgroundColor: isDisabled ? '#E3E4E5' : isSelected ? '#FFB3DA' : '#fff',
      cursor: !isDisabled
        ? 'pointer'
        : ''
      ,
      ':hover': {
        backgroundColor: !isDisabled
          ? '#FFB3DA'
          : '#E3E4E5'
        ,
        cursor: !isDisabled
          ? 'pointer'
          : ''
        ,
      },
      ':active': {
        backgroundColor: !isDisabled
          ? '#FFB3DA'
          : '#E3E4E5'
        ,
      },
    };
  },
  menu: (styles) => ({
    ...styles,
    zIndex: 70
  }),
};