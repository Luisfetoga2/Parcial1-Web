import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Button } from "react-bootstrap";

function Profile(params) {
    const [username, setUsername] = useState(params.username);
    const [nombre, setNombre] = useState(params.nombre);
    const [descripcion, setDescripcion] = useState(params.descripcion);
    const [url, setUrl] = useState(params.url);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    }

    const handleDescripcionChange = (event) => {
        setDescripcion(event.target.value);
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    }


    if (Math.random()>0.5) {
        return (
            <Card>
                <Card.Body className="mb-3">
                    <p>Nombre de usuario</p>
                    <p>{username}</p>
                    <br />
                    <p>Nombre completo</p>
                    <p>{nombre}</p>
                    <br />
                    <p>Descripcion</p>
                    <p>{descripcion}</p>
                    <br />
                    <p>Url pagina personal</p>
                    <p>{url}</p>
                </Card.Body>
            </Card>
        );
    } else {
        return (
            <Card>
                <Card.Body className="mb-3">
                <Form>
                    <p>Nombre de usuario</p>
                    <Form.Control type="text" value={username} onChange={handleUsernameChange} />
                    <br />
                    <p>Nombre completo</p>
                    <Form.Control type="text" value={nombre} onChange={handleNombreChange} />
                    <br />
                    <p>Descripcion</p>
                    <Form.Control type="text" value={descripcion} onChange={handleDescripcionChange} />
                    <br />
                    <p>Url pagina personal</p>
                    <Form.Control type="text" value={url} onChange={handleUrlChange} />
                </Form>
                <Button variant="primary" type="submit">
                    Save changes
                </Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Profile;