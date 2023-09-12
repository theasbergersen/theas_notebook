import { NoteData, Tag } from "./App"
import { NoteForm } from "./NoteForm"
import { useNote } from "./NoteLayout"
import logoImage from './your-logo.png.png';

type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}
export function EditNote({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
    const note = useNote()
    return (
        <>
        <img src={logoImage} alt="Your Logo" className="logo" />
        <h1 className="mb-4">Endre økt</h1>
        <NoteForm 
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={data => onSubmit(note.id, data)} 
        onAddTag={onAddTag} 
        availableTags={availableTags} 
        />
        </>

    )

    
}