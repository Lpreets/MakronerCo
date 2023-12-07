"use client"

import React from 'react'
import Modal from '@/app/_components/Modal'
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import useAuthModal from '@/hooks/useAuthModal'

const AuthModal = () => {
    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();

  return (
    <Modal
        title="Welcome back"
        description="Login to your account"
    >
        <Auth
        theme="dark"
        providers={["facebook", "google", "apple",]}
        supabaseClient={supabaseClient} 
        appearance={{
            theme: ThemeSupa,
            variables: {
                default: {
                    colors: {
                        brand: "#C42300",
                        brandAccent: "#AB1E00",
                    }
                }
            }
        }}
        />
    </Modal>
  )
}

export default AuthModal