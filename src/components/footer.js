import React from "react"
import { 
  Box, 
  Text,
  ResponsiveContext
 } from "grommet";

 export default function (props) {
     return (
        <ResponsiveContext.Consumer>
            {size => (
                <footer
                    style={{
                    background: `rebeccapurple`,
                    }}
                >
                    <Box
                        direction="row"
                        justify='between'
                        fill
                        flex
                        style={{
                          margin: `2rem auto 0 auto`,
                          padding: `0.75rem 1.0875rem`,
                        }}
                    >
                        <Text color="white">Copyright Luke Vance 2020</Text>
                    </Box>
                </footer>
            )}
        </ResponsiveContext.Consumer>
     );
 }