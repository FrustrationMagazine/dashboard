import HighchartsReact from 'highcharts-react-official'
import Highcharts from '@config/highcharts.config'

export function ChartColumn({ type, data }) {
  data = data.slice(0, 8).reverse()

  const options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      plotBackgroundColor: 'transparent',
      height: 150,
      width: 250
    },
    title: {
      text: ''
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      column: {
        borderWidth: 0,
        pointWidth: 15
      }
    },
    xAxis: {
      categories: data.map(({ created }) => {
        let formattedDate = new Date(created).toLocaleDateString('fr-FR', {
          month: 'long',
          year: 'numeric'
        })
        formattedDate =
          formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
        return formattedDate
      }),
      labels: {
        enabled: false,
        style: {
          color: '#000'
        }
      },
      lineColor: 'transparent',
      lineWidth: 0
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        enabled: false
      },
      gridLineWidth: 0,
      gridLineColor: 'transparent'
    },

    series: [
      {
        name: type,
        color: 'var(--primary-color)',
        data: data.map((cv) => cv.net)
      }
    ],
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><br/>',
      valueSuffix: ' €',
      xDateFormat: '%B %Y'
    }
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    ></HighchartsReact>
  )
}
