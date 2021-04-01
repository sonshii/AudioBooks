import React from 'react'
import {Link} from "react-router-dom"; 
import { Row, Col } from 'antd'
import { Card, Typography, Image } from 'antd';
import './BookCard.css'

const { Title, Text } = Typography;

const BookCard = ({ data, bookListOpen }) =>{
  return(
    <Row className="card-wrapper" gutter={[16, 16]}>
      {data.MediaContainer.Metadata.map((item) => {
        return (
          <Col xs={24} sm={12} md={8} lg={8} xl={4} >
            <Link to="/bookslist" key={item.ratingKey} className="card" onClick={() => bookListOpen(item.key+"?X-Plex-Token=pRUra2qjZ7y39rgnyy1v")}>
              <Card
                className="card"
                cover={<Image className="object-fit_fill" width="100%" height="250px"  alt="example" src={"https://plex.weslyg.ru"+item.thumb+"?X-Plex-Token=pRUra2qjZ7y39rgnyy1v"} />}
              >
                <Title class="title">{item.title}</Title>
                <Text  class="paragraph">{item.parentTitle}</Text>
              </Card>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};

export default BookCard;