import { createBrowserRouter } from 'react-router-dom'

import Layout from './pages/Layout/index'
import IncomeEarned from '@pages/IncomeEarned'
import IncomeCreated from '@pages/IncomeCreated'
import Total from '@pages/IncomeEarned/Total'
import Subscription from '@pages/IncomeEarned/Subscription'
import Donation from '@pages/IncomeEarned/Donation'
import DonationCampaign2023 from '@pages/IncomeEarned/DonationCampaign2023'
import Sale from '@pages/IncomeEarned/Sale'
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
        path: '/revenus-gagnes',
        element: <IncomeEarned />,
        children: [
          {
            path: '/revenus-gagnes/total',
            element: <Total />
          },
          {
            path: '/revenus-gagnes/subscription',
            element: <Subscription />
          },
          {
            path: '/revenus-gagnes/donation',
            element: <Donation />
          },
          {
            path: '/revenus-gagnes/sale',
            element: <Sale />
          },
          {
            path: '/revenus-gagnes/donation-campaign-2023',
            element: <DonationCampaign2023 />
          }
        ]
      },
      {
        path: '/revenus',
        element: <IncomeCreated />,
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
