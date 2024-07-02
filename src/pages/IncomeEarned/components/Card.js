import Paper from '@mui/material/Paper'
import styled from 'styled-components'
const Card = styled(({ className, title, icon, children }) => {
  return (
    <Paper className={className} elevation={3}>
      <h3>{title}</h3>
      <p>{children}</p>
      <span className="icon">{icon}</span>
    </Paper>
  )
})`
  background: linear-gradient(
    166deg,
    rgba(255, 242, 0, 1) 0%,
    rgba(171, 162, 4, 1) 100%
  ) !important;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;

  h3 {
    font-size: clamp(14px, 3vw, 25px);
    line-height: 140%;
  }

  p {
    font-size: clamp(12px, 2.5vw, 20px);
  }

  .icon {
    position: absolute;
    right: 0;
    top: 50%;
    font-size: 140px;
    opacity: 0.15;
    transform: translate(30%, -45%);
    user-select: none;
  }
  margin-bottom: 5px;
`

export default Card
