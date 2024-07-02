import Panel from '../components/Panel'
import { ChartLine } from '../components/charts/chart-line'
import { useOutletContext } from 'react-router-dom'
import { ChartColumn } from '../components/charts/panel-column'
import { tidy, summarize, filter, groupBy, sum } from '@tidyjs/tidy'

export default function Sale() {
  let { data } = useOutletContext()
  let dataPanel = []
  let dataChart = []
  if (data) {
    dataChart = tidy(
      data,
      filter((row) => row.type === 'sale'),
      groupBy(['created', 'source'], [summarize({ net: sum('net') })])
    )
    dataPanel = tidy(
      data,
      filter((row) => row.type === 'sale'),
      groupBy('created', [summarize({ total: sum('total'), net: sum('net') })])
    )
  }

  const series = [
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
      <Panel label="ventes" icon="🗞️" data={dataPanel} unit="ventes">
        <ChartColumn type="ventes" data={dataPanel} />
      </Panel>
      <ChartLine type="acheteurs" series={series} period="month" />
    </>
  )
}
