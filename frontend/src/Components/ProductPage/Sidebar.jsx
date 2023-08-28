import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Stack,
    Select,
    Text,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export default function Sidebar() {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialGender = searchParams.get('gender');
    const initialBreed = searchParams.get("breed");
    const initialAge = searchParams.get("age");
    const initialSize = searchParams.get("size");

    const [gender, setGender] = useState(initialGender || "");
    const [breed, setBreed] = useState(initialBreed || "");
    const [age, setAge] = useState(initialAge || "");
    const [size, setSize] = useState(initialSize || "");

    useEffect(() => {

        let params = {}
        gender && (params.gender=gender);
        breed && (params.breed=breed);
        age && (params.age=age);
        size && (params.size=size)
        setSearchParams(params)
    }, [gender, breed, age, size])


    const handleGender = (e) => {
        const { value } = e.target;
        let newGender = gender;
        if (newGender !== value) {
            newGender = value;
        } 
        setGender(newGender)
    }

    const handleBreed = (e) => {
        const { value } = e.target;
        let newBreed = breed;
        if (newBreed !== value) {
            newBreed = value;
        }
        setBreed(newBreed)

    }

    const handleAge = (e) => {
        const { value } = e.target;
        let newAge = age;
        if (newAge !== value) {
            newAge = value;
        }
        setAge(newAge)

    }

    const handleSize = (e) => {
        const { value } = e.target;
        let newSize = size;
        if (newSize !== value) {
            newSize = value;
        }
        setSize(newSize)

    }

    return (
        <Box>
            <Flex
                justifyContent={"end"}

            >
                <Box w={"100%"}>
                    <Stack  >
                        <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>BREED</Text>
                        <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"} onChange={handleBreed} value={breed}>
                            <option value="">Any</option>
                            <option value="Husky">Husky</option>
                            <option value="Hound Mix">Hound Mix</option>
                            <option value="Pit Bull">Pit Bull</option>
                            <option value="Terrier Mix">Terrier Mix</option>
                            <option value="Foxhound">Foxhound</option>
                            <option value="German Shepherd">German Shepherd</option>
                            <option value="Chow Chow Mix">Chow Chow Mix</option>
                            <option value="Pointer & Hound Mix'">Pointer & Hound Mix'</option>
                            <option value="Hound & German Shepherd Dog Mix">Hound & German Shepherd Dog Mix</option>
                        </Select>
                        <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>AGE</Text>
                        <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"} onChange={handleAge} value={age}>
                            <option value="">Any</option>
                            <option value="Puppy">Puppy</option>
                            <option value="Adult">Adult</option>
                            <option value="Young">Young</option>
                        </Select>
                        <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>SIZE</Text>
                        <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"} onChange={handleSize} value={size}>
                            <option value="">Any</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </Select>
                        <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>GENDER</Text>
                        <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"} onChange={handleGender} value={gender}>
                            <option value="">Any</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Select>
                        <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>GOOD WITH</Text>
                        <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"}>
                            <option value="">Any</option>
                            {/* Add more options here */}
                        </Select>
                        <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>COAT LENGTH</Text>
                        <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"}>
                            <option value="">Any</option>
                            {/* Add more options here */}
                        </Select>
                        <Text fontWeight={"semibold"} fontSize={"md"} color={"#363636"}>COLOR</Text>
                        <Select bg={"white"} h={"60px"} boxShadow={"md"} pb={"15px"}>
                            <option value="">Any</option>
                            {/* Add more options here */}
                        </Select>
                    </Stack>

                </Box>
            </Flex>
        </Box>
    );
}
