export type RatingValues = 1|2|3|4|5; 

class ObjectInstantiationError extends Error {

}

export interface Rating {
    contentId: number; 
    userId: number; 
    rating: RatingValues; 
}

export function createRating(data : object ) : Rating{
    const _data = data as Rating;   //Type coercion here - if the type is incorrect it will error below, which is what we want.  
    try {
        const rating = {
            contentId: _data.contentId, 
            userId: _data.userId, 
            rating: _data.rating
        }; 

        Object.values(rating).forEach(v => {
            if (v === null || v === undefined) {
                throw new Error(); 
            }
        }); 

        return rating; 
    } catch(err) {
        throw new ObjectInstantiationError(); 
    }
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
