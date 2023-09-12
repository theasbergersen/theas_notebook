import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { useNote } from "./NoteLayout";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import logoImage from './your-logo.png.png';

type NoteProps = {
    onDelete: (id: string) => void
}

export function Note( { onDelete}: NoteProps) {
    const note = useNote()
    const navigate = useNavigate()

    return (
    <>
    <img src={logoImage} alt="Your Logo" className="logo" />
    <Row className="align-items-center mb-4">
        <Col>
        <h1>{note.title}</h1>
        {note.tags.length > 0 && (
            <Stack gap={3} direction="horizontal"
            className="flex-wrap">
                {note.tags.map(tag => (
                    <Badge className="text-truncate" key={tag.id}>
                        {tag.label}
                </Badge>
            ))}
            </Stack>
        )}
        </Col>
        <Col xs="auto">
            <Stack gap ={3} direction="horizontal">
                <Link to={`/${note.id}/edit`}>
                    <Button variant="primary">Endre økt</Button>
                </Link>
                <Button onClick={() => {
                    onDelete(note.id)
                    navigate("/")
                }} variant="outline-danger">Slett økt</Button>
                <Link to="/">
                <Button variant="outline-secondary">Tilbake</Button>
                </Link>
            </Stack>
        </Col>

    </Row>
    <p>Dato: {new Date(note.date).toLocaleDateString()}</p> {/* Display the date */}
    <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
    )
}