import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  HStack,
  FormControl,
  FormLabel,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

export default function RegisterListener() {
  const [email, setEmail] = React.useState("");
  //   const [show, setShow] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [nameOfUser, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [pref1, setPref1] = React.useState("");
  const [pref2, setPref2] = React.useState("");
  const [pref3, setPref3] = React.useState("");
  const [pref4, setPref4] = React.useState("");
  const [pref5, setPref5] = React.useState("");
  const [College, setCollege] = React.useState("");
  const [Course, setCourse] = React.useState("");
  const [yearOfstudy, setYearOfstudy] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [samename, setSameName] = React.useState("");

  const toast = useToast();
  const history = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      !nameOfUser ||
      !email ||
      !password ||
      !phone ||
      !url ||
      !desc ||
      !Course ||
      !College ||
      !yearOfstudy ||
      !pref1 ||
      !pref2 ||
      !pref3 ||
      !pref4 ||
      !pref5
    ) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      return;
    }

    console.log({ nameOfUser, email, password, pref1, pref2 });
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/listener",
        {
          name: nameOfUser,
          email,
          password,
          samename: nameOfUser,
          url,
          college: College,
          year: yearOfstudy,
          course: Course,
          pref1,
          pref2,
          pref3,
          pref4,
          pref5,
          desc,
          phone,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));

      history("/ListenerChat");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <>
      <Navigation />
      <Box position={"relative"}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              {/* Expert consultants{" "} */}
              Expert Content{" "}
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                &
              </Text>{" "}
              Management Students
            </Heading>
            <Stack direction={"row"} spacing={4} align={"center"}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    size={{ base: "md", md: "lg" }}
                    position={"relative"}
                    zIndex={2}
                    _before={{
                      content: '""',
                      width: "full",
                      height: "full",
                      rounded: "full",
                      transform: "scale(1.125)",
                      bgGradient: "linear(to-bl, red.400,pink.400)",
                      position: "absolute",
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text
                fontFamily={"heading"}
                fontSize={{ base: "4xl", md: "6xl" }}
              >
                +
              </Text>
              <Flex
                align={"center"}
                justify={"center"}
                fontFamily={"heading"}
                fontSize={{ base: "sm", md: "lg" }}
                bg={"gray.800"}
                color={"white"}
                rounded={"full"}
                minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
                minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
                position={"relative"}
                _before={{
                  content: '""',
                  width: "full",
                  height: "full",
                  rounded: "full",
                  transform: "scale(1.125)",
                  bgGradient: "linear(to-bl, orange.400,yellow.400)",
                  position: "absolute",
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              >
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
                Join our team
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  !
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                {/* We’re looking for amazing Listeners and Consultants just like
                you! Become a part of our team and skyrocket your career! */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                suscipit earum minus esse repellendus! Recusandae ducimus facere
                ullam veniam vel maxime, facilis amet debitis beatae ipsa
                eveniet explicabo, consequatur officiis!
              </Text>
            </Stack>
            <Box as={"form"} mt={10}>
              <Stack spacing={4}>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Firstname Lastname"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="firstnamelastname@gmail.com"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />

                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create Password"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                  Write the preference where you can provide Content
                </Text>
                <HStack>
                  <Box>
                    <FormControl id="p1" isRequired>
                      <FormLabel>Preference 1</FormLabel>
                      <Input
                        onChange={(e) => setPref1(e.target.value)}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="p2">
                      <FormLabel>Preference 2</FormLabel>
                      <Input
                        onChange={(e) => setPref2(e.target.value)}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="p3">
                      <FormLabel>Preference 3</FormLabel>
                      <Input
                        onChange={(e) => setPref3(e.target.value)}
                        type="text"
                      />
                    </FormControl>
                  </Box>{" "}
                </HStack>
                <HStack>
                  <Box>
                    <FormControl id="p4">
                      <FormLabel>Preference 4</FormLabel>
                      <Input
                        onChange={(e) => setPref4(e.target.value)}
                        type="text"
                      />
                    </FormControl>
                    <FormControl id="p5">
                      <FormLabel>Preference 5</FormLabel>
                      <Input
                        onChange={(e) => setPref5(e.target.value)}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <Input
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Phone Number"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                {/* <Input fontFamily={"heading"} bg={"gray.200"} color={"gray.800"}>
                Upload URL of CB
              </Input> */}
                <FormControl id="url">
                  <FormLabel>Enter URL of Resume</FormLabel>
                  <Input onChange={(e) => setUrl(e.target.value)} type="text" />
                </FormControl>
                <Textarea
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="why should people choose you? How are you going to make them fine? (Note this will shown to User)"
                ></Textarea>
                <Input
                  onChange={(e) => setCollege(e.target.value)}
                  type="text"
                  placeholder="Enter your College/University name"
                />
                <Input
                  onChange={(e) => setCourse(e.target.value)}
                  placeholder="Course pursuing/completed"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Input
                  onChange={(e) => setYearOfstudy(e.target.value)}
                  placeholder="Current year"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
              </Stack>
              <Button
                onClick={submitHandler}
                type="submit"
                fontFamily={"heading"}
                mt={8}
                w={"full"}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
              >
                Submit
              </Button>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                Already have account?{" "}
                <Link to="/listenerlogin">
                  <u style={{ color: "blue" }}>Log In</u>{" "}
                </Link>{" "}
              </Text>
            </Box>
            form
          </Stack>
        </Container>
        <Blur
          position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(70px)" }}
        />
      </Box>
    </>
  );
}

export const Blur = (IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...IconProps}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
