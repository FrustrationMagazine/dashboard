import Panel from '../components/Panel'
import { useOutletContext } from 'react-router-dom'
import { tidy, groupBy, filter, sum, summarize } from '@tidyjs/tidy'
import styled from 'styled-components'
import { ChartColumn } from '../components/charts/panel-column'
const Total = styled(({ className }) => {
  let { data } = useOutletContext()
  let dataPanel = []
  let dataChart = []
  if (data) {
    dataChart = tidy(
      data,
      filter((row) => ['subscription', 'donation', 'sale'].includes(row.type)),
      groupBy('created', [summarize({ net: sum('net') })])
    )
    dataPanel = tidy(
      data,
      filter((row) => ['subscription', 'donation', 'sale'].includes(row.type)),
      groupBy('created', [summarize({ net: sum('net') })])
    )
  }

  const series = [
    {
      name: 'Total',
      yAxis: 1,
      color: '#FFF200',
      data: dataChart.map((cv) => [new Date(cv.created).getTime(), cv.net]),
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
        xDateFormat: '%B %Y',
        valueSuffix: ' €'
      },
      showInLegend: false
    }
  ]

  return (
    <Panel data={dataPanel}>
      <ChartColumn type="total" data={dataPanel} />
    </Panel>
  )
})``

export default Total
