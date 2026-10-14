import { languageOptions, type LanguageCode } from '../lang/lang'

type HeaderProps = {
    language: LanguageCode
    onLanguageChange: (value: LanguageCode) => void
    brand: string
}

function Header({ language, onLanguageChange, brand }: HeaderProps) {
    return (
        <header className="header">
            <div className="header__language">
                <label className="sr-only" htmlFor="language-select">
                    Language
                </label>
                <select
                    id="language-select"
                    name="language"
                    value={language}
                    onChange={(event) => onLanguageChange(event.target.value as LanguageCode)}
                    aria-label="Language"
                >
                    {languageOptions.map(({ code, flag, label }) => (
                        <option key={code} value={code}>
                            {flag} {label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="header__brand">
                <span className="header__mark" aria-hidden="true" />
                <h1>{brand}</h1>
            </div>
        </header>
    )
}

export default Header