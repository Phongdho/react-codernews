import React from 'react';
import { ListGroup } from 'react-bootstrap';


const SideMenu = ({setCategory}) => {
    const handleCategory = (eventKey, event) => {
        setCategory(eventKey);
    }
    return (
        <ListGroup variant="flush" style={{cursor:"pointer", textAlign:"left", marginTop: "50px", padding: "auto 10px", transform: "translateX(-20%)"}}>
            <ListGroup.Item eventKey="business" onSelect={handleCategory}>Business</ListGroup.Item>
            <ListGroup.Item eventKey="entertainment" onSelect={handleCategory}>Entertainment</ListGroup.Item>
            <ListGroup.Item eventKey="general" onSelect={handleCategory}>General</ListGroup.Item>
            <ListGroup.Item eventKey="health" onSelect={handleCategory}>Health</ListGroup.Item>
            <ListGroup.Item eventKey="science" onSelect={handleCategory}>Science</ListGroup.Item>
            <ListGroup.Item eventKey="sports" onSelect={handleCategory}>Sports</ListGroup.Item>
            <ListGroup.Item eventKey="technology" onSelect={handleCategory}>Technology</ListGroup.Item>
        </ListGroup>
    )
}

export default SideMenu;