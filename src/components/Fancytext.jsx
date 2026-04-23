import React from 'react'
import { TextAnimate } from "./ui/text-animate"

const Fancytext = () => {
  return (
    <div>
      <TextAnimate animation="blurInUp" by="character" once>
        A DIVERSIFIED PRIVATE GROUP OF BRANDS, REAL ESTATE & STRATEGIC VENTURES
      </TextAnimate>
    </div>
  )
}

export default Fancytext
