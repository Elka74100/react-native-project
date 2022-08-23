interface Post {
    id: number;
    title: string;
    body: string;
    userId: string;
    date?: Date;
    reactions?: Reaction;
}

interface Reaction {
    thumbsUp: number;
    wow: number;
    heart: number;
    rocket: number;
    coffee: number;
}

export default Post