import PanelDonation2023 from '../components/PanelDonation2023'
import { ChartLine } from '../components/charts/chart-line'
import { useDonationCampaign2023 } from '@hooks'
import { ChartColumn } from '../components/charts/panel-column'

export default function DonationCampaign2023() {
  const data = useDonationCampaign2023()
  let dataChart = []
  let dataPanel = []
  if (data) {
    dataChart = data
    dataPanel = data.reduce((acc, cv) => acc + cv.net, 0)
  }
  const series = [
    {
      name: 'Total quotidien',

      yAxis: 1,
      color: '#515EE1',
      data: dataChart.map((cv) => {
        let date = new Date(cv.created).getTime()
        return [date, cv.net]
      }),
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
        valueSuffix: ' €',
        xDateFormat: '%A %e %B'
      },
      showInLegend: true
    },
    {
      name: 'Cumul',
      yAxis: 1,
      color: '#e15151',
      data: dataChart.map((cv, index) => {
        let date = new Date(cv.created).getTime()
        let cumul = dataChart
          .filter((_, currentIndex) => currentIndex <= index)
          .reduce((acc, cv) => acc + cv.net, 0)
        return [date, cumul]
      }),
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
        valueSuffix: ' €',
        xDateFormat: '%A %e %B'
      },
      showInLegend: true
    }
  ]

  return (
    <>
      <PanelDonation2023 label="dons" icon="🙏" data={dataPanel} unit="dons">
        {/* <ChartColumn type="dons" data={dataPanel} /> */}
      </PanelDonation2023>
      <ChartLine type="donateurs" series={series} period="day" />
    </>
  )
}
