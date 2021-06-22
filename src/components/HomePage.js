import React from 'react'
import styled from 'styled-components';
import Logo from '../Navbar/Logo';
export const HomePage = () => {
    return (
        <Main>
            <LogoPlacer>
               <Logo />
           </LogoPlacer>
            <iframe  title="Facebook-Page"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fguerrillamusicofficial&tabs=timeline&width=400&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1337322356737912"
                style={{
                    padding:"30px 0",
                    minWidth:"400px",
                    height:"500px",
                    display:"flex",
                    border:"none", 
                    overflow:"hidden"
                }}
                scrolling="no" 
                frameborder="none" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
        </Main>
    )
}
const Main = styled.div`
    display:flex;
    flex-flow:column;
    align-items:center;
`;
const LogoPlacer= styled.div`
    display;flex;
    position:relative;
    padding-top:20px;
    `;



