import { useRouter } from 'next/router'
import Container from 'components/Container'
import DarkModeSwitch from 'components/DarkModeSwitch'

import Nav from 'components/Nav';
import { Test } from 'components/CodeBlock/Test';
import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/button';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  Input,
} from '@chakra-ui/react'

export default function Page() {
  const router = useRouter();
  const [level, setLevel] = useState(1);
  const [code, setCode] = useState('');
  const id = parseInt(router?.query?.id);
  const [unlockedList, setUnlockedList] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (!unlockedList.includes(id)) {
      setLevel(1);
    } else {
      setLevel(2);
    }
  }, [id])
  return (<div>
    <DarkModeSwitch />

    <Nav navs={[{ path: '1' }, { path: '2' }, { path: '3' }]} />
    <Container mt='8vh' pt='5em' className='super-content-wrapper' overflowY='auto' height='100%'>
      <div className={`super-content max-width level-unlock-${level}`}>
        {Test[id]}
      </div> </Container>

    {!unlockedList.includes(id) ? <Button position='fixed' bottom='30' right='30' onClick={() => {
      onOpen()
    }}>Unlock code </Button> : null}
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Help</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLabel>Enter Code :<Input value={code} onChange={(e) => {
            setCode(e.target.value)
          }}></Input></FormLabel>
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>
            Close
            </Button>
          <Button colorScheme='blue' onClick={() => {
            if (id == 1 && code == 'V1' || id == 2 && code == 'VA' || id == 3 && code == 'END') {
              setLevel(2)
              setUnlockedList(list => [...list, id]);
              setCode('');
              onClose();
            }
          }}>Unlock</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </div>
  )
}