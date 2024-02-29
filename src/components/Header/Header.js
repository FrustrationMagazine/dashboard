import React from 'react'
import styled from 'styled-components'
import { FaExclamationCircle as IconExclamation } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Header = styled(({ className }) => (
  <header className={className}>
    <Title>Frustration Dashboard</Title>
    <Avertissement>Expérimental</Avertissement>
  </header>
))`
  background-color: #000000;
  color: #fff200;
  grid-column: 1/3;
  grid-row: 1/2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 10px;
`

const Title = styled(({ className, children }) => (
  <h1 className={className}>
    <Link to="/">{children}</Link>
  </h1>
))`
  font-size: clamp(12px, 3.5vw, 70px);
  font-family: Bebas Neue;
  text-transform: uppercase;
  position: relative;
`

const Version = styled(({ className, children }) => (
  <small className={className}>v.{children}</small>
))`
  font-size: clamp(12px, 0.7vw, 20px);
  font-weight: 200;
  text-transform: lowercase;
`

const Avertissement = styled(({ className, children }) => (
  <div className={className}>
    <IconExclamation />
    {children}
  </div>
))`
  position: absolute;
  right: clamp(3px, 0.1vw, 5px);
  top: 50%;
  padding: 7px 12px;
  translate: 0 -50%;
  background: black;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(10px, 1vw, 20px);
`
