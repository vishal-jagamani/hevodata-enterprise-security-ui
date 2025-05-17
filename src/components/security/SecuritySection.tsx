"use client";

import Image from "next/image";
import React from "react";

type SecuritySectionProps = {
    imageUrl: string;
};

const SecuritySection: React.FC<SecuritySectionProps> = ({ imageUrl }) => {
    if (!imageUrl) return null;

    return (
        <>
            <div className="flex w-full justify-center items-center sm:w-2/3">
                <Image src={imageUrl} alt="" className="h-full md:w-[496px] w-full mt-8" />
            </div>
        </>
    );
};

export default SecuritySection;
