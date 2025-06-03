import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  company: string;
  testimonial: string;
  imageUrl: string;
};

export default function TestimonialCard({
  name,
  company,
  testimonial,
  imageUrl,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:shadow-black/20 transition-all duration-500 w-full">
      <div className="flex flex-col md:flex-row items-center space-x-4 mb-4">
        <Image
          src={imageUrl}
          alt={name}
          width={50}
          height={50}
          className="rounded-full h-[50px] object-cover"
        />
        <div className="text-center md:text-start" >
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
      <p className="text-gray-800 text-base text-center md:text-start">{testimonial}</p>
    </div>
  );
}
