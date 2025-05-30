"use client";

export interface ActorsProps {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  imageUrl: string;
  title: string;
  family: string;
}

function Card({  firstName, lastName, fullName, imageUrl, title, family }: ActorsProps) {
  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={firstName}
        className="w-full h-64 object-cover"
      />
      <div className="p-5 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{fullName}</h2>
        <p className="text-sm text-gray-500 italic">{title}</p>
        <div className="mt-2 text-sm text-gray-600">
          <p><span className="font-medium">Family:</span> {family}</p>
          <p><span className="font-medium">First Name:</span> {firstName}</p>
          <p><span className="font-medium">Last Name:</span> {lastName}</p>
        </div>
      </div>
    </div>
  );
}

export { Card };
