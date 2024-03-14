import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

function Home(params) {
    var username = params.username;
    var nombre = params.nombre;
    var descripcion = params.descripcion;
    var url = params.url;
    var posts = params.posts;
    var seguidores = params.seguidores;
    var seguidos = params.seguidos;

    const [images, setImages] = useState(["https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350","https://picsum.photos/350"])
    const [show, setShow] = useState(false);

    const renderImages = () => {
        var w = window.innerWidth;

        const handleClick = () => {
            console.log("click")
            setShow(true);
        };

        if (w>800) { // 3 filas 4 columnas
            return (
                <div>
                <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[0]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[1]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[2]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[3]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                </Row>
                <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[4]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[5]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[6]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[7]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                </Row>
                <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[8]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[9]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[10]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[11]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                </Row>
                </div>
            );
        } else if (w>500) { // 4 filas 3 columnas
            return (
                <div>
                <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[0]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[1]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[2]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    
                </Row>
                <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[3]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[4]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[5]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col> 
                </Row>
                <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[6]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[7]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[8]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                </Row>
                <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[9]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[10]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[11]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                </Row>
                </div>
            );
        } else { // 6 filas 2 columnas
            return (
                <div>
                    <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[0]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[1]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                </Row>
                <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[2]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[3]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                </Row>
                <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[4]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[5]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col> 
                </Row>
                <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[6]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[7]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                </Row>
                <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[8]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                
                    <Col>
                        <Image src={images[9]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                </Row>
                <div style={{height: '20px'}}></div>
                <Row>
                    <Col>
                        <Image src={images[10]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                    <Col>
                        <Image src={images[11]} style={{width: "20vw"}} onClick={handleClick}/>
                    </Col>
                </Row>
                </div>
            );
        }
    }
    
    return (
        <div>
        <Row>
            <Col>
                <Link to={"/profile"}>
                    <Image src={"https://picsum.photos/350"} style={{width: "200px", borderRadius: "50%"}} />
                </Link>
            </Col>
            <Col>
                <Row>
                    <p style={{fontSize: "30px"}}>{username}</p>
                </Row>
                <Row>
                    <p><b>{nombre}</b>{" "+descripcion}</p>
                </Row>
                <Row>
                    <a href={url}>{url}</a>
                </Row>
                <Row>
                    <p><b>{posts}</b> posts. <b>{seguidores}</b> followers. <b>{seguidos}</b> following. </p>
                </Row>
            </Col>
        </Row>
        {renderImages()}
        {show &&
        <Offcanvas show={true} onHide={() => setShow(false)} style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: 'fit-content',
            maxHeight: 'none',
            maxWidth: '70wh'
        }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Image</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ height: 'fit-content' }}>
                <Image src={images[0]} style={{width: "70wh"}} />
            </Offcanvas.Body>
        </Offcanvas>}
        </div>
        
    );

}

export default Home;