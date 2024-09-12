import { Dashboard } from '@/components/dashboard'
import { createClient } from '@/utils/supabase/server'
import { Tables } from '@/database.types'

async function getConcerts(): Promise<Tables<'concerts'>[]> {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('concerts')
    .select('*, artist:artists(name), venue:venues(name)')

  if (error) {
    console.error('Error fetching concerts:', error)
    return []
  }

  return data.map(concert => ({
    ...concert,
    artist: concert.artist?.name ?? 'Unknown Artist',
    venue: concert.venue?.name ?? 'Unknown Venue',
    // Safely derive 'time' from start_time
    time: concert.start_time 
      ? concert.start_time.split('T')[1]?.slice(0, 5) ?? '00:00'
      : '00:00',
    ticketsSold: 0 // Placeholder value
  }))
}

async function getArtists(): Promise<Tables<'artists'>[]> {
  const supabase = createClient()
  const { data, error } = await supabase.from('artists').select('*')
  
  if (error) {
    console.error('Error fetching artists:', error)
    return []
  }
  
  return data
}

async function getVenues(): Promise<Tables<'venues'>[]> {
  const supabase = createClient()
  const { data, error } = await supabase.from('venues').select('*')

  if (error) {
    console.error('Error fetching venues:', error)
    return []
  }

  return data
}

export default async function DashboardPage() {
  const [concerts, artists, venues] = await Promise.all([
    getConcerts(),
    getArtists(),
    getVenues()
  ])

  return <Dashboard concerts={concerts} artists={artists} venues={venues} />
}