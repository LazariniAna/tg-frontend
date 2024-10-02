'use client';
import Content from "@/components/Content";
import { useParams, useRouter } from "next/navigation";
import { Person } from '@mui/icons-material';
import { useEffect, useRef, useState } from "react";
import { ErrorMessage, Form, Formik, FormikProps } from "formik";
import Select, { StylesConfig } from 'react-select';
import LoadingOverlay from "@/components/Loading";
import { customStyles, monthsOptionsDefault } from "@/utils/const";
import * as Yup from 'yup';
import { useSearchParams } from 'next/navigation';
import api from "@/server/api";
import { showErrorToast } from "@/utils/messages.helper";
import ConfirmModal from "@/components/Modal/confirmModal";
import ContentFixedButton from "@/components/Button/ContentFixedButton";
import InputForm from "@/components/Form/Input";
import { Button } from "@/components/Button";
import { getUser } from "@/server/services";
import FormRow from "@/components/Form/FormRow";
import { AccordionGeneral, AccordionItemGeneral, ChildrenGeneral } from "@/components/Accordion";
import ConfirmDeleteModal from "@/components/Modal/confirmDeleteModal";
interface Address {
  id: number | null;
  rua: string;
  bairro: string;
  estado: string;
  numero: string;
  cidade: string;
  cep?: string;
}

interface FormValues {
  id: number | null;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  address: Address;
}


