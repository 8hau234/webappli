import { IMG_1CROCS_JPEG, IMG_2CROCS_JPEG, IMG_3CROCS_JPEG, IMG_4CROCS_JPEG, IMG_5CROCS_JPEG, IMG_BAYA_JPEG, IMG_CLASSIC_JPEG, IMG_CROCBAND_JPEG, IMG_MARBLED_JPEG, IMG_REALTREE_JPEG, IMG_BAYA_BLACK_JPG, IMG_BAYA_BLUE_JPG, IMG_BAYA_GREEN_JPG, IMG_BAYA_ICEBLUE_JPG, IMG_BAYA_KHAKI_JPG, IMG_BAYA_NAVY_JPG, IMG_BAYA_WHITE_JPG, IMG_BAYA_YELLOW_JPG, IMG_CLASSIC_ATMOSPHERE_PNG, IMG_CLASSIC_BALLERINA_PINK_PNG, IMG_CLASSIC_BONE_PNG, IMG_CLASSIC_BRIGHT_COBALT_PNG, IMG_CLASSIC_CHOCOLATE_PNG, IMG_CLASSIC_DIGITAL_VIOLET_PNG, IMG_CLASSIC_FLAMINGO_PNG, IMG_CLASSIC_JADE_PNG, IMG_CLASSIC_LAVENDER_PNG, IMG_CLASSIC_MOON_JELLY_PNG, IMG_CLASSIC_PEPPER_PNG, IMG_CLASSIC_PISTACHIO_PNG, IMG_CLASSIC_QUARTZ_PNG, IMG_CLASSIC_SLATE_PNG, IMG_CLASSIC_WHITE_PNG, IMG_CROCBAND_BLACK_JPG, IMG_CROCBAND_BLUE_JPG, IMG_CROCBAND_NAVY_JPG, IMG_CROCBAND_PINK_JPG, IMG_CROCBAND_RED_JPG, IMG_CROCBAND_STUCCO_JPG, IMG_CROCBAND_WHITE_JPG, IMG_CROCS_COMPARE_JPG, IMG_CROCS1_JPEG, IMG_CROCS2_JPEG, IMG_CROCS3_JPEG, IMG_CROCS4_JPG, IMG_CRUSH_BLACK_PNG, IMG_CRUSH_BONE_PNG, IMG_CRUSH_DARK_IRIS_PNG, IMG_CRUSH_PINK_PNG, IMG_CRUSH_QUARTZ_PNG, IMG_CRUSH_WHITE_PNG, IMG_MARBLE_BLACK_PNG, IMG_MARBLE_BLUE_PNG, IMG_MARBLE_BONE_PNG, IMG_MARBLE_RED_PNG } from "./crocs_images";

export interface ProductItem {
    name: string;
    color: string;
    type?: string; 
    fit?: string; 
    condition: string;
    img: string;
    price: number;
    category: string;
    description: string;
}

