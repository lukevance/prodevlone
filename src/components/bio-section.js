import React, {useState} from "react";
import {
    Box,
    Button,
    Collapsible,
    Heading,
    Image,
    Text
} from "grommet";

import uzbekistan from "../images/soviet-uzbek-logo.png";
import ipod from "../images/ipod-mini.jpeg";
import track from "../images/wheaton-track.jpg";
import hemera from "../images/hemera-logo.jpg";

const BioSection = props => {
    const [open, setOpen] = useState(false);
    return (
        <Box pad={{top: "medium"}}>
            <Heading id="about">About Me</Heading>
            <Text size="large">I'm a multi-cultural, interdisciplinary software creator. Currently I'm working on API integration tools for developers as a Product Manager for Cloud Elements.</Text>
            <Text size="xlarge" margin={{top: "medium"}}>I love making things.</Text>
            <Text size="xlarge" margin={{top: "small"}}>I believe most problems can be solved with imagination.</Text>
            <Text size="xlarge" margin={{top: "small"}}>I build with pixels, but I start with pencils.</Text>
            <Button 
                primary 
                onClick={() => setOpen(!open)} 
                label="Read the Long Version" 
                margin={{horizontal: "xlarge", vertical: "medium"}}
            />
            <Collapsible open={open} {...props}>
                <Box
                    pad="medium"
                    // align="left"
                    justify="center"
                >
                    <Box direction="row-responsive">
                        <Box pad="medium" width="large">
                            <Text align="left">It may have started when I was growing up in Tashkent, Uzbekistan, a post-Soviet city in Central Asia where the idea of buying a replacement was as dirty as the far off concept of capitalism. My role-model at 6 years old was a former train conductor  for the soviet train line who taught me how to take apart old radios, piece together wooden treasure chests with working hinges, and whittle wooden swords. It felt like with a few pieces of wood and scrapped parts I could make any toy a boy could imagine.</Text>
                        </Box>
                        <Box width="medium">
                            <Image src={uzbekistan} />
                        </Box>
                    </Box>
                    <Box direction="row-responsive">
                        <Box width="medium">
                            <Image
                                src={ipod}
                            />
                        </Box>
                        <Box pad="medium" width="large">
                            <Text align="left">Or maybe it started on Christmas day, the year I was 14. I’d been saving up for months to buy a shiny new blue iPod mini and could barely believe my eyes when I found one under the tree. I carried that perfectly weighted object in my pocket for years and almost every time I felt it’s curved edges in my palm I smiled with delight. From then on it was hard to imagine doing anything in life other than trying to make things that could bring people that kind of joy.</Text>
                        </Box>
                    </Box>
                    <Box direction="row-responsive">
                        <Box pad="medium" width="large">
                            <Text>A few years later, I was a sophomore at a liberal arts college taking the last of my Physics and Math prerequisites and filling out transfer applications to engineering programs when I realized something. Along with learning more about how to build things, I wanted to know more about why things get made in the first place. One semester at a Design & Architecture school later, I was back to add Anthropology to my primarily Physics-based undergraduate degree.</Text>
                        </Box>
                        <Box width="medium">
                            <Image src={track} />
                        </Box>
                    </Box>
                    <Box direction="row-responsive">
                        <Box width="medium">
                            <Image
                                src={hemera}
                            />
                        </Box>
                        <Box width="large">
                            <Text>After working in manufacturing before quiting and attempting to launch a hardware startup, software finally drew me in full time. I couldn’t believe how a single person with a good idea could create so much and I was blown away by how quickly software allowed people to adapt to their observations. Although, I’ve learned there are still challenges that aren’t easily or quickly solved in this field, I’ve been happily building software since 2014.</Text>
                        </Box>
                    </Box>
                    
                </Box>
            </Collapsible>
        </Box>
    );
};

export default BioSection;