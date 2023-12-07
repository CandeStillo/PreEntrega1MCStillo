import React from 'react'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
    <div>
        <Flex align='center' bg='#B2FF8C'>
            <Box p='4' >
            MyEcommerce
            </Box>
            <Spacer />
            <Menu>
                <MenuButton>
                Categorías
                </MenuButton>
                <MenuList>
                    <MenuItem>Categoría 1</MenuItem>
                    <MenuItem>Categoría 2</MenuItem>
                    <MenuItem>Categoría 3</MenuItem>
                </MenuList>
            </Menu>
            <Spacer />
            <Box p='4' >
            <CartWidget/>
            </Box>
        </Flex>
    </div>
    </>
  )
}

export default NavBar