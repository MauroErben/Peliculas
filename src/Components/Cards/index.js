import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";

const MovieCard = ({ imagen, titulo, descripcion, handleDrag, handleClick }) => {
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            maxWidth='280px'
            borderRadius='md'
            boxShadow='lg'
            p='2'
        >
            <Image onDragStart={handleDrag} src={imagen} />
            <Box
                p='2'
                textAlign='center'
            >
                <Heading fontSize='14px'>{titulo}</Heading>
                <Text mt='2'>{descripcion}</Text>
                <Button
                    color='white'
                    bg='red.600'
                    _hover={{bg: 'red.700'}}
                    mt='2'
                    onClick={handleClick}
                >
                Ver detalles</Button>
            </Box>
        </Box>
    )
}
export default MovieCard;