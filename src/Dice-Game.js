import "./app.css";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  List,
  ListItem,
  Link,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { useState } from "react";
import {BrowserRouter} from 'react-router-dom';

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [dice, setDice] = useState(1);
  const [error, setError] = useState(null);
  const [totalScore, setTotalScore] = useState(0);

  const numbers = [1, 2, 3, 4, 5, 6];

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleSelectedNumber = (numberValue) => {
    setSelectedNumber(numberValue);
    setError(null);
  };

  const handleResetScore = () => {
    setTotalScore(0);
  };

  const handleCloseGame = () => {
    setGameStarted(false);
  };

  const genrateRandonNumber = () => {
    if (selectedNumber) {
      const genratedNumber = Math.ceil(Math.random() * 6);
      setDice(genratedNumber);
      if(selectedNumber === genratedNumber){
        setTotalScore((prev) => prev + genratedNumber);
      }else{
        setTotalScore((prev) => prev - 2);
      }
    } 
    else {
      setError("Please Select Number");
    }
  };

  return (
    <>
      {gameStarted ? (
        <>
          <Stack
            justify="center"
            align="center"
            maxW="1300px"
            mx="auto"
            h="100vh"
          >
            <Heading as="h1" color={error ? "red" : "black"} fontSize="6xl" mb="8">
              {error ? error : "Select Number"}
            </Heading>

            <Flex pb="10">
              {numbers.map((value) => (
                <Flex
                  justify="center"
                  align="Center"
                  h="50px"
                  w="50px"
                  bg={selectedNumber === value ? "green" : "black"}
                  color="white"
                  fontSize="2xl"
                  key={value}
                  mr={4}
                  borderRadius="md"
                  onClick={() => handleSelectedNumber(value)}
                >
                  {value}
                </Flex>
              ))}
            </Flex>

            <Box onClick={genrateRandonNumber}>
              <Image src={`/personal-mini-projects/dice-game/dice/dice/dice${dice}.png`} />
            </Box>

            <Text as="p" fontSize="xl">
              Click on dice to Roll
            </Text>
            <Text color={totalScore < 0 ? "red" : "black"} fontSize="8xl" fontWeight="bold">
              {totalScore}
            </Text>
            <Text fontSize="6xl" fontWeight="bold">
              Total Score
            </Text>
            <Box>
            <Button bg="green.500" color="white" mr="20px" onClick={handleResetScore}>Reset Score</Button>
            <Button bg="red.500" color="white"onClick={handleCloseGame}>Close Game</Button>
            </Box>
          </Stack>
          <Stack maxW="900px" mx="auto">
            <Heading as="h2">Game Rules :-</Heading>
            <List>
              <ListItem>1. Select Number any number</ListItem>
              <ListItem>2. Click on dice image to roll it</ListItem>
              <ListItem>
                3. Select number is equal to obtained dice result then you will get
                same point of dice
              </ListItem>
              <ListItem>
                4. if You are Wrong Score will be deducted by 2 points
              </ListItem>
              <ListItem>
                <Link href="https://www.yashchintawar.in">
                  5. Check My Portfolio
                </Link>
              </ListItem>
            </List>
          </Stack>
        </>
      ) : (
        <Flex justify="center" align="center">
          <Image width="50%" src="/personal-mini-projects/dice-game/dice/dices.png" />
          <Stack>
            <Heading fontSize="7xl" as="h1">
              {" "}
              The Dice Game
            </Heading>
            <Button
              alignSelf="self-end"
              bg="black"
              color="white"
              _hover={{ bg: "gray" }}
              onClick={handleStartGame}
            >
              Start Game
            </Button>
          </Stack>
        </Flex>
      )}
    </>
  );
};

export default Game;
