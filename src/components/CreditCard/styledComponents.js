import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CardContainer = styled.div`
  height: 100%;
  width: 50%;
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
export const CardHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
  text-decoration: underline;
  text-align: center;
`
export const CardDisplayContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 30%;
  width: 90%;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding-left: 16px;
  align-self: center;
`
export const CardNumber = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  font-weight: 500;
`
export const CardHolderName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
`
export const Name = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
`
export const RightContainer = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`
export const PaymentMethodContainer = styled.div`
  height: 30%;
  width: 90%;
  box-shadow: 0px 4px 16px 0px #d3d9e0;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PaymentMethodHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #475569;
`
export const UserNumber = styled.input`
  border: 1px solid #475569;
  padding-left: 10px;
  outline: none;
  cursor: pointer;
  width: 80%;
  height: 30px;
  background-color: transparent;
  margin-bottom: 16px;
`
export const UserName = styled.input`
  width: 80%;
  height: 30px;
  border: 1px solid #475569;
  padding-left: 10px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`
