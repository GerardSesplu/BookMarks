import { Identifiers } from '@angular/compiler';

export class BookModel {

    title: string;
    subtitle: string;
    publisher: string;
    publishedDate: string;
    pageCount: string;
    printedPageCount: string;
    language: string;
    industryIdentifiers: IndustryIdentifiers[];
    imageLinks: ImageLinks;
    dimensions: Dimensions;
    description: string;
    categories: string[];
    authors: string[];
    ratingsCount: string;
    averageRating: string;
    id: string;
    constructor() { }
}


interface ImageLinks {
    large: string;
    medium: string;
    small: string;
}

interface Dimensions{
    height:string;
}

interface IndustryIdentifiers{
    type:string,
    identifier:string
}