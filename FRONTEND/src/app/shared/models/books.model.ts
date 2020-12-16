export class BooksModel {

    title: string;
    publishedDate: string;
    imageLinks: ImageLinks;
    description: string;
    authors: string[];
    authorss: string;
    averageRating: string;
    categories: string[];
    id: string;

    
    
    
    constructor() { }
}

export interface ImageLinks{
    smallThumbnail:string,
    thumbnail:string
}