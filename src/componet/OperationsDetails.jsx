import React from 'react'
import styled from 'styled-components'


const OpeartionsDestailsWrapper = styled.div`
margin-top: 20px;
background-color: transparent;
padding: 15px 20px;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 10px;
border: 1px solid #23253530;
`

const P = styled.p`
    font-size: 19px;
    font-weight: 200;
    color: #D9D9D9;
    &.succeeded{
        color: #165E3D;
    }
`

const OperationsDetails = () => {
    return (
        <OpeartionsDestailsWrapper>
            <P>06c1774df547</P>
            <P className='succeeded'>Succeeded</P>
            <P>$19,623.00 USD</P>
            <P>•••• 4242</P>
            <P>Mar 23, 2022, 13:00 PM</P>
        </OpeartionsDestailsWrapper>
      )
}

export default OperationsDetails