export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          created_at: string
          id: number
          stripe_customer_id: string
          user_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          stripe_customer_id: string
          user_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          stripe_customer_id?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string
          full_name: string
          id: number
        }
        Insert: {
          created_at?: string
          full_name: string
          id?: number
        }
        Update: {
          created_at?: string
          full_name?: string
          id?: number
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
