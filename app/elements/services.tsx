import { RiHomeGearLine } from "react-icons/ri";
import { MdBusiness, MdOutlineEngineering } from "react-icons/md";


const services = [
    {
        name: 'Residential A/C',
        description: 'Installation, maintenance, and repair services for residential air conditioning systems.',
        icon: <RiHomeGearLine size={28}/>,
        data: {
            images: [
                '/images/residential-ac-image1.jpg',
                '/images/residential-ac-image2.jpg'
            ],
            client: {
            //client data
            }
        }
    },
    {
        name: 'Commercial A/C',
        description: 'Installation, maintenance, and repair services tailored for commercial air conditioning systems.',
        icon: <MdBusiness size={28}/>
        ,
        data: {
            images: [
                '/images/commercial-ac-image1.jpg',
                '/images/commercial-ac-image2.jpg'
            ],
            client: {
                kfc:{
                    name: 'KFC',
                    description: 'Restaurant chain that relied on ABI Refrigeration & Electrical for their needs.',
                    image: '/images/kfc-restaurant.jpg'
                },
                hungryLion: {
                    name: 'Hungry Lion',
                    description: 'Fast food chain that received services from ABI Refrigeration & Electrical.',
                    image: '/images/hungry-lion.jpg'
                },
                engela: {
                    name: 'Engela State Hospital',
                    description: 'Hospital facility that benefited from ABI Refrigeration & Electrical services.',
                    image: '/images/engela-hospital.jpg'
                },
                frescho:{
                    name: 'Frescho',
                    description: 'Retail store chain where ABI Refrigeration & Electrical provided services.',
                    image: '/images/frescho-store.jpg'
                }
            }
        }
    },
    {
        name: 'Service and Repair',
        description: 'Comprehensive service and repair solutions for HVAC systems, refrigeration units, and electrical appliances.',
        icon: <MdOutlineEngineering size={28}/>
        ,
        data: {
            images: [
                '/images/service-repair-image1.jpg',
                '/images/service-repair-image2.jpg'
            ],
            client: [
                {
                    name: 'Abi Refrigeration & Electrical',
                    logo: '/images/abi-logo.png',
                    description: 'ABI Refrigeration & Electrical offers troubleshooting and repair services for a wide range of electrical appliances and HVAC systems.',
                    projects: [
                        {
                            name: 'City Mall',
                            description: 'Shopping mall where ABI Refrigeration & Electrical provided maintenance services.',
                            image: '/images/city-mall.jpg'
                        },
                        {
                            name: 'Municipality Offices',
                            description: 'Local government offices that benefited from ABI Refrigeration & Electrical services.',
                            image: '/images/municipality-offices.jpg'
                        }
                    ]
                }
            ]
        }
    }
];

export { services };
