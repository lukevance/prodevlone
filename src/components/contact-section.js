import React from "react";
import {
    Box,
    Heading,
    Text
} from "grommet";
import {Phone, Slack} from "grommet-icons";

const Contact = () => {
    return (
        <Box pad={{top: "medium"}}>
            <Heading id="contact">
                Contact
            </Heading>
            <Text size="large">I'm not a big fan of email. I'd much prefer you contact me on a platform where conversations are more natural. Like these:</Text>
            <Box direction="row" margin={{top: "large"}}>
                <Phone size="xlarge"/>
                <Box pad={{left: "medium"}}>
                    <Text size="xlarge">
                    Text LukeBot +1 (720)-575-2537
                    </Text>
                    <Text>
                    You can use LukeBot to pass a message along to me, schedule a coffee meeting, or even get free fantasy football advice! 
                    </Text>
                </Box>
            </Box>
            <Box direction="row" margin={{top: "large"}}>
                <Slack size="xlarge"/>
                <Box pad={{left: "medium"}}>
                    <Text size="xlarge">
                        Hit me up on Denver Devs!
                    </Text>
                    <Text>
                        The Denver Devs community is awesome, and they have a great Slack group. If you're not already on it, you can sign up here: {<a href="https://denverdevs.org" target="_blank">denverdevs.org</a>}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;