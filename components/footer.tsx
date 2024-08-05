import { Link } from "@nextui-org/link";

import { GithubIcon } from "./icons";

import { siteConfig } from "@/config/site";

export const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-center py-3">
        <div className="flex flex-col items-center">
          <div className="flex gap-1">
            <span className="text-default-600">Powered by</span>
            <p className="text-primary">SheeetFace</p>
          </div>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
        </div>
    </footer>
    )
}