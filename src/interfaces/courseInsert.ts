export interface ICourseInsert {
    name: string,
    type: string,
    setup: string;
    exams: string,
    summaries: string,
    course: string,
    video_url: string;
    videos: string[],
}