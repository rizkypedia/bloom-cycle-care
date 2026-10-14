import de from './de.json';
import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import id from './id.json';
import it from './it.json';
import ms from './ms.json';
import nl from './nl.json';

export const translations = {
  en,
  de,
  fr,
  es,
  it,
  nl,
  id,
  ms,
} as const;

export type LanguageCode = keyof typeof translations;
export type LanguageDictionary = (typeof translations)[LanguageCode];

export const languageOptions = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'it', flag: '🇮🇹', label: 'Italiano' },
  { code: 'nl', flag: '🇳🇱', label: 'Nederlands' },
  { code: 'id', flag: '🇮🇩', label: 'Bahasa Indonesia' },
  { code: 'ms', flag: '🇲🇾', label: 'Bahasa Melayu' },
] as const satisfies ReadonlyArray<{
  code: LanguageCode;
  flag: string;
  label: string;
}>;

export const languageLocaleMap: Record<LanguageCode, string> = {
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  it: 'it-IT',
  nl: 'nl-NL',
  id: 'id-ID',
  ms: 'ms-MY',
};
