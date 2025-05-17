"use client";

import FeatureSection from "@/components/features/FeatureSection";
import SecuritySection from "@/components/security/SecuritySection";
import { useState } from "react";

export default function Home() {
    const [securitySectionImageURL, setSecuritySectionImageURL] = useState<string>("");

    return (
        <>
            <div className="flex h-screen flex-col bg-white pt-[40px] pb-[48px] px-4 md:px-10 md:pb-[80px] md:pt-[60px]">
                <div>
                    <p className="text-[#1c1f24] text-5xl md:text-[36px] font-bold leading-[1.4] max-w-[530px]">Get enterprise-grade security</p>
                    <p className="text-[#1c1f24] text-[16px] md:text-[20px] font-normal leading-[1.5] max-w-[530px] mt-[20px] mb-[32px]">
                        Regulate and control pipeline access across your team. Configure the data plane region as per your need.
                    </p>
                </div>
                <div className="flex flex-wrap">
                    <FeatureSection changeImageURL={setSecuritySectionImageURL} />
                    <SecuritySection imageUrl={securitySectionImageURL} />
                </div>
            </div>
        </>
    );
}
