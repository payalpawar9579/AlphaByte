import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import { AiOutlineLock, AiOutlineCustomerService, AiOutlineTool, AiOutlineCheckCircle, AiOutlineFastForward, AiOutlineBulb } from 'react-icons/ai';

const Features = () => {
    // Define an array to store data for each feature card
    const featureData = [
        {
            icon: AiOutlineLock,
            title: "Secure",
            description: "We strictly only deal with vendors that provide top-notch security."
        },
        {
            icon: AiOutlineCustomerService,
            title: "24/7 Support",
            description: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."
        },
        {
            icon: AiOutlineTool,
            title: "Customizable",
            description: "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."
        },
        // Add more feature data objects as needed...
        {
            icon: AiOutlineCheckCircle,
            title: "Reliable",
            description: "Our services are highly reliable, ensuring smooth operations."
        },
        {
            icon: AiOutlineFastForward,
            title: "Efficient",
            description: "We provide fast and efficient solutions to meet your needs."
        },
        {
            icon: AiOutlineBulb,
            title: "Innovative",
            description: "Stay ahead with our innovative solutions and cutting-edge technology."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 lg:py-16">
            <h5 className="text-lg font-semibold text-center lg:text-left mb-2 lg:mb-4">Features</h5>
            <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left mb-4 lg:mb-8">
                We have Amazing <span className="text-blue-500">Service.</span>
            </h2>
            <p className="text-lg text-gray-600 text-center lg:text-left mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Use map to render each feature card dynamically */}
                {featureData.map((feature, index) => (
                    <FeatureCard
                        key={index} // Ensure each card has a unique key
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Features;
