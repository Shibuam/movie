import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const Movie = () => {
  let [movies, setMovies] = useState([]);
  const movieDetails = async () => {
    let { data } = await axios.post("https://hoblist.com/api/movieList", {
      category: "movies",
      language: "kannada",
      genre: "all",
    });
    console.log(data.result);
    setMovies(data.result);
  };

  useEffect(() => {
    movieDetails();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {movies.map((elem) => (
            <Col sm={12} md={6}>
              <Card>
                <Container>
                  <Row>
                    <Col className="m-5">
                      <Row>
                        <BiUpArrow />
                      </Row>
                      <Row>
                        <h1> {elem.voting}</h1>
                      </Row>
                      <Row>
                        <BiDownArrow />
                      </Row>
                      <Row>
                        <h4 className="mt-5">Votes</h4>
                      </Row>
                    </Col>
                    <Col>
                      <Card.Img style={{maxWidth:"100"}}  variant="top"  src={elem.poster} />
                    </Col>
                    <Col>
                      <Card.Body className="text-start"  >
                        <Card.Title>{elem.title}</Card.Title>
                        <Card.Subtitle>Genre: {elem.genre}</Card.Subtitle>
                        <Card.Subtitle>Director: {elem.director}</Card.Subtitle>
                        <Card.Subtitle>Starring: {elem.stars}</Card.Subtitle>
                        <p>
                          {elem.language} |
                          {elem.releasedDate}
                        </p>
                        <p> {elem.pageViews} Views | Voted by {elem.voting} People</p>
                      </Card.Body>
                    </Col>
                  </Row>
                  <Row>
                    <Button variant="primary">Watch Trailer</Button>
                  </Row>
                </Container>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Movie;
