import React from 'react'
import styled from 'styled-components'


const TableHeaderWrapper = styled.div`
background-color: #151620;
padding: 15px 20px;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 10px;
`

const H3 = styled.h3`
    font-size: 19px;
    font-weight: 200;
    color: #D9D9D9;
`

const TableHeader = () => {
  return (
    <TableHeaderWrapper>
        <H3>Payment ID</H3>
        <H3>Status</H3>
        <H3>Amount</H3>
        <H3>p. method</H3>
        <H3>Creation date</H3>
    </TableHeaderWrapper>
  )
}

export default TableHeader