import { createContext, useContext, useState, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { translations } from '../utils/translation';

type Locale = 'es' | 'en';

interface LocaleContextProps {
  locale: Locale;
  switchLocale: () => void;
}

const LocaleContext = createContext<LocaleContextProps>({
  locale: 'es',
  switchLocale: () => {},
});

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('es');

  const switchLocale = () => {
    setLocale((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <LocaleContext.Provider value={{ locale, switchLocale }}>
      <IntlProvider locale={locale} messages={translations[locale]}>
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};
