import React, { useState } from "react";
import styled from "styled-components";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";

const App = () => {
  const [activeItem, setActiveItem] = useState(1);
  const data = [
    {
      id: 1,
      url: img1,
      name: "Coding Course",
      topicList: 100,
      shortName: "Coding",
    },
    {
      id: 2,
      url: img2,
      name: "Digital Marketing",
      topicList: 100,
      shortName: "Marketing",
    },
    {
      id: 3,
      url: img3,
      name: "Business Course",
      topicList: 100,
      shortName: "Business",
    },
  ];

  const handleHover = (id) => {
    if (activeItem === id) {
      return;
    }
    setActiveItem(id);
  };

  const handleHoverRemove = () => {
    if (activeItem === 1) {
      return;
    }
    setActiveItem(1);
  };
  return (
    <AppContainer>
      <Wrapper>
        <ContentWrapper>
          <Left>
            <TextWrapper>
              <p>Eat.</p>
              <p>Sleep.</p>
              <p>Code.</p>
            </TextWrapper>
            <SearchWrapper>
              <input type="search" placeholder="Find your passion" />
              <button>Go</button>
            </SearchWrapper>
          </Left>
          <Right>
            {data.map((i) => (
              <ItemWrapper
                key={i.id}
                onMouseOver={() => handleHover(i.id)}
                onMouseLeave={() => handleHoverRemove()}
                isActive={i.id === activeItem}
              >
                <Item
                  style={{
                    backgroundImage: `url(${i.url})`,
                  }}
                  isActive={i.id === activeItem}
                >
                  <DetailsWrapper
                    isFirst={i.id === 1}
                    isActive={i.id === activeItem}
                  >
                    <p>{i.name}</p>
                    <TopicListWrapper>
                      <p>{i.topicList}</p>
                      <span>Topics</span>
                    </TopicListWrapper>
                  </DetailsWrapper>
                  <VerticalDetailsWrapper
                    isFirst={i.id === 1}
                    isActive={i.id === activeItem}
                  >
                    <p>{i.shortName}</p>
                  </VerticalDetailsWrapper>
                </Item>
              </ItemWrapper>
            ))}
          </Right>
        </ContentWrapper>
      </Wrapper>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfbfb;
`;
const Wrapper = styled.div`
  width: 1300px;
  @media screen and (max-width: 480px) {
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: start;
    gap: 20px;
  }
`;

const Left = styled.div`
  position: relative;
  @media screen and (max-width: 480px) {
    height: 310px;
    padding: 0 10px;
  }
`;

const TextWrapper = styled.div`
  line-height: 80px;
  font-size: 80px;
  margin-top: 90px;

  h2 {
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    line-height: 40px;
    font-size: 40px;
  }
`;
const SearchWrapper = styled.div`
  position: absolute;
  bottom: 60px;
  height: 120px;
  width: 450px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s ease;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 46px 50px;

  :hover {
    transition: all 0.4s ease;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 46px 50px;
  }

  input {
    flex-grow: 1;
    height: inherit;
    outline: none;
    border: none;
    padding-left: 50px;
    font-size: 20px;
    ::placeholder {
      font-size: 20px;
      color: #1e1e2f;
      transition: all 0.4s ease;
    }
    :focus {
      border: 1px solid #97c680;
      ::placeholder {
        transition: all 0.4s ease;
        opacity: 0.5;
      }
    }
    @media screen and (max-width: 480px) {
      padding-left: 20px;
    }
  }
  button {
    height: 100%;
    aspect-ratio: 1;
    font-size: 34px;
    font-weight: 600;
    background: linear-gradient(to top, #97c680 50%, #feba88 50%);
    background-size: 100% 200%;
    background-position-y: -100%;
    transition: all 0.3s ease;
    cursor: pointer;
    user-select: none;
    :hover {
      background-position-y: 0%;
      transition: all 0.3s ease;
    }
  }

  @media screen and (max-width: 480px) {
    height: 80px;
    width: 90%;
    position: absolute;
    bottom: 0;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 600px;
  max-width: 960px;
  width: calc(100% - 100px);
  height: 600px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
    overflow-x: auto;
    min-width: auto;
    max-width: 100vw;
    width: calc(100vw - 1px);
    height: 320px;
  }
`;

const ItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 150px;
  border-radius: 20px;
  padding: 0 20px;
  flex-grow: ${({ isActive }) => (isActive ? 4 : 1)};
  transition: all 0.6s ease;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    min-width: 290px;
  }
`;
const Item = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: auto ${({ isActive }) => (isActive ? "120%" : "100%")};
  border-radius: 20px;
  transition: all 0.6s ease;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    display: block;
    height: 50%;
    width: 100%;
    left: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  }
`;

const DetailsWrapper = styled.div`
  position: absolute;
  bottom: 80px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 40px;
  padding-left: ${({ isFirst }) => (isFirst ? "120px" : "40px")};
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  p {
    font-size: 34px;
    color: #fff;
    font-weight: 600;
    word-break: keep-all;
    height: 100%;
    width: 10vw;
  }

  @media screen and (max-width: 480px) {
    padding: 0 10px;
    bottom: 5px;
    padding-left: ${({ isFirst }) => (isFirst ? "10px" : "10px")};
    opacity: ${({ isActive }) => (isActive ? "1" : "1")};
    p {
      font-size: 25px;
    }
  }
`;
const TopicListWrapper = styled.div`
  text-align: center;
  color: #fff;
  p {
    font-size: 52px;
    line-height: 1;
  }
  span {
    text-transform: uppercase;
  }
  @media screen and (max-width: 480px) {
    p {
      font-size: 20px;
      line-height: 1;
    }
    span {
      font-size: 12px;
    }
  }
`;
const VerticalDetailsWrapper = styled.div`
  width: 120px;
  height: 120px;
  background-color: #1e1e2f;
  position: absolute;
  bottom: 60px;
  z-index: 1;
  left: 0;
  transition: all 0.6s ease;
  p {
    font-size: 34px;
    transform: rotate(-90deg);
    color: #fff;
  }
  opacity: ${({ isActive }) => (isActive ? "0" : "1")};
  display: ${({ isFirst }) => (isFirst ? "none" : "block")};

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
