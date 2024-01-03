import Image from "next/image";
import ArticleHeader from "./ArticleHeader";
import Nav from "./Nav";
import Layout from "./layout";
import { usePathname } from 'next/navigation'
import dsGreyLogo from '../../public/dsGreyLogo.png';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

    return(
      <Layout>
        <Nav />
        <article className="text-black pt-8 pl-[8%] pr-[10%] w-full whitespace-pre-wrap">
          <ArticleHeader slug={pathname?.split('/')[2]} />
          <div className="fixed z-[-50] top-[15vh] pl-[5%] max-w-[80%] md:pl-[25%]">
            <Image alt="DS grey logo" src={dsGreyLogo} width={520} height={676} />
          </div>
          {children}
        </article>
      </Layout>
    );
  }