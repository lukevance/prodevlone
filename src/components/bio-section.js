import React, {useState} from "react";
import {
    Box,
    Button,
    Collapsible,
    Image,
    Text
} from "grommet";

import ipod from "../images/ipod-mini.jpeg";
import hemera from "../images/hemera-logo.jpg";

const BioSection = props => {
    const [open, setOpen] = useState(false);
    return (
        <Box>
            <Button 
                primary 
                onClick={() => setOpen(!open)} 
                label="Read the Long Version" 
                fill={false}
            />
            <Collapsible open={open} {...props}>
                <Box
                    pad="medium"
                    // align="left"
                    justify="center"
                >
                    <Box direction="row-responsive">
                        <Box pad="medium" width="large">
                            <Text align="left">Lorem ipsum dolor amet art party cardigan pabst, neutra readymade blue bottle narwhal kogi DIY bitters bushwick aesthetic man braid. Everyday carry bicycle rights aesthetic kitsch, helvetica iceland biodiesel taxidermy. Selvage polaroid try-hard, synth activated charcoal bicycle rights vinyl viral chambray affogato vegan swag kale chips green juice ethical. Four loko cornhole narwhal echo park banh mi man braid XOXO microdosing selvage williamsburg tote bag vice master cleanse. Thundercats palo santo keytar tacos fixie, biodiesel humblebrag kitsch flannel cliche skateboard messenger bag.</Text>
                        </Box>
                        <Box width="medium">
                            <Image
                                // fit="cover"
                                src={ipod}
                            />
                        </Box>
                    </Box>
                    <Box direction="row-responsive">
                        <Box width="medium">
                            <Image
                                // fit="contain"
                                src={hemera}
                            />
                        </Box>
                        <Box width="large">
                            <Text>Cray bespoke fingerstache blog. Cold-pressed bitters poke, godard before they sold out messenger bag echo park farm-to-table ugh selvage thundercats direct trade. Chia portland pitchfork hella polaroid. You probably haven't heard of them cronut four loko twee gastropub, celiac godard fixie kitsch slow-carb tbh etsy jianbing humblebrag. Pabst la croix cray letterpress readymade, whatever pork belly. Chambray green juice master cleanse, banh mi ennui fanny pack ugh fashion axe kale chips air plant palo santo small batch wolf hell of.</Text>
                        </Box>
                    </Box>
                    <Box direction="row-responsive">
                        <Box width="large">
                            <Text>Chia seitan ethical sartorial vexillologist blog. Air plant lomo vegan affogato tbh kale chips hexagon quinoa waistcoat flexitarian. Celiac taiyaki DIY sartorial, humblebrag actually portland photo booth lomo prism semiotics beard. Coloring book cray tattooed gluten-free polaroid. Kinfolk retro tote bag glossier. Intelligentsia neutra tumeric tofu vexillologist squid retro yr pop-up put a bird on it single-origin coffee cornhole yuccie jianbing.</Text>
                        </Box>
                    </Box>
                </Box>
            </Collapsible>
        </Box>
    );
};

export default BioSection;