"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const tarotCards = [
  { name: "The Fool", description: "New beginnings, innocence, spontaneity", image: "/placeholder.svg?height=400&width=300" },
  { name: "The Magician", description: "Manifestation, resourcefulness, power", image: "/placeholder.svg?height=400&width=300" },
  { name: "The High Priestess", description: "Intuition, sacred knowledge, divine feminine", image: "/placeholder.svg?height=400&width=300" },
  { name: "The Empress", description: "Femininity, beauty, nature", image: "/placeholder.svg?height=400&width=300" },
  { name: "The Emperor", description: "Authority, establishment, structure", image: "/placeholder.svg?height=400&width=300" },
  { name: "The Hierophant", description: "Spiritual wisdom, religious beliefs, conformity", image: "/placeholder.svg?height=400&width=300" },
  { name: "The Lovers", description: "Love, harmony, relationships, choices", image: "/placeholder.svg?height=400&width=300" },
  { name: "The Chariot", description: "Control, willpower, success, action", image: "/placeholder.svg?height=400&width=300" },
  { name: "Strength", description: "Courage, patience, compassion, influence", image: "/placeholder.svg?height=400&width=300" },
]

export function TarotGameComponent() {
  const [revealedCards, setRevealedCards] = useState<boolean[]>(new Array(tarotCards.length).fill(false))

  const handleCardClick = (index: number) => {
    setRevealedCards(prev => {
      const newRevealed = [...prev]
      newRevealed[index] = !newRevealed[index]
      return newRevealed
    })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Tarot Card Game</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tarotCards.map((card, index) => (
          <Card 
            key={index} 
            className={`relative cursor-pointer transition-all duration-500 ease-in-out h-[600px]`}
            style={{ 
              transformStyle: 'preserve-3d', 
              transform: revealedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
            onClick={() => handleCardClick(index)}
          >
            <div className="absolute inset-0 backface-hidden bg-primary rounded-lg">
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-6xl font-bold text-primary-foreground">?</div>
              </CardContent>
            </div>
            <div 
              className="absolute inset-0 backface-hidden overflow-hidden bg-card rounded-lg"
              style={{ transform: 'rotateY(180deg)' }}
            >
              <CardContent className="flex flex-col h-full p-6">
                <h2 className="text-2xl font-semibold mb-4">{card.name}</h2>
                <div className="flex-grow flex flex-col items-center justify-center mb-4">
                  <img src={card.image} alt={card.name} className="w-full max-w-[250px] h-auto object-cover rounded-md mb-4" />
                  <p className="text-base text-card-foreground text-center">{card.description}</p>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}