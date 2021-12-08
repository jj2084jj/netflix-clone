import tw, { styled } from "twin.macro";


export const HeaderContainer = styled.div`
  ${tw`
    flex
    justify-between
    fixed
    top-0
    w-full
    transition-all
    z-10
  `}
  padding: 0 60px;
  box-sizing:border-box;
   background: linear-gradient(to top, transparent, black);
.center{
  max-width:2400px;
  width:100%;
  justify-content : space-between;
  transition: all .3;
}
  ${(props) => (props.dark ? tw`bg-black` : tw`bg-transparent`)}
div{
  
  display:flex;
  align-items:center;
  ul{
    display:flex;
    align-items:center;
    justify-content:left;
    li{
      padding:0 20px;
      font-size:1.4rem;
      a{
        color:white;
      }
    }
  }
}
  img {
    ${tw`
      h-8
    `}
    &:last-child{
      padding-right:15px;
    }
  }
`;