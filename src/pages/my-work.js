import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { 
    Box,
    Button,
    Heading,
    Image,
    Text,
    ResponsiveContext
} from "grommet";
import {
    Github,
    Link
} from 'grommet-icons';

import adventure from "../images/adventure.png";
import ce from "../images/cloud-elements.png";
import ffb from "../images/ffb.png";
import projects from "../project-data.json";

const images = {
    ce: ce,
    ffb: ffb,
    adventure: adventure
};

const WorkProjectsPage = () => (
    <ResponsiveContext.Consumer>
        {size => (
            <Layout size={size}>
                <SEO title="Made by Luke Vance" />
                <Box
                    fill="horizontal"
                    pad={{top: "xlarge"}}
                >
                    <Heading>Things I've Made</Heading>
                    <Text size="large">
                       Did I mention I like to make things? Below are a few of the things I've worked on recently, both at work and as independant productions.
                       </Text>
                </Box>
                {projects.map(project => 
                    <Box margin={{top: "medium"}}>
                        <Heading level="3">{project.title}</Heading>
                        <Box direction="row">
                            <Box width="small" margin={{right: "medium"}} 
                                    style={{minWidth:"100px"}}>
                                <Image
                                    // fit="contain"
                                    src={images[project.image]}
                                />
                            </Box>
                            <Box>
                                <Text>
                                    {project.description}
                                </Text>
                                <Box direction="row">
                                    <Box>
                                        <Button icon={<Github/>} onClick={() => window.open(project.github, '_blank')} />
                                    </Box>
                                    <Box>
                                        <Button icon={<Link/>} onClick={() => window.open(project.web, '_blank')} />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    
                    </Box>
                )}
                
            </Layout>
        )}
    </ResponsiveContext.Consumer>
);

export default WorkProjectsPage;