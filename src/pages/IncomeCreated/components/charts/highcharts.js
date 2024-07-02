import Highcharts from '@config/highcharts.config'
import HighchartsReact from 'highcharts-react-official'
// import useDatabase from "../hooks/useIncome";

export const ChartStripeTypeSubscriptions = () => {
  // const { subscriptionsType } = useDatabase();
  let data = subscriptionsType.filter(
    (subscription) => subscription.source === 'stripe'
  )

  const options = {
    chart: {
      type: 'pie',
      height: 300,
      backgroundColor: 'transparent'
    },
    title: {
      text: ''
    },
    colors: ['#552586', '#6A359C', '#804FB3', '#9968C7', '#B589D6'],
    tooltip: {
      pointFormat:
        "Nombre d'abonnement: <b>{point.y:.0f} ({point.percentage:.1f}%)</b>" // display percentage and absolute value in tooltip
    },

    series: [
      {
        name: "Type d'abonnement",
        data: data.map((subscription) => ({
          name: subscription.amount,
          y: subscription.subscriptions
        }))
      }
    ]
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    ></HighchartsReact>
  )
}
