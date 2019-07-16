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
                        <Box direction='row'>
                            <Button icon={<Github />}/>
                            <Button icon={<Linkedin />}/>
                            <Button icon={<Mail />}/>
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