import Panel from '../components/Panel'
import { ChartLine } from '../components/charts/chart-line'
import { useOutletContext } from 'react-router-dom'
import Card from '../components/Card'
import styled from 'styled-components'
import { useDonation } from '@hooks'
import { tidy, summarize, filter, groupBy, sum } from '@tidyjs/tidy'
import { ChartColumn } from '../components/charts/panel-column'

export default function Donation() {
  let { data } = useOutletContext()
  const donationInfo = useDonation()?.['0']
  let dataPanel = []
  let dataChart = []
  if (data) {
    dataChart = tidy(
      data,
      filter((row) => row.type === 'donation'),
      groupBy(['created', 'source'], [summarize({ net: sum('net') })])
    )
    dataPanel = tidy(
      data,
      filter((row) => row.type === 'donation'),
      groupBy('created', [summarize({ total: sum('total'), net: sum('net') })])
    )
  }

  const series = [
    {
      name: 'HelloAsso',
      yAxis: 1,
      color: '#4AD28A',
      data: dataChart
        .filter((row) => row.source === 'helloasso')
        .map((cv) => [new Date(cv.created).getTime(), cv.net]),
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
        xDateFormat: '%B %Y',
        valueSuffix: ' €'
      },
      showInLegend: true
    },

    {
      name: 'Stripe',
      yAxis: 1,
      color: '#515EE1',
      data: dataChart
        .filter((row) => row.source === 'stripe')
        .map((cv) => [new Date(cv.created).getTime(), cv.net]),
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
        valueSuffix: ' €',
        xDateFormat: '%B %Y'
      },
      showInLegend: true
    }
  ]

  return (
    <>
      <Panel label="dons" icon="🙏" data={dataPanel} unit="dons">
        <ChartColumn type="dons" data={dataPanel} />
      </Panel>
      <Cards donationInfo={donationInfo} />
      <ChartLine type="donateurs" series={series} period="month"/>
    </>
  )
}

const Cards = ({ donationInfo }) => {
  return (
    <CardsContainer>
      <Card title="Don max" icon="⬆︎">
        {donationInfo?.max}€
      </Card>
      <Card title="Don min" icon="⬇︎">
        {donationInfo?.min}€
      </Card>
      <Card title="Don moyen" icon="∑">
        {donationInfo?.mean}€
      </Card>
      <Card title="Don médian" icon="↹">
        {donationInfo?.median}€
      </Card>
    </CardsContainer>
  )
}

const CardsContainer = styled(({ className, children }) => {
  return <div className={className}>{children}</div>
})`
  display: flex;
  gap: clamp(20px, 4vw, 30px);
  & > * {
    flex-grow: 1;
    flex-basis: 300px;
  }
`
