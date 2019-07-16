import React, { Component } from 'react';
import { 
    Box,
    Button, 
    Collapsible,
    Image, 
    Text 
} from 'grommet';
import { CaretNext, CaretPrevious, Github, Linkedin, Mail } from 'grommet-icons';

import headshot from "../images/headshot.jpg";

const socialLinks = [
    {
        icon: (<Github size='large'/>),
        link: `https://github.com/lukevance`
    },
    {
        icon: (<Linkedin size='large'/>),
        link: `https://linkedin.com/in/lukevance/`
    },
    {
        icon: (<Mail size='large'/>),
        link: ``
    }
]

class Sidebar extends Component {
    render(){
        const { showSideBar, toggleSidebar } = this.props;
        return (
            <Box direction='row'>
                <Collapsible direction="horizontal" open={showSideBar}>
                    <Box
                        flex
                        width="medium"
                        background="light-2"
                        pad="small"
                        elevation="small"
                    >
                        <Box height="medium" width="medium">
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
                            {socialLinks.map(social => <Button icon={social.icon} onClick={() => window.open(social.link, '_blank')}/>)}
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
        );      
    }
}

export default Sidebar;