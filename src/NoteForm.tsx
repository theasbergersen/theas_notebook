import { FormEvent, useRef, useState } from "react";
import { Form, Stack, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable"
import { NoteData, Tag } from "./App";
import { v4 as uuidV4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


type NoteFormProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
} & Partial<NoteData>

export function NoteForm({ onSubmit, onAddTag, availableTags, title = "", markdown = "", tags = [], date = "", }: NoteFormProps) {
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)
    const [selectedTags, setSelectedTags] = useState<Tag[]>(tags)
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        date ? new Date(date) : null
      ); // Initialize with the provided date
    
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: selectedTags,
            date: selectedDate ? selectedDate.toISOString() : "",
        })

        navigate("..")
    }

    return (
        
        <Form onSubmit={handleSubmit} >

        <Stack gap={4} style={{display: "flex",
        alignItems: "center"}}>
            <Row>

                <Col>
                <Form.Group controlId="title">
                    <Form.Label>Tittel</Form.Label>
                    <Form.Control ref={titleRef} required defaultValue={title}/>
                </Form.Group>
                </Col>

                <Col>
                <Form.Group controlId="date">
                 <Form.Label>Dato</Form.Label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="yyyy-MM-dd"
                />
                </Form.Group>
                </Col>

                <Col>
                <Form.Group controlId="tags">
                    <Form.Label>Type treningsøkt</Form.Label>
                    <CreatableReactSelect 
                        onCreateOption={label =>{
                            const newTag = { id: uuidV4(), label }
                            onAddTag(newTag)
                            setSelectedTags(prev => [...prev, newTag])
                        }}
                    value={selectedTags.map(tag => {
                        return { label: tag.label, value: tag.id}
                    })} 
                    options={availableTags.map(tag => {
                        return { label: tag.label, value: tag.id }
                    })}
                    onChange={tags => {
                        setSelectedTags(
                            tags.map(tag => {
                            return { label: tag.label, id: tag.value }
                        }))
                    }}
                    isMulti/>

                </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="markdown">
                <Form.Label>Beskrivelse</Form.Label>
                <Form.Control defaultValue={markdown}
                required as="textarea" 
                ref={markdownRef} 
                rows={10}/>
            </Form.Group>
            <Stack direction="horizontal" gap={3} className="justify-content-end">
                <Button type="submit" variant="primary">
                    Lagre
                    </Button>
                <Link to="..">
                <Button type="button" variant="outline-secondary">
                    Avbryt
                    </Button>
                </Link>
                
            </Stack>
        </Stack>
        
    </Form>
    )
}