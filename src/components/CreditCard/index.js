import {useState} from 'react'
import {
  MainContainer,
  CardContainer,
  CardHeading,
  CardHolderName,
  CardNumber,
  RightContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  UserName,
  UserNumber,
  Name,
  CardDisplayContainer,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [holderName, setHolderName] = useState('')
  const onChangeNumber = event => {
    setNumber(event.target.value)
  }
  const onChangeName = event => {
    setHolderName(event.target.value)
  }
  return (
    <MainContainer>
      <CardContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <CardDisplayContainer data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardHolderName>Cardholder Name</CardHolderName>
          <Name>{holderName.toUpperCase()}</Name>
        </CardDisplayContainer>
      </CardContainer>
      <RightContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <UserNumber
            type="text"
            value={number}
            placeholder="Card Number"
            onChange={onChangeNumber}
          />
          <UserName
            type="text"
            value={holderName}
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </PaymentMethodContainer>
      </RightContainer>
    </MainContainer>
  )
}

export default CreditCard
