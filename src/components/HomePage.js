import React from 'react'
import styled from 'styled-components';
import Logo from '../Navbar/Logo';
export const HomePage = () => {
    return (
        <Main>
            <LogoPlacer>
               <Logo />
           </LogoPlacer>
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fguerrillamusicofficial&tabs=timeline&width=800&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1337322356737912"
                width={500}
                height={500}
                style={{
                    display:"flex",
                    border:"10px solid white", 
                    overflow:"hidden"
                }}
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
        </Main>
    )
}
const Main = styled.div`
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
`;
const LogoPlacer= styled.div`
    display;flex;
    position:relative;
    margin:0;
    padding:0;
    `;



