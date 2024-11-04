'use client'
import Content from "@/components/Content";
import { useEffect, useState } from "react";
import { getContent } from "@/server/services";
import { ContentItems } from "@/utils/types";
import { useParams } from "next/navigation";
import Image from "next/image";
import ContentComum from "../../../../../assets/contentComum.png"
import { Button } from "@/components/Button";
import Editor from "@/components/Form/Quill/EditorUseQuill";

export default function Conteudo() {
  const [content, setContent] = useState<ContentItems | null>(null);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getContent(Number(params.id));
      console.log(data);
      setContent(data);
    };
    fetchData();
  }, []);
  console.log(content?.text)
  return (
    <Content>
      <div className="w-11/12 flex justify-around gap-1 pt-4 flex-wrap-reverse">
        <div className="w-1/5 flex  flex-col gap-4 border-gray-300 border-e-2 pr-2">
          <b className="text-xl">Informações: </b>
          {/* <i className="no-underline text-gray-600 cursor-default">Escrito por: Prof.ª Marcia Bueno</i> */}
          <i className="no-underline text-gray-600 cursor-default">Publicado em: 28/10/2024</i>
          <div className="border-gray-300 pb-4 border-b-2">
            <i className="no-underline text-gray-600 cursor-default">Capa:</i>
            {content?.image ?
              <img src={content?.image} alt="Preview" className="w-[260px] h-[265px] object-cover rounded-full border" />
              :
              <Image
                src={ContentComum}
                width={180}
                height={150}
                alt={content?.title || 'Imagem do conteúdo'}
                className="rounded-full z-50 w-[265px] object-cover border"
              />
            }
          </div>
          <div className="flex justify-center items-center flex-col gap-4">
            <b className="text-xs">Obrigado por ler nossos conteúdos! </b>
            <Button onClick={() => window.location.assign('/conteudos/publicados')}>Conferir mais conteudos</Button>
          </div>
        </div>
        <div className="w-9/12">
          <b className="text-2xl">Conteúdo: {content?.title}</b>
          <div className="p-8">
            {/* <Editor initialValue={content?.text}
              // setFieldValue={setFieldValue}
              title="Texto do conteúdo"
              field="text"
              readOnly
            // error={validation && errors.text && typeof errors.text == 'string' ? errors.text : ''} 
            /> */}
            <div dangerouslySetInnerHTML={{ __html: content?.text || '' }} />
          </div>
        </div>
      </div>
    </Content>

  );
}  