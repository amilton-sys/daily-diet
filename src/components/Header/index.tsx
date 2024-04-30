import { Container, Logo, LogoProfile } from "./styles";

import logoImg from "@assets/logo.png";
import profileImg from "@assets/logoProfile.png";


export function Header(){
    return(
        <Container>
            <Logo source={logoImg} />
            <LogoProfile source={profileImg}/>
        </Container>
    )
}