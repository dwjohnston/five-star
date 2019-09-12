export declare type RatingValues = 1 | 2 | 3 | 4 | 5;
export interface Rating {
    contentId: number;
    userId: number;
    rating: RatingValues;
}
export interface Content {
    contentId: number;
    ratings: Rating[];
}
export interface ContentSummary {
    contentId: number;
    rating: number;
}
export interface User {
    userId: number;
}
