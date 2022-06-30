export enum NotesType {
    NOTES = "Notes",
    BOOK = "Book",
    FIRST_YEAR = "FirstYear"
}

export interface INotes {

    id: string,
    title: string,
    type: string,
    owner: string,
    link: string,
    fresher: string,
    isPremium: string
}