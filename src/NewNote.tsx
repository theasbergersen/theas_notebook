import { NoteData, Tag } from "./App"
import { NoteForm } from "./NoteForm"
import DatePicker from "./DatePicker"
import logoImage from './your-logo.png.png';

type NewNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}
export function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {


    return (
        <>
        <img src={logoImage} alt="Your Logo" className="logo" />
        <h1 className="mb-4">Legg til ny økt</h1>
        <NoteForm 
        onSubmit={onSubmit} 
        onAddTag={onAddTag} 
        availableTags={availableTags} 
        />
        </>

    )

    
}