export const CROCS_ITEMS: ProductItem[] = [
    {
        name: "Classic Clog",
        color: "Black",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_1CROCS_JPEG,
        price: 8495,
        category: "Classic",
        description:
            "The original Classic Clog. Lightweight, water-friendly, and perfect for any occasion.",
    },
    {
        name: "Classic Clog",
        color: "Pink",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_4CROCS_JPEG,
        price: 7995,
        category: "Classic",
        description:
            "Fresh white Classic Clogs. The ultimate canvas for your Jibbitz™ charms.",
    },



    {
        name: "Crocband Clog",
        color: "Black",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CROCBAND_BLACK_JPG,
        price: 10995,
        category: "CrocBand",
        description:
            "The classic Crocband in sleek black. Sporty midsole stripe for a retro look.",
    },
    {
        name: "Crocband Clog",
        color: "Red",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CROCBAND_RED_JPG,
        price: 10995,
        category: "CrocBand",
        description:
            "Bold red Crocband Clog. Vintage sneaker style meets Crocs comfort.",
    },
    {
        name: "Crocband Clog",
        color: "Blue",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CROCBAND_BLUE_JPG,
        price: 10995,
        category: "CrocBand",
        description:
            "Cool blue Crocband Clog. Lightweight and fun to wear.",
    },
    {
        name: "Crocband Clog",
        color: "White",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CROCBAND_WHITE_JPG,
        price: 10995,
        category: "CrocBand",
        description:
            "Crisp white Crocband Clog. A clean, classic look for any outfit.",
    },
    {
        name: "Crocband Clog",
        color: "Navy",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CROCBAND_NAVY_JPG,
        price: 10995,
        category: "CrocBand",
        description:
            "Timeless Navy Crocband Clog. A versatile classic for everyday comfort.",
    },
    {
        name: "Crocband Clog",
        color: "Stucco",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CROCBAND_STUCCO_JPG,
        price: 10995,
        category: "CrocBand",
        description:
            "Neutral Stucco Crocband Clog. Understated style that pairs with everything.",
    },
    {
        name: "Crocband Clog",
        color: "Pink",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CROCBAND_PINK_JPG,
        price: 10995,
        category: "CrocBand",
        description:
            "Playful Pink Crocband Clog. Add a pop of color to your step.",
    },
    {
        name: "Baya Clog",
        color: "Yellow",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_BAYA_YELLOW_JPG,
        price: 6995,
        category: "Baya",
        description:
            "Bright Yellow Baya Clog. Make a statement with this vibrant color.",
    },
    {
        name: "Baya Clog",
        color: "Ice Blue",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_BAYA_ICEBLUE_JPG,
        price: 6995,
        category: "Baya",
        description:
            "Cool Ice Blue Baya Clog. Refreshing look for hot summer days.",
    },
    {
        name: "Baya Clog",
        color: "Blue",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_BAYA_BLUE_JPG,
        price: 6995,
        category: "Baya",
        description:
            "Classic Blue Baya Clog. Breathable comfort in a bold hue.",
    },
    {
        name: "Baya Clog",
        color: "Green",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_BAYA_GREEN_JPG,
        price: 6995,
        category: "Baya",
        description:
            "Nature-inspired Green Baya Clog. Perfect for outdoor fun.",
    },
    {
        name: "Baya Clog",
        color: "White",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_BAYA_WHITE_JPG,
        price: 6995,
        category: "Baya",
        description:
            "Clean White Baya Clog. The ultimate blank canvas for customization.",
    },
    {
        name: "Baya Clog",
        color: "Navy",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_BAYA_NAVY_JPG,
        price: 6995,
        category: "Baya",
        description:
            "Deep Navy Baya Clog. A dependable classic color.",
    },
    {
        name: "Baya Clog",
        color: "Khaki",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_BAYA_KHAKI_JPG,
        price: 6995,
        category: "Baya",
        description:
            "Versatile Khaki Baya Clog. Neutral tone for any casual look.",
    },
    {
        name: "Baya Clog",
        color: "Black",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_BAYA_BLACK_JPG,
        price: 6995,
        category: "Baya",
        description:
            "Sleek Black Baya Clog. The go-to choice for effortless style.",
    },
    {
        name: "Classic Clog",
        color: "Bone",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_BONE_PNG,
        price: 7995,
        category: "Classic",
        description:
            "A neutral Bone Classic Clog. Matches everything in your wardrobe.",
    },
    {
        name: "Classic Clog",
        color: "Pistachio",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_PISTACHIO_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Fresh Pistachio Classic Clog. A subtle pop of green.",
    },
    {
        name: "Classic Clog",
        color: "Lavender",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_LAVENDER_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Soft Lavender Classic Clog. Calming color and iconic comfort.",
    },
    {
        name: "Classic Clog",
        color: "Slate Grey",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_SLATE_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Versatile Slate Grey Classic Clog. Modern and industrial.",
    },
    {
        name: "Classic Clog",
        color: "Digital Violet",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_DIGITAL_VIOLET_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Vibrant Digital Violet Classic Clog. Stand out from the crowd.",
    },
    {
        name: "Classic Clog",
        color: "Quartz",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_QUARTZ_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Shimmering Quartz Classic Clog. A touch of elegance.",
    },
    {
        name: "Classic Clog",
        color: "Flamingo",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_FLAMINGO_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Fun Flamingo Classic Clog. Bright and cheerful.",
    },
    {
        name: "Classic Clog",
        color: "Ballerina Pink",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_BALLERINA_PINK_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Soft Ballerina Pink Classic Clog. Delicate and lovely.",
    },
    {
        name: "Classic Clog",
        color: "Moon Jelly",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_MOON_JELLY_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Mystical Moon Jelly Classic Clog. A unique shade of lilac.",
    },
    {
        name: "Classic Clog",
        color: "Bright Cobalt",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_BRIGHT_COBALT_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Bold Bright Cobalt Classic Clog. Electric blue energy.",
    },
    {
        name: "Classic Clog",
        color: "Jade Stone",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_JADE_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Vivid Jade Stone Classic Clog. A gem of a color.",
    },
    {
        name: "Classic Clog",
        color: "White",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_WHITE_PNG,
        price: 8495,
        category: "Classic",
        description:
            "Crisp White Classic Clog. The cleanest look possible.",
    },
    {
        name: "Classic Clog",
        color: "Pepper",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_PEPPER_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Spicy Pepper Red Classic Clog. Heat up your style.",
    },
    {
        name: "Classic Clog",
        color: "Atmosphere",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_ATMOSPHERE_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Airy Atmosphere Grey Classic Clog. Light and breezy.",
    },
    {
        name: "Classic Clog",
        color: "Chocolate",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CLASSIC_CHOCOLATE_PNG,
        price: 7995,
        category: "Classic",
        description:
            "Rich Chocolate Brown Classic Clog. Earthy and grounded.",
    },
    {
        name: "Platform Clog",
        color: "White",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CRUSH_WHITE_PNG,
        price: 10995,
        category: "Platform",
        description:
            "Elevated White Platform Clog. Added height and bold design.",
    },
    {
        name: "Platform Clog",
        color: "Pink",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CRUSH_PINK_PNG,
        price: 10995,
        category: "Platform",
        description:
            "Playful Pink Platform Clog. Stand tall in style.",
    },
    {
        name: "Platform Clog",
        color: "Bone",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CRUSH_BONE_PNG,
        price: 10995,
        category: "Platform",
        description:
            "Neutral Bone Platform Clog. Versatile platform comfort.",
    },
    {
        name: "Platform Clog",
        color: "Black",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CRUSH_BLACK_PNG,
        price: 10995,
        category: "Platform",
        description:
            "Bold Black Platform Clog. Edgy and elevated.",
    },
    {
        name: "Crush Clog",
        color: "Quartz",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CRUSH_QUARTZ_PNG,
        price: 10995,
        category: "Crush",
        description:
            "Soft Quartz Crush Clog. A fresh take on the chunky favorite.",
    },
    {
        name: "Crush Clog",
        color: "Dark Iris",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_CRUSH_DARK_IRIS_PNG,
        price: 10995,
        category: "Crush",
        description:
            "Deep Dark Iris Crush Clog. Bold color with extra height.",
    },
    {
        name: "Classic Clog",
        color: "Blue Marble",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_MARBLE_BLUE_PNG,
        price: 9995,
        category: "Marbled",
        description:
            "Swirling Blue Marble Classic Clog. Each pair is unique.",
    },
    {
        name: "Classic Clog",
        color: "Red Marble",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_MARBLE_RED_PNG,
        price: 9995,
        category: "Marbled",
        description:
            "Fiery Red Marble Classic Clog. Stand out with this dynamic pattern.",
    },
    {
        name: "Classic Clog",
        color: "Black Marble",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_MARBLE_BLACK_PNG,
        price: 9995,
        category: "Marbled",
        description:
            "Sleek Black Marble Classic Clog. Modern art for your feet.",
    },
    {
        name: "Classic Clog",
        color: "Bone Marble",
        type: "Unisex",
        condition: "New / Tag",
        img: IMG_MARBLE_BONE_PNG,
        price: 9995,
        category: "Marbled",
        description:
            "Subtle Bone Marble Classic Clog. Elegant and understated.",
    },
];
