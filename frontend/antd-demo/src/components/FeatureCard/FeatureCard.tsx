import React from 'react';
import { IconType } from 'react-icons';
import { AiOutlineLock, AiOutlineCustomerService, AiOutlineTool, AiOutlineCheckCircle, AiOutlineFastForward, AiOutlineBulb } from 'react-icons/ai';

interface FeatureCardProps {
    icon: IconType;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex items-center justify-center flex-col">
            {/* Use the icon component directly */}
            {React.createElement(icon, { size: '3rem', className: 'text-blue-500 mb-4' })}
            <span className="font-semibold">{title}</span>
            <p className="text-sm text-gray-600 text-center lg:text-left mt-2">
                {description}
            </p>
        </div>
    );
}

export default FeatureCard;