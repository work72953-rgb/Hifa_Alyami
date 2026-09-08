import { FaWhatsapp, FaMapPin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";

export const profile = {
  name: "هيفاء صالح علي اليامي",
  location: "الرياض، السعودية",
  email: "Haifa.s.alyami@gmail.com",
  phone: "0501200841",
  whatsapp: "966501200841",

  x: "https://x.com/hixll2002?s=11&t=zaOwxsXa0hkpvkDbnaDYoA",
  linkedin: "https://www.linkedin.com/in/haifa-854815357/",
  tiktok: "https://www.tiktok.com/@haif526?_r=1&_t=ZS-99Z7nQTZL2A",

  // Contact Icons
  mail_icon: <MdEmail size={24} />,
  whatsapp_icon: <FaWhatsapp size={24} />,
  location_icon: <FaMapPin size={24} />,
  x_icon: <FaXTwitter size={22} />,
  linkedin_icon: <FaLinkedinIn size={22} />,
  tiktok_icon: <FaTiktok size={22} />,

  bio: "متخصصة في العلاقات العامة والاتصال الإعلامي، بخبرة عملية في صناعة المحتوى الرقمي، العلاقات الإعلامية والاتصال المؤسسي. أعمل على تطوير الأفكار وكتابة المحتوى وبناء الرسائل الاتصالية التي تخدم أهداف الجهات والعلامات التجارية، إلى جانب اهتمامي بالتقديم والتعليق الصوتي بالفصحى والعامية.",

  skills: [
    "كتابة المحتوى الرقمي",
    "العلاقات العامة",
    "الاتصال المؤسسي",
    "العلاقات الإعلامية",
    "التخطيط الاتصالي",
    "الأفكار الإبداعية",
    "التقديم والإلقاء",
    "التعليق الصوتي",
  ],
};

export const services = [
  {
    title: "كتابة المحتوى",
    description:
      "خبرة في إعداد وصياغة المحتوى الرقمي للمناسبات والحملات والمبادرات والمنصات المختلفة، بأسلوب واضح ومتوافق مع هوية الجهة والجمهور.",
  },
  {
    title: "الأفكار والحملات",
    description:
      "تطوير أفكار إبداعية وسلاسل محتوى ومقترحات حملات تربط الفكرة بالهدف الاتصالي وتمنح الرسالة حضورًا أكثر تأثيرًا.",
  },
  {
    title: "العلاقات الإعلامية والاتصال",
    description:
      "المساهمة في إعداد المواد الإعلامية والرسائل الاتصالية وتنظيم المبادرات والفعاليات ودعم الظهور الإعلامي للجهات.",
  },
];

