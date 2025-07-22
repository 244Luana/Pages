import { api } from "../http/axios"

export interface IReview {
    post_id: string
    comment: string
    date?: string
}
class ReviewData {
    getByUser() {
        return api.get(`/reviews/user/`)
    }
    getByPost(post_id: string) {
        return api.get(`/reviews/book/${post_id}`)
    }
    create(data: IReview) {
        return api.post('/reviews/', data)
    }
    delete(id: string) {
        return api.delete(`/reviews/${id}`)
    }
}

export default new ReviewData()