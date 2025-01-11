// import { Popover as ChakraPopover, IconButton, Portal , PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, Popover} from "@chakra-ui/react"
// import * as React from "react"
// import { HiOutlineInformationCircle } from "react-icons/hi"

// export interface ToggleTipProps extends ChakraPopover.RootProps {
//   showArrow?: boolean
//   portalled?: boolean
//   portalRef?: React.RefObject<HTMLElement>
//   content?: React.ReactNode
//   children: React.ReactNode 

// }

// export const ToggleTip = React.forwardRef<HTMLDivElement, ToggleTipProps>(
//   function ToggleTip(props) {
//     const {
//       showArrow,
//       children,
//       portalled = true,
//       content,
//       portalRef,
//       ...rest
//     } = props

//     return (
//       <Popover {...rest} placement="bottom-start">
//       <PopoverTrigger>
//         <button>Click me</button>
//       </PopoverTrigger>
//       <PopoverContent m={4}> {/* Adjusting margin for gutter */}
//         <PopoverArrow />
//         <PopoverCloseButton />
//         <PopoverBody>
//           {children}
//         </PopoverBody>
//       </PopoverContent>
//     </Popover>
//     )
//   },
// )

// export const InfoTip = React.forwardRef<
//   HTMLDivElement,
//   Partial<ToggleTipProps>
// >(function InfoTip(props, ref) {
//   const { children, ...rest } = props
//   return (
//     <ToggleTip content={children} {...rest} ref={ref}>
//       <IconButton
//         variant="ghost"
//         aria-label="info"
//         size="2xs"
//         colorScheme="gray"
//       >
//         <HiOutlineInformationCircle />
//       </IconButton>
//     </ToggleTip>
//   )
// })


import { Popover as ChakraPopover, IconButton, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody } from "@chakra-ui/react"
import * as React from "react"
import { HiOutlineInformationCircle } from "react-icons/hi"

export interface ToggleTipProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  content?: React.ReactNode
  children: React.ReactNode 
  // Specify the individual Popover component props instead of RootProps
  placement?: "top" | "bottom" | "left" | "right" | "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end";
}

export const ToggleTip = React.forwardRef<HTMLDivElement, ToggleTipProps>(
  function ToggleTip(props, ref) {
    const {
      showArrow,
      children,
      portalled = true,
      content,
      portalRef,
      placement = "bottom-start", // Default placement
      ...rest
    } = props

    return (
      <ChakraPopover {...rest} placement={placement}>
        <PopoverTrigger>
          <button>Click me</button>
        </PopoverTrigger>
        <PopoverContent m={4} ref={ref}> {/* Adjusting margin for gutter */}
          {showArrow && <PopoverArrow />}
          <PopoverCloseButton />
          <PopoverBody>
            {content || children}
          </PopoverBody>
        </PopoverContent>
      </ChakraPopover>
    )
  },
)

export const InfoTip = React.forwardRef<
  HTMLDivElement,
  Partial<ToggleTipProps>
>(function InfoTip(props, ref) {
  const { children, ...rest } = props
  return (
    <ToggleTip content={children} {...rest} ref={ref}>
      <IconButton
        variant="ghost"
        aria-label="info"
        size="2xs"
        colorScheme="gray"
      >
        <HiOutlineInformationCircle />
      </IconButton>
    </ToggleTip>
  )
})
