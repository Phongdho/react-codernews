import React from 'react';
import { Button, Card } from "react-bootstrap";

const NewsForm = ({articleData}) => {
    return (
      // <div>
      //   <PaginationNews />
        <Card className="text-center" style={{marginTop: "1rem"}}>
        <Card.Header style={{fontSize: "20px", fontWeight:"bold"}}>{articleData.title}</Card.Header>
        <Card.Body>
        <Card.Img src={articleData.urlToImage} variant="top"/>
          <Card.Title style={{marginTop:"1rem"}}>{articleData.author}</Card.Title>
          <Card.Text>
            {articleData.description}
          </Card.Text>
          <Button variant="primary"><a href={articleData.url} style={{color:"white", textDecoration:"none"}}>{articleData.source.name}</a></Button>
        </Card.Body>
      </Card>
      // </div>
    );
};

const MainPage = ({ data, category}) => {
    let articles = data.articles;
    return (
        <div className="container">
            <div style={{margin:"2rem auto"}}>
                {
                articles && articles.map((e, index) => <NewsForm key={index} articleData={e} />)
                }
            </div>
        </div>
    );
};

export default MainPage
