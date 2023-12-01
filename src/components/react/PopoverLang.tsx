import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Button } from "../ui/button"
  
  export function PopoverLang({ lang, url }: { lang: 'uk' | 'ru' | 'en' , url: URL }) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-label="Language toggle"
          >
             {lang === 'uk' ? 'uk' : ''}
             {lang === 'en' ? 'en' : ''}
             {lang === 'ru' ? 'ru' : ''}
          </Button></PopoverTrigger>
        <PopoverContent className="w-fit">
          <ul>
            <li>
            <a className="transition-colors text-sm font-medium leading-none duration-200 hover:text-cyan-600" title="Вебсайт на Українській" href="/uk/">
              Українська
            </a>
            </li>
            <hr className="w-full h-[2px] bg-white my-2" />
            <li>
              <a className="transition-colors text-sm font-medium leading-none duration-200 hover:text-cyan-600" title="Web Site in English" href="/en/">English</a>
            </li>
            <hr className="my-2 h-[2px] w-full bg-white" />
            <li>
              <a className="transition-colors text-sm font-medium leading-none duration-200 hover:text-cyan-600" title="Вебсайт на Русском" href="/ru/">
                Русский
              </a>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
  
    )
  }