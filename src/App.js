// import React from 'react';
// import * as Accordion from './components/ui/Accordion';
// // import classNames from 'classnames';
// // import { ChevronDownIcon } from '@radix-ui/react-icons';
// // import './styles.css';

import VideoPlayer from "./components/ui/Video";

// const AccordionDemo = () => (
//   <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
//     <Accordion.Item className="AccordionItem" value="item-1">
//       <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
//       <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
//     </Accordion.Item>

//     <Accordion.Item className="AccordionItem" value="item-2">
//       <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
//       <Accordion.Content>
//         Yes. It's unstyled by default, giving you freedom over the look and feel.
//       </Accordion.Content>
//     </Accordion.Item>

//     <Accordion.Item className="AccordionItem" value="item-3">
//       <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
//       <Accordion.Content className="AccordionContent">
//           Yes! You can animate the Accordion with CSS or JavaScript.
//       </Accordion.Content>
//     </Accordion.Item>
//   </Accordion.Root>
// );


// export default AccordionDemo;


// import React from 'react';
// import * as AlertDialog from '@radix-ui/react-alert-dialog';
// import './styles.css';

// const AlertDialogDemo = () => (
//   <AlertDialog.Root>
//     <AlertDialog.Trigger asChild>
//       <button className="Button violet">Delete account</button>
//     </AlertDialog.Trigger>
//     <AlertDialog.Portal>
//       <AlertDialog.Overlay className="AlertDialogOverlay" />
//       <AlertDialog.Content className="AlertDialogContent">
//         <AlertDialog.Title className="AlertDialogTitle">Are you absolutely sure?</AlertDialog.Title>
//         <AlertDialog.Description className="AlertDialogDescription">
//           This action cannot be undone. This will permanently delete your account and remove your
//           data from our servers.
//         </AlertDialog.Description>
//         <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
//           <AlertDialog.Cancel asChild>
//             <button className="Button mauve">Cancel</button>
//           </AlertDialog.Cancel>
//           <AlertDialog.Action asChild>
//             <button className="Button red">Yes, delete account</button>
//           </AlertDialog.Action>
//         </div>
//       </AlertDialog.Content>
//     </AlertDialog.Portal>
//   </AlertDialog.Root>
// );

// export default AlertDialogDemo;

// import React from 'react'
// import * as Avatar from './components/ui/Avatar'

// const App = () => {
//   return (
//     <div style={{ display: "flex", gap: 20, padding:10}}>
//     <Avatar.Root className="AvatarRoot">
//       <Avatar.Image
//         className="AvatarImage"
//         src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
//         alt="Colm Tuite"
//       />
//       <Avatar.Fallback className="AvatarFallback" delayMs={600}>
//         CT
//       </Avatar.Fallback>
//     </Avatar.Root>
//     <Avatar.Root className="AvatarRoot">
//       <Avatar.Image
//         className="AvatarImage"
//         src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
//         alt="Pedro Duarte"
//       />
//       <Avatar.Fallback className="AvatarFallback" delayMs={600}>
//         JD
//       </Avatar.Fallback>
//     </Avatar.Root>
//     <Avatar.Root className="AvatarRoot">
//     <Avatar.Image
//         className="AvatarImage"
//         src="https://github.com/shadcn.png"
//         alt="Pedro Duarte"
//       />
//       <Avatar.Fallback className="AvatarFallback">PD</Avatar.Fallback>
//     </Avatar.Root>
//   </div>
//   )
// }

// export default App


// function App() {
//   return (
//     <div className="App">
//       <h1>Video Player Example</h1>
//       <VideoPlayer
//         src="https://www.youtube.com/watch?v=w82a1FT5o88"
//         poster="https://www.example.com/poster.jpg"
//       />
//     </div>
//   );
// }


const App = () => {
  return (
    <div>
    <h1>Robust Video Component</h1>
      {/* <VideoPlayer
        url="https://www.youtube.com/watch?v=w82a1FT5o88"
        controls={true}
        /> */}

      <VideoPlayer
        url="https://www.youtube.com/watch?v=DiPKyecZ1ro"
        // controls={true}
        style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
        width="500px"
        height="200px"
      />
    </div>
  );
};


export default App;