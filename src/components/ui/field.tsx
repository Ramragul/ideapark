// import { Field as ChakraField } from "@chakra-ui/react"
// import * as React from "react"

// export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
//   label?: React.ReactNode
//   helperText?: React.ReactNode
//   errorText?: React.ReactNode
//   optionalText?: React.ReactNode
// }

// export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
//   function Field(props, ref) {
//     const { label, children, helperText, errorText, optionalText, ...rest } =
//       props
//     return (
//       <ChakraField.Root ref={ref} {...rest}>
//         {label && (
//           <ChakraField.Label>
//             {label}
//             <ChakraField.RequiredIndicator fallback={optionalText} />
//           </ChakraField.Label>
//         )}
//         {children}
//         {helperText && (
//           <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
//         )}
//         {errorText && (
//           <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>
//         )}
//       </ChakraField.Root>
//     )
//   },
// )



// Build Version 

import { FormControl, FormLabel, FormHelperText, FormErrorMessage } from "@chakra-ui/react"
import * as React from "react"

export interface FieldProps {
  label?: React.ReactNode
  helperText?: React.ReactNode
  errorText?: React.ReactNode
  optionalText?: React.ReactNode
  isInvalid?: boolean
  isRequired?: boolean
  id: string
  children: React.ReactNode
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const { label, children, helperText, errorText, optionalText, isInvalid, isRequired, id, ...rest } = props

    return (
      <FormControl ref={ref} isInvalid={isInvalid} isRequired={isRequired} {...rest}>
        {label && (
          <FormLabel htmlFor={id}>
            {label}
            {!optionalText && isRequired && <span style={{ color: 'red' }}>*</span>}
            {optionalText && <span>{optionalText}</span>}
          </FormLabel>
        )}
        {children}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {errorText && <FormErrorMessage>{errorText}</FormErrorMessage>}
      </FormControl>
    )
  }
)


