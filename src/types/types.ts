export type Section = {
  heading: string;
  body: string | []; // allow either plaintext or PortableText
};

export type SectionWithButton = Section & {
  btnText: string;
};

export type SectionWithImage = Section & {
  img: string;
};

export type SectionWithImageAndButton = Section & {
  btnText: string;
  img: string;
};
