import {IVideo} from "./video";

export interface ICourse {
    id: number;
    name: string;
    type: string;
    setup?: string;
    exams?: string;
    summaries?: string;
    course?: string;
    videos?: Array<IVideo>
}