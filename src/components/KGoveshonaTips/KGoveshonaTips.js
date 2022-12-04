import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap/esm";
import { Link } from "react-router-dom";
import Motamot from "../Motamot/Motamot";
import "./KGoveshonaTips.css";

const KGoveshonaTips = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/govashonaProjukti/all").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Container style={{ marginTop: "50px", borderRadius: "20px" }}>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <h3 className="CardHeadline">কৃষি গবেষণা ও প্রযুক্তি</h3>
          <Row>
            {data?.map(({ title, picture, des, _id }) => {
              return (
                <Card
                  key={_id}
                  style={{
                    width: "14rem",
                    height: "16rem",
                    margin: "10px",
                    borderColor: "white",
                  }}
                >
                  <div className="image-box">
                    <Link to={`/govashonaProjukti/${_id}`}>
                      <Card.Img
                        className="image"
                        variant="top"
                        src={picture}
                      ></Card.Img>
                      <Card.Body>
                        <Card.Title className="newTitle">{title}</Card.Title>
                        {/* <Card.Text className='newsSubTitle'>
                                            {des}
                                        </Card.Text> */}
                      </Card.Body>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </Row>
        </Col>
        <Motamot />
      </Row>
    </Container>
  );
};

export default KGoveshonaTips;
