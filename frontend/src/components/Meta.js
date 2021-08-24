import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Sbat.TN',
  description: 'we sell the best hoes with cheapest price ',
  keywords: 'shoe,shoes,Nike,Addidas',
}

export default Meta
