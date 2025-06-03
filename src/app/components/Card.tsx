import React from "react";

interface CardProps {
  title: string;
  description: string;
  ctaText?: string;
  isTestimonial?: boolean;
  isContact?: boolean;
  authorName?: string;
  authorCompany?: string;
  authorDescription?: string;
  email?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  ctaText,
  isTestimonial = false,
  isContact = false,
  authorName,
  authorCompany,
  authorDescription,
  email,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 m-4 hover:shadow-xl transition-shadow duration-300">
      {!isTestimonial && !isContact && (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          {ctaText && (
            <a
              href="#"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
            >
              {ctaText}
            </a>
          )}
        </>
      )}

      {isContact && (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <a
            href={`mailto:${email}`}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
          >
            {ctaText}
          </a>
        </>
      )}

      {isTestimonial && (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600 mb-4 italic">"{description}"</p>
          <div className="mt-4">
            {authorName && <p className="font-semibold text-gray-800">{authorName}</p>}
            {authorCompany && <p className="text-gray-600 text-sm">{authorCompany}</p>}
            {authorDescription && <p className="text-gray-500 text-xs mt-1">{authorDescription}</p>}
          </div>
        </>
      )}
    </div>
  )};



export default Card;
