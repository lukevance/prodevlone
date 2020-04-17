import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
    Box,
    Button,
    Image,
    Layer,
    Text,
} from 'grommet';
import {
    CaretPrevious,
    Github,
    Linkedin,
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
                        style={{ minHeight: '600px' }}
                    >
                        {showSideBar && 
                        <Layer
                            onEsc={() => toggleSidebar()}
                            onClickOutside={() => toggleSidebar()}
                            full="vertical"
                            position="left"
                        >
                            <Box 
                                direction="row"
                                pad="small"
                            >
                                <Box>
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
                                <Button
                                    margin={{ top: "medium" }}
                                    onClick={() => toggleSidebar()}
                                    plain={true}
                                    focusIndicator={false}
                                    alignSelf="start"
                                    icon={<CaretPrevious size='large' />}
                                />
                            </Box>
                        </Layer>}
                    </Box>
                )}
            />
        );
    }
}

export default Sidebar;