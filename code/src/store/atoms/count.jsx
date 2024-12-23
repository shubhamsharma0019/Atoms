import {atom} from "recoil"

  const networkAtom = atom({
    key:"networkAtom",
    default:104
});

  const jobsAtom = atom({
    key:"jobsAtom",
    default:0
});

 const notificationAtom = atom ({
    key:"notificationAtom",
    default:12
})

 const messagingAtom = atom({
    key:"messagingAtom",
    default:0
})

export {networkAtom}
export{jobsAtom}
export {notificationAtom}
export {messagingAtom}
