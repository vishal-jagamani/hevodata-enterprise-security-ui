import { features } from "@/data/features";
import React, { useEffect, useRef, useState } from "react";
import FeatureCard from "./FeatureCard";

type FeatureSectionProps = {
    changeImageURL: (url: string) => void;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({ changeImageURL }) => {
    const [activeCard, setActiveCard] = useState<number>(0);
    const [autoPlay, setAutoPlay] = useState<boolean>(true);
    const timeoutRef = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        if (autoPlay) {
            console.log("active card", features[activeCard]);
            timeoutRef.current = setTimeout(() => {
                setActiveCard((prev) => (prev + 1) % features.length);
            }, 3000);
        }
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [activeCard, autoPlay]);

    useEffect(() => {
        changeImageURL(features[activeCard].imageUrl);
    }, [changeImageURL, activeCard]);

    const handleClick = (id: number) => {
        const index = features.findIndex((f) => f.id === id);
        setActiveCard(index);
        setAutoPlay(false);
        changeImageURL(features[index].imageUrl);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    return (
        <>
            <div className="flex flex-col w-full sm:w-1/3 space-y-[24px]">
                {features &&
                    features?.map((feature, index) => {
                        return <FeatureCard key={feature.id} {...feature} onClick={() => handleClick(feature.id)} isActive={index === activeCard} />;
                    })}
            </div>
        </>
    );
};

export default FeatureSection;
