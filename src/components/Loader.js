import React from 'react';
import CircleLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';


const Loader = (loading) => {
    return (
        <Container>
            <CircleLoader
                size={150}
                color={"#123abc"}
                loading={loading} />
        </Container>
    )
}

export default Loader

const Container = styled.div`
    display:flex;
    flex:1;
    margin-top:50%;
    justify-content: center;
    align-items: center;
`;
