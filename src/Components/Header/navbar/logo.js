import { Box, Text } from "@chakra-ui/react"
import { MenuItems } from "./menuItems"
export const Logo = () => {
    return (
        <Box>
            <MenuItems to="/">
                <Text fontSize='lg' fontWeight='bold'>
                    ME-Movies
                </Text>
            </MenuItems>
        </Box>
    )
}