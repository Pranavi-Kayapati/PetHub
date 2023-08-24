import React from "react";
import {
    Box,
    Flex,
    Stack,
    Select,
} from "@chakra-ui/react";

export default function Sidebar() {

    return (
        <Box>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding={6}
                bg="white"
                color="black"
            >

                <Box>
                    <Stack spacing={4}>
                        <Select placeholder="BREED">
                            <option value="Any">Any</option>
                            {/* Add more options here */}
                        </Select>
                        <Select placeholder="AGE">
                            <option value="Any">Any</option>
                            {/* Add more options here */}
                        </Select>
                        <Select placeholder="SIZE">
                            <option value="Any">Any</option>
                            {/* Add more options here */}
                        </Select>
                        <Select placeholder="GENDER">
                            <option value="Any">Any</option>
                            {/* Add more options here */}
                        </Select>
                        <Select placeholder="GOOD WITH">
                            <option value="Any">Any</option>
                            {/* Add more options here */}
                        </Select>
                        <Select placeholder="COAT LENGTH">
                            <option value="Any">Any</option>
                            {/* Add more options here */}
                        </Select>
                        <Select placeholder="COLOR">
                            <option value="Any">Any</option>
                            {/* Add more options here */}
                        </Select>
                    </Stack>

                </Box>
            </Flex>
        </Box>
    );
}
