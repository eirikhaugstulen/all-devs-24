'use client'

import { SummaryCards } from '@/components/summary-cards'
import { UpcomingConcerts } from '@/components/upcoming-concerts'
import { ArtistsList } from '@/components/artists-list'
import { VenuesList } from '@/components/venues-list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from '@/components/Header'
import { Tables } from '@/database.types'

type Concert = Tables<'concerts'> & { artist: string, venue: string, ticketsSold: number }
type Venue = Tables<'venues'>

interface DashboardProps {
  concerts: Concert[];
  artists: Tables<'artists'>[];
  venues: Venue[];
}

export function Dashboard({ concerts, artists, venues }: DashboardProps) {
  const totalAttendees = concerts.reduce((sum, concert) => sum + concert.ticketsSold, 0)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-grow p-8">
        <SummaryCards
          totalConcerts={concerts.length}
          totalAttendees={totalAttendees}
          totalVenues={venues.length}
          totalArtists={artists.length}
        />

        <Tabs defaultValue="concerts" className="space-y-4">
          <TabsList>
            <TabsTrigger value="concerts">Upcoming Concerts</TabsTrigger>
            <TabsTrigger value="artists">Artists</TabsTrigger>
            <TabsTrigger value="venues">Venues</TabsTrigger>
          </TabsList>
          <TabsContent value="concerts">
            <UpcomingConcerts concerts={concerts} />
          </TabsContent>
          <TabsContent value="artists">
            <ArtistsList artists={artists} />
          </TabsContent>
          <TabsContent value="venues">
            <VenuesList venues={venues} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}