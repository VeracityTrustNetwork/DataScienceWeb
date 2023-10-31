import { Flex, Icon, Img } from '@chakra-ui/react'
import { MdHome } from 'react-icons/md'
import { Client } from '@notionhq/client'


import Link from 'next/link';


const Nav = ({ navs }) => {



  return (
    <Flex
      //bgColor='red'
      flexDir='row'
      height='8vh'
      w='100%'
      alignItems='center'
      gridGap='1em'
      position='fixed'
      top='0'
      background='linear-gradient(90deg, rgba(65,60,157,1) 0%, rgba(117,37,141,1) 55%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)'
      zIndex='2'
    >
      <Img src=''></Img>
      <Flex align='center' justify='flex-start' className='navs' style={{ gap: '20px', cursor: 'pointer' }}>
        <Link href='/'><Icon as={MdHome} boxSize={7}></Icon></Link>
        {navs?.map((i, j) => {
          return <Link href={`/exercise/${i?.path}`}><span>Exercise {j + 1}</span></Link>;
        })}

        <Link href={`/future`}><span>Futher Reading</span></Link>
        <Link href={`/about`}><span>About us</span></Link>
      </Flex>





    </Flex>
  )

}


export async function getStaticPaths() {


  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

export default Nav



export const getStaticProps = async () => {
  console.log(process.env.NOTION_API_KEY);
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const block = 'e2a914f97c1f44ee9e65712b9d1250d6';

  const res = await notion.blocks.children.list({
    block_id: block,
    page_size: 50
  });


  return {
    props: {
      data: res
    }
  }
}