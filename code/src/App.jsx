import { jobsAtom,messagingAtom, networkAtom, notificationAtom } from "./store/atoms/count"
import { RecoilRoot, useRecoilValue } from "recoil"

function App() {
  return (
  <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  ) 
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messaginggAtom = useRecoilValue(messagingAtom);
  return (
    <div>
      <button>Home</button>
      <button>my network ({networkNotificationCount >=100 ? "99+" :networkNotificationCount})</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging {messaginggAtom}</button>
      <button>Notification {notificationAtomCount}</button>
      <button>Me</button>
      
    </div>
  )
}

export default App

