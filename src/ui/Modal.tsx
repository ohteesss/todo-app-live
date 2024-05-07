import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useOutsideClick from "../hooks/outside-click";

interface ModalContextProp {
  openName: string;
  close: () => void;
  open: (name: string) => void;
}

const ModalContext = createContext<ModalContextProp | undefined>(undefined);

function Modal({ children }: { children: any }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  // const open = setOpenName;
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({
  children,
  opens: openWindowsName,
}: {
  children: any;
  opens: string;
}) {
  const { open } = useContext(ModalContext)!;
  return cloneElement(children, {
    onClick: () => {
      console.log("clicked");
      open(openWindowsName);
    },
  });
}

function Window({ children, name }: { children: any; name: string }) {
  const { openName, close } = useContext(ModalContext)!;
  const { ref } = useOutsideClick(close);

  return createPortal(
    <AnimatePresence mode="wait">
      {name === openName && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-screen bg-traparent backdrop-blur-sm z-50 transition-all"
        >
          {" "}
          <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded-md shadow-md px-12 py-16 transition-all"
            ref={ref}
          >
            <Button onClick={close} className={" absolute top-5 right-8"}>
              <HiXMark />
            </Button>
            <div>{children}</div>
          </div>{" "}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
