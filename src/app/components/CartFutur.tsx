import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

type CartFuturProps = {
  title: string;
  description: string;
  buttonText?: string;
  imageUrl: string;
  };

export default function CartFutur({
  title,
  description,
  imageUrl,
  buttonText = "Learn more",

}: CartFuturProps) {
  return (
    <section className="relative w-full  h-[400px] md:h-[400px] rounded-4xl overflow-hidden">
      <Image
        src={imageUrl}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {title}
          </h1>
          <p className="text-base text-white/70 md:text-lg mb-10">
            {description}
          </p>
          <Link href={'/Article#Friendly'} className=" ">
           <Button  variante="nature" >{buttonText}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

