import { handleSlug } from "@/utils/functions";
import { ContentItems } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";
import ContentComum from '../../assets/contentComum.png'

export default function ContentCard({ item }: { item: ContentItems }) {
  return (
    <Link
      href={`/conteudos/publicados/${item.id}/${handleSlug(item.title)}`}
      className="flex flex-col min-w-[265px] max-w-[265px] w-[265px] min-h-[250px] max-h-[250px] h-[250px] justify-center items-center cursor-pointer hover:shadow-lg m-4 hover:scale-105 ease-in duration-150"
    >
      <div
        className="w-full flex flex-col justify-start items-center rounded-lg h-full"
        style={{ border: '2px solid #A6A9AD' }}
      >
        <div className="flex items-center w-full rounded-lg relative" style={{ borderBottom: '2px solid #E3E4E5' }}>
          <div className="z-70 bg-black opacity-10 rounded-lg w-[262px] h-[180px] absolute" ></div>
          {
            item.image ?
              <img
                src={item?.image} // Prefix with correct MIME type
                alt={item?.title || 'Imagem do conteúdo'}
                className="rounded-lg z-50 w-[265px] h-[180px] object-cover"
              />
              :
              <Image
                src={ContentComum}
                width={180}
                height={150}
                alt={item?.title || 'Imagem do conteúdo'}
                className="rounded-lg z-50 w-[265px] h-[180px] object-cover"
              />
          }
        </div>
        <div className="py-2 px-3 text-sm">
          <div className="font-bold p-1 flex items-center w-full">
            {item?.title}
          </div>
          <div className="p-1 flex items-center w-full">
            {item?.subtitle}
          </div>
        </div>
      </div>
    </Link>
  );
}
