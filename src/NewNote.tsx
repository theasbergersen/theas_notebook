import { NoteData, Tag } from "./App"
import DatePicker from "./DatePicker"
import { NoteForm } from "./NoteForm"

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}
export function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
    return (
        <>
        <h1 className="mb-4">New workout</h1>
        <NoteForm 
        onSubmit={onSubmit} 
        onAddTag={onAddTag} 
        availableTags={availableTags} 
        />
        <DatePicker />
        </>

    )

    
}