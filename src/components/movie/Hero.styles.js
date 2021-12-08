import tw, { styled } from "twin.macro";

export const HeroContainer = styled.div`
  ${tw`
    p-8
  `}
  height: 100vh;
  background-size: cover !important;
  

  ${(props) =>
    `background: url('https://image.tmdb.org/t/p/original${props.background}');`}
`;

export const HeroTitle = styled.h1`
  ${tw`
    font-bold
    mb-4
    ml-8
  `}
  font-size:100px;
max-width:2400px;
  margin-top:30vh;

`;

export const HeroDescription = styled.p`
  ${tw`
    font-medium
    text-4xl
    mb-4
    ml-8
  `}
  width: 45rem;
  max-width: 80vw;
  line-height: 1.7;
  overflow:hidden;
  height:120px;
`;

export const HeroButton = styled.button`
  ${tw`
    cursor-pointer
    font-bold
    mt-8
    mr-4
    text-4xl
    ml-8
  `}
  
  padding:1.4rem 2rem;
  border-radius : 5px;
  border:none;
  &:hover {
    opacity:.8;
    transition: all 0.4s;
  }
  .detail{
    background-color: black;
  }
`;  
export const DetailBtn = styled.button`
  ${tw`
    cursor-pointer
    font-bold
    mt-8
    mr-4
    text-4xl
    ml-8
  `}
  
  padding:1.4rem 2rem;
  border-radius : 5px;
  border:none;
  &:hover {
    opacity:.8;
    transition: all 0.4s;
  }
  .detail{
    background-color: white;
  }
  path{
    stroke:white;
  }
`;  