import { Center, Box, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="welcome-container">
      <h1>Bienvenid@s!</h1>
      <Center>
        <Box boxSize="xxl">
          <Image
            src="https://hips.hearstapps.com/hmg-prod/images/12-iphone-xr-2018-1597837278.jpg"
            alt="celus"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Home