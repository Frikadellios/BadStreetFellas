import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '../ui/button'

export function PopoverLang({
  lang,
}: {
  lang: 'uk' | 'en' | 'ru'
  url: URL
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-labelledby="Language toggle"
        >
          {lang === 'uk' ? 'uk' : ''}
          {lang === 'en' ? 'en' : ''}
          {lang === 'ru' ? 'ru' : ''}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <ul>
          <li>
            <a className="transition-colors text-sm font-medium leading-none hover:text-emerald-500 transition-all duration-200" title="Вебсайт на Українській" href="/uk/">
              Українська
            </a>
          </li>
          <hr className="my-2 h-[2px] w-full bg-trancperent" />
          <li>
            <a className="transition-colors text-sm font-medium leading-none hover:text-emerald-500 transition-all duration-200" title="Web Site in English" href="/en/">
              English
            </a>
          </li>
          <hr className="my-2 h-[2px] w-full bg-trancperent" />
          <li>
            <a className="transition-colors text-sm font-medium leading-none hover:text-emerald-500 transition-all duration-200" title="Вебсайт на Русском" href="/ru/">
              Русский
            </a>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  )
}
