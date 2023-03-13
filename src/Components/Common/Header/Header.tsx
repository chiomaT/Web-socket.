import React from 'react'
interface Props {
     pageTitle: string;
}

const Header = ({pageTitle}: Props) => {
  return (
    <div>
     <div className="flex items-center  pb-5">
      <h1 className="text-xl lg:text-xl font-semibold text-[#D71E0E]">{pageTitle}</h1>
      </div>
    </div>
  )
}

export default Header