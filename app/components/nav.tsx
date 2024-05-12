import Link from 'next/link'
import DSIcon from './icons/ds-icon'

const navItems = {
  '/': {
    name: 'home',
  }
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row gap-2 items-center">
            <Link
              href="/"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              <DSIcon />
            </Link>
            <div className="flex flex-row space-x-0 pr-10">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  >
                    {name}
                  </Link>
                )
              })}
              <Link
                href="https://nf.td/dylan"
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                target="_blank"
              >
                links
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}