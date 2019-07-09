import React, { Component } from 'react';
import { Box, Collapsible, Text, Image } from 'grommet';
import { CaretNext, CaretPrevious } from 'grommet-icons';

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
                        <Text size="large">Hi, I'm Luke</Text>
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