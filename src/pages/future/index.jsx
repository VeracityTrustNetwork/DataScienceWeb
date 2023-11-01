import { useRouter } from 'next/router'
import Container from 'components/Container'
import DarkModeSwitch from 'components/DarkModeSwitch'

import Nav from 'components/Nav';
import { Flex, Link } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useColorMode } from '@chakra-ui/color-mode';
import { Table, Tbody, Tr, Td } from '@chakra-ui/table';
import { Icon } from '@chakra-ui/icon';
import {AiFillMediumSquare} from 'react-icons/ai'
import { Heading } from '@chakra-ui/layout';

export default function Page() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgcolor = colorMode === 'dark' ? 'white' : 'transparent';
    const url = colorMode === 'dark' ? 'https://pandas.pydata.org/static/img/pandas_white.svg' : 'https://pandas.pydata.org/static/img/pandas.svg';
    return (<div>
        <DarkModeSwitch />

        <Nav navs={[{ path: '1' }, { path: '2' }, { path: '3' }]} />

        <Container mt='8vh' pt='5em' className='super-content-wrapper' overflowY='auto' height='100%'>
            <Heading>
            Further reading</Heading>
            <Flex justify='center' align='center' w='30vw'>
                <Table>
                    <Tbody>
                        <Tr>

                            <Td> Data manipulation using python </Td>
                            <Td> <Link target='_blank' href='https://pandas.pydata.org/docs/'>
                                <Image w='100px' style={{
                                }} src={url} /></Link></Td>
                        </Tr>
                        <Tr>

                            <Td> Medium article on how to set up a data science project</Td>
                            <Td> <Link target='_blank' href='https://medium.com/@vgiih_/full-guide-of-how-to-build-a-data-science-project-a1bf568c77f'>
                                <Icon boxSize='9' as={AiFillMediumSquare}></Icon></Link></Td>
                        </Tr>
                        <Tr>

                            <Td>Article on the different techniques you can use in data science
 </Td>
                            <Td> <Link target='_blank' href='https://kadirsumerkent.medium.com/data-science-101-an-introduction-to-the-fundamentals-and-techniques-4586f78f316d'>
                            <Icon boxSize='9' as={AiFillMediumSquare}></Icon></Link></Td>

                        </Tr>
                    </Tbody>
                </Table>
            </Flex>
        </Container>
    </div>

    )
}