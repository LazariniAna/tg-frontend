import { StylesConfig } from "react-select";
import { Contents } from "./types";

export const teacherSaved =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('user_soberano') || '{}')
    : {};


export const yearsOptions = [
  { value: '1', label: '1º' },
  { value: '2', label: '2º' },
  { value: '3', label: '3º' },
  { value: '4', label: '4º' },
  { value: '5', label: '5º' },
  { value: '6', label: '6º' },
  { value: '7', label: '7º' },
  { value: '8', label: '8º' },
  { value: '9', label: '9º' },
];

export const monthsOptionsDefault = [
  { value: '1', label: 'Janeiro', isDisabled: false },
  { value: '2', label: 'Fevereiro', isDisabled: false },
  { value: '3', label: 'Março', isDisabled: false },
  { value: '4', label: 'Abril', isDisabled: false },
  { value: '5', label: 'Maio', isDisabled: false },
  { value: '6', label: 'Junho', isDisabled: false },
  { value: '7', label: 'Julho', isDisabled: false },
  { value: '8', label: 'Agosto', isDisabled: false },
  { value: '9', label: 'Setembro', isDisabled: false },
  { value: '10', label: 'Outubro', isDisabled: false },
  { value: '11', label: 'Novembro', isDisabled: false },
  { value: '12', label: 'Dezembro', isDisabled: false },
];

export const hypothesesOptions = [
  { value: 1, label: 'Alfabética (ALF)', name: 'Alfabética', sigla: 'ALF', color: 'rgba(116, 212, 57, 1)' },
  { value: 2, label: 'Silábico-alfabética (SAL)', name: 'Silábico-alfabética', sigla: 'SAL', color: 'rgba(192, 255, 162, 1)' },
  { value: 3, label: 'Silábico c/ valor (SCV)', name: 'Silábico c/ valor', sigla: 'SCV', color: 'rgba(255, 251, 150, 1)' },
  { value: 4, label: 'Silábico s/ valor (SSV)', name: 'Silábico s/ valor', sigla: 'SSV', color: 'rgba(255, 207, 136, 1)' },
  { value: 5, label: 'Pré-silábica (PRÉ)', name: 'Pré-silábica', sigla: 'PRÉ', color: 'rgba(255, 181, 181, 1)' },
  { value: 6, label: 'Não se aplica (NA)', name: 'Não se aplica', sigla: 'NA', color: '#fff' },
];


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

export const possibleStatus = [
  {
    id: 1,
    name: 'Frequência'
  },
  {
    id: 2,
    name: 'Confiança'
  },
  {
    id: 3,
    name: 'Desafios'
  },
]

