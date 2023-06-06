import React from "react";
import { GitHub } from "react-feather";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center px-12 py-4 w-full sticky top-0 z-50 backdrop-blur-sm">
      <span className="text-lg md:text-2xl font-bold">Dev Holako</span>
      <ul className="justify-self-end flex flex-row items-center justify-center gap-4">
        <li>
          <a
            href="https://github.com/DevHolako"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
          >
            <div className="hover:bg-v-white bg-v-blue box w-10 h-10 flex flex-col justify-center items-center">
              <GitHub size="24"></GitHub>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
