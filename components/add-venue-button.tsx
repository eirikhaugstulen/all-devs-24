'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusIcon } from "lucide-react"
import Confetti from 'react-confetti'
import { addVenueAction } from '@/app/actions'
import { useTransition } from 'react'

export function AddVenueButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [showConfetti, setShowConfetti] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    capacity: ''
  })
  const [isPending, startTransition] = useTransition()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      const result = await addVenueAction({
        name: formData.name,
        location: formData.location,
        capacity: parseInt(formData.capacity, 10)
      })
      if (result.error) {
        console.error('Error adding venue:', result.error)
        // Handle error (e.g., show an error message to the user)
      } else {
        setShowConfetti(true)
        setTimeout(() => {
          setShowConfetti(false)
          setIsOpen(false)
          setStep(1)
          setFormData({ name: '', location: '', capacity: '' })
        }, 3000)
      }
    })
  }

  return (
    <>
      {showConfetti && <Confetti />}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button size="sm">
            <PlusIcon className="mr-2 h-4 w-4" /> Add Venue
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Venue</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Venue Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button type="button" onClick={handleNext}>Next</Button>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <Button type="button" onClick={handleBack}>Back</Button>
                  <Button type="button" onClick={handleNext}>Next</Button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input
                    id="capacity"
                    name="capacity"
                    type="number"
                    value={formData.capacity}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <Button type="button" onClick={handleBack}>Back</Button>
                  <Button type="submit" disabled={isPending}>
                    {isPending ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}