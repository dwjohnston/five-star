import { RatingValues, ContentSummary, User, Rating } from "common";
export async function fetchAllContent(): Promise<ContentSummary[]> {
    const result = await fetch("/api/content");
    return result.json();
}

export async function postRating(contentId: number, userId: number, rating: RatingValues): Promise<Rating> {
    const result = await fetch(`/api/content/${contentId}/rating`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            contentId,
            userId,
            rating
        })
    })

    return result.json();
}
export async function fetchUser(): Promise<User> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                userId: 101
            });
        }, 4000)
    });
}