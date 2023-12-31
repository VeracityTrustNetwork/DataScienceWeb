import { useRouter } from 'next/router'
import Container from 'components/Container'
import DarkModeSwitch from 'components/DarkModeSwitch'

import Nav from 'components/Nav';
import { Link } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex } from '@chakra-ui/layout';


export default function Page() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = colorMode === 'dark' ?'white':'transparent';
    return (<div>
        <DarkModeSwitch />

        <Nav navs={[{ path: '1' }, { path: '2' }, { path: '3' }]} />
        <Container mt='8vh' pt='5em' className='super-content-wrapper' overflowY='auto' height='100%'>
            <h1>Hosted by</h1>
            <h2 style={{padding:'2em',backgroundColor:bgcolor}}>
            <Flex alignItems='center' width='30vw'><Link mr='20' target='_blank' href='https://veracitytrustnetwork.com/'>
              <Image w='300px' style={{
                }} src='/img/codurance.svg' /></Link>
                <Link target='_blank' href='https://veracitytrustnetwork.com/'>
                <Image w='300px' style={{
                }} src='/img/logo.png' /></Link></Flex></h2>
                
        </Container>
    </div>

    )
}