import {useState} from "react"

export const Toggle = () => {
   const [isOpen, setIsOpen] = useState(false)
   const openElement = () => {
       setIsOpen(!isOpen)
   }

    return [isOpen, openElement]
}
