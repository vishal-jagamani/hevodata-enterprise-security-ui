    import { featureCard } from "@/types/features.types";
    import { ShieldUser, TextSearch, UserCog } from "lucide-react";
    import image1 from "@/assets/images/image1.svg";
    import image2 from "@/assets/images/image2.svg";
    import image3 from "@/assets/images/image3.svg";

    export const features: featureCard[] = [
        {
            id: 1,
            title: "Role based access control",
            Icon: UserCog,
            active: true,
            imageUrl: image1,
        },
        {
            id: 2,
            title: "Run pipelines in the region of your choice",
            Icon: TextSearch,
            active: false,
            imageUrl: image2,
        },
        {
            id: 3,
            title: "Compliance that you can trust",
            Icon: ShieldUser,
            active: false,
            imageUrl: image3,
        },
    ];
