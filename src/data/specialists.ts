export type Specialist = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export const specialists: Specialist[] = [
  {
    id: "expertise",
    number: "01",
    title: "16+ Years of Linen Expertise",
    description:
      "Trusted expertise built on years of experience in premium linen manufacturing.",
  },
  {
    id: "manufacturing",
    number: "02",
    title: "European Grade Manufacturing",
    description:
      "Our state-of-the-art weaving facility in Navsari, Gujarat, is equipped with modern machinery, enabling us to deliver consistency and quality.",
  },
  {
    id: "stock",
    number: "03",
    title: "Ready Stock Collection",
    description:
      "We offer a wide range of in stock inventory from our warehouse, ensuring smooth delivery and fast dispatch.",
  },
  {
    id: "custom",
    number: "04",
    title: "Custom Development for Brands",
    description:
      "Tailored fabric solutions designed to bring your vision to life.",
  },
];
