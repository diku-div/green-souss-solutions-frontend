import React from "react";

interface StatcardProps {
    value: string;
    label: string;
    description: string;
}

const StatCard: React.FC<StatcardProps> = ({ value, label, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl font-bold text-green-600 mb-2">{value}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{label}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default StatCard;
