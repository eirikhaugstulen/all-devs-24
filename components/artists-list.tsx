'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from 'lucide-react'
import { Tables, TablesInsert } from '@/database.types'
import { addArtistAction } from '@/app/actions'
import { useRouter } from 'next/navigation'

interface ArtistsListProps {
  artists: Tables<'artists'>[];
}

export function ArtistsList({ artists }: ArtistsListProps) {
  const [newArtist, setNewArtist] = useState<TablesInsert<'artists'>>({ name: '', genre: null, country: null })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()

  const genres = [
    "Rock", "Pop", "Hip Hop", "R&B", "Country", "Jazz", "Blues", "Classical", "Electronic", "Folk", "Reggae", "Metal"
  ]

  const handleAddArtist = async () => {
    if (newArtist.name) {
      const result = await addArtistAction(newArtist);
      if (result.error) {
        console.error('Failed to add artist:', result.error);
        // You might want to show an error message to the user here
      } else {
        setNewArtist({ name: '', genre: null, country: null });
        setIsDialogOpen(false);
        router.refresh(); // This will trigger a re-fetch of the data
      }
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Artists</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Artist
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Artist</DialogTitle>
              <DialogDescription>
                Enter the details of the new artist here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newArtist.name}
                  onChange={(e) => setNewArtist({ ...newArtist, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="genre" className="text-right">
                  Genre
                </Label>
                <Select
                  value={newArtist.genre || ''}
                  onValueChange={(value) => setNewArtist({ ...newArtist, genre: value })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a genre" />
                  </SelectTrigger>
                  <SelectContent>
                    {genres.map((genre) => (
                      <SelectItem key={genre} value={genre}>
                        {genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="country" className="text-right">
                  Country
                </Label>
                <Input
                  id="country"
                  value={newArtist.country || ''}
                  onChange={(e) => setNewArtist({ ...newArtist, country: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddArtist}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>Country</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {artists.map((artist) => (
              <TableRow key={artist.id}>
                <TableCell className="font-medium">{artist.name}</TableCell>
                <TableCell>{artist.genre}</TableCell>
                <TableCell>{artist.country}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}