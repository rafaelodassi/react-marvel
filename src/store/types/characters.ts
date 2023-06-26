export interface Collection {
  available: number;
  collectionURI: string;
  items: { [key: string]: string }[];
  returned: number;
}

export interface Image {
  path: string;
  extension: string;
}

export interface Urls {
  type: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Image;
  resourceURI: string;
  comics: Collection;
  series: Collection;
  stories: Collection;
  events: Collection;
  urls: Urls[];
}

export interface CharactersRes {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  };
}

export interface Comics {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: {
    type: string;
    language: string;
    text: string;
  }[];
  resourceURI: string;
  urls: Urls[];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: [];
  collections: [];
  collectedIssues: [];
  dates: {
    type: string;
    date: string;
  }[];
  prices: {
    type: string;
    price: number;
  }[];
  thumbnail: Image;
  images: Image[];
  creators: Collection;
  characters: Collection;
  stories: Collection;
  events: Collection;
}

export interface ComicsRes {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comics[];
  };
}
