import { footerlinks } from "@/constants";

const Footer = () => {
  return (
  <footer className="border-t p-10 border-slate-950">
    <div className="flex flex-col md:flex-row justify-evenly">
    {footerlinks.map((footerlink) => (
      <a key={footerlink.id} href={footerlink.href}>
        {footerlink.title}
      </a>
    ))}
    </div>
    <div className="flex justify-center mt-8">
      <small>
        &#169; Lovepreet Zelenkov Singh
      </small>
    </div>
  </footer>
  );
};

export default Footer;