export default function DataUsuario() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [allowNext, setAllowNext] = useState(false);
  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
  const [allowDelete, setAllowDelete] = useState(false);
  const formikRef = useRef<FormikProps<any> | null>(null);
  const [validation, setValidation] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [initialValues, setInitialValues] = useState<FormValues>({
    id: null, nome: '', email: '', telefone: '', cpf: '', address: {
      id: null, rua: '', bairro: '', estado: '', numero: '', cidade: ''
    }
  });

  const getUserData = async (id: number) => {
    const userData = await getUser(id);
    console.log(userData);
    setUser(userData);
    setInitialValues({
      id: userData.id || null, nome: userData.nome || '', email: userData.email || '', telefone: userData.telefone || '', cpf: userData.cpf || '', address: userData.address || {
        id: null, rua: '', bairro: '', estado: '', numero: '', cidade: ''
      },
    });
  };

  useEffect(() => {
    if (params.id != "cadastro") {
      getUserData(Number(params.id));
    }
  }, [params.id]);

  const handleModalConfirm = () => setIsOpenConfirm(!isOpenConfirm);
  const handleModalConfirmDelete = () => setIsOpenConfirmDelete(!isOpenConfirmDelete);

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    telefone: Yup.string().required('Telefone é obrigatório'),
    cpf: Yup.string().required('CPF é obrigatório'),
    address: Yup.object().shape({
      rua: Yup.string().required('Rua é obrigatória'),
      // cep: Yup.string().required('Cep é obrigatório'),
      numero: Yup.string().required('Número é obrigatório'),
      bairro: Yup.string().required('Bairro é obrigatório'),
      cidade: Yup.string().required('Cidade é obrigatória'),
      estado: Yup.string().required('Estado é obrigatório'),
    }),
  });


  useEffect(() => {
    document.title = `${params.id === "cadastro" ? 'Novo Usuário' : "Editar Usuário"} | Colégio Soberano`;
  }, [params.id]);

  useEffect(() => {
    if (allowNext) router.back();
  }, [allowNext]);
 
  useEffect(() => {
    if (allowDelete) handleDelete();
  }, [allowDelete]);

  const handleSubmit = async (values: any, actions: any) => {
    setLoading(true);
    try {
      let data = values;

      if (params.id === "cadastro") {
        const res = await api.post('/users', data);
        setLoading(false);
        window.location.assign(`/usuarios`);
      } else {
        await api.patch(`/users/${params.id}`, data);
        setLoading(false);
        window.location.assign(`/usuarios`);
      }
    } catch (error) {
      setLoading(false);
      showErrorToast("Erro ao salvar usuário!");
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
        await api.delete(`/users/${params.id}`);
        setLoading(false);
        window.location.assign(`/usuarios`);
    } catch (error) {
      setLoading(false);
      showErrorToast("Erro ao deletar usuário!");
    }
  };

  if (loading) return <LoadingOverlay />;

  return (
    <Content>
      <div className="w-full flex flex-col items-center mt-2">
        <div className="flex items-center justify-center">
          <Person />
          <h1 className="text-2xl font-bold mb-4 items-center pt-5">{params.id === "cadastro" ? 'Novo Usuário' : "Editar Usuário"}</h1>
        </div>

        <div className='flex flex-col w-9/12 pt-6 justify-center items-center'>
          <Formik<FormValues>
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            innerRef={formikRef}
            enableReinitialize
          >
            {({ isSubmitting, setFieldValue, values, errors }) => (
              <Form className='h-full flex justify-between w-full flex-col'>
                <FormRow>
                  <InputForm
                    name="nome"
                    type="text"
                    title="Nome"
                    value={values.nome}
                    onChange={(event) => setFieldValue("nome", event.target.value)}
                    error={validation && errors.nome && typeof errors.nome == 'string' ? errors.nome : ''}
                    className="w-1/2"
                  />
                  <InputForm
                    name="email"
                    type="text"
                    title="Email"
                    value={values.email}
                    onChange={(event) => setFieldValue("email", event.target.value)}
                    error={validation && errors.email && typeof errors.email == 'string' ? errors.email : ''}
                    className="w-1/4"
                  />
                  <InputForm
                    name="telefone"
                    type="text"
                    title="Telefone"
                    value={values.telefone}
                    onChange={(event) => setFieldValue("telefone", event.target.value)}
                    error={validation && errors.telefone && typeof errors.telefone == 'string' ? errors.telefone : ''}
                    className="w-1/5"
                  />
                </FormRow>
                <FormRow>
                  <InputForm
                    name="cpf"
                    type="number"
                    title="CPF"
                    value={values.cpf}
                    onChange={(event) => setFieldValue("cpf", event.target.value)}
                    error={validation && errors.cpf && typeof errors.cpf == 'string' ? errors.cpf : ''}
                    className="w-1/4"
                  />
                </FormRow>
                <AccordionGeneral>
                  <AccordionItemGeneral key={"Endereço"} title="Endereço">
                    <ChildrenGeneral>
                      <FormRow>
                        <InputForm
                          name="address.rua"
                          type="text"
                          title="Rua"
                          value={values.address.rua}
                          onChange={(event) => setFieldValue("address.rua", event.target.value)}
                          error={validation && errors.address?.rua ? errors.address.rua : ''}
                          className="w-1/2"
                        />
                        <InputForm
                          name="address.cep"
                          type="number"
                          title="Cep"
                          value={values.address.cep}
                          onChange={(event) => setFieldValue("address.cep", event.target.value)}
                          error={validation && errors.address?.cep && typeof errors.address.cep === 'string' ? errors.address.cep : ''}
                          className="w-1/4"
                        />
                        <InputForm
                          name="address.numero"
                          type="number"
                          title="Número"
                          value={values.address.numero}
                          onChange={(event) => setFieldValue("address.numero", event.target.value)}
                          error={validation && errors.address?.numero && typeof errors.address.numero === 'string' ? errors.address.numero : ''}
                          className="w-1/5"
                        />
                      </FormRow>
                      <FormRow>
                        <InputForm
                          name="address.bairro"
                          type="text"
                          title="Bairro"
                          value={values.address.bairro}
                          onChange={(event) => setFieldValue("address.bairro", event.target.value)}
                          error={validation && errors.address?.bairro && typeof errors.address.bairro === 'string' ? errors.address.bairro : ''}
                          className="w-1/2"
                        />
                        <InputForm
                          name="address.cidade"
                          type="text"
                          title="Cidade"
                          value={values.address.cidade}
                          onChange={(event) => setFieldValue("address.cidade", event.target.value)}
                          error={validation && errors.address?.cidade && typeof errors.address.cidade === 'string' ? errors.address.cidade : ''}
                          className="w-1/4"
                        />
                        <InputForm
                          name="address.estado"
                          type="text"
                          title="Estado"
                          value={values.address.estado}
                          onChange={(event) => setFieldValue("address.estado", event.target.value)}
                          error={validation && errors.address?.estado && typeof errors.address.estado === 'string' ? errors.address.estado : ''}
                          className="w-1/5"
                        />
                      </FormRow>
                    </ChildrenGeneral>
                  </AccordionItemGeneral>
                </AccordionGeneral>
                <ContentFixedButton>
                  {params.id != "cadastro" ?
                    <div className="mr-8 max-mxs:mr-2">
                      <Button type="button" size="small" color="warning" fill="filled" style={{ border: '2px solid black' }} onClick={handleModalConfirmDelete}>
                        DELETAR
                      </Button>
                    </div>
                    : null}
                  <Button type="button" size="small" color="white" style={{ border: '2px solid black' }} onClick={handleModalConfirm}>
                    VOLTAR
                  </Button>
                  <div className="ml-8 max-mxs:ml-2">
                    <Button type="button" size="small" color="black" fill="filled" style={{ border: '2px solid black' }} onClick={() => {
                      validationSchema.validate(values)
                        .then(() => {
                          handleSubmit(values, null);
                        })
                        .catch((e) => {
                          setValidation(true);
                          showErrorToast(e.toString().replace(/^[^:]+:\s*/, ""));
                        });
                    }}>
                      SALVAR
                    </Button>
                  </div>
                </ContentFixedButton>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ConfirmModal isOpenModal={isOpenConfirm} setIsOpenModal={setIsOpenConfirm} allow={allowNext} setAllow={setAllowNext} />
      <ConfirmDeleteModal isOpenModal={isOpenConfirmDelete} setIsOpenModal={setIsOpenConfirmDelete} allow={allowDelete} setAllow={setAllowDelete} />
      {loading && <LoadingOverlay />}
    </Content>
  );
}
