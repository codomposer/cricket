import React from 'react'

type Props = {
  title?: string,
  content?: Array<string>,
}

const PointItem:React.FC<Props> = ({title, content}) => {
  if(!content?.length){
    return(
      <div>
        <h1>No content found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[#D9D9D9]/5 items-center gap-9 py-6 px-5">
      <p className="font-medium text-lg text-[#fff]">{title}</p>
      {content.map((item, index) => (
        <p className="font-medium text-lg text-[#fff]" key={index}>{item}</p>
      ))}
    </div>
  )
}

export default PointItem