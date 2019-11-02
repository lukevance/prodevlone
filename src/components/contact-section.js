import React from "react";
import {
    Box,
    Heading,
    Text
} from "grommet";
import {Phone} from "grommet-icons";

const Contact = () => {
    return (
        <Box pad={{top: "medium"}}>
            <Heading id="contact">
                Contact
            </Heading>
            <Box direction="row">
                <Phone size="xlarge"/>
                <Box pad={{left: "medium"}}>
                    <Text size="xlarge">
                    Text LukeBot +1 (720)-123-0987
                    </Text>
                    <Text>
                    You can use LukeBot to pass a message along to me, schedule a coffee meeting, or even get free fantasy football advice! 
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;