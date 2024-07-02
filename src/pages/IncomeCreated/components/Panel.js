import React, { useState } from 'react'
import styled from 'styled-components'
import { IoCaretBackOutline, IoCaretForwardOutline } from 'react-icons/io5'
import { getMonthEvolution, getLastMonth } from '@utils'

const Panel = styled(({ className, unit, icon, data, children }) => {
  /* Variables */
  const [i, setIndex] = useState(0)
  const { created, net, total } = data[i]
  const { net: prevNet } = data[i + 1]
  const month = getLastMonth(created)
  const evolution = getMonthEvolution(net, prevNet)
  const firstPosition = 0
  const lastPosition = data.length - 1
  const detailsInfo = [
    unit ? `${icon} ${total} ${unit}` : '',
    `💸 ${net}€ nets (${evolution})`
  ]
  /* Render */
  return (
    <PanelContainer className={className}>
      <DetailsContainer>
        <Month month={month} />
        {detailsInfo
          .filter((_) => _)
          .map((_) => (
            <p>{_}</p>
          ))}

        <ArrowsContainer>
          <LeftArrow
            setIndex={setIndex}
            lastPosition={lastPosition}
            firstPosition={firstPosition}
            i={i}
          />
          <RightArrow
            setIndex={setIndex}
            lastPosition={lastPosition}
            firstPosition={firstPosition}
            i={i}
          />
        </ArrowsContainer>
      </DetailsContainer>

      <div className="right">{children}</div>
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
`

const Month = styled(({ className, month }) => {
  return <h2 className={className}>{month}</h2>
})`
  font-size: 28px;
  margin-bottom: 5px;
`

const ArrowsContainer = styled(({ className, children }) => {
  return <div className={className}>{children}</div>
})`
  font-size: 25px;
  margin-top: 10px;

  > * {
    gap: 0;
    margin: 0;

    &:hover {
      cursor: pointer;
    }

    &.disabled {
      opacity: 0.5;
    }
  }
`

const LeftArrow = ({ setIndex, lastPosition, i }) => (
  <IoCaretBackOutline
    className={i === lastPosition ? 'disabled' : 'enabled'}
    onClick={() => setIndex((prev) => (prev < lastPosition ? prev + 1 : prev))}
  />
)

const RightArrow = ({ setIndex, firstPosition, i }) => (
  <IoCaretForwardOutline
    className={i === 0 ? 'disabled' : 'enabled'}
    onClick={() => setIndex((prev) => (prev > firstPosition ? prev - 1 : prev))}
  />
)

export default Panel
