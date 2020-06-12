/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
} from "shards-react";
import PageTitle from "../../fragements/PageTitle";

class HomePosts extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../../../images/content-management/5.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "Anna Ken",
          authorAvatar: require("../../../images/avatars/0.jpg"),
          title:
            "Attention he extremity unwilling on otherwise cars backwards yet",
          body:
            "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over, Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over,Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over, Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
          date: "29 February 2019"
        }
      ],

      // Second list of posts.
      PostsListTwo: [
        {
          backgroundImage: require("../../../images/content-management/5.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "Anna Ken",
          authorAvatar: require("../../../images/avatars/0.jpg"),
          title:
            "Attention he extremity unwilling on otherwise cars backwards yet",
          body:
            "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/6.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "John James",
          authorAvatar: require("../../../images/avatars/1.jpg"),
          title:
            "Totally words widow one downs few age every seven if miss part by fact",
          body:
            "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
          date: "29 February 2019"
        }
      ],

      // Third list of posts.
      PostsListThree: [
        {
          backgroundImage: require("../../../images/content-management/1.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../../../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/2.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../../../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/3.jpeg"),
          category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../../../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/4.jpeg"),
          category: "Business",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../../../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/1.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../../../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/2.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../../../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/3.jpeg"),
          category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../../../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/4.jpeg"),
          category: "Business",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../../../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019"
        }
      ],

      // Fourth list of posts.
      PostsListFour: [
        {
          backgroundImage: require("../../../images/content-management/1.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../../../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/2.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../../../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/3.jpeg"),
          category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../../../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/4.jpeg"),
          category: "Business",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../../../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/1.jpeg"),
          category: "Business",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../../../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/2.jpeg"),
          category: "Travel",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../../../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/3.jpeg"),
          category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../../../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../../../images/content-management/4.jpeg"),
          category: "Business",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../../../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019"
        }
      ],
    };
  }

  toggle(which) {
    const newState = { ...this.state };
    newState[which] = !this.state[which];
    this.setState(newState);
  }

  render() {
    const {
      PostsListOne,
      PostsListTwo,
      PostsListThree,
      PostsListFour,
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">

        {/* Group Header */}
        <Row noGutters className="page-header py-2">
          <PageTitle sm="4" title="" subtitle="Top post" className="text-sm-left" />
        </Row>
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="12" sm="12" className="mb-3" key={idx}>
              <Card small className="card-post card-post--aside card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by Anna Ken
                      </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Second Row of Posts */}
        {/* Group Header */}
        <Row noGutters className="page-header py-2">
          <PageTitle sm="4" title="" subtitle="hot post" className="text-sm-left" />
        </Row>
        <Row>
          {PostsListTwo.map((post, idx) => (
            <Col lg="6" sm="12" className="mb-3" key={idx}>
              <Card small className="card-post card-post--aside card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by Anna Ken
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Third Row of Posts */}
        {/* Group Header */}
        <Row noGutters className="page-header py-2">
          <PageTitle sm="4" title="" subtitle="Recent post" className="text-sm-left" />
        </Row>
        <Row>
          {PostsListThree.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-3" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by {post.author}
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Fourth Row of Posts */}
        {/* Group Header */}
        <Row noGutters className="page-header py-2">
          <PageTitle sm="4" title="" subtitle="Old post" className="text-sm-left" />
        </Row>
        <Row>
          {PostsListFour.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-3" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by {post.author}
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>


      </Container>
    );
  }
}

export default HomePosts;
