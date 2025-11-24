'use client'

import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { DeleteContent } from '../../../_components/delete-contact'

interface Grant {
  _id: string
  title: string
  type: string
  funding: string
  deadline: string
  imageUrl: string
  status: string
}

interface PaginationInfo {
  currentPage: number
  totalPages: number
  totalData: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

interface WishlistResponse {
  status: boolean
  message: string
  data: {
    grants: Grant[]
    paginationInfo: PaginationInfo
  }
}

const WishList = () => {
  const session = useSession()
  const token = session?.data?.user?.accessToken

  const { data, isLoading } = useQuery<WishlistResponse>({
    queryKey: ['wishlist'],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/wishlist`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const json = await res.json()
      return json
    },
    enabled: !!token,
  })

  if (isLoading) {
    return (
      <div className="container mx-auto py-6">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Loading wishlist...</div>
        </div>
      </div>
    )
  }

  const items = data?.data?.grants || []

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-6">
        <div className="text-center text-gray-500 text-lg">
          No wishlist items found.
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6">
      <div className="border border-gray-200 rounded-md">
        <Table>
          <TableHeader className="bg-[#deeeff] h-[45px]">
            <TableRow>
              <TableHead className="text-center opacity-85">Image</TableHead>
              <TableHead className="text-center opacity-85">Title</TableHead>
              <TableHead className="text-center opacity-85">Funding</TableHead>
              <TableHead className="text-center opacity-85">Status</TableHead>
              <TableHead className="text-center opacity-85">Deadline</TableHead>
              <TableHead className="text-center opacity-85">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {items.map((grant) => (
              <TableRow key={grant._id}>
                <TableCell className="text-center h-[70px] border-t border-gray-200">
                  <Image
                    src={grant.imageUrl}
                    alt={grant.title}
                    width={60}
                    height={60}
                    className="mx-auto rounded-md object-cover"
                  />
                </TableCell>

                <TableCell className="text-center font-medium border-t border-gray-200">
                  {grant.title}
                </TableCell>

                <TableCell className="text-center border-t border-gray-200">
                  {grant.funding}
                </TableCell>

                <TableCell className="text-center capitalize border-t border-gray-200">
                  {grant.status}
                </TableCell>

                <TableCell className="text-center border-t border-gray-200">
                  {new Date(grant.deadline).toLocaleDateString()}
                </TableCell>

                <TableCell className="text-center border-t border-gray-200">
                  <DeleteContent id={grant._id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default WishList
