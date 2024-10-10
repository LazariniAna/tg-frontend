'use client'
import Content from "@/components/Content";
import { useEffect, useState } from "react";
import { getContent } from "@/server/services";
import { ContentItems } from "@/utils/types";

export default function Conteudo() {
    const [content, setContent] = useState<ContentItems | null>(null);

  useEffect(() => {
        const fetchData = async () => {
            const data = await getContent(1);
            setContent(data);
            console.log(data);
        };
        fetchData();
    }, []);

  return (
   <Content>
    <div className="w-10/12 flex gap-2 pt-4">
      <div className="w-1/4">
        <b>Informações </b>
      </div>
      <div className="w-full">
        <b className="text-2xl">Conteúdo: </b>
        <div className="p-8">
          <div dangerouslySetInnerHTML={{ __html: content?.text || '' }} />
        </div>
      </div>
    </div>
   </Content>

  );
}  