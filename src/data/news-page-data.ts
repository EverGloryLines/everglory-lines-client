export interface NewsCard {
  id: string;
  title: string;
  category?: string;
  backgroundImage: string;
  link: string;
  variant?: "default" | "highlight";
}

export interface NewsGridSection {
  title: string;
  description: string;
  cards: NewsCard[];
}

export const newsroomData: NewsGridSection = {
  title: "Everglory Newsroom",
  description:
    "Keep up to date with the latest news, updates and communications.",
  cards: [
    {
      id: "1",
      title: "News",
      backgroundImage: "/Container_operation_in_port.jpg",
      link: "/news",
    },
    {
      id: "2",
      title: "Customer Advisories",
      category: "Customer Advisories",
      backgroundImage: "/Container_operation_in_port.jpg",
      link: "/customer-advisories",
    },
    {
      id: "3",
      title: "Press Releases",
      backgroundImage: "/Container_operation_in_port.jpg",
      link: "/press-releases",
    },
    {
      id: "4",
      title: "Stories",
      backgroundImage: "/Container_operation_in_port.jpg",
      link: "/stories",
    },
    {
      id: "5",
      title: "Media Kit",
      backgroundImage: "/Container_operation_in_port.jpg",
      link: "/media-kit",
    },
    {
      id: "6",
      title: "Contact Media Office",
      backgroundImage: "/Container_operation_in_port.jpg",
      link: "/contact",
      variant: "highlight",
    },
  ],
};
