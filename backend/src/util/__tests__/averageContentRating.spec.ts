import { averageContentRating } from "../averageContentRating";

describe("averageContentRating", () => {
    it("averages [1,5] correctly", () => {
        const result = averageContentRating({
            contentId: 123,
            ratings: [
                {
                    userId: 111,
                    contentId: 123,
                    rating: 1
                }, 
                {
                    userId: 112,
                    contentId: 123,
                    rating: 5
                }
            ]
        }); 

        expect(result).toEqual({
            contentId: 123, 
            rating: 3
        }); 
    });

    it ("Content with no ratings return an average of 3", () => {
        const result = averageContentRating({
            contentId: 123,
            ratings: [
                          ]
        }); 

        expect(result).toEqual({
            contentId: 123, 
            rating: 3
        }); 
    }); 
}); 