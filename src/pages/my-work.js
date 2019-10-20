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

import placeholder from "../images/hemera-logo.jpg";
import projects from "../project-data.json";

const WorkProjectsPage = () => (
    <ResponsiveContext.Consumer>
        {size => (
            <Layout>
                <SEO title="Made by Luke Vance" />
                <Box
                    fill="horizontal"
                    pad={{top: "xlarge"}}
                >
                    <Heading>Things I've Made</Heading>
                    <Text size="large">
                        Lorem ipsum dolor amet art party cardigan pabst, neutra readymade blue bottle narwhal kogi DIY bitters bushwick aesthetic man braid. Everyday carry bicycle rights aesthetic kitsch, helvetica iceland biodiesel taxidermy.
                    </Text>
                </Box>
                {projects.map(project => 
                    <Box margin={{top: "medium"}}>
                        <Heading level="3">{project.title}</Heading>
                        <Box direction="row">
                            <Box width="small" margin={{right: "medium"}}>
                                <Image
                                    // fit="contain"
                                    src={placeholder}
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