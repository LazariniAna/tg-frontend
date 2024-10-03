import { StylesConfig } from "react-select";
import { Contents } from "./types";

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


export const ContentList: Contents = [
  {
    id: 1,
    theme: 'Para repensar sua prática',
    title: 'Rubrica para fazer uma boa sondagem',
    sub_title: 'Planejar, aplicar, avaliar, refletir e planejar de novo...',
    link: 'rubrica-para-fazer-uma-boa-sondagem',
    image:'https://nova-escola-producao.s3.amazonaws.com/TeT7BFyNWVTkYGTZaJZwNA4YeagKFtDakQAuhN4uBHCpX3p8DazA6ZUg5deX/ef1box001820jan20-sondagem-na-alfabetizacao-c3-caronte-design-texto01.jpg'
  },
  {
    id: 2,
    theme: 'Para se inspirar',
    title: 'Aprenda 7 passos para fazer uma boa sondagem',
    sub_title: 'A especialista em alfabetização Maria José Nóbrega explica...',
    link:'aprenda-7-passos-para-fazer-uma-boa-sondagem',
    image:'https://nova-escola-producao.s3.amazonaws.com/ukTaxyt6Bu6DM8M6VQF9zNK2cY6zQv8tXSnZv98yGwKgWyRGWsx5mARMDc7g/ef1box001820jan20-sondagem-na-alfabetizacao-c3-caronte-design-gif.gif'
  },
  {
    id: 3,
    theme: 'Para usar com os alunos',
    title: 'Conheça 3 possibilidades de listas de palavras para apoiar a sondagem',
    sub_title: 'Disponibilizamos três possibilidades de lista de palavras...',
    link:'conheca-3-possibilidades-de-listas-de-palavras-para-apoiar-a-sondagem',
    image:'https://thumbor.novaescola.org.br/sxUq78lVDwHKxOJVCTcznxnNpuU=/nova-escola-producao.s3.amazonaws.com/XADVu7n3Pbqr7St83D8HV4rNFfWwYS4NWrDysduvakgHBny6MCFTqGMJrq8V/blog-alfabetizaca-5-principios-para-a-hora-de-pensar-numa-sondagem-na-alfabetizacao-ditado-mariana-pekin.jpg'
  },
]

