import supabase from '@config/supabaseClient'
import { useQuery } from '@tanstack/react-query'

export function useIncome({ type } = { type: 'earned' }) {
  let query = useQuery({
    queryKey: ['income'],
    queryFn: async () => {
      let { data, error } = await supabase.rpc(`total_by_month_${type}`)
      if (error) console.error(error)
      return data
    }
  })

  return query
}

export function useDonation() {
  let { data } = useQuery({
    queryKey: ['donation'],
    queryFn: async () => {
      let { data } = await supabase.rpc('donation_info')
      return data
    }
  })

  return data
}

export function useDonationCampaign2023() {
  let { data } = useQuery({
    queryKey: ['donation_campaign_2023'],
    queryFn: async () => {
      let { data } = await supabase.rpc('donation_campaign_2023')
      return data
    }
  })

  return data
}

export function useBalance() {
  let { data, isLoading, error } = useQuery({
    queryKey: ['stripeBalance'],
    queryFn: async () => {
      let { data, error } = await supabase
        .from('balance')
        .select()
        .order('date', { ascending: false })
        .limit(1)
        .single()
      return data
    }
  })

  return { data, isLoading }
}
