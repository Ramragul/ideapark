// "use client"

// import {
//   Toaster as ChakraToaster,
//   Portal,
//   Spinner,
//   Stack,
//   Toast,
//   createToaster,
// } from "@chakra-ui/react"

// export const toaster = createToaster({
//   placement: "bottom-end",
//   pauseOnPageIdle: true,
// })

// export const Toaster = () => {
//   return (
//     <Portal>
//       <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
//         {(toast) => (
//           <Toast.Root width={{ md: "sm" }}>
//             {toast.type === "loading" ? (
//               <Spinner size="sm" color="blue.solid" />
//             ) : (
//               <Toast.Indicator />
//             )}
//             <Stack gap="1" flex="1" maxWidth="100%">
//               {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
//               {toast.description && (
//                 <Toast.Description>{toast.description}</Toast.Description>
//               )}
//             </Stack>
//             {toast.action && (
//               <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
//             )}
//             {toast.meta?.closable && <Toast.CloseTrigger />}
//           </Toast.Root>
//         )}
//       </ChakraToaster>
//     </Portal>
//   )
// }


"use client"

import { useToast, Portal, Stack, Toast as ChakraToast, Button } from "@chakra-ui/react"
//import * as React from "react"

export const Toaster = () => {
  const toast = useToast()

  // Function to trigger a toast
  const triggerToast = () => {
    toast({
      title: "Success",
      description: "Your request was successful.",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Portal>
      {/* Use Chakra's Toast component */}
      <ChakraToast position="bottom-right" variant="subtle" boxShadow="md" isClosable duration={3000}>
        <Stack gap="1" flex="1" maxWidth="100%">
          {/* You can manually define your title and description content */}
          <div style={{ fontWeight: 'bold' }}>Success</div>
          <div>Your request was successful.</div>
        </Stack>
        <Button onClick={triggerToast}>Trigger Toast</Button>
      </ChakraToast>
    </Portal>
  )
}

