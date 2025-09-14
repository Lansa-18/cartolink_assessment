export interface GenerateItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isNew?: boolean;
  bgColor: string;
}

export interface CarouselCardProps {
  imgSrc: string;
  modelText: string;
  centerText: string;
  bottomHeaderText: string;
  bottomParagraph: string;
  btnText: string;
}

export interface carouselDetails {
  id: number;
  imgSrc: string;
  modelText: string;
  centerText: string;
  bottomHeaderText: string;
  bottomParagraph: string;
  btnText: string;
}
