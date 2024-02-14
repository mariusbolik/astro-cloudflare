import { Cookies } from "./cookies";

// Class for the language switcher
export class languageSwitch {
    private select: HTMLIonSelectElement | null;
    public lang: string;
    private locales: any;
    private cookies: any;

    constructor() {
        this.lang = 'en';
        this.select = document.querySelector('#lang-switch') || null;
        this.cookies = new Cookies();
    }

    /**
     * Get the default language from cookies
     */
    public getLang() {
        try {
            this.lang = this.cookies.getCookie('lang') || 'en';
            return this.lang;
        } catch (error) {
            console.error("Could not get language cookie", error);
        }
    }

    /**
     * Set the default language in cookies
     * @param lang language code to set
     */
    private setLang(lang: string) {
        try {
            this.cookies.setCookie('lang', lang, 365);
        } catch (error) {
            console.error("Could not set language", error);
        }
    }

    // Define function to change language
    public changeLang(lang: string) {
        try {
            this.setLang(lang);
        } catch (error) {
            console.error("Could not change language", error);
        }
    }
}