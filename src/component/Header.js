import {
    HeaderContainer,
    Image
} from './Elements'

import img from '../img/logo.png'

export default function Header() {
    return (
        <HeaderContainer>
            <Image src={img} alt='LOGO' />
        </HeaderContainer>
    )
}