import Image from "next/image";
import React from "react";
import { contactinfo } from "@/constants";
import contact from "/public/contact/contact.jpg"
import ProfileForm from "@/app/_components/Form";

const ContactPage = () => {
  return (
    <main>
      <h1 className="text-center mt-10 text-3xl text-red-900">Kontakt Oss</h1>
      <div className="flex flex-col md:flex-row gap-10 mt-10 mb-20 mx-10 items-center">
        <div className="rounded-md border border-black dark:border-gray-600 flex w-max space-x-2 p-2">
        <Image
          src={contact}
          alt=""
          className="aspect-[3/4] h-fit w-fit object-cover rounded-md"
          width={250}
          height={350}
        />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-center">Eier</h2>
          <ul className="text-center my-2">
            {contactinfo.map((contact) => (
              <li key={contact.id}>
                <h3>{contact.title}</h3>
                <p>Tlf: {contact.tlf}</p>
                <p>Email: {contact.email}</p>
              </li>
            ))}
          </ul>
          <ProfileForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
