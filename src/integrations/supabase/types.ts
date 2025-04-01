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
      activity_metrics: {
        Row: {
          created_at: string | null
          id: string
          metric_name: string
          metric_value: number
          recorded_at: string | null
          workout_session_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          metric_name: string
          metric_value: number
          recorded_at?: string | null
          workout_session_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metric_name?: string
          metric_value?: number
          recorded_at?: string | null
          workout_session_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_metrics_workout_session_id_fkey"
            columns: ["workout_session_id"]
            isOneToOne: false
            referencedRelation: "workout_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      activity_splits: {
        Row: {
          average_pace: unknown | null
          average_speed: number | null
          created_at: string | null
          distance_km: number
          duration: unknown
          elevation_gain: number | null
          elevation_loss: number | null
          id: string
          split_number: number
          workout_session_id: string | null
        }
        Insert: {
          average_pace?: unknown | null
          average_speed?: number | null
          created_at?: string | null
          distance_km: number
          duration: unknown
          elevation_gain?: number | null
          elevation_loss?: number | null
          id?: string
          split_number: number
          workout_session_id?: string | null
        }
        Update: {
          average_pace?: unknown | null
          average_speed?: number | null
          created_at?: string | null
          distance_km?: number
          duration?: unknown
          elevation_gain?: number | null
          elevation_loss?: number | null
          id?: string
          split_number?: number
          workout_session_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_splits_workout_session_id_fkey"
            columns: ["workout_session_id"]
            isOneToOne: false
            referencedRelation: "workout_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      activity_waypoints: {
        Row: {
          accuracy: number | null
          altitude: number | null
          created_at: string | null
          id: string
          latitude: number
          longitude: number
          speed: number | null
          timestamp: string
          workout_session_id: string | null
        }
        Insert: {
          accuracy?: number | null
          altitude?: number | null
          created_at?: string | null
          id?: string
          latitude: number
          longitude: number
          speed?: number | null
          timestamp: string
          workout_session_id?: string | null
        }
        Update: {
          accuracy?: number | null
          altitude?: number | null
          created_at?: string | null
          id?: string
          latitude?: number
          longitude?: number
          speed?: number | null
          timestamp?: string
          workout_session_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_waypoints_workout_session_id_fkey"
            columns: ["workout_session_id"]
            isOneToOne: false
            referencedRelation: "workout_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_users: {
        Row: {
          created_at: string | null
          role: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          role?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          role?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      auth_accounts: {
        Row: {
          created_at: string | null
          id: string
          last_sign_in: string | null
          provider: Database["public"]["Enums"]["auth_provider"]
          provider_refresh_token: string | null
          provider_user_id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_sign_in?: string | null
          provider: Database["public"]["Enums"]["auth_provider"]
          provider_refresh_token?: string | null
          provider_user_id: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          last_sign_in?: string | null
          provider?: Database["public"]["Enums"]["auth_provider"]
          provider_refresh_token?: string | null
          provider_user_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "auth_accounts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      calendly_event_types: {
        Row: {
          created_at: string
          description: string | null
          duration: number
          event_type_id: string
          id: string
          name: string
          scheduling_url: string
          updated_at: string
          uri: string
          url: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration: number
          event_type_id: string
          id?: string
          name: string
          scheduling_url: string
          updated_at?: string
          uri: string
          url: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          duration?: number
          event_type_id?: string
          id?: string
          name?: string
          scheduling_url?: string
          updated_at?: string
          uri?: string
          url?: string
          user_id?: string
        }
        Relationships: []
      }
      calendly_oauth_tokens: {
        Row: {
          access_token: string
          created_at: string
          expires_at: string
          id: string
          refresh_token: string
          status: Database["public"]["Enums"]["auth_token_status"] | null
          token_type: string
          updated_at: string
          user_id: string
          webhook_subscription_uri: string | null
        }
        Insert: {
          access_token: string
          created_at?: string
          expires_at: string
          id?: string
          refresh_token: string
          status?: Database["public"]["Enums"]["auth_token_status"] | null
          token_type: string
          updated_at?: string
          user_id: string
          webhook_subscription_uri?: string | null
        }
        Update: {
          access_token?: string
          created_at?: string
          expires_at?: string
          id?: string
          refresh_token?: string
          status?: Database["public"]["Enums"]["auth_token_status"] | null
          token_type?: string
          updated_at?: string
          user_id?: string
          webhook_subscription_uri?: string | null
        }
        Relationships: []
      }
      categories: {
        Row: {
          category_type: Database["public"]["Enums"]["category_type"] | null
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          category_type?: Database["public"]["Enums"]["category_type"] | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          category_type?: Database["public"]["Enums"]["category_type"] | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      club_comments: {
        Row: {
          content: string
          created_at: string | null
          id: string
          parent_id: string | null
          path: unknown | null
          post_id: string | null
          updated_at: string | null
          upvotes_count: number | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          parent_id?: string | null
          path?: unknown | null
          post_id?: string | null
          updated_at?: string | null
          upvotes_count?: number | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          parent_id?: string | null
          path?: unknown | null
          post_id?: string | null
          updated_at?: string | null
          upvotes_count?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "club_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "club_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "club_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      club_leaderboards: {
        Row: {
          club_id: string
          created_at: string | null
          end_date: string
          id: string
          metric_name: string
          metric_value: number
          period: string
          start_date: string
          updated_at: string | null
        }
        Insert: {
          club_id: string
          created_at?: string | null
          end_date: string
          id?: string
          metric_name: string
          metric_value?: number
          period?: string
          start_date: string
          updated_at?: string | null
        }
        Update: {
          club_id?: string
          created_at?: string | null
          end_date?: string
          id?: string
          metric_name?: string
          metric_value?: number
          period?: string
          start_date?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "club_leaderboards_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
        ]
      }
      club_member_leaderboards: {
        Row: {
          club_id: string
          created_at: string | null
          end_date: string
          id: string
          metric_name: string
          metric_value: number
          period: string
          start_date: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          club_id: string
          created_at?: string | null
          end_date: string
          id?: string
          metric_name: string
          metric_value?: number
          period?: string
          start_date: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          club_id?: string
          created_at?: string | null
          end_date?: string
          id?: string
          metric_name?: string
          metric_value?: number
          period?: string
          start_date?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "club_member_leaderboards_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
        ]
      }
      club_memberships: {
        Row: {
          club_id: string | null
          id: string
          is_subscribed: boolean | null
          joined_at: string | null
          last_active_at: string | null
          moderation_notes: string | null
          role: Database["public"]["Enums"]["club_member_role"] | null
          status: string | null
          stripe_subscription_id: string | null
          subscription_end_date: string | null
          subscription_period_end: string | null
          subscription_status: string | null
          subscription_tier_id: string | null
          subscription_updated_at: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          club_id?: string | null
          id?: string
          is_subscribed?: boolean | null
          joined_at?: string | null
          last_active_at?: string | null
          moderation_notes?: string | null
          role?: Database["public"]["Enums"]["club_member_role"] | null
          status?: string | null
          stripe_subscription_id?: string | null
          subscription_end_date?: string | null
          subscription_period_end?: string | null
          subscription_status?: string | null
          subscription_tier_id?: string | null
          subscription_updated_at?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          club_id?: string | null
          id?: string
          is_subscribed?: boolean | null
          joined_at?: string | null
          last_active_at?: string | null
          moderation_notes?: string | null
          role?: Database["public"]["Enums"]["club_member_role"] | null
          status?: string | null
          stripe_subscription_id?: string | null
          subscription_end_date?: string | null
          subscription_period_end?: string | null
          subscription_status?: string | null
          subscription_tier_id?: string | null
          subscription_updated_at?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "club_memberships_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_memberships_subscription_tier_id_fkey"
            columns: ["subscription_tier_id"]
            isOneToOne: false
            referencedRelation: "club_subscription_tiers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_memberships_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      club_notifications: {
        Row: {
          club_id: string | null
          created_at: string | null
          id: string
          is_read: boolean | null
          metadata: Json | null
          reference_id: string | null
          type: string
          user_id: string | null
        }
        Insert: {
          club_id?: string | null
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          metadata?: Json | null
          reference_id?: string | null
          type: string
          user_id?: string | null
        }
        Update: {
          club_id?: string | null
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          metadata?: Json | null
          reference_id?: string | null
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "club_notifications_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      club_post_likes: {
        Row: {
          created_at: string | null
          id: string
          post_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          post_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          post_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "club_post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "club_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      club_posts: {
        Row: {
          club_id: string | null
          content: string
          content_id: string | null
          content_type: Database["public"]["Enums"]["content_type_enum"]
          created_at: string | null
          id: string
          is_shared_content: boolean | null
          is_subscriber_only: boolean | null
          likes_count: number | null
          media_type: string | null
          media_url: string | null
          metadata: Json | null
          shared_by: string | null
          shared_content_id: string | null
          shared_content_metadata: Json | null
          shared_content_type: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          club_id?: string | null
          content: string
          content_id?: string | null
          content_type: Database["public"]["Enums"]["content_type_enum"]
          created_at?: string | null
          id?: string
          is_shared_content?: boolean | null
          is_subscriber_only?: boolean | null
          likes_count?: number | null
          media_type?: string | null
          media_url?: string | null
          metadata?: Json | null
          shared_by?: string | null
          shared_content_id?: string | null
          shared_content_metadata?: Json | null
          shared_content_type?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          club_id?: string | null
          content?: string
          content_id?: string | null
          content_type?: Database["public"]["Enums"]["content_type_enum"]
          created_at?: string | null
          id?: string
          is_shared_content?: boolean | null
          is_subscriber_only?: boolean | null
          likes_count?: number | null
          media_type?: string | null
          media_url?: string | null
          metadata?: Json | null
          shared_by?: string | null
          shared_content_id?: string | null
          shared_content_metadata?: Json | null
          shared_content_type?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "club_posts_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      club_sports: {
        Row: {
          created_at: string
          description: string | null
          display_name: string | null
          icon_name: string
          id: string
          name: string
          subtypes: string[] | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_name?: string | null
          icon_name: string
          id?: string
          name: string
          subtypes?: string[] | null
        }
        Update: {
          created_at?: string
          description?: string | null
          display_name?: string | null
          icon_name?: string
          id?: string
          name?: string
          subtypes?: string[] | null
        }
        Relationships: []
      }
      club_subscription_tiers: {
        Row: {
          club_id: string | null
          created_at: string | null
          currency: string | null
          description: string | null
          features: Json | null
          id: string
          interval: string | null
          is_active: boolean | null
          name: string
          price: number
          stripe_price_id: string | null
          updated_at: string | null
        }
        Insert: {
          club_id?: string | null
          created_at?: string | null
          currency?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          interval?: string | null
          is_active?: boolean | null
          name: string
          price: number
          stripe_price_id?: string | null
          updated_at?: string | null
        }
        Update: {
          club_id?: string | null
          created_at?: string | null
          currency?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          interval?: string | null
          is_active?: boolean | null
          name?: string
          price?: number
          stripe_price_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "club_subscription_tiers_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
        ]
      }
      club_types: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      clubs: {
        Row: {
          access_type: string | null
          avatar_url: string | null
          banner_url: string | null
          club_type: string | null
          created_at: string | null
          created_by: string
          description: string | null
          id: string
          image_url: string | null
          metadata: Json | null
          name: string
          slug: string
          sport_type: string | null
          status: Database["public"]["Enums"]["club_status"] | null
          stripe_price_id: string | null
          stripe_product_id: string | null
          subscription_details: Json | null
          subscription_enabled: boolean | null
          subscription_price: number | null
          total_members: number | null
          total_posts: number | null
          updated_at: string | null
        }
        Insert: {
          access_type?: string | null
          avatar_url?: string | null
          banner_url?: string | null
          club_type?: string | null
          created_at?: string | null
          created_by: string
          description?: string | null
          id?: string
          image_url?: string | null
          metadata?: Json | null
          name: string
          slug: string
          sport_type?: string | null
          status?: Database["public"]["Enums"]["club_status"] | null
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          subscription_details?: Json | null
          subscription_enabled?: boolean | null
          subscription_price?: number | null
          total_members?: number | null
          total_posts?: number | null
          updated_at?: string | null
        }
        Update: {
          access_type?: string | null
          avatar_url?: string | null
          banner_url?: string | null
          club_type?: string | null
          created_at?: string | null
          created_by?: string
          description?: string | null
          id?: string
          image_url?: string | null
          metadata?: Json | null
          name?: string
          slug?: string
          sport_type?: string | null
          status?: Database["public"]["Enums"]["club_status"] | null
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          subscription_details?: Json | null
          subscription_enabled?: boolean | null
          subscription_price?: number | null
          total_members?: number | null
          total_posts?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clubs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      collection_access: {
        Row: {
          collection_id: string | null
          expires_at: string | null
          id: string
          price_paid: number
          purchased_at: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          collection_id?: string | null
          expires_at?: string | null
          id?: string
          price_paid: number
          purchased_at?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          collection_id?: string | null
          expires_at?: string | null
          id?: string
          price_paid?: number
          purchased_at?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "collection_access_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
        ]
      }
      collection_exercises: {
        Row: {
          added_at: string
          collection_id: string
          exercise_id: string
        }
        Insert: {
          added_at?: string
          collection_id: string
          exercise_id: string
        }
        Update: {
          added_at?: string
          collection_id?: string
          exercise_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "collection_exercises_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "exercise_collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collection_exercises_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
        ]
      }
      collection_items: {
        Row: {
          added_at: string | null
          collection_id: string | null
          id: string
          item_id: string
          item_type: string
          order_index: number | null
        }
        Insert: {
          added_at?: string | null
          collection_id?: string | null
          id?: string
          item_id: string
          item_type: string
          order_index?: number | null
        }
        Update: {
          added_at?: string | null
          collection_id?: string | null
          id?: string
          item_id?: string
          item_type?: string
          order_index?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "collection_items_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
        ]
      }
      collection_reviews: {
        Row: {
          collection_id: string | null
          comment: string | null
          created_at: string | null
          id: string
          rating: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          collection_id?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string
          rating?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          collection_id?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string
          rating?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "collection_reviews_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
        ]
      }
      collection_workouts: {
        Row: {
          added_at: string
          collection_id: string
          order_index: number | null
          workout_id: string
        }
        Insert: {
          added_at?: string
          collection_id: string
          order_index?: number | null
          workout_id: string
        }
        Update: {
          added_at?: string
          collection_id?: string
          order_index?: number | null
          workout_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "collection_workouts_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "workout_collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collection_workouts_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      collections: {
        Row: {
          access_tier: string | null
          category: string | null
          cover_image_url: string | null
          created_at: string | null
          created_by: string
          description: string | null
          id: string
          name: string
          price: number | null
          pricing_model: string | null
          purchase_count: number | null
          rating: number | null
          subscription_price: number | null
          tags: string[] | null
          thumbnail_url: string | null
          total_ratings: number | null
          updated_at: string | null
          visibility: Database["public"]["Enums"]["collection_visibility"]
        }
        Insert: {
          access_tier?: string | null
          category?: string | null
          cover_image_url?: string | null
          created_at?: string | null
          created_by: string
          description?: string | null
          id?: string
          name: string
          price?: number | null
          pricing_model?: string | null
          purchase_count?: number | null
          rating?: number | null
          subscription_price?: number | null
          tags?: string[] | null
          thumbnail_url?: string | null
          total_ratings?: number | null
          updated_at?: string | null
          visibility?: Database["public"]["Enums"]["collection_visibility"]
        }
        Update: {
          access_tier?: string | null
          category?: string | null
          cover_image_url?: string | null
          created_at?: string | null
          created_by?: string
          description?: string | null
          id?: string
          name?: string
          price?: number | null
          pricing_model?: string | null
          purchase_count?: number | null
          rating?: number | null
          subscription_price?: number | null
          tags?: string[] | null
          thumbnail_url?: string | null
          total_ratings?: number | null
          updated_at?: string | null
          visibility?: Database["public"]["Enums"]["collection_visibility"]
        }
        Relationships: []
      }
      comment_upvotes: {
        Row: {
          comment_id: string | null
          created_at: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          comment_id?: string | null
          created_at?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          comment_id?: string | null
          created_at?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comment_upvotes_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "club_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comment_upvotes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      commission_payouts: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          payout_date: string | null
          payout_details: Json | null
          payout_method: string | null
          status: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          payout_date?: string | null
          payout_details?: Json | null
          payout_method?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          payout_date?: string | null
          payout_details?: Json | null
          payout_method?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      commissions: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          order_id: string
          paid_at: string | null
          referral_code_id: string
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          order_id: string
          paid_at?: string | null
          referral_code_id: string
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          order_id?: string
          paid_at?: string | null
          referral_code_id?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "commissions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "store_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commissions_referral_code_id_fkey"
            columns: ["referral_code_id"]
            isOneToOne: false
            referencedRelation: "referral_codes"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          created_at: string | null
          id: string
          last_message_at: string | null
          last_message_id: string | null
          unread_count_user1: number | null
          unread_count_user2: number | null
          updated_at: string | null
          user1_id: string
          user2_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_message_at?: string | null
          last_message_id?: string | null
          unread_count_user1?: number | null
          unread_count_user2?: number | null
          updated_at?: string | null
          user1_id: string
          user2_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          last_message_at?: string | null
          last_message_id?: string | null
          unread_count_user1?: number | null
          unread_count_user2?: number | null
          updated_at?: string | null
          user1_id?: string
          user2_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversations_last_message_id_fkey"
            columns: ["last_message_id"]
            isOneToOne: false
            referencedRelation: "direct_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      direct_messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_deleted: boolean | null
          read_at: string | null
          recipient_id: string
          sender_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_deleted?: boolean | null
          read_at?: string | null
          recipient_id: string
          sender_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_deleted?: boolean | null
          read_at?: string | null
          recipient_id?: string
          sender_id?: string
        }
        Relationships: []
      }
      exercise_cache: {
        Row: {
          cached_data: Json
          created_at: string | null
          exercise_id: string | null
          id: string
          is_dirty: boolean | null
          last_synced_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          cached_data: Json
          created_at?: string | null
          exercise_id?: string | null
          id?: string
          is_dirty?: boolean | null
          last_synced_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          cached_data?: Json
          created_at?: string | null
          exercise_id?: string | null
          id?: string
          is_dirty?: boolean | null
          last_synced_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercise_cache_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_categories: {
        Row: {
          category_type: string | null
          color: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          updated_at: string
        }
        Insert: {
          category_type?: string | null
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          updated_at?: string
        }
        Update: {
          category_type?: string | null
          color?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      exercise_category_map: {
        Row: {
          category_id: string | null
          created_at: string
          exercise_id: string | null
          id: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          exercise_id?: string | null
          id?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          exercise_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercise_category_map_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "exercise_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercise_category_map_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_collections: {
        Row: {
          added_at: string | null
          collection_id: string | null
          created_by: string | null
          exercise_id: string | null
          id: string
        }
        Insert: {
          added_at?: string | null
          collection_id?: string | null
          created_by?: string | null
          exercise_id?: string | null
          id?: string
        }
        Update: {
          added_at?: string | null
          collection_id?: string | null
          created_by?: string | null
          exercise_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercise_collections_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercise_collections_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_measurement_templates: {
        Row: {
          created_at: string
          description: string | null
          exercise_id: string | null
          id: string
          is_required: boolean | null
          metric_type: string | null
          name: string
          unit: string | null
          updated_at: string
          validation_rules: Json | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          exercise_id?: string | null
          id?: string
          is_required?: boolean | null
          metric_type?: string | null
          name: string
          unit?: string | null
          updated_at?: string
          validation_rules?: Json | null
        }
        Update: {
          created_at?: string
          description?: string | null
          exercise_id?: string | null
          id?: string
          is_required?: boolean | null
          metric_type?: string | null
          name?: string
          unit?: string | null
          updated_at?: string
          validation_rules?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "exercise_measurement_templates_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_muscle_groups: {
        Row: {
          exercise_id: string
          is_primary: boolean | null
          muscle_group_id: string
        }
        Insert: {
          exercise_id: string
          is_primary?: boolean | null
          muscle_group_id: string
        }
        Update: {
          exercise_id?: string
          is_primary?: boolean | null
          muscle_group_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercise_muscle_groups_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercise_muscle_groups_muscle_group_id_fkey"
            columns: ["muscle_group_id"]
            isOneToOne: false
            referencedRelation: "muscle_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_personal_records: {
        Row: {
          achieved_at: string | null
          created_at: string | null
          exercise_id: string
          id: string
          notes: string | null
          pr_type: Database["public"]["Enums"]["exercise_pr_type"]
          previous_value: number | null
          record_type: string
          user_id: string
          value: number
          workout_session_id: string
        }
        Insert: {
          achieved_at?: string | null
          created_at?: string | null
          exercise_id: string
          id?: string
          notes?: string | null
          pr_type: Database["public"]["Enums"]["exercise_pr_type"]
          previous_value?: number | null
          record_type?: string
          user_id: string
          value: number
          workout_session_id: string
        }
        Update: {
          achieved_at?: string | null
          created_at?: string | null
          exercise_id?: string
          id?: string
          notes?: string | null
          pr_type?: Database["public"]["Enums"]["exercise_pr_type"]
          previous_value?: number | null
          record_type?: string
          user_id?: string
          value?: number
          workout_session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercise_personal_records_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercise_personal_records_workout_session_id_fkey"
            columns: ["workout_session_id"]
            isOneToOne: false
            referencedRelation: "workout_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_ratings: {
        Row: {
          comment: string | null
          created_at: string | null
          exercise_id: string | null
          id: string
          rating: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          exercise_id?: string | null
          id?: string
          rating?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          exercise_id?: string | null
          id?: string
          rating?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exercise_ratings_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercise_ratings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_records: {
        Row: {
          achieved_at: string | null
          created_at: string | null
          exercise_id: string | null
          id: string
          measurement_type:
            | Database["public"]["Enums"]["exercise_measurement_type"]
            | null
          metric_name: string
          metric_type: Database["public"]["Enums"]["performance_metric_type"]
          metric_value: Json
          user_id: string | null
        }
        Insert: {
          achieved_at?: string | null
          created_at?: string | null
          exercise_id?: string | null
          id?: string
          measurement_type?:
            | Database["public"]["Enums"]["exercise_measurement_type"]
            | null
          metric_name: string
          metric_type: Database["public"]["Enums"]["performance_metric_type"]
          metric_value: Json
          user_id?: string | null
        }
        Update: {
          achieved_at?: string | null
          created_at?: string | null
          exercise_id?: string | null
          id?: string
          measurement_type?:
            | Database["public"]["Enums"]["exercise_measurement_type"]
            | null
          metric_name?: string
          metric_type?: Database["public"]["Enums"]["performance_metric_type"]
          metric_value?: Json
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exercise_records_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_sport_map: {
        Row: {
          created_at: string
          exercise_id: string | null
          id: string
          sport_id: string | null
        }
        Insert: {
          created_at?: string
          exercise_id?: string | null
          id?: string
          sport_id?: string | null
        }
        Update: {
          created_at?: string
          exercise_id?: string | null
          id?: string
          sport_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exercise_sport_map_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercise_sport_map_sport_id_fkey"
            columns: ["sport_id"]
            isOneToOne: false
            referencedRelation: "sport_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_templates: {
        Row: {
          created_at: string
          default_distance: number | null
          default_duration: unknown | null
          default_reps: number | null
          default_sets: number | null
          equipment_type: Database["public"]["Enums"]["equipment_type"] | null
          exercise_id: string | null
          id: string
          is_warmup: boolean | null
          order_index: number
          rest_time: unknown | null
          rpe_target: number | null
          tracking_mode: Database["public"]["Enums"]["exercise_tracking_mode"]
          updated_at: string
          workout_id: string | null
        }
        Insert: {
          created_at?: string
          default_distance?: number | null
          default_duration?: unknown | null
          default_reps?: number | null
          default_sets?: number | null
          equipment_type?: Database["public"]["Enums"]["equipment_type"] | null
          exercise_id?: string | null
          id?: string
          is_warmup?: boolean | null
          order_index?: number
          rest_time?: unknown | null
          rpe_target?: number | null
          tracking_mode?: Database["public"]["Enums"]["exercise_tracking_mode"]
          updated_at?: string
          workout_id?: string | null
        }
        Update: {
          created_at?: string
          default_distance?: number | null
          default_duration?: unknown | null
          default_reps?: number | null
          default_sets?: number | null
          equipment_type?: Database["public"]["Enums"]["equipment_type"] | null
          exercise_id?: string | null
          id?: string
          is_warmup?: boolean | null
          order_index?: number
          rest_time?: unknown | null
          rpe_target?: number | null
          tracking_mode?: Database["public"]["Enums"]["exercise_tracking_mode"]
          updated_at?: string
          workout_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exercise_templates_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercise_templates_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_training_maxes: {
        Row: {
          confidence_level: number | null
          created_at: string
          established_date: string
          exercise_id: string
          id: string
          max_value: number
          measurement_unit: string | null
          notes: string | null
          testing_method: Database["public"]["Enums"]["testing_method"]
          unit_type: Database["public"]["Enums"]["measurement_unit_type"]
          updated_at: string
          user_id: string
          valid_until: string | null
        }
        Insert: {
          confidence_level?: number | null
          created_at?: string
          established_date?: string
          exercise_id: string
          id?: string
          max_value: number
          measurement_unit?: string | null
          notes?: string | null
          testing_method?: Database["public"]["Enums"]["testing_method"]
          unit_type?: Database["public"]["Enums"]["measurement_unit_type"]
          updated_at?: string
          user_id: string
          valid_until?: string | null
        }
        Update: {
          confidence_level?: number | null
          created_at?: string
          established_date?: string
          exercise_id?: string
          id?: string
          max_value?: number
          measurement_unit?: string | null
          notes?: string | null
          testing_method?: Database["public"]["Enums"]["testing_method"]
          unit_type?: Database["public"]["Enums"]["measurement_unit_type"]
          updated_at?: string
          user_id?: string
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exercise_training_maxes_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
        ]
      }
      exercises: {
        Row: {
          benefits: string[] | null
          category: Database["public"]["Enums"]["exercise_category"] | null
          category_id: string | null
          created_at: string
          created_by: string | null
          custom_metrics: Json | null
          default_measurement_type: Database["public"]["Enums"]["measurement_unit_type"]
          default_measurement_unit: string | null
          demonstration_tips: string[] | null
          description: string | null
          difficulty: Database["public"]["Enums"]["difficulty_level"]
          equipment: string[] | null
          equipment_type: string | null
          exercise_purposes: string[] | null
          id: string
          image_url: string | null
          instructions: string[] | null
          last_synced_at: string | null
          measurement_type: Database["public"]["Enums"]["exercise_measurement_type"]
          measurements_config: Json | null
          media_type: string | null
          media_url: string | null
          name: string
          offline_sync_id: string | null
          primary_muscle_group:
            | Database["public"]["Enums"]["muscle_group"]
            | null
          primary_muscle_groups: string[] | null
          secondary_muscle_groups: string[] | null
          shared_by: string | null
          sport_categories: string[] | null
          thumbnail_url: string | null
          updated_at: string
          video_url: string | null
        }
        Insert: {
          benefits?: string[] | null
          category?: Database["public"]["Enums"]["exercise_category"] | null
          category_id?: string | null
          created_at?: string
          created_by?: string | null
          custom_metrics?: Json | null
          default_measurement_type?: Database["public"]["Enums"]["measurement_unit_type"]
          default_measurement_unit?: string | null
          demonstration_tips?: string[] | null
          description?: string | null
          difficulty?: Database["public"]["Enums"]["difficulty_level"]
          equipment?: string[] | null
          equipment_type?: string | null
          exercise_purposes?: string[] | null
          id?: string
          image_url?: string | null
          instructions?: string[] | null
          last_synced_at?: string | null
          measurement_type?: Database["public"]["Enums"]["exercise_measurement_type"]
          measurements_config?: Json | null
          media_type?: string | null
          media_url?: string | null
          name: string
          offline_sync_id?: string | null
          primary_muscle_group?:
            | Database["public"]["Enums"]["muscle_group"]
            | null
          primary_muscle_groups?: string[] | null
          secondary_muscle_groups?: string[] | null
          shared_by?: string | null
          sport_categories?: string[] | null
          thumbnail_url?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          benefits?: string[] | null
          category?: Database["public"]["Enums"]["exercise_category"] | null
          category_id?: string | null
          created_at?: string
          created_by?: string | null
          custom_metrics?: Json | null
          default_measurement_type?: Database["public"]["Enums"]["measurement_unit_type"]
          default_measurement_unit?: string | null
          demonstration_tips?: string[] | null
          description?: string | null
          difficulty?: Database["public"]["Enums"]["difficulty_level"]
          equipment?: string[] | null
          equipment_type?: string | null
          exercise_purposes?: string[] | null
          id?: string
          image_url?: string | null
          instructions?: string[] | null
          last_synced_at?: string | null
          measurement_type?: Database["public"]["Enums"]["exercise_measurement_type"]
          measurements_config?: Json | null
          media_type?: string | null
          media_url?: string | null
          name?: string
          offline_sync_id?: string | null
          primary_muscle_group?:
            | Database["public"]["Enums"]["muscle_group"]
            | null
          primary_muscle_groups?: string[] | null
          secondary_muscle_groups?: string[] | null
          shared_by?: string | null
          sport_categories?: string[] | null
          thumbnail_url?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exercises_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercises_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      feed_items: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          details: Json | null
          id: string
          type: Database["public"]["Enums"]["feed_item_type"]
          updated_at: string | null
          user_id: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string
          type: Database["public"]["Enums"]["feed_item_type"]
          updated_at?: string | null
          user_id: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          details?: Json | null
          id?: string
          type?: Database["public"]["Enums"]["feed_item_type"]
          updated_at?: string | null
          user_id?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feed_items_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      logged_sets: {
        Row: {
          completed_rest_time: unknown | null
          created_at: string
          exercise_id: string
          id: string
          is_completed: boolean | null
          metrics: Json | null
          notes: string | null
          reps: number | null
          rest_mode: string | null
          set_number: number
          timestamp: string
          updated_at: string
          weight: number | null
          workout_session_id: string
        }
        Insert: {
          completed_rest_time?: unknown | null
          created_at?: string
          exercise_id: string
          id?: string
          is_completed?: boolean | null
          metrics?: Json | null
          notes?: string | null
          reps?: number | null
          rest_mode?: string | null
          set_number: number
          timestamp?: string
          updated_at?: string
          weight?: number | null
          workout_session_id: string
        }
        Update: {
          completed_rest_time?: unknown | null
          created_at?: string
          exercise_id?: string
          id?: string
          is_completed?: boolean | null
          metrics?: Json | null
          notes?: string | null
          reps?: number | null
          rest_mode?: string | null
          set_number?: number
          timestamp?: string
          updated_at?: string
          weight?: number | null
          workout_session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "logged_sets_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "logged_sets_workout_session_id_fkey"
            columns: ["workout_session_id"]
            isOneToOne: false
            referencedRelation: "workout_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      muscle_groups: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      notification_queue: {
        Row: {
          channel: string
          created_at: string
          error_message: string | null
          id: string
          payload: Json
          recipient: string
          scheduled_for: string
          sent_at: string | null
          status: string
          template_id: string | null
          user_id: string
        }
        Insert: {
          channel: string
          created_at?: string
          error_message?: string | null
          id?: string
          payload: Json
          recipient: string
          scheduled_for: string
          sent_at?: string | null
          status?: string
          template_id?: string | null
          user_id: string
        }
        Update: {
          channel?: string
          created_at?: string
          error_message?: string | null
          id?: string
          payload?: Json
          recipient?: string
          scheduled_for?: string
          sent_at?: string | null
          status?: string
          template_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_queue_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "notification_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_templates: {
        Row: {
          body: string
          created_at: string
          id: string
          subject: string | null
          type: string
          updated_at: string
        }
        Insert: {
          body: string
          created_at?: string
          id?: string
          subject?: string | null
          type: string
          updated_at?: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          subject?: string | null
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      onboarding_progress: {
        Row: {
          completed_at: string | null
          completed_steps: string[] | null
          completion_percentage: number | null
          current_step: string | null
          last_updated: string | null
          required_fields_completed: boolean | null
          started_at: string | null
          status: Database["public"]["Enums"]["onboarding_status"] | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          completed_steps?: string[] | null
          completion_percentage?: number | null
          current_step?: string | null
          last_updated?: string | null
          required_fields_completed?: boolean | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["onboarding_status"] | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          completed_steps?: string[] | null
          completion_percentage?: number | null
          current_step?: string | null
          last_updated?: string | null
          required_fields_completed?: boolean | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["onboarding_status"] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "onboarding_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string | null
          id: string
          order_id: string
          price_per_unit: number
          product_id: string
          quantity: number
          total_price: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          order_id: string
          price_per_unit: number
          product_id: string
          quantity: number
          total_price: number
        }
        Update: {
          created_at?: string | null
          id?: string
          order_id?: string
          price_per_unit?: number
          product_id?: string
          quantity?: number
          total_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "store_orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "store_products"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_history: {
        Row: {
          amount: number
          created_at: string
          currency: string
          id: string
          payment_method: string | null
          status: string
          stripe_payment_intent_id: string | null
          subscription_id: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          id?: string
          payment_method?: string | null
          status: string
          stripe_payment_intent_id?: string | null
          subscription_id?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          id?: string
          payment_method?: string | null
          status?: string
          stripe_payment_intent_id?: string | null
          subscription_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_history_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "user_subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_receipts: {
        Row: {
          amount: number
          booking_id: string
          created_at: string
          currency: string
          id: string
          receipt_number: string | null
          receipt_url: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          booking_id: string
          created_at?: string
          currency?: string
          id?: string
          receipt_number?: string | null
          receipt_url?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          booking_id?: string
          created_at?: string
          currency?: string
          id?: string
          receipt_number?: string | null
          receipt_url?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payment_receipts_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "session_bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_settings: {
        Row: {
          auto_refund: boolean | null
          buffer_minutes: number | null
          created_at: string
          currency: string | null
          id: string
          notice_hours: number | null
          refund_percentage: number | null
          refund_window_hours: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          auto_refund?: boolean | null
          buffer_minutes?: number | null
          created_at?: string
          currency?: string | null
          id?: string
          notice_hours?: number | null
          refund_percentage?: number | null
          refund_window_hours?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          auto_refund?: boolean | null
          buffer_minutes?: number | null
          created_at?: string
          currency?: string | null
          id?: string
          notice_hours?: number | null
          refund_percentage?: number | null
          refund_window_hours?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      payment_transactions: {
        Row: {
          amount: number
          booking_id: string | null
          created_at: string | null
          currency: string
          customer_id: string | null
          failure_reason: string | null
          id: string
          metadata: Json | null
          payment_method_details: Json | null
          provider: string
          provider_transaction_id: string | null
          receipt_url: string | null
          refund_id: string | null
          status: string
          transaction_reference: string | null
          transaction_type: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          booking_id?: string | null
          created_at?: string | null
          currency: string
          customer_id?: string | null
          failure_reason?: string | null
          id?: string
          metadata?: Json | null
          payment_method_details?: Json | null
          provider: string
          provider_transaction_id?: string | null
          receipt_url?: string | null
          refund_id?: string | null
          status: string
          transaction_reference?: string | null
          transaction_type: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          booking_id?: string | null
          created_at?: string | null
          currency?: string
          customer_id?: string | null
          failure_reason?: string | null
          id?: string
          metadata?: Json | null
          payment_method_details?: Json | null
          provider?: string
          provider_transaction_id?: string | null
          receipt_url?: string | null
          refund_id?: string | null
          status?: string
          transaction_reference?: string | null
          transaction_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_transactions_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "session_bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_webhooks: {
        Row: {
          created_at: string
          error_message: string | null
          event_type: string
          id: string
          payload: Json
          processed_at: string | null
          provider: string
          status: string | null
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          event_type: string
          id?: string
          payload: Json
          processed_at?: string | null
          provider: string
          status?: string | null
        }
        Update: {
          created_at?: string
          error_message?: string | null
          event_type?: string
          id?: string
          payload?: Json
          processed_at?: string | null
          provider?: string
          status?: string | null
        }
        Relationships: []
      }
      product_variants: {
        Row: {
          created_at: string | null
          id: string
          inventory_count: number | null
          price_adjustment: number | null
          product_id: string | null
          sku: string | null
          updated_at: string | null
          variant_type: string
          variant_value: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          inventory_count?: number | null
          price_adjustment?: number | null
          product_id?: string | null
          sku?: string | null
          updated_at?: string | null
          variant_type: string
          variant_value: string
        }
        Update: {
          created_at?: string | null
          id?: string
          inventory_count?: number | null
          price_adjustment?: number | null
          product_id?: string | null
          sku?: string | null
          updated_at?: string | null
          variant_type?: string
          variant_value?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_variants_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "store_products"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          body_measurement_unit: string | null
          calendly_url: string | null
          created_at: string
          distance_unit: string | null
          full_name: string | null
          id: string
          is_private: boolean | null
          is_verified: boolean | null
          monthly_active_users: number | null
          total_followers: number | null
          total_following: number | null
          updated_at: string
          username: string | null
          webhooks_enabled: boolean | null
          website: string | null
          weight_unit: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          body_measurement_unit?: string | null
          calendly_url?: string | null
          created_at?: string
          distance_unit?: string | null
          full_name?: string | null
          id: string
          is_private?: boolean | null
          is_verified?: boolean | null
          monthly_active_users?: number | null
          total_followers?: number | null
          total_following?: number | null
          updated_at?: string
          username?: string | null
          webhooks_enabled?: boolean | null
          website?: string | null
          weight_unit?: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          body_measurement_unit?: string | null
          calendly_url?: string | null
          created_at?: string
          distance_unit?: string | null
          full_name?: string | null
          id?: string
          is_private?: boolean | null
          is_verified?: boolean | null
          monthly_active_users?: number | null
          total_followers?: number | null
          total_following?: number | null
          updated_at?: string
          username?: string | null
          webhooks_enabled?: boolean | null
          website?: string | null
          weight_unit?: string
        }
        Relationships: []
      }
      program_enrollments: {
        Row: {
          completion_date: string | null
          created_at: string | null
          current_day: number | null
          current_week: number | null
          id: string
          last_completed_workout: string | null
          program_id: string
          schedule_preferences: Json | null
          start_date: string
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completion_date?: string | null
          created_at?: string | null
          current_day?: number | null
          current_week?: number | null
          id?: string
          last_completed_workout?: string | null
          program_id: string
          schedule_preferences?: Json | null
          start_date: string
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completion_date?: string | null
          created_at?: string | null
          current_day?: number | null
          current_week?: number | null
          id?: string
          last_completed_workout?: string | null
          program_id?: string
          schedule_preferences?: Json | null
          start_date?: string
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "program_enrollments_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_enrollments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      program_exercise_percentages: {
        Row: {
          created_at: string
          day_number: number
          id: string
          is_amrap: boolean | null
          notes: string | null
          percentage: number
          program_workout_id: string
          reps: number
          rpe: number | null
          sets: number
          updated_at: string
          week_number: number
        }
        Insert: {
          created_at?: string
          day_number: number
          id?: string
          is_amrap?: boolean | null
          notes?: string | null
          percentage: number
          program_workout_id: string
          reps: number
          rpe?: number | null
          sets: number
          updated_at?: string
          week_number: number
        }
        Update: {
          created_at?: string
          day_number?: number
          id?: string
          is_amrap?: boolean | null
          notes?: string | null
          percentage?: number
          program_workout_id?: string
          reps?: number
          rpe?: number | null
          sets?: number
          updated_at?: string
          week_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "program_exercise_percentages_program_workout_id_fkey"
            columns: ["program_workout_id"]
            isOneToOne: false
            referencedRelation: "program_workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      program_progress: {
        Row: {
          completed_workouts: number | null
          created_at: string
          current_day: number | null
          current_streak: number | null
          current_week: number | null
          engagement_score: number | null
          id: string
          last_completion_date: string | null
          program_id: string | null
          start_date: string | null
          status: string | null
          total_completions: number | null
          total_workouts: number | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          completed_workouts?: number | null
          created_at?: string
          current_day?: number | null
          current_streak?: number | null
          current_week?: number | null
          engagement_score?: number | null
          id?: string
          last_completion_date?: string | null
          program_id?: string | null
          start_date?: string | null
          status?: string | null
          total_completions?: number | null
          total_workouts?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          completed_workouts?: number | null
          created_at?: string
          current_day?: number | null
          current_streak?: number | null
          current_week?: number | null
          engagement_score?: number | null
          id?: string
          last_completion_date?: string | null
          program_id?: string | null
          start_date?: string | null
          status?: string | null
          total_completions?: number | null
          total_workouts?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "program_progress_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
        ]
      }
      program_schedule: {
        Row: {
          created_at: string | null
          day_number: number
          day_type: string | null
          id: string
          is_rest_day: boolean | null
          program_id: string
          template_id: string | null
          updated_at: string | null
          week_number: number
        }
        Insert: {
          created_at?: string | null
          day_number: number
          day_type?: string | null
          id?: string
          is_rest_day?: boolean | null
          program_id: string
          template_id?: string | null
          updated_at?: string | null
          week_number: number
        }
        Update: {
          created_at?: string | null
          day_number?: number
          day_type?: string | null
          id?: string
          is_rest_day?: boolean | null
          program_id?: string
          template_id?: string | null
          updated_at?: string | null
          week_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "program_schedule_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_schedule_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "program_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      program_template_assignments: {
        Row: {
          created_at: string | null
          day_number: number
          id: string
          order_index: number | null
          program_id: string
          template_id: string
          updated_at: string | null
          week_number: number
        }
        Insert: {
          created_at?: string | null
          day_number: number
          id?: string
          order_index?: number | null
          program_id: string
          template_id: string
          updated_at?: string | null
          week_number: number
        }
        Update: {
          created_at?: string | null
          day_number?: number
          id?: string
          order_index?: number | null
          program_id?: string
          template_id?: string
          updated_at?: string | null
          week_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "program_template_assignments_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_template_assignments_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "program_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      program_templates: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          exercise_count: number | null
          id: string
          image_url: string | null
          name: string
          target_muscles: string[] | null
          total_sets: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          exercise_count?: number | null
          id?: string
          image_url?: string | null
          name: string
          target_muscles?: string[] | null
          total_sets?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          exercise_count?: number | null
          id?: string
          image_url?: string | null
          name?: string
          target_muscles?: string[] | null
          total_sets?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      program_workout_schedules: {
        Row: {
          completed_date: string | null
          created_at: string | null
          day_number: number
          enrollment_id: string
          id: string
          program_workout_id: string | null
          rescheduled_from: string | null
          scheduled_date: string
          scheduled_time: string | null
          session_id: string | null
          status: string
          updated_at: string | null
          week_number: number
          workout_id: string
        }
        Insert: {
          completed_date?: string | null
          created_at?: string | null
          day_number: number
          enrollment_id: string
          id?: string
          program_workout_id?: string | null
          rescheduled_from?: string | null
          scheduled_date: string
          scheduled_time?: string | null
          session_id?: string | null
          status?: string
          updated_at?: string | null
          week_number: number
          workout_id: string
        }
        Update: {
          completed_date?: string | null
          created_at?: string | null
          day_number?: number
          enrollment_id?: string
          id?: string
          program_workout_id?: string | null
          rescheduled_from?: string | null
          scheduled_date?: string
          scheduled_time?: string | null
          session_id?: string | null
          status?: string
          updated_at?: string | null
          week_number?: number
          workout_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "program_workout_schedules_enrollment_id_fkey"
            columns: ["enrollment_id"]
            isOneToOne: false
            referencedRelation: "program_enrollments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_workout_schedules_program_workout_id_fkey"
            columns: ["program_workout_id"]
            isOneToOne: false
            referencedRelation: "program_workouts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_workout_schedules_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "workout_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_workout_schedules_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      program_workouts: {
        Row: {
          completed_at: string | null
          completion_status: string | null
          created_at: string
          day_number: number
          exercise_id: string | null
          id: string
          notes: string | null
          order_index: number | null
          program_id: string | null
          updated_at: string
          week_number: number
          workout_id: string | null
        }
        Insert: {
          completed_at?: string | null
          completion_status?: string | null
          created_at?: string
          day_number: number
          exercise_id?: string | null
          id?: string
          notes?: string | null
          order_index?: number | null
          program_id?: string | null
          updated_at?: string
          week_number: number
          workout_id?: string | null
        }
        Update: {
          completed_at?: string | null
          completion_status?: string | null
          created_at?: string
          day_number?: number
          exercise_id?: string | null
          id?: string
          notes?: string | null
          order_index?: number | null
          program_id?: string | null
          updated_at?: string
          week_number?: number
          workout_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "program_workouts_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_workouts_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_workouts_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      programs: {
        Row: {
          banner_image_url: string | null
          created_at: string
          created_by: string | null
          description: string | null
          difficulty_level: string | null
          duration_weeks: number
          id: string
          is_template: boolean | null
          metadata: Json | null
          name: string
          price: number | null
          program_goal: string | null
          rest_day_distribution: string | null
          rest_days_per_week: number | null
          scheduling_method: string | null
          shared_by: string | null
          split_type: string | null
          status: string | null
          updated_at: string
          visibility: Database["public"]["Enums"]["program_visibility"] | null
        }
        Insert: {
          banner_image_url?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty_level?: string | null
          duration_weeks: number
          id?: string
          is_template?: boolean | null
          metadata?: Json | null
          name: string
          price?: number | null
          program_goal?: string | null
          rest_day_distribution?: string | null
          rest_days_per_week?: number | null
          scheduling_method?: string | null
          shared_by?: string | null
          split_type?: string | null
          status?: string | null
          updated_at?: string
          visibility?: Database["public"]["Enums"]["program_visibility"] | null
        }
        Update: {
          banner_image_url?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty_level?: string | null
          duration_weeks?: number
          id?: string
          is_template?: boolean | null
          metadata?: Json | null
          name?: string
          price?: number | null
          program_goal?: string | null
          rest_day_distribution?: string | null
          rest_days_per_week?: number | null
          scheduling_method?: string | null
          shared_by?: string | null
          split_type?: string | null
          status?: string | null
          updated_at?: string
          visibility?: Database["public"]["Enums"]["program_visibility"] | null
        }
        Relationships: [
          {
            foreignKeyName: "programs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      referral_codes: {
        Row: {
          code: string
          commission_percentage: number | null
          created_at: string | null
          discount_percentage: number | null
          id: string
          is_active: boolean | null
          updated_at: string | null
          usage_count: number | null
          user_id: string
        }
        Insert: {
          code: string
          commission_percentage?: number | null
          created_at?: string | null
          discount_percentage?: number | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
          usage_count?: number | null
          user_id: string
        }
        Update: {
          code?: string
          commission_percentage?: number | null
          created_at?: string | null
          discount_percentage?: number | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
          usage_count?: number | null
          user_id?: string
        }
        Relationships: []
      }
      scheduled_tasks: {
        Row: {
          created_at: string
          error_message: string | null
          id: string
          payload: Json
          processed_at: string | null
          scheduled_for: string
          status: string
          task_type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          id?: string
          payload: Json
          processed_at?: string | null
          scheduled_for: string
          status?: string
          task_type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          id?: string
          payload?: Json
          processed_at?: string | null
          scheduled_for?: string
          status?: string
          task_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      session_achievements: {
        Row: {
          achievement_type: string
          created_at: string | null
          description: string | null
          id: string
          session_id: string | null
          user_id: string
        }
        Insert: {
          achievement_type: string
          created_at?: string | null
          description?: string | null
          id?: string
          session_id?: string | null
          user_id: string
        }
        Update: {
          achievement_type?: string
          created_at?: string | null
          description?: string | null
          id?: string
          session_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_achievements_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "training_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      session_bookings: {
        Row: {
          calendly_event_uri: string | null
          calendly_invitee_uri: string | null
          cancellation_policy: Json | null
          cancellation_reason: string | null
          cancellation_time: string | null
          created_at: string | null
          id: string
          payment_amount: number
          payment_currency: string | null
          payment_due_date: string | null
          payment_intent_status: string | null
          payment_method_details: Json | null
          payment_provider: string | null
          payment_receipt_id: string | null
          payment_status: string | null
          refund_amount: number | null
          refund_status: string | null
          reminder_preferences: Json | null
          requires_payment: boolean | null
          session_id: string
          status: Database["public"]["Enums"]["session_status"] | null
          stripe_payment_intent_id: string | null
          stripe_payment_method_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          calendly_event_uri?: string | null
          calendly_invitee_uri?: string | null
          cancellation_policy?: Json | null
          cancellation_reason?: string | null
          cancellation_time?: string | null
          created_at?: string | null
          id?: string
          payment_amount: number
          payment_currency?: string | null
          payment_due_date?: string | null
          payment_intent_status?: string | null
          payment_method_details?: Json | null
          payment_provider?: string | null
          payment_receipt_id?: string | null
          payment_status?: string | null
          refund_amount?: number | null
          refund_status?: string | null
          reminder_preferences?: Json | null
          requires_payment?: boolean | null
          session_id: string
          status?: Database["public"]["Enums"]["session_status"] | null
          stripe_payment_intent_id?: string | null
          stripe_payment_method_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          calendly_event_uri?: string | null
          calendly_invitee_uri?: string | null
          cancellation_policy?: Json | null
          cancellation_reason?: string | null
          cancellation_time?: string | null
          created_at?: string | null
          id?: string
          payment_amount?: number
          payment_currency?: string | null
          payment_due_date?: string | null
          payment_intent_status?: string | null
          payment_method_details?: Json | null
          payment_provider?: string | null
          payment_receipt_id?: string | null
          payment_status?: string | null
          refund_amount?: number | null
          refund_status?: string | null
          reminder_preferences?: Json | null
          requires_payment?: boolean | null
          session_id?: string
          status?: Database["public"]["Enums"]["session_status"] | null
          stripe_payment_intent_id?: string | null
          stripe_payment_method_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_session_bookings_session"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "training_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_session_bookings_training_session"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "training_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_bookings_payment_receipt_id_fkey"
            columns: ["payment_receipt_id"]
            isOneToOne: false
            referencedRelation: "payment_receipts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_bookings_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "training_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_bookings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      session_feedback: {
        Row: {
          anonymous: boolean | null
          comment: string | null
          created_at: string | null
          id: string
          rating: number | null
          session_id: string | null
          trainer_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          anonymous?: boolean | null
          comment?: string | null
          created_at?: string | null
          id?: string
          rating?: number | null
          session_id?: string | null
          trainer_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          anonymous?: boolean | null
          comment?: string | null
          created_at?: string | null
          id?: string
          rating?: number | null
          session_id?: string | null
          trainer_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_feedback_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "training_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      session_recordings: {
        Row: {
          created_at: string | null
          ended_at: string | null
          error_message: string | null
          id: string
          recording_url: string | null
          session_id: string
          started_at: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          ended_at?: string | null
          error_message?: string | null
          id?: string
          recording_url?: string | null
          session_id: string
          started_at?: string | null
          status: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          ended_at?: string | null
          error_message?: string | null
          id?: string
          recording_url?: string | null
          session_id?: string
          started_at?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      session_reminders: {
        Row: {
          created_at: string | null
          id: string
          reminder_type: string
          scheduled_for: string
          sent: boolean | null
          session_booking_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          reminder_type: string
          scheduled_for: string
          sent?: boolean | null
          session_booking_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          reminder_type?: string
          scheduled_for?: string
          sent?: boolean | null
          session_booking_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_reminders_session_booking_id_fkey"
            columns: ["session_booking_id"]
            isOneToOne: false
            referencedRelation: "session_bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      session_workout_tracking: {
        Row: {
          created_at: string
          exercise_id: string
          id: string
          reps: number
          session_id: string
          set_number: number
          updated_at: string
          user_id: string
          weight: number | null
        }
        Insert: {
          created_at?: string
          exercise_id: string
          id?: string
          reps: number
          session_id: string
          set_number: number
          updated_at?: string
          user_id: string
          weight?: number | null
        }
        Update: {
          created_at?: string
          exercise_id?: string
          id?: string
          reps?: number
          session_id?: string
          set_number?: number
          updated_at?: string
          user_id?: string
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "session_workout_tracking_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_workout_tracking_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "training_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_workout_tracking_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      share_templates: {
        Row: {
          created_at: string
          custom_css: string | null
          id: string
          is_default: boolean | null
          layout_type: string | null
          name: string
          stats_to_show: Json | null
          theme_style: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          custom_css?: string | null
          id?: string
          is_default?: boolean | null
          layout_type?: string | null
          name: string
          stats_to_show?: Json | null
          theme_style?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          custom_css?: string | null
          id?: string
          is_default?: boolean | null
          layout_type?: string | null
          name?: string
          stats_to_show?: Json | null
          theme_style?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      sport_categories: {
        Row: {
          created_at: string
          description: string | null
          icon_name: string | null
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon_name?: string | null
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          icon_name?: string | null
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      store_orders: {
        Row: {
          created_at: string | null
          discount_amount: number | null
          id: string
          payment_method: string | null
          payment_status: string | null
          payment_transaction_id: string | null
          referral_code_id: string | null
          shipping_address: Json | null
          status: string | null
          total_amount: number
          tracking_number: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          discount_amount?: number | null
          id?: string
          payment_method?: string | null
          payment_status?: string | null
          payment_transaction_id?: string | null
          referral_code_id?: string | null
          shipping_address?: Json | null
          status?: string | null
          total_amount: number
          tracking_number?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          discount_amount?: number | null
          id?: string
          payment_method?: string | null
          payment_status?: string | null
          payment_transaction_id?: string | null
          referral_code_id?: string | null
          shipping_address?: Json | null
          status?: string | null
          total_amount?: number
          tracking_number?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "store_orders_referral_code_id_fkey"
            columns: ["referral_code_id"]
            isOneToOne: false
            referencedRelation: "referral_codes"
            referencedColumns: ["id"]
          },
        ]
      }
      store_products: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          inventory_count: number | null
          is_active: boolean | null
          name: string
          price: number
          sku: string | null
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          inventory_count?: number | null
          is_active?: boolean | null
          name: string
          price: number
          sku?: string | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          inventory_count?: number | null
          is_active?: boolean | null
          name?: string
          price?: number
          sku?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      stripe_configuration: {
        Row: {
          created_at: string
          id: string
          publishable_key: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          publishable_key: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          publishable_key?: string
          updated_at?: string
        }
        Relationships: []
      }
      stripe_webhook_secrets: {
        Row: {
          created_at: string
          id: string
          secret: string
        }
        Insert: {
          created_at?: string
          id?: string
          secret: string
        }
        Update: {
          created_at?: string
          id?: string
          secret?: string
        }
        Relationships: []
      }
      subscription_plans: {
        Row: {
          created_at: string
          currency: string
          description: string | null
          features: Json | null
          id: string
          interval: Database["public"]["Enums"]["subscription_interval"]
          is_active: boolean | null
          name: string
          price: number
          stripe_price_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency?: string
          description?: string | null
          features?: Json | null
          id?: string
          interval?: Database["public"]["Enums"]["subscription_interval"]
          is_active?: boolean | null
          name: string
          price: number
          stripe_price_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency?: string
          description?: string | null
          features?: Json | null
          id?: string
          interval?: Database["public"]["Enums"]["subscription_interval"]
          is_active?: boolean | null
          name?: string
          price?: number
          stripe_price_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      survey_responses: {
        Row: {
          created_at: string
          id: string
          responses: Json
          role: string
          updated_at: string
          waitlist_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          responses?: Json
          role: string
          updated_at?: string
          waitlist_id: string
        }
        Update: {
          created_at?: string
          id?: string
          responses?: Json
          role?: string
          updated_at?: string
          waitlist_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "survey_responses_waitlist_id_fkey"
            columns: ["waitlist_id"]
            isOneToOne: false
            referencedRelation: "waitlist"
            referencedColumns: ["id"]
          },
        ]
      }
      trainer_availability: {
        Row: {
          buffer_minutes: number | null
          created_at: string | null
          day_of_week: number
          end_date: string | null
          end_time: string
          id: string
          is_recurring: boolean | null
          start_date: string | null
          start_time: string
          trainer_id: string
          updated_at: string | null
        }
        Insert: {
          buffer_minutes?: number | null
          created_at?: string | null
          day_of_week: number
          end_date?: string | null
          end_time: string
          id?: string
          is_recurring?: boolean | null
          start_date?: string | null
          start_time: string
          trainer_id: string
          updated_at?: string | null
        }
        Update: {
          buffer_minutes?: number | null
          created_at?: string | null
          day_of_week?: number
          end_date?: string | null
          end_time?: string
          id?: string
          is_recurring?: boolean | null
          start_date?: string | null
          start_time?: string
          trainer_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "trainer_availability_trainer_id_fkey"
            columns: ["trainer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      training_sessions: {
        Row: {
          calendly_event_data: Json | null
          calendly_event_type_id: string | null
          calendly_event_uuid: string | null
          calendly_scheduling_url: string | null
          city: string | null
          club_id: string | null
          country: string | null
          covid_protocols: string | null
          created_at: string | null
          currency: string | null
          current_participants: number | null
          description: string | null
          end_time: string
          host_id: string
          id: string
          last_synced_at: string | null
          location_type: string | null
          max_participants: number | null
          meeting_url: string | null
          notes: string | null
          parking_info: string | null
          postal_code: string | null
          price: number
          session_type: Database["public"]["Enums"]["session_type"]
          shared_by: string | null
          start_time: string
          state: string | null
          status: Database["public"]["Enums"]["session_status"] | null
          street_address: string | null
          title: string
          updated_at: string | null
          venue_amenities: Json | null
          venue_instructions: string | null
          venue_name: string | null
          video_room_info: Json | null
          workout_id: string | null
          workout_progress: Json | null
        }
        Insert: {
          calendly_event_data?: Json | null
          calendly_event_type_id?: string | null
          calendly_event_uuid?: string | null
          calendly_scheduling_url?: string | null
          city?: string | null
          club_id?: string | null
          country?: string | null
          covid_protocols?: string | null
          created_at?: string | null
          currency?: string | null
          current_participants?: number | null
          description?: string | null
          end_time: string
          host_id: string
          id?: string
          last_synced_at?: string | null
          location_type?: string | null
          max_participants?: number | null
          meeting_url?: string | null
          notes?: string | null
          parking_info?: string | null
          postal_code?: string | null
          price?: number
          session_type: Database["public"]["Enums"]["session_type"]
          shared_by?: string | null
          start_time: string
          state?: string | null
          status?: Database["public"]["Enums"]["session_status"] | null
          street_address?: string | null
          title: string
          updated_at?: string | null
          venue_amenities?: Json | null
          venue_instructions?: string | null
          venue_name?: string | null
          video_room_info?: Json | null
          workout_id?: string | null
          workout_progress?: Json | null
        }
        Update: {
          calendly_event_data?: Json | null
          calendly_event_type_id?: string | null
          calendly_event_uuid?: string | null
          calendly_scheduling_url?: string | null
          city?: string | null
          club_id?: string | null
          country?: string | null
          covid_protocols?: string | null
          created_at?: string | null
          currency?: string | null
          current_participants?: number | null
          description?: string | null
          end_time?: string
          host_id?: string
          id?: string
          last_synced_at?: string | null
          location_type?: string | null
          max_participants?: number | null
          meeting_url?: string | null
          notes?: string | null
          parking_info?: string | null
          postal_code?: string | null
          price?: number
          session_type?: Database["public"]["Enums"]["session_type"]
          shared_by?: string | null
          start_time?: string
          state?: string | null
          status?: Database["public"]["Enums"]["session_status"] | null
          street_address?: string | null
          title?: string
          updated_at?: string | null
          venue_amenities?: Json | null
          venue_instructions?: string | null
          venue_name?: string | null
          video_room_info?: Json | null
          workout_id?: string | null
          workout_progress?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "training_sessions_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "training_sessions_trainer_id_fkey"
            columns: ["host_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "training_sessions_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      user_follows: {
        Row: {
          created_at: string | null
          follower_id: string | null
          following_id: string | null
          id: string
        }
        Insert: {
          created_at?: string | null
          follower_id?: string | null
          following_id?: string | null
          id?: string
        }
        Update: {
          created_at?: string | null
          follower_id?: string | null
          following_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_follows_following_id_fkey"
            columns: ["following_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_likes: {
        Row: {
          created_at: string
          id: string
          item_id: string
          item_type: Database["public"]["Enums"]["liked_item_type"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          item_id: string
          item_type: Database["public"]["Enums"]["liked_item_type"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          item_id?: string
          item_type?: Database["public"]["Enums"]["liked_item_type"]
          user_id?: string
        }
        Relationships: []
      }
      user_presence: {
        Row: {
          created_at: string | null
          is_online: boolean | null
          last_seen: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          is_online?: boolean | null
          last_seen?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          is_online?: boolean | null
          last_seen?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_security: {
        Row: {
          backup_codes: string[] | null
          created_at: string | null
          failed_login_attempts: number | null
          has_completed_onboarding: boolean | null
          last_failed_attempt: string | null
          onboarding_redirect: boolean | null
          password_last_changed: string | null
          security_level: Database["public"]["Enums"]["security_level"] | null
          security_questions: Json | null
          two_factor_method:
            | Database["public"]["Enums"]["two_factor_method"]
            | null
          two_factor_secret: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          backup_codes?: string[] | null
          created_at?: string | null
          failed_login_attempts?: number | null
          has_completed_onboarding?: boolean | null
          last_failed_attempt?: string | null
          onboarding_redirect?: boolean | null
          password_last_changed?: string | null
          security_level?: Database["public"]["Enums"]["security_level"] | null
          security_questions?: Json | null
          two_factor_method?:
            | Database["public"]["Enums"]["two_factor_method"]
            | null
          two_factor_secret?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          backup_codes?: string[] | null
          created_at?: string | null
          failed_login_attempts?: number | null
          has_completed_onboarding?: boolean | null
          last_failed_attempt?: string | null
          onboarding_redirect?: boolean | null
          password_last_changed?: string | null
          security_level?: Database["public"]["Enums"]["security_level"] | null
          security_questions?: Json | null
          two_factor_method?:
            | Database["public"]["Enums"]["two_factor_method"]
            | null
          two_factor_secret?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_security_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_sessions: {
        Row: {
          created_at: string | null
          device_info: Json | null
          expires_at: string | null
          id: string
          ip_address: string | null
          is_valid: boolean | null
          last_active: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          device_info?: Json | null
          expires_at?: string | null
          id?: string
          ip_address?: string | null
          is_valid?: boolean | null
          last_active?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          device_info?: Json | null
          expires_at?: string | null
          id?: string
          ip_address?: string | null
          is_valid?: boolean | null
          last_active?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_subscriptions: {
        Row: {
          cancel_at_period_end: boolean | null
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_id: string | null
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cancel_at_period_end?: boolean | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_id?: string | null
          status: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cancel_at_period_end?: boolean | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_id?: string | null
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      waitlist: {
        Row: {
          created_at: string
          email: string
          id: string
          invited_at: string | null
          metadata: Json | null
          registered_at: string | null
          status: Database["public"]["Enums"]["waitlist_status"] | null
          username: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          invited_at?: string | null
          metadata?: Json | null
          registered_at?: string | null
          status?: Database["public"]["Enums"]["waitlist_status"] | null
          username: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          invited_at?: string | null
          metadata?: Json | null
          registered_at?: string | null
          status?: Database["public"]["Enums"]["waitlist_status"] | null
          username?: string
        }
        Relationships: []
      }
      webhook_events: {
        Row: {
          created_at: string
          error_message: string | null
          event_type: string
          id: string
          payload: Json
          processed_at: string | null
          status: string
          subscription_id: string | null
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          event_type: string
          id?: string
          payload: Json
          processed_at?: string | null
          status?: string
          subscription_id?: string | null
        }
        Update: {
          created_at?: string
          error_message?: string | null
          event_type?: string
          id?: string
          payload?: Json
          processed_at?: string | null
          status?: string
          subscription_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "webhook_events_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "webhook_subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      webhook_subscriptions: {
        Row: {
          calendly_subscription_uri: string
          created_at: string
          id: string
          last_ping_at: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          calendly_subscription_uri: string
          created_at?: string
          id?: string
          last_ping_at?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          calendly_subscription_uri?: string
          created_at?: string
          id?: string
          last_ping_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      workout_collections: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          image_url: string | null
          name: string
          updated_at: string
          visibility: Database["public"]["Enums"]["workout_visibility"] | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          updated_at?: string
          visibility?: Database["public"]["Enums"]["workout_visibility"] | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          updated_at?: string
          visibility?: Database["public"]["Enums"]["workout_visibility"] | null
        }
        Relationships: []
      }
      workout_comments: {
        Row: {
          content: string
          created_at: string | null
          id: string
          user_id: string | null
          workout_social_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          user_id?: string | null
          workout_social_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          user_id?: string | null
          workout_social_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workout_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workout_comments_workout_social_id_fkey"
            columns: ["workout_social_id"]
            isOneToOne: false
            referencedRelation: "workout_social"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_exercises: {
        Row: {
          auto_rest_timer: boolean | null
          created_at: string
          custom_metrics: Json | null
          distance: number | null
          distance_unit: string | null
          duration: unknown | null
          exercise_id: string
          id: string
          is_dropset: boolean | null
          is_warmup: boolean | null
          measurement_type:
            | Database["public"]["Enums"]["exercise_measurement_type"]
            | null
          measurement_types: string[] | null
          notes: string | null
          order_index: number
          reps: number
          rest_time: unknown | null
          rpe: number | null
          sets: number
          thumbnail_url: string | null
          updated_at: string
          weight: number | null
          weight_percentage: number | null
          workout_id: string
        }
        Insert: {
          auto_rest_timer?: boolean | null
          created_at?: string
          custom_metrics?: Json | null
          distance?: number | null
          distance_unit?: string | null
          duration?: unknown | null
          exercise_id: string
          id?: string
          is_dropset?: boolean | null
          is_warmup?: boolean | null
          measurement_type?:
            | Database["public"]["Enums"]["exercise_measurement_type"]
            | null
          measurement_types?: string[] | null
          notes?: string | null
          order_index?: number
          reps?: number
          rest_time?: unknown | null
          rpe?: number | null
          sets?: number
          thumbnail_url?: string | null
          updated_at?: string
          weight?: number | null
          weight_percentage?: number | null
          workout_id: string
        }
        Update: {
          auto_rest_timer?: boolean | null
          created_at?: string
          custom_metrics?: Json | null
          distance?: number | null
          distance_unit?: string | null
          duration?: unknown | null
          exercise_id?: string
          id?: string
          is_dropset?: boolean | null
          is_warmup?: boolean | null
          measurement_type?:
            | Database["public"]["Enums"]["exercise_measurement_type"]
            | null
          measurement_types?: string[] | null
          notes?: string | null
          order_index?: number
          reps?: number
          rest_time?: unknown | null
          rpe?: number | null
          sets?: number
          thumbnail_url?: string | null
          updated_at?: string
          weight?: number | null
          weight_percentage?: number | null
          workout_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workout_exercises_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workout_exercises_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_folder_items: {
        Row: {
          added_at: string
          folder_id: string | null
          id: string
          workout_id: string | null
        }
        Insert: {
          added_at?: string
          folder_id?: string | null
          id?: string
          workout_id?: string | null
        }
        Update: {
          added_at?: string
          folder_id?: string | null
          id?: string
          workout_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workout_folder_items_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "workout_folders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workout_folder_items_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_folders: {
        Row: {
          color: string | null
          created_at: string
          created_by: string | null
          description: string | null
          icon: string | null
          id: string
          name: string
          parent_folder_id: string | null
          updated_at: string
          workout_count: number
        }
        Insert: {
          color?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          parent_folder_id?: string | null
          updated_at?: string
          workout_count?: number
        }
        Update: {
          color?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          parent_folder_id?: string | null
          updated_at?: string
          workout_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "workout_folders_parent_folder_id_fkey"
            columns: ["parent_folder_id"]
            isOneToOne: false
            referencedRelation: "workout_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_imports: {
        Row: {
          created_at: string | null
          error_message: string | null
          file_path: string | null
          id: string
          original_text: string | null
          parsed_data: Json | null
          status: Database["public"]["Enums"]["import_status"] | null
          updated_at: string | null
          user_id: string
          workout_id: string | null
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          file_path?: string | null
          id?: string
          original_text?: string | null
          parsed_data?: Json | null
          status?: Database["public"]["Enums"]["import_status"] | null
          updated_at?: string | null
          user_id: string
          workout_id?: string | null
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          file_path?: string | null
          id?: string
          original_text?: string | null
          parsed_data?: Json | null
          status?: Database["public"]["Enums"]["import_status"] | null
          updated_at?: string | null
          user_id?: string
          workout_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workout_imports_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_photos: {
        Row: {
          created_at: string | null
          id: string
          photo_url: string
          updated_at: string | null
          workout_session_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          photo_url: string
          updated_at?: string | null
          workout_session_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          photo_url?: string
          updated_at?: string | null
          workout_session_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workout_photos_workout_session_id_fkey"
            columns: ["workout_session_id"]
            isOneToOne: false
            referencedRelation: "workout_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_sessions: {
        Row: {
          activity_type: Database["public"]["Enums"]["workout_type"] | null
          average_pace: unknown | null
          club_id: string | null
          created_at: string
          distance_km: number | null
          elevation_gain: number | null
          elevation_loss: number | null
          end_time: string | null
          id: string
          max_speed: number | null
          profile_id: string
          route_data: Json | null
          source: string | null
          start_time: string
          status: Database["public"]["Enums"]["workout_session_status"] | null
          total_duration: unknown | null
          total_time: unknown | null
          total_volume: number | null
          tracking_mode: string
          updated_at: string
          user_id: string
          workout_id: string | null
        }
        Insert: {
          activity_type?: Database["public"]["Enums"]["workout_type"] | null
          average_pace?: unknown | null
          club_id?: string | null
          created_at?: string
          distance_km?: number | null
          elevation_gain?: number | null
          elevation_loss?: number | null
          end_time?: string | null
          id?: string
          max_speed?: number | null
          profile_id: string
          route_data?: Json | null
          source?: string | null
          start_time?: string
          status?: Database["public"]["Enums"]["workout_session_status"] | null
          total_duration?: unknown | null
          total_time?: unknown | null
          total_volume?: number | null
          tracking_mode?: string
          updated_at?: string
          user_id: string
          workout_id?: string | null
        }
        Update: {
          activity_type?: Database["public"]["Enums"]["workout_type"] | null
          average_pace?: unknown | null
          club_id?: string | null
          created_at?: string
          distance_km?: number | null
          elevation_gain?: number | null
          elevation_loss?: number | null
          end_time?: string | null
          id?: string
          max_speed?: number | null
          profile_id?: string
          route_data?: Json | null
          source?: string | null
          start_time?: string
          status?: Database["public"]["Enums"]["workout_session_status"] | null
          total_duration?: unknown | null
          total_time?: unknown | null
          total_volume?: number | null
          tracking_mode?: string
          updated_at?: string
          user_id?: string
          workout_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workout_sessions_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workout_sessions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workout_sessions_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_shares: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          share_count: number | null
          stats: Json | null
          theme_style: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
          workout_session_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          share_count?: number | null
          stats?: Json | null
          theme_style?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
          workout_session_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          share_count?: number | null
          stats?: Json | null
          theme_style?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
          workout_session_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workout_shares_workout_session_id_fkey"
            columns: ["workout_session_id"]
            isOneToOne: false
            referencedRelation: "workout_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_social: {
        Row: {
          comments_count: number | null
          content: string | null
          created_at: string | null
          id: string
          likes_count: number | null
          user_id: string | null
          workout_id: string | null
        }
        Insert: {
          comments_count?: number | null
          content?: string | null
          created_at?: string | null
          id?: string
          likes_count?: number | null
          user_id?: string | null
          workout_id?: string | null
        }
        Update: {
          comments_count?: number | null
          content?: string | null
          created_at?: string | null
          id?: string
          likes_count?: number | null
          user_id?: string | null
          workout_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workout_social_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workout_social_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_stats: {
        Row: {
          avg_duration: unknown | null
          completion_time: unknown | null
          created_at: string | null
          global_avg_completion_time: unknown | null
          global_avg_reps: number | null
          global_avg_sets: number | null
          global_avg_volume: number | null
          id: string
          total_completions: number | null
          total_duration: unknown | null
          total_reps: number | null
          total_sets: number | null
          total_volume: number | null
          user_best_completion_time: unknown | null
          user_completions: number | null
          user_id: string
          user_total_reps: number | null
          user_total_sets: number | null
          user_total_volume: number | null
          workout_id: string
        }
        Insert: {
          avg_duration?: unknown | null
          completion_time?: unknown | null
          created_at?: string | null
          global_avg_completion_time?: unknown | null
          global_avg_reps?: number | null
          global_avg_sets?: number | null
          global_avg_volume?: number | null
          id?: string
          total_completions?: number | null
          total_duration?: unknown | null
          total_reps?: number | null
          total_sets?: number | null
          total_volume?: number | null
          user_best_completion_time?: unknown | null
          user_completions?: number | null
          user_id: string
          user_total_reps?: number | null
          user_total_sets?: number | null
          user_total_volume?: number | null
          workout_id: string
        }
        Update: {
          avg_duration?: unknown | null
          completion_time?: unknown | null
          created_at?: string | null
          global_avg_completion_time?: unknown | null
          global_avg_reps?: number | null
          global_avg_sets?: number | null
          global_avg_volume?: number | null
          id?: string
          total_completions?: number | null
          total_duration?: unknown | null
          total_reps?: number | null
          total_sets?: number | null
          total_volume?: number | null
          user_best_completion_time?: unknown | null
          user_completions?: number | null
          user_id?: string
          user_total_reps?: number | null
          user_total_sets?: number | null
          user_total_volume?: number | null
          workout_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workout_stats_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_targets: {
        Row: {
          created_at: string
          id: string
          target_name: string
          target_type: Database["public"]["Enums"]["target_type"]
          updated_at: string
          workout_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          target_name: string
          target_type: Database["public"]["Enums"]["target_type"]
          updated_at?: string
          workout_id: string
        }
        Update: {
          created_at?: string
          id?: string
          target_name?: string
          target_type?: Database["public"]["Enums"]["target_type"]
          updated_at?: string
          workout_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workout_targets_workout_id_fkey"
            columns: ["workout_id"]
            isOneToOne: false
            referencedRelation: "workouts"
            referencedColumns: ["id"]
          },
        ]
      }
      workouts: {
        Row: {
          completion_image_url: string | null
          cooldown_timer: unknown | null
          created_at: string
          created_by: string | null
          description: string | null
          difficulty_level: string | null
          duration: unknown | null
          id: string
          image_url: string | null
          layout_type: string | null
          name: string
          price: number | null
          share_to_strava: boolean | null
          shared_by: string | null
          status: Database["public"]["Enums"]["workout_status"] | null
          target_categories: string[] | null
          targets: string[] | null
          total_exercises: number | null
          updated_at: string
          visibility: Database["public"]["Enums"]["workout_visibility"] | null
        }
        Insert: {
          completion_image_url?: string | null
          cooldown_timer?: unknown | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty_level?: string | null
          duration?: unknown | null
          id?: string
          image_url?: string | null
          layout_type?: string | null
          name: string
          price?: number | null
          share_to_strava?: boolean | null
          shared_by?: string | null
          status?: Database["public"]["Enums"]["workout_status"] | null
          target_categories?: string[] | null
          targets?: string[] | null
          total_exercises?: number | null
          updated_at?: string
          visibility?: Database["public"]["Enums"]["workout_visibility"] | null
        }
        Update: {
          completion_image_url?: string | null
          cooldown_timer?: unknown | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          difficulty_level?: string | null
          duration?: unknown | null
          id?: string
          image_url?: string | null
          layout_type?: string | null
          name?: string
          price?: number | null
          share_to_strava?: boolean | null
          shared_by?: string | null
          status?: Database["public"]["Enums"]["workout_status"] | null
          target_categories?: string[] | null
          targets?: string[] | null
          total_exercises?: number | null
          updated_at?: string
          visibility?: Database["public"]["Enums"]["workout_visibility"] | null
        }
        Relationships: [
          {
            foreignKeyName: "workouts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      club_member_details: {
        Row: {
          avatar_url: string | null
          club_id: string | null
          full_name: string | null
          id: string | null
          is_subscribed: boolean | null
          joined_at: string | null
          last_active_at: string | null
          moderation_notes: string | null
          role: Database["public"]["Enums"]["club_member_role"] | null
          status: string | null
          subscription_period_end: string | null
          total_posts: number | null
          updated_at: string | null
          user_id: string | null
          username: string | null
        }
        Relationships: [
          {
            foreignKeyName: "club_memberships_club_id_fkey"
            columns: ["club_id"]
            isOneToOne: false
            referencedRelation: "clubs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_memberships_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      _ltree_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      _ltree_gist_options: {
        Args: {
          "": unknown
        }
        Returns: undefined
      }
      activate_program: {
        Args: {
          p_user_id: string
          p_program_id: string
          p_start_date: string
          p_schedule_preferences?: Json
        }
        Returns: string
      }
      calculate_working_weight: {
        Args: {
          p_training_max: number
          p_percentage: number
        }
        Returns: number
      }
      get_club_leaderboards: {
        Args: {
          p_club_id: string
          p_period: Database["public"]["Enums"]["leaderboard_period"]
          p_metric_name?: string
        }
        Returns: {
          metric_name: string
          metric_value: number
          start_date: string
          end_date: string
        }[]
      }
      get_club_member_leaderboards: {
        Args: {
          p_club_id: string
          p_period?: string
          p_metric_name?: string
          p_limit?: number
        }
        Returns: {
          user_id: string
          username: string
          avatar_url: string
          metric_value: number
          rank: number
        }[]
      }
      get_exercise_leaderboard: {
        Args: {
          exercise_id_param: string
          metric_name_param: string
          limit_param?: number
        }
        Returns: {
          user_id: string
          username: string
          avatar_url: string
          metric_value: Json
          achieved_at: string
          rank: number
        }[]
      }
      get_exercise_stats: {
        Args: {
          exercise_id: string
        }
        Returns: {
          average_rating: number
          total_ratings: number
          workout_count: number
        }[]
      }
      get_feed_items: {
        Args: {
          p_user_id: string
          p_limit?: number
          p_offset?: number
        }
        Returns: {
          type: string
          id: string
          created_at: string
          user_id: string
          username: string
          avatar_url: string
          details: Json
        }[]
      }
      get_filtered_feed_items: {
        Args: {
          p_user_id: string
          p_following_only?: boolean
          p_limit?: number
          p_offset?: number
        }
        Returns: {
          type: string
          id: string
          created_at: string
          user_id: string
          username: string
          avatar_url: string
          details: Json
        }[]
      }
      get_program_member_activity: {
        Args: {
          program_id_param: string
        }
        Returns: {
          user_id: string
          username: string
          avatar_url: string
          last_active: string
          current_streak: number
          total_completions: number
          engagement_score: number
        }[]
      }
      get_program_stats: {
        Args: {
          program_id_param: string
          user_id_param: string
        }
        Returns: {
          total_volume: number
          total_workouts: number
          completed_workouts: number
          completion_rate: number
          avg_workout_time: unknown
        }[]
      }
      get_program_week_stats: {
        Args: {
          p_program_id: string
          p_week_number: number
        }
        Returns: {
          total_workouts: number
          completed_workouts: number
          completion_rate: number
          total_volume: number
          avg_workout_time: unknown
        }[]
      }
      get_program_workouts_for_date: {
        Args: {
          p_date: string
          p_user_id: string
        }
        Returns: {
          program_id: string
          workout_id: string
          program_name: string
          workout_name: string
          week_number: number
          day_number: number
          completion_status: string
          total_exercises: number
          difficulty_level: string
        }[]
      }
      get_upcoming_program_workouts: {
        Args: {
          p_user_id: string
          p_days?: number
        }
        Returns: {
          schedule_id: string
          enrollment_id: string
          program_id: string
          program_name: string
          workout_id: string
          workout_name: string
          scheduled_date: string
          status: string
          week_number: number
          day_number: number
        }[]
      }
      get_user_liked_items: {
        Args: {
          p_user_id: string
          p_item_type?: Database["public"]["Enums"]["liked_item_type"]
        }
        Returns: {
          like_id: string
          item_id: string
          item_type: Database["public"]["Enums"]["liked_item_type"]
          created_at: string
          item_details: Json
        }[]
      }
      get_workout_recommended_weights: {
        Args: {
          p_program_workout_id: string
          p_user_id: string
        }
        Returns: {
          exercise_id: string
          set_number: number
          prescribed_percentage: number
          prescribed_reps: number
          recommended_weight: number
          is_amrap: boolean
          training_max: number
          training_max_date: string
        }[]
      }
      get_workout_stats: {
        Args: {
          workout_id_param: string
          user_id_param?: string
        }
        Returns: {
          total_volume: number
          total_sets: number
          total_reps: number
          completion_time: unknown
          user_total_volume: number
          user_total_sets: number
          user_total_reps: number
          user_best_completion_time: unknown
          global_avg_volume: number
          global_avg_sets: number
          global_avg_reps: number
          global_avg_completion_time: unknown
          total_completions: number
          user_completions: number
        }[]
      }
      is_club_member: {
        Args: {
          club_id: string
          user_id: string
        }
        Returns: boolean
      }
      is_username_available: {
        Args: {
          username: string
        }
        Returns: boolean
      }
      lca: {
        Args: {
          "": unknown[]
        }
        Returns: unknown
      }
      lquery_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      lquery_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      lquery_recv: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      lquery_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      ltree_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ltree_decompress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ltree_gist_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ltree_gist_options: {
        Args: {
          "": unknown
        }
        Returns: undefined
      }
      ltree_gist_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ltree_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ltree_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ltree_recv: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ltree_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      ltree2text: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      ltxtq_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ltxtq_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ltxtq_recv: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ltxtq_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      migrate_existing_users: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      nlevel: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      text2ltree: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      update_session_workout_progress: {
        Args: {
          p_session_id: string
          p_exercise_index: number
          p_set_index: number
        }
        Returns: undefined
      }
      update_user_online_status: {
        Args: {
          p_user_id: string
          p_is_online: boolean
        }
        Returns: undefined
      }
    }
    Enums: {
      auth_provider: "email" | "google" | "apple"
      auth_token_status: "active" | "expired" | "revoked"
      category_type:
        | "strength_training"
        | "speed_agility"
        | "endurance"
        | "plyometrics"
        | "sport_specific"
      club_content_type: "text" | "workout" | "progress"
      club_leaderboard_type:
        | "total_volume"
        | "workout_count"
        | "personal_records"
        | "posting_activity"
        | "engagement_score"
      club_member_role: "member" | "admin"
      club_post_type: "text" | "workout" | "progress"
      club_status: "active" | "archived"
      collection_visibility:
        | "public"
        | "private"
        | "paywalled"
        | "subscriber_only"
      content_type_enum: "text" | "workout" | "progress" | "session" | "program"
      difficulty_level: "beginner" | "intermediate" | "advanced"
      equipment_type:
        | "barbell"
        | "dumbbell"
        | "kettlebell"
        | "bodyweight"
        | "machine"
        | "resistance_band"
        | "other"
      exercise_category:
        | "strength"
        | "cardio"
        | "flexibility"
        | "balance"
        | "plyometrics"
      exercise_measurement_type:
        | "weight_reps"
        | "time_based"
        | "distance_time"
        | "custom_metrics"
        | "distance"
      exercise_pr_type: "weight" | "reps" | "volume" | "time"
      exercise_tracking_mode:
        | "sets"
        | "duration"
        | "distance"
        | "intervals"
        | "check_off"
      feed_item_type:
        | "workout_completion"
        | "like"
        | "personal_record"
        | "share"
      import_status: "pending" | "processing" | "completed" | "failed"
      leaderboard_period: "daily" | "weekly" | "monthly" | "yearly" | "all_time"
      liked_item_type: "workout" | "exercise" | "program"
      measurement_unit_type: "weight" | "time" | "distance" | "height"
      membership_role: "member" | "admin" | "founder"
      muscle_group:
        | "chest"
        | "back"
        | "shoulders"
        | "biceps"
        | "triceps"
        | "legs"
        | "core"
        | "full_body"
      old_session_type: "one_on_one" | "group_class" | "webinar"
      onboarding_status: "not_started" | "in_progress" | "completed"
      order_status:
        | "pending"
        | "processing"
        | "shipped"
        | "delivered"
        | "cancelled"
        | "refunded"
      payout_status: "pending" | "approved" | "paid" | "rejected"
      performance_metric_type: "numeric" | "time" | "distance" | "boolean"
      product_category: "supplements" | "apparel" | "accessories" | "equipment"
      program_visibility: "private" | "public" | "clubs_only" | "subscription"
      security_level: "basic" | "enhanced" | "maximum"
      session_status:
        | "scheduled"
        | "cancelled"
        | "completed"
        | "no_show"
        | "refunded"
        | "partially_refunded"
      session_type: "one_on_one" | "group_class" | "webinar" | "social"
      subscription_interval: "month" | "year"
      target_type: "muscle_group" | "movement_pattern" | "category"
      testing_method: "direct" | "rep_max_calculation" | "estimated"
      two_factor_method: "none" | "authenticator" | "sms"
      waitlist_status: "pending" | "invited" | "registered"
      workout_session_status: "in_progress" | "completed" | "cancelled"
      workout_status: "draft" | "completed" | "in_progress"
      workout_type: "strength" | "run" | "cycle" | "swim" | "other"
      workout_visibility:
        | "public"
        | "private"
        | "friends_only"
        | "followers_only"
        | "subscribers_only"
        | "paid"
        | "club_only"
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

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
