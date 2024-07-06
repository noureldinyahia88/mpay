import React from "react";
import styled from "styled-components";
import Sidebar from "../componet/Ui/Sidebar";
import Header from "../componet/Ui/Header";
import { IoMdSearch } from "react-icons/io";
import TableHeader from "../componet/Ui/TableHeader";
import OperationsDetails from "../componet/OperationsDetails";
import theme from "../componet/Variables";
import HeaderUser from "../componet/Ui-User/HeaderUser";
import { useQuery } from "@tanstack/react-query";
import { fetchAdminTransactions } from "../Http/AdminReq";
// import OperationsDetails from "../componet/OperationsDetails";

const FilterWrapper = styled.div`
  width: 100%;
  max-width: 15%;
  padding: 20px;
  border: 1px solid #23253530;
  border-radius: 10px;
  color: ${theme.fontsColor};
`;

const Label = styled.label`
  font-weight: 300;
  margin-bottom: 10px;
  display: block;
  color: ${theme.fontsColor};
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  color: ${theme.fontsColor};
  background-color: transparent !important;
  &:focus {
    outline: none;
  }
`;

const Option = styled.option``;

const CheckboxWrapper = styled.div`
  margin-bottom: 15px;
  margin-top: 20px;
`;

const CheckboxLabel = styled.label`
  display: block;
  margin-bottom: 15px;
  font-weight: 300;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const PaymentsOverviewWrapper = styled.div`
  /* Add your styles here */
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
const SearchWrapper = styled.form`
  width: 400px;
  border: 1px solid #525257;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBtn = styled.button`
  width: 10%;
  background-color: transparent;
  border: none;
  color: #525257;
  font-size: 20px;
  cursor: pointer;
  display: grid;
  place-items: center;
`;

const SearchInput = styled.input`
  width: 90%;
  background-color: transparent;
  border: none;
  color: #525257;
  padding: 10px 10px;
  &:focus {
    outline: none;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  display: flex;
  gap: 20px;
`;

const TableWrapper = styled.div`
  width: 100%;
  max-width: 85%;
  height: 750px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
const PaymentsOverview = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["AdminTransactions"],
    queryFn: fetchAdminTransactions,
    staleTime: 5000,
    onSuccess: (data) => {
      console.log("fetchAdminTransactions", data);
      // console.log(data.length);
    },
  });
  localStorage.setItem("datalength", data && data.length);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = <h1>{error.message}</h1>;
  }

  return (
    <PaymentsOverviewWrapper>
      <Header />
      <Wrapper>
        <WrapperDiv>
          <Sidebar />
        </WrapperDiv>
        <PageWrappperContent>
          <Container>
            <Div>
              <H1>Payments Overview</H1>
              {/* <SearchWrapper>
                <SearchBtn>
                  <IoMdSearch />
                </SearchBtn>
                <SearchInput placeholder="Search by amount , payment method..." />
              </SearchWrapper> */}
            </Div>
            <ContentWrapper>
              {/* <FilterWrapper>
                <Label>Filter By:</Label>

                <Select>
                  <Option value="">Select Month</Option>
                  <Option value="January">January</Option>
                  <Option value="February">February</Option>
                </Select>

                <CheckboxWrapper>
                  <CheckboxLabel>
                    <Checkbox type="checkbox" />
                    Success
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <Checkbox type="checkbox" />
                    Pending
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <Checkbox type="checkbox" />
                    Failed
                  </CheckboxLabel>
                </CheckboxWrapper>
              </FilterWrapper> */}
              <TableWrapper>
                <TableHeader />
                {content ||
                  data.map((trans) => (
                    <OperationsDetails
                      key={trans._id}
                      id={trans._id}
                      from={trans.from}
                      to={trans.to}
                      amount={trans.amount}
                      createdAt={trans.createdAt}
                    />
                  ))}
              </TableWrapper>
            </ContentWrapper>
          </Container>
        </PageWrappperContent>
      </Wrapper>
    </PaymentsOverviewWrapper>
  );
};

export default PaymentsOverview;
