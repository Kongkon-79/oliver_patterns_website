import React from 'react'

import { Faq } from '@/components/web/Faq'
import { Testimonials } from '@/components/web/testimonials'

import ContactDetails from './_components/contact-details'
import { Hero } from '@/components/common/Hero'
import {
  FindGrantsDetailsContainer,
  RelatedGrants,
} from './_components/findGrantsDetailsContainer'

const FindGrantsDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Hero
        title="Find Business Grants"
        subtitle={
          <>
            Discover funding opportunities, expert insights, and tools to help
            your business grow through <br /> grants. Search and filter from
            over 1,200 available grants for your business
          </>
        }
        videoSrc="/assets/hero.mp4"
      />
      <FindGrantsDetailsContainer id={params.id} />
      <ContactDetails />
      <RelatedGrants id={params.id} /> {/* Pass same ID */}
      <Faq />
      <Testimonials />
    </div>
  )
}

export default FindGrantsDetailsPage
