export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      artists: {
        Row: {
          country: string | null
          genre: string | null
          id: number
          name: string
        }
        Insert: {
          country?: string | null
          genre?: string | null
          id?: never
          name: string
        }
        Update: {
          country?: string | null
          genre?: string | null
          id?: never
          name?: string
        }
        Relationships: []
      }
      attendees: {
        Row: {
          email: string | null
          id: number
          name: string
          phone: string | null
          ticket_id: number | null
        }
        Insert: {
          email?: string | null
          id?: never
          name: string
          phone?: string | null
          ticket_id?: number | null
        }
        Update: {
          email?: string | null
          id?: never
          name?: string
          phone?: string | null
          ticket_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "attendees_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      concerts: {
        Row: {
          artist_id: number | null
          date: string
          end_time: string
          id: number
          start_time: string
          venue_id: number | null
        }
        Insert: {
          artist_id?: number | null
          date: string
          end_time: string
          id?: never
          start_time: string
          venue_id?: number | null
        }
        Update: {
          artist_id?: number | null
          date?: string
          end_time?: string
          id?: never
          start_time?: string
          venue_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "concerts_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "concerts_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venues"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string
          color: string
          description: string
          id: number
          name: string
          price: number
        }
        Insert: {
          category: string
          color: string
          description: string
          id?: number
          name: string
          price: number
        }
        Update: {
          category?: string
          color?: string
          description?: string
          id?: number
          name?: string
          price?: number
        }
        Relationships: []
      }
      tickets: {
        Row: {
          concert_id: number | null
          id: number
          price: number
          purchaser_name: string | null
          seat_number: string | null
        }
        Insert: {
          concert_id?: number | null
          id?: never
          price: number
          purchaser_name?: string | null
          seat_number?: string | null
        }
        Update: {
          concert_id?: number | null
          id?: never
          price?: number
          purchaser_name?: string | null
          seat_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tickets_concert_id_fkey"
            columns: ["concert_id"]
            isOneToOne: false
            referencedRelation: "concerts"
            referencedColumns: ["id"]
          },
        ]
      }
      venues: {
        Row: {
          capacity: number
          id: number
          location: string
          name: string
        }
        Insert: {
          capacity: number
          id?: never
          location: string
          name: string
        }
        Update: {
          capacity?: number
          id?: never
          location?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
