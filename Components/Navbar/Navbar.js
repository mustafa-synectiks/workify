import React from 'react'

const Navbar = () => {
  return (
    <Header>
      <h5 className='uppercase text-white'>Synectiks</h5>
      <Button icon={<SearchOutlined />}>Search</Button>
    </Header>
  )
}

export default Navbar