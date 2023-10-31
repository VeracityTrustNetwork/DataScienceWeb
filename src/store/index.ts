import { create } from 'zustand'
interface Store{
    code:string,
    setCode:(code:string)=>void
}
const useStore  = create<Store>()((set) => ({
  code: '0',
  setCode: (code:string) => set({code})
}))

export default useStore;