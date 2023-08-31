'use client'

import { LICENCIA_ITEMS } from '@/data/data'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

const LicenciaAccordion = () => {
  return (
    <Box
      pos='relative'
      w='100%'
    >
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        w='100%'
      >
        {
          LICENCIA_ITEMS.map(({ id, content, title }) => (
            <AccordionItem
              key={id}
              border='2px #B4B9C9 solid'
              borderRadius='md'
              m={4}
            >
              <h3>
                <AccordionButton
                  _expanded={{ fontWeight: 'semibold' }}
                  w='100%'
                >
                  <Box as="span" flex='1' textAlign='left'>
                    {title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                {content}
              </AccordionPanel>
            </AccordionItem>
          ))
        }
      </Accordion>
    </Box>
  )
}

export default LicenciaAccordion