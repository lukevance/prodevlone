import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { 
    Box,
    Button, 
    Collapsible,
    Image, 
    Text,
} from 'grommet';
import { 
    CaretNext, 
    CaretPrevious, 
    Github, 
    Linkedin, 
    Mail,
    Medium,
 } from 'grommet-icons';

import headshot from "../images/headshot.jpg";

const socialIcons = [{name: `Github`, icon: <Github size="large"/>}, {name: `LinkedIn`, icon: <Linkedin size="large"/>}, {name: `Mail`, icon: <Mail size="large"/>}, {name: `Medium`, icon: <Medium size="large"/>}];

class Sidebar extends Component {
    render(){
        const { showSideBar, toggleSidebar } = this.props;
        return (
            <StaticQuery
                query={graphql`
                    query ContentLinksQuery {
                        site {
                            siteMetadata {
                                contentLinks {
                                    name
                                    link
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <Box 
                        direction='row'
                        style={{minHeight: '700px'}}
                    >
                        <Collapsible direction="horizontal" open={showSideBar}>
                            <Box
                                flex
                                width="medium"
                                background="light-2"
                                pad="small"
                                elevation="small"
                            >
                                <Box height="small" width="small">
                                    <Image
                                        fit="cover"
                                        src={headshot}
                                    />
                                </Box>
                                <Text size="large">Hi, I'm Luke.</Text>
                                <Text size="small">
                                    I am a failed hardware founder turned software developer turned product person.
                                </Text>
                                <Box direction='row' margin={{top: 'medium'}}>
                                    {data.site.siteMetadata.contentLinks.map(social => <Button icon={socialIcons.find(icn => social.name === icn.name).icon} onClick={() => window.open(social.link, '_blank')}/>)}
                                </Box>
                            </Box>
                        </Collapsible>
                        <Box
                            margin={{top: "medium"}} 
                            onClick={() => toggleSidebar()}
                        >
                            {showSideBar 
                            ? <CaretPrevious size='large'/>
                            : <CaretNext size='large'/>
                            }
                        </Box>
                    </Box>
                )}
            />     
        );      
    }
}

export default Sidebar;