export const hypos = [
  {
    "id": 1,
    "diagnostic_assessment_type_id": 1,
    "ordering": 1,
    "acronym": "Alf",
    "name": "Alfabética",
    "description": " <div>O que a criança sabe:<div style='list-style-type: disc; margin-left:20px'><ul style='list-style-type: disc;' ><li style=' text-align: justify;'>Produzir registros que podem ser lidos por outras pessoas e começa a se questionar sobre como grafar corretamente as palavras.</li><li style=' text-align: justify;'>É nessa fase, em geral, que aparecem dúvidas sobre se a palavra é escrita com x ou ch, por exemplo.</li><li style=' text-align: justify;'>O aluno já entendeu que a escrita não é apenas uma transcrição do oral, e que várias letras podem ser usadas para sinalizar um mesmo som, mas há regras e convenções que ditam as adequadas, caso a caso.</li></ul><br>Exemplos:<br>PASARO para PÁSSARO<br>CAZA para CASA<br>QUIRIDA para QUERIDA<br>CARO para CARRO<br></div><img src='https://diagnostico.s3.amazonaws.com/HipotesesImage/Hipotese_Alfabetica.jpg' width='260'/></div>",
    "background_color": "#86E085",
    "label": "Alfabética (ALF)",
    "value": 1
  },
  {
    "id": 2,
    "diagnostic_assessment_type_id": 1,
    "ordering": 2,
    "acronym": "Sal",
    "name": "Silábico-alfabética",
    "description": " <div>O que a criança sabe:<div style='list-style-type: disc; margin-left:20px'><ul style='list-style-type: disc;' ><li style=' text-align: justify;'> A criança não registra mais só uma letra para cada emissão de som, mas passa a colocar mais letras nos registros silábicos, às vezes usando-as de forma pertinente, às vezes escolhendo-as aleatoriamente. </li><li style=' text-align: justify;'> Ao ler o que produziu, é comum que o aluno se incomode com o resultado, pedindo para trocar, eliminar ou acrescentar letras. </li><li style=' text-align: justify;'>O incômodo é sinal de que ele está construindo hipóteses mais sofisticadas, aproximando sua escrita da convencional.</li></ul><br>Exemplos:<br>HXUVVA para CHUVA <br>CLEDRO para CALENDÁRIO <br>SAMALE para SALAME<br> TOAR para TORTA<br></div><img src='https://diagnostico.s3.amazonaws.com/HipotesesImage/Hipotese_Silabico-alfabetica.jpg' width='260'/></div>",
    "background_color": "#C8FFBB",
    "label": "Silábico-alfabética (SAL)",
    "value": 2
  },
  {
    "id": 3,
    "diagnostic_assessment_type_id": 1,
    "ordering": 3,
    "acronym": "ScV",
    "name": "Silábica c/ valor",
    "description": " <div>O que a criança sabe:<div style='list-style-type: disc; margin-left:20px'><ul style='list-style-type: disc;' ><li style=' text-align: justify;'> A criança entende que cada sílaba é representada por uma vogal ou consoante que expressa seu som correspondente.</li><li style=' text-align: justify;'>Em geral, as vogais são usadas para representar cada valor sonoro.  </li><li style=' text-align: justify;'>Há associação entre a quantidade de letras e quantidade de sílabas(mesmo que não conheçam ainda o conceito de sílaba).</li><li style=' text-align: justify;'>As crianças já sabem que têm de variar as letras ao escrever palavras e conjuntos de palavras, usando letras adequadas aos sons.</li></ul><br>Exemplos:<br>ABAI para ABACAXI<br>AAO para MACACO / CAVALO<br>AEO para CADERNO<br>IAEIO para BRIGADEIRO<br></div><img src='https://diagnostico.s3.amazonaws.com/HipotesesImage/Hipotese_Silabica_COM_valor_sonoro.jpg' width='260'/></div>",
    "background_color": "#FFF6A1",
    "label": "Silábica c/ valor (SCV)",
    "value": 3
  },
  {
    "id": 4,
    "diagnostic_assessment_type_id": 1,
    "ordering": 4,
    "acronym": "SsV",
    "name": "Silábica s/ valor",
    "description": " <div>O que a criança sabe:<div style='list-style-type: disc; margin-left:20px'><ul style='list-style-type: disc;' ><li style=' text-align: justify;'>A criança descobre que a quantidade de letras pode se relacionar com a quantidade de sílabas e entende que é preciso variar as letras ao escrever tanto uma palavra quanto um conjunto delas.</li><li style=' text-align: justify;'> Nas produções, é comum a utilização de uma letra para cada sílaba.</li><li style=' text-align: justify;'>O aluno não usa, necessariamente, letras.</li></ul><br>Exemplos:<br>CTD para BANANA <br>ADOG para TELEFONE<br>KEA para MACACO<br>CJTI para ELEFANTE<br></div><img src='https://diagnostico.s3.amazonaws.com/HipotesesImage/Hipotese_Silabica_SEM_valor_sonoro.jpg' width='260'/></div>",
    "background_color": "#FFC9A3",
    "label": "Silábica s/ valor (SSV)",
    "value": 4
  },
  {
    "id": 5,
    "diagnostic_assessment_type_id": 1,
    "ordering": 5,
    "acronym": "Pré",
    "name": "Pré-silábica",
    "description": " <div>O que a criança sabe:<div style='list-style-type: disc; margin-left:20px'><ul style='list-style-type: disc;' ><li style=' text-align: justify;'>As produções são marcadas pela não correspondência entre partes do falado e partes do escrito, ou seja, não há correspondência sonora.</li><li style=' text-align: justify;'>O uso aleatório de letras, a preferência por algumas delas (como as letras do próprio nome) e elementos gráficos como números e garatujas (aqueles rabiscos que as crianças fazem e que se distinguem dos desenhos).</li></ul><br>Exemplos:<br>AJFABEOIP para PANELA<br>ABEV para MAÇÃ<br>ICLO para BEXIGA<br>DO8C para BOLO<br></div><img src='https://diagnostico.s3.amazonaws.com/HipotesesImage/Hipotese_Pre-silabica.jpg' width='260'/></div>",
    "background_color": "#FFA9B8",
    "label": "Pré-silábica (PRÉ)",
    "value": 5
  },
  {
    "id": 6,
    "diagnostic_assessment_type_id": 1,
    "ordering": 6,
    "acronym": "NA",
    "name": "Não se aplica ",
    "description": "Quando a criança tem uma condição diferenciada que não permite uma classificação convencional das outras hipóteses.",
    "background_color": "#FFFFFF",
    "label": "Não se aplica  (NA)",
    "value": 6
  }
];



