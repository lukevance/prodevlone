import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome</h1>
    <p>There may or may not be interesting content on this page.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna neque viverra justo nec ultrices dui sapien eget mi. At auctor urna nunc id cursus metus aliquam. Id consectetur purus ut faucibus pulvinar. Aliquet sagittis id consectetur purus ut. Mi sit amet mauris commodo. Nunc eget lorem dolor sed viverra. Tortor condimentum lacinia quis vel eros donec ac odio. Nec dui nunc mattis enim ut tellus elementum. Molestie at elementum eu facilisis sed odio. Ut tristique et egestas quis ipsum. Scelerisque in dictum non consectetur a erat nam. Egestas diam in arcu cursus euismod. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Fringilla urna porttitor rhoncus dolor purus non enim.

Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Tortor consequat id porta nibh venenatis cras. Massa tincidunt dui ut ornare. Accumsan lacus vel facilisis volutpat. Enim sed faucibus turpis in eu mi bibendum. Neque sodales ut etiam sit amet nisl. Odio pellentesque diam volutpat commodo sed egestas. In iaculis nunc sed augue. Orci nulla pellentesque dignissim enim sit amet.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
