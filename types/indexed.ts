
interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface card_data {
  id: number;
  title: string;
  img: string;
  techstack: string[];
  description: string;
  link: string;
  cover: string;
  links: {
    id: number;
    img: string;
    link: string;
    title: string;
  }[];
  ytvidlink: string;
  Share_link: string;
}
