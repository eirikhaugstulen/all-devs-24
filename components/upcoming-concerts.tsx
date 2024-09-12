import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tables } from "@/database.types"

type BaseConcert = Tables<'concerts'>
type Artist = Tables<'artists'>
type Venue = Tables<'venues'>

interface Concert extends BaseConcert {
  artist: string;
  venue: string;
  ticketsSold: number;
}

interface UpcomingConcertsProps {
  concerts: Concert[];
}

export function UpcomingConcerts({ concerts }: UpcomingConcertsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Concerts</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Artist</TableHead>
              <TableHead>Venue</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Tickets Sold</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {concerts.map((concert) => (
              <TableRow key={concert.id}>
                <TableCell className="font-medium">{concert.artist}</TableCell>
                <TableCell>{concert.venue}</TableCell>
                <TableCell>{concert.date}</TableCell>
                <TableCell>{concert.start_time}</TableCell>
                <TableCell>{concert.ticketsSold}</TableCell>
                <TableCell>
                  <Badge variant={concert.ticketsSold > 1000 ? "default" : "secondary"}>
                    {concert.ticketsSold > 1000 ? "High Sales" : "Moderate Sales"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}