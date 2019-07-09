import React, { Component } from 'react';
import { Box, Collapsible, Text } from 'grommet';
import { CaretNext, CaretPrevious } from 'grommet-icons';


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
                    <Text size="xlarge">Sidebar</Text>
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