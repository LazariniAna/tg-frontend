import slugify from "slugify"
import * as Yup from 'yup';
import axios from 'axios';
import { showErrorToast } from "./messages.helper";

export const handleSlug = (title: string) => {
  let slug = String(title).replace(/[ºª$%®!ä]/gm, "");
  slug = slug.replace("–", "longhyphen");

  slug = slugify(slug, { lower: true, strict: true });

  slug = slug.replace("-or-", "--");
  slug = slug.replace("longhyphen", "");
  return slug;
}

export const validateCpf = (value: any) => {
  const cpfOnlyNumbers = value.replace(/\D/g, '');

  if (cpfOnlyNumbers.length !== 11) {
    return new Yup.ValidationError('CPF deve ter 11 números.', null, 'cpf');
  }

  if (/^(\d)\1{10}$/.test(cpfOnlyNumbers)) {
    return new Yup.ValidationError('CPF inválido.', null, 'cpf');
  }

  let sum = 0;
  let remainder;
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpfOnlyNumbers.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(cpfOnlyNumbers.substring(9, 10))) {
    return new Yup.ValidationError('CPF inválido.', null, 'cpf');
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpfOnlyNumbers.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }
  if (remainder !== parseInt(cpfOnlyNumbers.substring(10, 11))) {
    return new Yup.ValidationError('CPF inválido.', null, 'cpf');
  }

  return true;
};

export const buscarCep = async (cep: string) => {
  if (!cep) return;
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar o CEP:", error);
    showErrorToast("Erro ao buscar o CEP.");
  }
};

export function generateColorFromCPF(cpf: string): string {
  const cleanCPF = cpf.replace(/\D/g, "");

  let hash = 0;
  for (let i = 0; i < cleanCPF.length; i++) {
    hash = cleanCPF.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).slice(-2);
  }

  return color;
}
