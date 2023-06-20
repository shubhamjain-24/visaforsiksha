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
  Checkbox,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import "./RegisterUser.css";
import Navbar from "../components/Navbar/Navbar";
import Footer2 from "../components/Footer2/Footer2";
import Image1 from "../Images/registerUSer.png";
import NavigationRegisterUser from "../components/NavigationRegisterUser";
// import emailjs from "@emailjs/browser";

export default function RegisterListener() {
  const [email, setEmail] = React.useState(localStorage.getItem("email") || "");
  //   const [show, setShow] = React.useState(false);
  const [password, setPassword] = React.useState(
    localStorage.getItem("password") || ""
  );

  const [nameOfUser, setName] = React.useState(
    localStorage.getItem("nameOfUser") || ""
  );

  const [phone, setPhone] = React.useState(localStorage.getItem("phone") || "");
  const [age, setAge] = React.useState(localStorage.getItem("age") || "");
  const [city, setCity] = React.useState(localStorage.getItem("city") || "");
  const [tenth, setTenth] = React.useState(localStorage.getItem("tenth") || "");
  const [twelth, setTwelth] = React.useState(
    localStorage.getItem("twelth") || ""
  );
  const [bachelor, setBachelor] = React.useState(
    localStorage.getItem("bachelor") || ""
  );
  const [specialization, setSpecialization] = React.useState(
    localStorage.getItem("specialization") || ""
  );
  const [college, setCollege] = React.useState(
    localStorage.getItem("college") || ""
  );
  const [course, setCourse] = React.useState(
    localStorage.getItem("course") || ""
  );
  const [country, setCountry] = React.useState(
    localStorage.getItem("country") || ""
  );
  const [work, setWork] = React.useState(localStorage.getItem("work") || "");

  // const [intern, setIntern] = React.useState("");
  // const [social, setsocial] = React.useState("");
  // const [extra, setextra] = React.useState("");
  // const [other, setother] = React.useState("");
  // const [fund, setfund] = React.useState("");
  // const [careergoal, setcareergoal] = React.useState("");
  // const [familybg, setfamilybg] = React.useState("");
  // const [anythingelse, setanythingelse] = React.useState("");
  // const [consultancy, setconsultancy] = React.useState("");
  // const [coupon, setcoupon] = React.useState("");

  // const[(work, setWork)] = React.useState(localStorage.getItem("work" || ""));
  const [intern, setIntern] = React.useState(
    localStorage.getItem("intern" || "")
  );
  const [social, setsocial] = React.useState(
    localStorage.getItem("social" || "")
  );
  const [extra, setextra] = React.useState(localStorage.getItem("extra" || ""));
  const [other, setother] = React.useState(localStorage.getItem("other" || ""));
  const [fund, setfund] = React.useState(localStorage.getItem("fund" || ""));
  const [careergoal, setcareergoal] = React.useState(
    localStorage.getItem("careergoal" || "")
  );
  const [familybg, setfamilybg] = React.useState(
    localStorage.getItem("familybg" || "")
  );
  const [anythingelse, setanythingelse] = React.useState(
    localStorage.getItem("anythingelse" || "")
  );
  const [consultancy, setconsultancy] = React.useState(
    localStorage.getItem("consultancy" || "")
  );
  const [coupon, setcoupon] = React.useState(
    localStorage.getItem("coupon" || "")
  );

  const [isClient, setisClient] = React.useState(true);
  const [hear, sethear] = React.useState("1");
  const [selectedValues, setSelectedValues] = React.useState([]);

  const [file, setFile] = React.useState(null);
  const [resume, setResume] = React.useState(null);

  const handleChange = (event) => {
    event.preventDefault();
    const { value, checked } = event.target;
    if (checked) {
      setSelectedValues([...selectedValues, value]);
    } else {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  console.log(file);

  const handleUpload = async () => {
    // const formData = new FormData();
    // formData.append("pdf", file);
    // try {
    //   const response = await axios.post("/upload", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  console.log(selectedValues);
  console.log(hear);
  const toast = useToast();
  const history = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      !nameOfUser ||
      !email ||
      !password ||
      !tenth ||
      !twelth ||
      !bachelor ||
      !specialization ||
      !college ||
      !course ||
      !country ||
      !selectedValues
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

    const formdata = new FormData();
    formdata.append("name", nameOfUser);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("college", college);
    formdata.append("course", course);
    formdata.append("city", city);
    // formdata.append("age", age);
    formdata.append("tenth", tenth);
    formdata.append("twelth", twelth);
    formdata.append("bachelor", bachelor);
    formdata.append("specialization", specialization);
    formdata.append("internship", intern);
    formdata.append("social", social);
    formdata.append("extra", extra);
    formdata.append("work", work);
    formdata.append("selectedValues", selectedValues);
    formdata.append("other", other);
    formdata.append("fund", fund);
    formdata.append("coupon", coupon);
    formdata.append("hear", hear);
    formdata.append("careergoal", careergoal);
    formdata.append("familybg", familybg);
    formdata.append("anythingelse", anythingelse);
    formdata.append("consultancy", consultancy);
    formdata.append("country", country);
    formdata.append("phone", phone);
    formdata.append("file", file);
    formdata.append("resume", resume);
    formdata.append("isClient", isClient);
    console.log({ file, resume });

    // console.log({ nameOfUser, email, password, pref1, pref2 });
    try {
      const config = {
        // headers: {
        //   // "Content-type": "multi-part/formdata",
        // },
      };

      const { data } = await axios.post(
        "/api/user/listener",

        formdata,
        // name: nameOfUser,
        // email,
        // password,
        // college: college,
        // course: course,
        // age,
        // city,
        // tenth,
        // twelth,
        // bachelor,
        // specialization,
        // internship: intern,
        // social,
        // extra,
        // other,
        // fund,
        // careergoal,
        // familybg,
        // anythingelse,
        // consultancy,
        // coupon,
        // country,
        // file,
        // resume,
        // phone,

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

      history("/payment");
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
      <NavigationRegisterUser />
      <div className="RU_mainDiv">
        {/* <Navbar className="RU_navbar"/> */}
        <div className="RU_mainDivImgDIV">
          <img className="RU_mainDivImg" src={Image1} />
        </div>

        <Box className="register-form-main-div">
          <Container className="register-form">
            <Stack
              className="register-form-mainstack"
              bg={"gray.50"}
              rounded={"xl"}
              p={{ base: 4, sm: 6, md: 6 }}
              spacing={{ base: 8 }}
            >
              <Stack spacing={4}>
                <Heading
                  color={"gray.800"}
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                >
                  We would be honored to be a part of
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text"
                  >
                    &nbsp; your journey
                  </Text>
                </Heading>
                <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                  "Welcome! Thank you for visiting our user form. Please provide
                  us with the necessary information so we can better serve you.
                  We appreciate your time."
                </Text>
                <Text color={"gray.800"} fontSize={{ base: "sm", sm: "md" }}>
                  Already have account?{" "}
                  <Link to="/listenerlogin">
                    <u style={{ color: "blue" }}>Log In</u>{" "}
                  </Link>{" "}
                </Text>
              </Stack>
              <Box as={"form"} mt={10}>
                <Stack spacing={4}>
                  {/* <Input
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Firstname Lastname"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  /> */}

                  <FormControl id="p1" isRequired>
                    <FormLabel>Enter your name</FormLabel>
                    <Input
                      onChange={(e) => {
                        setName(e.target.value);
                        localStorage.setItem(nameOfUser, e.target.value);
                      }}
                      value={nameOfUser}
                      placeholder="Firstname Lastname"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                  </FormControl>
                  <FormControl id="p3" isRequired>
                    <FormLabel>Enter your email</FormLabel>
                    <Input
                      onChange={(e) => {
                        setEmail(e.target.value);
                        localStorage.setItem("email", e.target.value);
                      }}
                      value={email}
                      placeholder="firstnamelastname@gmail.com"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                      required
                    />
                  </FormControl>

                  <FormControl id="p3" isRequired>
                    <FormLabel>Create your password</FormLabel>
                    <Input
                      onChange={(e) => {
                        setPassword(e.target.value);
                        localStorage.setItem("password", e.target.value);
                      }}
                      value={password}
                      placeholder="Create Password"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                  </FormControl>
                  {/* <Input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create Password"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  /> */}
                  {/* <Input
                    onChange={(e) => {
                      setAge(e.target.value);
                      localStorage.setItem("age", e.target.value);
                    }}
                    value={age}
                    placeholder="Enter your Age"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  /> */}
                  <Input
                    onChange={(e) => {
                      setCity(e.target.value);
                      localStorage.setItem("city", e.target.value);
                    }}
                    value={city}
                    placeholder="Enter your City"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                    Enter your past academics (Include 10/12/bachelors scores
                    and field of specialization. Also include year of passing)
                  </Text>
                  <HStack>
                    <Box>
                      <FormControl id="p1" isRequired>
                        <FormLabel>10th Percentage</FormLabel>
                        <Input
                          onChange={(e) => {
                            setTenth(e.target.value);
                            localStorage.setItem("tenth", e.target.value);
                          }}
                          type="text"
                          value={tenth}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="p1" isRequired>
                        <FormLabel>12th Percentage</FormLabel>
                        <Input
                          onChange={(e) => {
                            setTwelth(e.target.value);
                            localStorage.setItem("twelth", e.target.value);
                          }}
                          value={twelth}
                          type="text"
                        />
                      </FormControl>
                    </Box>
                  </HStack>
                  <HStack>
                    <Box>
                      <FormControl id="p2" isRequired>
                        <FormLabel>Bachelor Score</FormLabel>
                        <Input
                          onChange={(e) => {
                            setBachelor(e.target.value);
                            localStorage.setItem("bachelor", e.target.value);
                          }}
                          type="text"
                          value={bachelor}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="p3" isRequired>
                        <FormLabel>Field of Specialization</FormLabel>
                        <Input
                          onChange={(e) => {
                            setSpecialization(e.target.value);
                            localStorage.setItem(
                              "specialization",
                              e.target.value
                            );
                          }}
                          value={specialization}
                          type="text"
                        />
                      </FormControl>
                    </Box>{" "}
                  </HStack>
                  <FormControl id="p1c" isRequired>
                    <FormLabel>Enter your phone number</FormLabel>
                    <Input
                      onChange={(e) => {
                        setPhone(e.target.value);
                        localStorage.setItem("phone", e.target.value);
                      }}
                      value={phone}
                      placeholder="Enter Phone Number"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />{" "}
                  </FormControl>
                  {/* <Input
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Phone Number"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  /> */}

                  <FormControl id="p6" isRequired>
                    <FormLabel>Enter the College/University</FormLabel>
                    <Input
                      onChange={(e) => {
                        setCollege(e.target.value);
                        localStorage.setItem("college", e.target.value);
                      }}
                      type="text"
                      value={college}
                      placeholder="Enter the College/University you are applying to"
                    />
                  </FormControl>
                  {/* <Input
                    onChange={(e) => setCollege(e.target.value)}
                    type="text"
                    placeholder="Enter the College/University you are applying to"
                  /> */}

                  <FormControl id="p6" isRequired>
                    <FormLabel>Enter the course you are applying</FormLabel>
                    <Input
                      onChange={(e) => {
                        setCourse(e.target.value);

                        localStorage.setItem("course", e.target.value);
                      }}
                      value={course}
                      type="text"
                      placeholder="Enter the course you are applying"
                    />
                  </FormControl>

                  {/* <Input
                    onChange={(e) => setCourse(e.target.value)}
                    type="text"
                    placeholder="Enter the course you are applying"
                  /> */}

                  <FormControl id="p6" isRequired>
                    <FormLabel>Enter the country you are applying</FormLabel>
                    <Input
                      onChange={(e) => {
                        setCountry(e.target.value);
                        localStorage.setItem("country", e.target.value);
                      }}
                      value={country}
                      type="text"
                      placeholder="Enter the country you are applying to"
                    />
                  </FormControl>
                  {/* <Input
                    onChange={(e) => setCountry(e.target.value)}
                    type="text"
                    placeholder="Enter the country you are applying to"
                  /> */}
                  <Textarea
                    onChange={(e) => {
                      setWork(e.target.value);
                      localStorage.setItem("work", e.target.value);
                    }}
                    value={work}
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    placeholder="Work ex details if any (Your designation and duties)(If multiple work ex then also write start and end dates)"
                  ></Textarea>

                  {/* <Textarea
                    onChange={(e) => setIntern(e.target.value)}
                    placeholder="Internship Details if any"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Textarea
                    onChange={(e) => setsocial(e.target.value)}
                    placeholder="Social Work if any"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Textarea
                    onChange={(e) => setextra(e.target.value)}
                    placeholder="Extra curricular achivements if any"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Textarea
                    onChange={(e) => setother(e.target.value)}
                    placeholder="Any other achivements"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />

                  <Textarea
                    onChange={(e) => setfund(e.target.value)}
                    placeholder="Funding details (Let us know the fees you have paid and how your education is being sponsored)"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Textarea
                    onChange={(e) => setcareergoal(e.target.value)}
                    placeholder="Any short term / long term career objectives of you have after the course (its an optional question.. Will help us to make it more personalised) "
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Textarea
                    onChange={(e) => setfamilybg(e.target.value)}
                    placeholder="Family background (Number of members and what do they do)"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Textarea
                    onChange={(e) => setanythingelse(e.target.value)}
                    placeholder="Anything else"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Input
                    onChange={(e) => setconsultancy(e.target.value)}
                    type="text"
                    placeholder="Enter the name of the consultancy"
                  />
                  <Input
                    onChange={(e) => setcoupon(e.target.value)}
                    type="text"
                    placeholder="Add coupon Code if any"
                  />
                </Stack> */}

                  {/*  ///////////////////////////////////// */}
                  {/* <Textarea
                    onChange={(e) => {
                      setWork(e.target.value);
                      localStorage.setItem("work", e.target.value);
                    }}
                    value={work}
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                    placeholder="Work ex details if any (Your designation and duties)(If multiple work ex then also write start and end dates)"
                  ></Textarea> */}

                  <Textarea
                    onChange={(e) => {
                      setIntern(e.target.value);
                      localStorage.setItem("work", e.target.value);
                    }}
                    value={intern}
                    placeholder="Internship Details if any"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Textarea
                    onChange={(e) => {
                      setsocial(e.target.value);
                      localStorage.setItem("social", e.target.value);
                    }}
                    value={social}
                    placeholder="Social Work if any"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Textarea
                    onChange={(e) => {
                      setextra(e.target.value);
                      localStorage.setItem("extra", e.target.value);
                    }}
                    value={extra}
                    placeholder="Extra curricular achivements if any"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Textarea
                    onChange={(e) => {
                      setother(e.target.value);
                      localStorage.setItem("other", e.target.value);
                    }}
                    value={other}
                    placeholder="Any other achivements"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />

                  <Textarea
                    onChange={(e) => {
                      setfund(e.target.value);
                      localStorage.setItem("fund", e.target.value);
                    }}
                    value={fund}
                    placeholder="Funding details (Let us know the fees you have paid and how your education is being sponsored)"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Textarea
                    onChange={(e) => {
                      setcareergoal(e.target.value);
                      localStorage.setItem("careergoal", e.target.value);
                    }}
                    value={careergoal}
                    placeholder="Any short term / long term career objectives of you have after the course (its an optional question.. Will help us to make it more personalised) "
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Textarea
                    onChange={(e) => {
                      setfamilybg(e.target.value);
                      localStorage.setItem("familybg", e.target.value);
                    }}
                    value={familybg}
                    placeholder="Family background (Number of members and what do they do)"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Textarea
                    onChange={(e) => {
                      setanythingelse(e.target.value);
                      localStorage.setItem("anythingelse", e.target.value);
                    }}
                    value={anythingelse}
                    placeholder="Anything else"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.500"}
                    _placeholder={{
                      color: "gray.500",
                    }}
                  />
                  <Input
                    onChange={(e) => {
                      setconsultancy(e.target.value);
                      localStorage.setItem("consultancy", e.target.value);
                    }}
                    value={consultancy}
                    type="text"
                    placeholder="Enter the name of the consultancy"
                  />
                  <Input
                    onChange={(e) => {
                      setcoupon(e.target.value);
                      localStorage.setItem("coupon", e.target.value);
                    }}
                    value={coupon}
                    type="text"
                    placeholder="Add coupon Code if any"
                  />
                </Stack>

                <br />
                <FormControl id="url" isRequired>
                  <FormLabel spacing={[1, 5]}>
                    Are you intersted in any of the additional services
                  </FormLabel>
                  <Stack spacing={[1, 5]} direction={["column", "column"]}>
                    <Checkbox
                      size="md"
                      colorScheme="blue"
                      value="CA Valuation"
                      onChange={handleChange}
                    >
                      CA Valuation
                    </Checkbox>
                    <Checkbox
                      size="md"
                      colorScheme="blue"
                      value="LORs"
                      onChange={handleChange}
                    >
                      LORs
                    </Checkbox>
                    <Checkbox
                      size="md"
                      colorScheme="blue"
                      onChange={handleChange}
                      value="University/College assignments"
                    >
                      University/College assignments
                    </Checkbox>
                    <Checkbox
                      size="md"
                      colorScheme="blue"
                      onChange={handleChange}
                      value="Education Loan"
                    >
                      Education Loan
                    </Checkbox>
                    <Checkbox
                      size="md"
                      colorScheme="blue"
                      onChange={handleChange}
                      value="Post landing service such as accommodation, job, forex,
                    insurance"
                    >
                      Post landing service such as accommodation, job, forex,
                      insurance
                    </Checkbox>
                  </Stack>
                </FormControl>
                <br />
                <FormControl id="url">
                  <FormLabel spacing={[1, 5]}>
                    Where did you hear about us
                  </FormLabel>

                  <RadioGroup onChange={sethear}>
                    <Stack direction="row">
                      <Radio value="Instagram page">Instagram page</Radio>
                      <Radio value="Through Vineet">Through Vineet</Radio>
                      <Radio value="Facebook">Facebook</Radio>
                      <Radio value="Friend">Friend</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
                <br />

                <FormControl id="url">
                  <FormLabel spacing={[1, 5]}>
                    Upload your file/format{" "}
                  </FormLabel>
                  <Input
                    type="file"
                    name="file"
                    placeholder="Upload File"
                    onChange={handleFileChange}
                    accept="application/pdf"
                  ></Input>
                </FormControl>

                {/* <Input
                  type="file"
                  name="file"
                  placeholder="Upload resume"
                  onChange={handleFileChange}
                  accept="application/pdf"
                ></Input> */}

                {/* <button onClick={handleUpload}>upload</button> */}
                <br />

                <FormControl id="url">
                  <FormLabel spacing={[1, 5]}>Upload your resume</FormLabel>
                  <Input
                    type="file"
                    name="resume"
                    placeholder="Upload resume"
                    accept="application/pdf"
                    onChange={handleResumeChange}
                  ></Input>
                </FormControl>

                {/* <Input
                  type="file"
                  name="resume"
                  placeholder="Upload resume"
                  accept="application/pdf"
                  onChange={handleResumeChange}
                ></Input> */}

                <br />
                <Text>
                  Lastly, if you have any references then do contact us for
                  referral bonus
                </Text>

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
              </Box>
              form
            </Stack>
          </Container>
          {/* <Blur
          position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(70px)" }}
        /> */}
        </Box>
      </div>
      {/* <Footer2/> */}
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
