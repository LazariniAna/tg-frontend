import { baloo_2 } from "@/utils/fonts";

export default function Title({ title }: { title: string }) {

  return (
    <h1 style={baloo_2.style} className="mb-4 max-sm:ml-4 sm:text-2xl max-sm:text-xl">
      {title}
    </h1>
  );
}  