import { useRouter } from 'next/router'
import Container from 'components/Container'
import DarkModeSwitch from 'components/DarkModeSwitch'

import Nav from 'components/Nav';
import { Flex, Link } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useColorMode } from '@chakra-ui/color-mode';
import { Table, Tbody, Tr, Td } from '@chakra-ui/table';


export default function Page() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgcolor = colorMode === 'dark' ? 'white' : 'transparent';
    const url = colorMode === 'dark' ? 'https://pandas.pydata.org/static/img/pandas_white.svg' : 'https://pandas.pydata.org/static/img/pandas.svg';
    return (<div>
        <DarkModeSwitch />

        <Nav navs={[{ path: '1' }, { path: '2' }, { path: '3' }]} />

        <Container mt='8vh'  pt='5em' className='super-content-wrapper' overflowY='auto' height='100%'>
            <h1>
                Read more about</h1>
            <Flex justify='center' align='center' w='30vw'>
                <Table>
                    <Tbody>
                        <Tr>

                            <Td> Data manipulation using python </Td>
                            <Td> <Link target='_blank' href='https://pandas.pydata.org/docs/'>
                                <Image w='100px' style={{
                                }} src={url} /></Link></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Flex>
        </Container>
    </div>

    )
}