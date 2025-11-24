import React from 'react'
import FindGrantsDetailsContainer from './_components/find-grants-details-container'
import { Faq } from '@/components/web/Faq'
import { Testimonials } from '@/components/web/testimonials'
import RelatedGrants from './_components/related-grants'
import ContactDetails from './_components/contact-details'
import { Hero } from '@/components/common/Hero'

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
      <FindGrantsDetailsContainer id={params?.id || ''} />
      <ContactDetails />
      <RelatedGrants />
      <Faq />
      <Testimonials />
    </div>
  )
}

export default FindGrantsDetailsPage
