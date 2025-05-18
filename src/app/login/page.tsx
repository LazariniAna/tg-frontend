'use client'
import Content from "@/components/Content"
import Image from 'next/image';
import ImageStudents from "../../assets/ImageStudents.png"
import Back from "../../assets/fundo1.jpg"
import { destroyCookie, setCookie } from 'nookies';
import { useLayoutEffect, useRef, useState } from "react";
import { getCookie } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { Form, Formik, FormikProps } from "formik";
import * as Yup from 'yup';
import api from "@/server/api";
import { showErrorToast } from "@/utils/messages.helper";
import FormRow from "@/components/Form/FormRow";
import ContentFixedButton from "@/components/Button/ContentFixedButton";
import InputForm from "@/components/Form/Input";
import { getUsers, login } from "@/server/services";
import { useUser } from "@/contexts/UserContext";

interface FormValues {
  cpf: string;
  senha: string;
}


export default function Login() {
  const { setUser } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [validation, setValidation] = useState(false);
  const [users, setUsers] = useState([]);
  const [initialValues, setInitialValues] = useState<FormValues>({
    cpf: '', senha: ''
  });
  const formikRef = useRef<FormikProps<any> | null>(null);

  useLayoutEffect(() => {
    document.title = "Login | Colégio Soberano"
    const bearerAuth = getCookie('Bearer');
    if (bearerAuth) router.push('/')
    getUser()
  }, [])

  const validationSchema = Yup.object().shape({
    cpf: Yup.string().nonNullable().required('CPF é obrigatório'),
    senha: Yup.string().nonNullable().required('Senha é obrigatório'),
  });
  const getUser = async () => {
    const users = await getUsers();
    setUsers(users)
  }

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      let data = {
        ...values
      };

      const logged = await login(data);

      const loggedUser = logged.user
      setCookie(null, 'Bearer', JSON.stringify(logged.token));
      localStorage.setItem('user_soberano', JSON.stringify(loggedUser));
      setUser(loggedUser);
      setLoading(false);
      setTimeout(() => window.location.assign('/'), 500)
    } catch (error) {
      setLoading(false);
      showErrorToast("Erro ao realizar login!");
    }
  };


  return (
    <div className="flex flex-col items-center w-full justify-center h-lvh" style={{ backgroundImage: `url("https://img.freepik.com/vetores-premium/o-conceito-de-educacao-e-ciencia-a-caneta-de-volta-a-escola-desenha_555656-1341.jpg?w=740")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='w-1/3 flex bg-[rgba(100,150,161,0.2)] border-[rgba(5,32,38,0.4)] rounded-md backdrop-blur items-center flex-col border-2 h-auto p-5 '>
        <Formik<FormValues>
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          innerRef={formikRef}
          enableReinitialize
        >
          {({ isSubmitting, setFieldValue, values, errors }) => (
            <Form className=''>
              <div className="">
                <FormRow>
                  <InputForm
                    name="cpf"
                    type="text"
                    title="CPF"
                    value={values.cpf}
                    onChange={(event) => setFieldValue("cpf", event.target.value)}
                    error={validation && errors.cpf && typeof errors.cpf == 'string' ? errors.cpf : ''}
                    className="w-full"
                  />
                  <InputForm
                    name="senha"
                    type="password"
                    title="Senha"
                    value={values.senha}
                    onChange={(event) => setFieldValue("senha", event.target.value)}
                    error={validation && errors.senha && typeof errors.senha == 'string' ? errors.senha : ''}
                    className="w-full"
                  />
                </FormRow>

                <div className="flex justify-end">
                  <Button size="small" color="black" fill="filled" className="w-32" style={{ border: '2px solid black' }} onClick={() => {
                    validationSchema.validate(values)
                      .then(() => {
                        handleSubmit(values);
                      })
                      .catch((e) => {
                        setValidation(true);
                        showErrorToast(e.toString().replace(/^[^:]+:\s*/, ""));
                      });
                  }}>
                    LOGIN
                  </Button>
                </div>

              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}