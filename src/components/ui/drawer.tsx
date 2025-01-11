// import { Drawer as ChakraDrawer, Portal } from "@chakra-ui/react"
// import { CloseButton } from "./close-button"
// import * as React from "react"

// interface DrawerContentProps extends ChakraDrawer.ContentProps {
//   portalled?: boolean
//   portalRef?: React.RefObject<HTMLElement>
//   offset?: ChakraDrawer.ContentProps["padding"]
// }

// export const DrawerContent = React.forwardRef<
//   HTMLDivElement,
//   DrawerContentProps
// >(function DrawerContent(props, ref) {
//   const { children, portalled = true, portalRef, offset, ...rest } = props
//   return (
//     <Portal disabled={!portalled} container={portalRef}>
//       <ChakraDrawer.Positioner padding={offset}>
//         <ChakraDrawer.Content ref={ref} {...rest} asChild={false}>
//           {children}
//         </ChakraDrawer.Content>
//       </ChakraDrawer.Positioner>
//     </Portal>
//   )
// })

// export const DrawerCloseTrigger = React.forwardRef<
//   HTMLButtonElement,
//   ChakraDrawer.CloseTriggerProps
// >(function DrawerCloseTrigger(props, ref) {
//   return (
//     <ChakraDrawer.CloseTrigger
//       position="absolute"
//       top="2"
//       insetEnd="2"
//       {...props}
//       asChild
//     >
//       <CloseButton size="sm" ref={ref} />
//     </ChakraDrawer.CloseTrigger>
//   )
// })

// export const DrawerTrigger = ChakraDrawer.Trigger
// export const DrawerRoot = ChakraDrawer.Root
// export const DrawerFooter = ChakraDrawer.Footer
// export const DrawerHeader = ChakraDrawer.Header
// export const DrawerBody = ChakraDrawer.Body
// export const DrawerBackdrop = ChakraDrawer.Backdrop
// export const DrawerDescription = ChakraDrawer.Description
// export const DrawerTitle = ChakraDrawer.Title
// export const DrawerActionTrigger = ChakraDrawer.ActionTrigger



// Build Version 


import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerFooter, DrawerBody } from "@chakra-ui/react"
//import { CloseButton } from "./close-button"
import * as React from "react"

interface CustomDrawerContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  offset?: string // Adjusted padding type for older versions
  children: React.ReactNode // Added children prop
}

export const CustomDrawerContent = React.forwardRef<
  HTMLDivElement,
  CustomDrawerContentProps
>(function CustomDrawerContent(props, ref) {
  const { children, portalled = true, portalRef, offset, ...rest } = props
  return (
    <DrawerOverlay>
      <DrawerContent ref={ref} {...rest}>
        {children}
      </DrawerContent>
    </DrawerOverlay>
  )
})

export const CustomDrawer = Drawer
export const CustomDrawerFooter = DrawerFooter
export const CustomDrawerHeader = DrawerHeader
export const CustomDrawerBody = DrawerBody
export const CustomDrawerCloseButton = DrawerCloseButton

// Use `DrawerHeader` for the title:
export const CustomDrawerTitle = ({ children }: { children: React.ReactNode }) => (
  <DrawerHeader>{children}</DrawerHeader>
)
