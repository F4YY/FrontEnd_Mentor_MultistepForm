import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    width:'70px',
  },
  thumb: {
    bg: 'var(--White)',
  },
  track: {
    bg: 'var(--Marine-blue)',
    _checked: {
      bg: 'var(--Marine-blue)',
    },
  },
})

export const switchTheme = defineMultiStyleConfig({ baseStyle });