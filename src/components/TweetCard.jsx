import React, {useState} from "react";
import { Avatar, Card, Row, Col } from "antd";
import { TwitterOutlined, HeartOutlined, RetweetOutlined, MessageOutlined } from "@ant-design/icons";
import styles from "./Component.module.css"; // adjust path accordingly

export default function TweetCard() {
  const [liked, setLiked] = useState(false);
  return (
    <Card className={styles.container}>
      <Row className={styles.flexContainer}>
        {/* <Col>
          <div className={styles.avatarPlaceholder}></div>
        </Col> */}
        <Col flex="auto" className={styles.content}>
          <Row justify="space-between" align="middle">
            <Col>
              <Row align="middle">
                <Avatar src="/placeholder.jpg" alt="Profile picture" />
                <div style={{ marginLeft: "10px" }}>
                  <div /* className={styles.uppercase} */>Abdelkader GIS</div>
                  <div className={styles.grayText}>@farwellTwitter</div>
                </div>
              </Row>
            </Col>
            <Col>
              <TwitterOutlined style={{ color: "#3b82f6", fontSize: "x-large" }} />
            </Col>
          </Row>
          <p className="mt-4 text-gray-500">I’m in the arena trying stuff. Some will work, some won’t. But always learning. You’re anonymous and afraid of your own shadow. Enjoy the sidelines.</p>
          <Row justify="space-between" align="middle" className={styles.iconRow}>
            <Col>
              <HeartOutlined /* style={{color:"#f91880"}} className={styles.iconHoverEffect} */
                style={{ color: liked ? "#f91880" : "gray" }}
                className={liked ? `${styles.iconHoverEffect} ${styles.liked}` : styles.iconHoverEffect}
                onClick={() => setLiked((prevLiked) => !prevLiked)}
              />
              <span className={styles.iconCount}>566</span>
            </Col>
            <Col>
              <RetweetOutlined style={{ color: "#00ba7c" }} />
              <span className={styles.iconCount}>241</span>
            </Col>
            <Col>
              <MessageOutlined style={{ color: "#1D9BF0" }} />
              <span className={styles.iconCount}>487</span>
            </Col>
            <Col className={styles.timestamp}>7:22 AM · Aug 22, 2023</Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
