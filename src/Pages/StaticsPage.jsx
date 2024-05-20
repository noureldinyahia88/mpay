import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../componet/Ui/Sidebar";
import Header from "../componet/Ui/Header";
import theme from "../componet/Variables";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
`;

const SelectorContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;
    color: #d3dcea;
  }

  select {
    background-color: #151620;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #151620;
    color: #d3dcea;
    border-radius: 4px;
    outline: none;
  }
`;

const Btn = styled.button`
  padding: 15px 20px;
  background-color: ${theme.color3};
  color: #d3dcea;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
`


const StaticsContent = styled.div`
  /* Add styles for StaticsContent */
  padding: 20px;
`;

const ContentWrapper2 = styled.div`
  /* Add styles for ContentWrapper2 */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const StaticsBox = styled.div`
  /* Add styles for StaticsBox */
  background-color: #1D1F2D;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(50% - 20px); /* 50% width with margin between boxes */
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: calc(33.33% - 20px); /* 33.33% width for larger screens */
  }
`;

const H4 = styled.h4`
  /* Add styles for H4 */
  font-size: 24px;
  font-weight: bold;
  color: #D3DCEA;
  margin-bottom: 10px;
`;

const P = styled.p`
  /* Add styles for P */
  font-size: 16px;
  color: #D3DCEA;
`;

const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const PageWrappperContent = styled.div`
  width: 85%;
  display: flex;
  /* align-items: center; */

  justify-content: space-between;
  padding: 20px 0px;
`;
const WrapperDiv = styled.div`
  width: 7%;
`;
const H1 = styled.h1`
  color: ${theme.fontsColor};
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContentWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  gap: 20px;
`;
const StaticsPageWrapper = styled.div``;

const StaticsPage = () => {
  const [firstSelector, setFirstSelector] = useState("");
  const [secondSelector, setSecondSelector] = useState("");

  // Options for selectors
  const firstSelectorOptions = [
    "Users",
    "The number of transactions",
    "The amount of money transferred",
    "The successful transactions",
    "The panding transactions",
    "The canceled transactions",
  ];
  const secondSelectorOptions = [
    "1 Day",
    "7 Days",
    "1 Manth",
    "3 Manth",
    "6 Manth",
    "1 Year",
  ];

  // Handle change for first selector
  const handleFirstSelectorChange = (event) => {
    setFirstSelector(event.target.value);
  };

  // Handle change for second selector
  const handleSecondSelectorChange = (event) => {
    setSecondSelector(event.target.value);
  };

  return (
    <StaticsPageWrapper>
      <Header />
      <Wrapper>
        <WrapperDiv>
          <Sidebar />
        </WrapperDiv>
        <PageWrappperContent>
          <Container>
            <Div>
              <H1>Statics Page</H1>
            </Div>
            <ContentWrapper>
              <FilterContainer>
                <SelectorContainer>
                  <label htmlFor="firstSelector">Exchange</label>
                  <select
                    id="firstSelector"
                    value={firstSelector}
                    onChange={handleFirstSelectorChange}
                  >
                    <option value="">Select...</option>
                    {firstSelectorOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </SelectorContainer>

                <SelectorContainer>
                  <label htmlFor="secondSelector">Date</label>
                  <select
                    id="secondSelector"
                    value={secondSelector}
                    onChange={handleSecondSelectorChange}
                  >
                    <option value="">Select...</option>
                    {secondSelectorOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </SelectorContainer>
                <Btn>Show The Result</Btn>
              </FilterContainer>

              <StaticsContent>
                <ContentWrapper2>
                    <StaticsBox>
                        <P>Users</P>
                        <H4>+2M</H4>
                    </StaticsBox>

                    <StaticsBox>
                        <P>The number of transactions</P>
                        <H4>1597426</H4>
                    </StaticsBox>

                    <StaticsBox>
                        <P>The amount of money transferred</P>
                        <H4>+40M</H4>
                    </StaticsBox>

                    <StaticsBox>
                        <P>The successful transactions</P>
                        <H4>+60K</H4>
                    </StaticsBox>

                    <StaticsBox>
                        <P>The panding transactions</P>
                        <H4>+10K</H4>
                    </StaticsBox>

                    <StaticsBox>
                        <P>The canceled transactions</P>
                        <H4>+16K</H4>
                    </StaticsBox>
                </ContentWrapper2>
              </StaticsContent>
            </ContentWrapper>
          </Container>
        </PageWrappperContent>
      </Wrapper>
    </StaticsPageWrapper>
  );
};

export default StaticsPage;
