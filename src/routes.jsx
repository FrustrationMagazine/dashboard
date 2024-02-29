import { createBrowserRouter } from 'react-router-dom'

import Layout from './pages/Layout/index'
import Income from '@pages/Income'
import Total from '@pages/Income/Total'
import Subscription from '@pages/Income/Subscription'
import Donation from '@pages/Income/Donation'
import DonationCampaign2023 from '@pages/Income/DonationCampaign2023'
import Sale from '@pages/Income/Sale'
import Accueil from '@pages/Accueil/index'
import Audiences from '@pages/Audiences/index'
import Laboratoire from '@pages/Laboratoire/index'
import Passwords from '@pages/Identifiants/index'
import Error from '@pages/Erreur/index'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Accueil />
      },
      {
        path: '/revenus',
        element: <Income />,
        children: [
          {
            path: '/revenus/total',
            element: <Total />
          },
          {
            path: '/revenus/subscription',
            element: <Subscription />
          },
          {
            path: '/revenus/donation',
            element: <Donation />
          },
          {
            path: '/revenus/sale',
            element: <Sale />
          },
          {
            path: '/revenus/donation-campaign-2023',
            element: <DonationCampaign2023 />
          }
        ]
      },
      {
        path: '/audiences',
        element: <Audiences />
      },
      {
        path: '/passwords',
        element: <Passwords />
      },
      {
        path: '/laboratoire',
        element: <Laboratoire />
      }
    ]
  }
])

export default router
