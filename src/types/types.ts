export type Button = {
  label: string;
  href: string;
};

export type Section = {
  heading: string;
  body: string | []; // allow either plaintext or PortableText
};

export type SectionWithButton = Section & {
  btn: Button;
};

export type SectionWithImage = Section & {
  img: string;
};

export type SectionWithImageAndButton = Section & {
  btn: Button;
  img: string;
};
