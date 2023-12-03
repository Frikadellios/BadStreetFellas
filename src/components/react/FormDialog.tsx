// Shadcn Button Import
import { buttonVariants } from '../ui/button'

// Shadcn Dialog Import
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'

// Info imports
import { contacts } from '@/constants'

// Translation Imports
import { useTranslations } from '../../i18n/utils'

export function FormDialog({
  text,
  lang,
}: {
  text: string
  lang: 'uk' | 'en' | 'ru'
}) {
  const t = useTranslations(lang)

  return (
    <div className="mt-3 w-[fit-content]">
      <Dialog>
        <DialogTrigger asChild>
          <button
            className={`${buttonVariants()} link`}
            aria-label={text}
          >
            {text}
          </button>
        </DialogTrigger>
        <DialogContent className="w-auto pt-16 md:pt-10">
          <DialogHeader>
            <DialogTitle>{t('dialog-title')}</DialogTitle>
            <DialogDescription>{t('dialog-description')}</DialogDescription>
          </DialogHeader>
          <div className="mt-2 space-y-4">
            {contacts.map((item) => (
              <div key={item.label[lang]}>
                <h4>{item.label[lang]}</h4>
                <a
                  title={item.label[lang]}
                  href={item.link}
                  target="_blank"
                  className=" transition-colors duration-200 "
                >
                  {item.linkLabel}
                </a>
              </div>
            ))}
          </div>
          <DialogFooter>
            <small>
              Made with <span className="animate-pulse">❤️</span> and Powered by{' '}
              <a
                href="https://www.adrian-alvarez.dev/es/"
                target="_blank"
                className="transition-colors duration-200 "
              >
                Adrian
              </a>
            </small>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
