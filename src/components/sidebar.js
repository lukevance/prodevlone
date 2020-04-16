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
    // CaretNext,
    // CaretPrevious,
    Github,
    Linkedin,
    Mail,
    Medium,
} from 'grommet-icons';
import Emoji from 'a11y-react-emoji';

import headshot from "../images/headshot.jpg";

const socialIcons = [
    { name: `Github`, icon: <Github size="large" /> }, 
    { name: `LinkedIn`, icon: <Linkedin size="large" /> },
    { name: `Medium`, icon: <Medium size="large" /> }
];

class Sidebar extends Component {
    render() {
        const { showSideBar, size } = this.props;
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
                        style={{ minHeight: '600px' }}
                    >
                        <Collapsible direction="horizontal" open={showSideBar}>
                            <Box
                                flex
                                width={(size !== "small" ? "medium" : "small")}
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
                                <Text size="large">That's me <Emoji symbol="☝️" /></Text>
                                <Text size="large" margin={{ top: 'medium' }}>Find more stuff about me <Emoji symbol="👇" /></Text>
                                <Box direction='row' margin={{ top: 'medium' }} wrap='true'>
                                    {data.site.siteMetadata.contentLinks.map(social => <Button icon={socialIcons.find(icn => social.name === icn.name).icon} onClick={() => window.open(social.link, '_blank')} />)}
                                </Box>
                            </Box>
                        </Collapsible>
                    </Box>
                )}
            />
        );
    }
}

export default Sidebar;