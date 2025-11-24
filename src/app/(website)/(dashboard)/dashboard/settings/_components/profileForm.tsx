// ==================== FILE: _components/ProfileForm.tsx ====================
'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

interface ProfileFormProps {
  name: string
  setName: (value: string) => void
  username: string
  setUsername: (value: string) => void
  email: string
  phoneNumber: string
  setPhoneNumber: (value: string) => void
  bio: string
  setBio: (value: string) => void
  isUpdating: boolean
  onSubmit: () => void
  onReset: () => void
}

export function ProfileForm({
  name,
  setName,
  setUsername,
  username,
  email,
  phoneNumber,
  setPhoneNumber,
  bio,
  setBio,
  isUpdating,
  onSubmit,
  onReset,
}: ProfileFormProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="mt-1 bg-[#EDF2F6] border-none shadow-none text-gray-600"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={email}
            disabled
            readOnly
            className="mt-1 bg-[#EDF2F6] cursor-not-allowed border-none shadow-none text-gray-600"
          />
        </div>

        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="mt-1 bg-[#EDF2F6] border-none shadow-none text-gray-600"
          />
        </div>

        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+1 (555) 000-0000"
            className="mt-1 bg-[#EDF2F6] border-none shadow-none text-gray-600"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Write your bio here"
          className="mt-1 min-h-[100px] bg-[#EDF2F6] border-none shadow-none text-gray-600"
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button
          onClick={onSubmit}
          disabled={isUpdating}
          className="min-w-[140px] text-white bg-[#0C2661]"
        >
          {isUpdating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Updating...
            </>
          ) : (
            'Update Profile'
          )}
        </Button>
        <Button
          type="button"
          className="border border-gray-300 rounded-sm font-normal text-gray-500"
          variant="ghost"
          onClick={onReset}
          disabled={isUpdating}
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
