export interface Collection {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
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
    results: {
      id: number;
      name: string;
      description: string;
      modified: string;
      thumbnail: {
        path: string;
        extension: string;
      };
      resourceURI: string;
      comics: Collection;
      series: Collection;
      stories: Collection;
      events: Collection;
      urls: {
        type: string;
        url: string;
      }[];
    }[];
  };
}
