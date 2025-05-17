"use client";

import { LucideIcon } from "lucide-react";
import React from "react";

type FeatureCardProps = {
    id: number;
    title: string;
    Icon: LucideIcon;
    isActive: boolean;
    onClick: (id: number) => void;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ id, title, Icon, isActive, onClick }) => {
    return (
        <>
            <div
                onClick={() => onClick(id)}
                className={`flex items-center gap-4 transition-colors duration-300 p-3 md:p-4 rounded-2xl border cursor-pointer ${
                    isActive ? "border-[var(--silver-cloud)] shadow-md bg-white" : "border-t-[#e1e4ea] bg-[#f5f7fa] hover:shadow-md hover:bg-[white]"
                }`}
            >
                <div className="flex relative w-12 h-12">
                    {isActive && (
                        <div
                            className={`z-50 self-center absolute inset-0 animate-spin inline-block size-12 border-3 border-[#5b2cc9] border-t-transparent text-[#5b2cc9] rounded-full`}
                            role="status"
                            aria-label="loading"
                        ></div>
                    )}
                    <div className="relative z-10 flex items-center justify-center w-full h-full rounded-full bg-white">
                        {React.cloneElement(<Icon />, {
                            className: `size-6 ${isActive ? "text-[#5b2cc9]" : "text-gray-500"}`,
                        })}
                    </div>
                </div>
                <p className="text-[14px] md:text-[20px] text-[#1c1f24] font-[600]">{title}</p>
            </div>
        </>
    );
};

export default FeatureCard;
