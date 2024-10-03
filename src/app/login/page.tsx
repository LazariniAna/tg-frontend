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

interface FormValues {
  user: string;
  password: string;
}


export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [validation, setValidation] = useState(false);
  const [initialValues, setInitialValues] = useState<FormValues>({
    user: '', password: ''
  });
  const formikRef = useRef<FormikProps<any> | null>(null);

  useLayoutEffect(() => {
    document.title = "Login | Colégio Soberano"
    const bearerAuth = getCookie('Bearer');
    if (bearerAuth) router.push('/')
  }, [])


  const validationSchema = Yup.object().shape({
    user: Yup.string().nonNullable().required('Usuário é obrigatório'),
    password: Yup.string().nonNullable().required('Senha é obrigatório'),
  });

  const handleSubmit = async (values: any, actions: any) => {
    setLoading(true);
    try {
      let data = {
        ...values
      };
      // await api.post('/login', data);
      setCookie(null, 'Bearer', "teste")
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
                    name="user"
                    type="text"
                    title="Usuário"
                    value={values.user}
                    onChange={(event) => setFieldValue("user", event.target.value)}
                    error={validation && errors.user && typeof errors.user == 'string' ? errors.user : ''}
                    className="w-full"
                  />
                  <InputForm
                    name="password"
                    type="text"
                    title="Senha"
                    value={values.password}
                    onChange={(event) => setFieldValue("password", event.target.value)}
                    error={validation && errors.password && typeof errors.password == 'string' ? errors.password : ''}
                    className="w-full"
                  />
                </FormRow>

                <div className="flex justify-end">
                  <Button size="small" color="black" fill="filled" className="w-32" style={{ border: '2px solid black' }} onClick={() => {
                    validationSchema.validate(values)
                      .then(() => {
                        handleSubmit(values, null);
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