import React, { useState } from 'react'
import styled from 'styled-components'
import { IoCaretBackOutline, IoCaretForwardOutline } from 'react-icons/io5'

const PanelDonation2023 = styled(({ className, unit, icon, data, children }) => {
  return (
    <PanelContainer className={className}>
      <DetailsContainer>
        <h4>Campagne de dons 2023</h4>
        <br />
        <p>Objectif : 20 000€</p>
        <br />
        <p>Dons perçus cet été : 1 157€</p>
        <p>Dons récoltés depuis le début de la campagne : {data} €</p>
        <br />
        <p>
          Total atteint : {data + 1157}€ (
          {Math.round(((data + 1157) * 100) / 20000)}% de l'objectif)
        </p>
        <br />
        <p>
          Campagne lancée depuis :{' '}
          {Math.ceil(
            (new Date() - new Date('2023-10-29')) / (1000 * 60 * 60 * 24)
          )} jour(s)
        </p>
      </DetailsContainer>
    </PanelContainer>
  )
})`
  color: var(--primary-color);
`

const PanelContainer = styled(({ className, children }) => {
  return <div className={className}>{children}</div>
})`
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
  user-select: none;
  background: black;
  display: flex;
  justify-content: space-between;
`

const DetailsContainer = styled(({ className, children }) => {
  return <div className={className}>{children}</div>
})`
  padding: 10px 20px;

  h4 {
    font-size: 30px;
  }
`
export default PanelDonation2023
