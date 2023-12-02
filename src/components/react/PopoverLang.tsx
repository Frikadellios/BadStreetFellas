import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Button } from "../ui/button"
  import { Separator } from "@/components/ui/separator"
  
  export function PopoverLang({ lang }: { lang: 'uk' | 'ru' | 'en'  }) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-label="Language toggle"
          >
             {lang === 'uk' ? 'UA' : '' }
             {lang === 'en' ? 'EN' : '' }
             {lang === 'ru' ? 'RU' : ''}
          </Button></PopoverTrigger>
        <PopoverContent className="w-fit">
          <ul>
            <li>
            <a className="transition-colors text-sm font-medium leading-none duration-200 hover:text-cyan-600" title="Вебсайт на Українській" href="/uk/">
              Українська
            </a>
            </li>
            <Separator />
            <li>
              <a className="transition-colors text-sm font-medium leading-none duration-200 hover:text-cyan-600" title="Web Site in English" href="/en/">English</a>
            </li>
            <Separator />
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