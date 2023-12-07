import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { useUser } from '@/hooks/useUser';
import Link from 'next/link';


interface ModalProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, description, children }) => {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setIsModalOpen(false);
    }
  }, [user]);

  const handleLoginButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Dialog>
      {!user ? (
        <DialogTrigger asChild>
          <Button onClick={handleLoginButtonClick}>Login</Button>
        </DialogTrigger>
      ) : (
        <Button><Link href="">Min Side</Link></Button>
      )}
      {isModalOpen && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
            <div>{children}</div>
          </DialogHeader>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Modal;
