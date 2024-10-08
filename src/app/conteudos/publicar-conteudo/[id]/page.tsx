'use client';
import Content from "@/components/Content";
import { useParams, useRouter } from "next/navigation";
import { ContentPaste } from '@mui/icons-material';
import { useEffect, useRef, useState } from "react";
import { Form, Formik, FormikProps } from "formik";
import LoadingOverlay from "@/components/Loading";
import * as Yup from 'yup';
import api from "@/server/api";
import { showErrorToast } from "@/utils/messages.helper";
import ConfirmModal from "@/components/Modal/confirmModal";
import ContentFixedButton from "@/components/Button/ContentFixedButton";
import InputForm from "@/components/Form/Input";
import { Button } from "@/components/Button";
import { getContent } from "@/server/services";
import FormRow from "@/components/Form/FormRow";
import { AccordionGeneral, AccordionItemGeneral, ChildrenGeneral } from "@/components/Accordion";
import ConfirmDeleteModal from "@/components/Modal/confirmDeleteModal";
import TextEditor from "@/components/Form/TextEditor";

interface FormValues {
  id: number | null;
  title: string;
  subtitle: string;
  image: string;
  text: string;
  footer: string;
}


export default function DataConteudo() {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [allowNext, setAllowNext] = useState(false);
  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
  const [allowDelete, setAllowDelete] = useState(false);
  const formikRef = useRef<FormikProps<any> | null>(null);
  const [validation, setValidation] = useState(false);
  const router = useRouter();
  const [initialValues, setInitialValues] = useState<FormValues>({
    id: null, title: '', subtitle: '', image: '', text: '', footer: ''
  });

  const getUserData = async (id: number) => {
    const data = await getContent(id);
    setInitialValues({
      id: data.id || null, title: data.title || '', subtitle: data.subtitle || '', image: data.image || '', text: data.text || '', footer: data.footer || ''
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
    title: Yup.string().nonNullable().required('Título é obrigatório'),
    subtitle: Yup.string().nonNullable().required('Sub-título é obrigatório'),
    image: Yup.string().required('Telefone é obrigatório'),
    text: Yup.string().nonNullable().required('Texto do conteúdo é obrigatório'),
  });


  useEffect(() => {
    document.title = `${params.id === "cadastro" ? 'Novo Conteúdo' : "Editar Conteúdo"} | Colégio Soberano`;
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
        await api.post('/contents', data).then((res) => {
          window.location.assign(`/conteudos`);
        });
        setLoading(false);
      } else {
        await api.patch(`/contents/${params.id}`, data).then((res) => {
          window.location.assign(`/conteudos`);
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      showErrorToast("Erro ao salvar conteúdo!");
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await api.delete(`/contents/${params.id}`);
      setLoading(false);
      window.location.assign(`/conteudos`);
    } catch (error) {
      setLoading(false);
      showErrorToast("Erro ao deletar usuário!");
    }
  };

  const handleTextEditor = (content: string) => {
    console.log('Conteúdo salvo:', content);
    // Aqui você pode fazer o que quiser com o conteúdo, como enviá-lo para uma API
  };

  if (loading) return <LoadingOverlay />;

  return (
    <Content>
      <div className="w-full flex flex-col items-center mt-2">
        <div className="flex items-center justify-center">
          <ContentPaste />
          <h1 className="text-2xl font-bold mb-4 items-center pt-5">{params.id === "cadastro" ? 'Novo Conteúdo' : "Editar Conteúdo"}</h1>
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
              <Form className='h-full flex justify-between w-full flex-col pb-44'>
                <FormRow>
                  <InputForm
                    name="title"
                    type="text"
                    title="Título"
                    value={values.title}
                    onChange={(event) => setFieldValue("title", event.target.value)}
                    error={validation && errors.title && typeof errors.title == 'string' ? errors.title : ''}
                    className="w-1/2"
                  />
                  <InputForm
                    name="subtitle"
                    type="text"
                    title="Sub-título"
                    value={values.subtitle}
                    onChange={(event) => setFieldValue("subtitle", event.target.value)}
                    error={validation && errors.subtitle && typeof errors.subtitle == 'string' ? errors.subtitle : ''}
                    className="w-1/4"
                  />
                  <InputForm
                    name="image"
                    type="text"
                    title="Imagem"
                    value={values.image}
                    onChange={(event) => setFieldValue("image", event.target.value)}
                    error={validation && errors.image && typeof errors.image == 'string' ? errors.image : ''}
                    className="w-1/5"
                  />
                </FormRow>
                <FormRow>
                  <TextEditor
                    initialValue={values.text}
                    setFieldValue={setFieldValue}
                    title="Texto do conteúdo"
                    field="text"
                    error={validation && errors.text && typeof errors.text == 'string' ? errors.text : ''}
                    />
                </FormRow>
                <FormRow className="mt-14">
                  <TextEditor
                    field="footer"
                    initialValue={values.footer}
                    setFieldValue={setFieldValue}
                    title="Rodapé"
                    error={validation && errors.footer && typeof errors.footer == 'string' ? errors.footer : ''}
                  />
                </FormRow>
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
