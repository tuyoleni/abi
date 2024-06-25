import {FaEnvelope, FaMapMarkerAlt, FaPhone} from "react-icons/fa";

const contacts = {
    email: {
        label: "Email",
        value: "abi.ref.electrical@gmail.com\n",
        icon: <FaEnvelope />,
        link: "mailto:abi.ref.electrical@gmail.com\n"
    },
    phone: {
        label: "Phone",
        value: "+264 817191011",
        icon: <FaPhone />,
        link: "tel:+264817191011"
    },
    address: {
        label: "Address",
        value: "123 Main St, City, Country",
        icon: <FaMapMarkerAlt />,
        link: "https://maps.app.goo.gl/vbvngtESgvHrvHyh8"
    }
};

export default contacts;
