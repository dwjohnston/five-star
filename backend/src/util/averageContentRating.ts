import { Content, ContentSummary } from "common";
export function averageContentRating(content: Content): ContentSummary {
    //TODO: Improve this function to smooth outliers/small samples. 
    if (content.ratings.length ===0) {
        return {
            contentId: content.contentId, 
            rating: 3
        }
    }

    return {
        contentId: content.contentId,
        rating: content.ratings.reduce((acc, cur, i) => {
            return (acc + cur.rating); 
        }, 0) / content.ratings.length
    };
}
