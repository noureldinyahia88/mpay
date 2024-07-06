import React from "react";
import styled from "styled-components";
import HeaderUser from "../../componet/Ui-User/HeaderUser";
import { IoSearch } from "react-icons/io5";
import Avter from "../../assets/user.png";
import theme from "../../componet/Variables";
import CardUser from "../../componet/Ui-User/CardUser";
import Crapto from "../../componet/Ui-User/Crapto";
import CryptoPortifilo from "../../componet/Ui-User/CryptoPortifilo";
import TransCard from "../../componet/Ui-User/TransCard";
import { useQuery } from "@tanstack/react-query";
import { fetchBalance, fetchLastTrants, fetchPortifilo } from "../../Http/Get";
import ETH from "../../componet/Ui-User/ETH";
import Tether from "./Tether";
import Binance from "../../componet/Ui-User/Binance";
import Solana from "../../componet/Ui-User/Solana";
import StakedEther from "../../componet/Ui-User/StakedEther";
import USD from "./USD";
import XRP from "./XRP";
import { Link } from "react-router-dom";

const UserHomePage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["lastTrains"],
    queryFn: fetchLastTrants,
    staleTime: 5000,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = <h1>{error.message}</h1>;
  }

  // ****Portifilon ****

  const {
    data: portifilo,
    isLoading: portifiloLoading,
    isError: IsErrorPortifilo,
    error: errorPortifilo,
  } = useQuery({
    queryKey: ["portifilo"],
    queryFn: fetchPortifilo,
    staleTime: 5000,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  let portifiloConent;

  if (isLoading) {
    portifiloConent = <p>Loading...</p>;
  }

  if (isError) {
    portifiloConent = <h1>{error.message}</h1>;
  }
  fetchBalance()
  return (
    <UserHomePageWrapper>
      <HeaderUser />
      <Container>
        <PageWrapper>
          <UserInfoWrapper>
            <UserAvatarWrapper>
              <ImageUser src={Avter} alt="User" />
            </UserAvatarWrapper>
            <Info>
              <NameH3>{localStorage.getItem("name")}</NameH3>
              <ID># {localStorage.getItem("id")}</ID>
            </Info>
          </UserInfoWrapper>
          <CardUser />

          <MarketWrapper>
            <MarketHeader>
              <MarketH3>Market</MarketH3>
              <HeaderRight>
                {/* <SearchWrapper>
                  <Input placeholder="Search" />
                  <BtnSearch>
                    <IoSearch />
                  </BtnSearch>
                </SearchWrapper> */}
                <MoreLink to="/BuyCrypto">More</MoreLink>
              </HeaderRight>
            </MarketHeader>
            <Cryptos>
              <Crapto />
              <ETH />
              <Tether />
              <Binance />
              <Solana />
              <StakedEther />
              <USD />
              <XRP />
            </Cryptos>
          </MarketWrapper>

          <PortfolioAndTransWrapper>
            <PortfolioWrapper>
              <MarketHeader>
                <MarketH3>Wallet</MarketH3>
                <MarketH3>{localStorage.getItem('balance').toString().slice(0, 9)} EGP</MarketH3>
              </MarketHeader>
              {portifiloConent ||
                portifilo.map((portifilo) => (
                  <CryptoPortifilo
                  key={portifilo.id}
                    crypto={portifilo.crypto}
                    amount={portifilo.amount}
                    totalAmount={portifilo.totalAmount}
                  />
                ))}
            </PortfolioWrapper>

            <TransWrapper>
              <MarketHeader>
                <MarketH3>Last Transactions</MarketH3>
                <HeaderRight>{/* <MoreLink>More</MoreLink> */}</HeaderRight>
              </MarketHeader>
              {content ||
                data.map((trans) => (
                  <TransCard
                    key={trans.id}
                    id={trans.id}
                    from={trans.from}
                    to={trans.to}
                    amount={trans.amount}
                    createdAt={trans.createdAt}
                  />
                ))}
            </TransWrapper>
          </PortfolioAndTransWrapper>
        </PageWrapper>
      </Container>
    </UserHomePageWrapper>
  );
};

export default UserHomePage;

const UserHomePageWrapper = styled.div`
  margin-bottom: 50px;
`;

const PageWrapper = styled.div`
  padding: 0 20px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const UserInfoWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 70px;
  display: flex;
  align-items: center;
`;

const UserAvatarWrapper = styled.div`
  margin-right: 20px;
`;

const ImageUser = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameH3 = styled.h3`
  margin: 0;
  font-size: 24px;
  color: ${theme.fontsColor};
`;

const ID = styled.span`
  color: #777;
`;

const Cryptos = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const MarketWrapper = styled.div`
  margin-top: 30px;
  border: 1px solid ${theme.color3};
  border-radius: 8px;
  padding: 20px;
  height: 300px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const MarketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.color3};
`;

const MarketH3 = styled.h3`
  margin: 0;
  font-size: 24px;
  color: ${theme.fontsColor};
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 10px;
`;

const Input = styled.input`
  background-color: transparent;
  color: #fff;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid ${theme.color3};
  border-radius: 5px;
  outline: none;
`;

const BtnSearch = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  display: grid;
  place-items: center;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 0;
  &:hover {
    background-color: ${theme.primaryColorDark};
  }
`;

const MoreLink = styled(Link)`
  font-size: 16px;
  cursor: pointer;
  border-bottom: 1px solid ${theme.fontsColor};
  color: ${theme.fontsColor};
`;

const PortfolioAndTransWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;

const PortfolioWrapper = styled.div`
  padding: 20px;
  margin-top: 50px;
  border: 1px solid ${theme.color3};
  border-radius: 10px;
  width: 100%;
  max-width: 50%;
  height: 700px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const TransWrapper = styled.div`
  padding: 20px;
  margin-top: 50px;
  border: 1px solid ${theme.color3};
  border-radius: 10px;
  width: 100%;
  max-width: 50%;
  height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
