import React from 'react'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import Cart from './Cart'


const NavBar = () => {
  return (
    <>
    <div>
        <Flex align='center' bg='#B2FF8C'>
          <div>
            <Link to={"/"}>
            <Box p='4' >
            Inicio
            </Box>
            
            </Link>
          </div>
            <Spacer />
            <Menu>
                <MenuButton>
                Categorías
                </MenuButton>
                <MenuList>
                    <Link to={"/categoria/A"}>
                    <MenuItem>Categoría A</MenuItem>
                    </Link>
                    <Link to={"/categoria/B"}>
                    <MenuItem>Categoría B</MenuItem>
                    </Link>
                    <Link to={"/categoria/C"}>
                    <MenuItem>Categoría C</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
            <Spacer />
            <Box p='4' >
            <Link to={"/cart"}>
            <CartWidget/>
            </Link>           
            </Box>
        </Flex>
    </div>
    </>
  )
}

export default NavBar